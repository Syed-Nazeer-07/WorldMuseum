export interface WikiVisualResult {
  imgUrl: string | null;
  originalUrl: string | null;
  thumbUrl: string | null;
  title: string;
  description: string;
}

export interface WikipediaSummaryResponse {
  title?: string;
  description?: string;
  originalimage?: {
    source: string;
    width?: number;
    height?: number;
  };
  thumbnail?: {
    source: string;
    width?: number;
    height?: number;
  };
}

export const wikiCache = new Map<string, WikiVisualResult>();
export const preloadedUrls = new Set<string>();
const inFlightRequests = new Map<string, Promise<WikiVisualResult | null>>();

/**
 * Builds a high-resolution 1600px Retina URL from Wikipedia API response.
 * Upgrades /thumb/ URLs with /\d+px- to /1600px- for crisp rendering.
 */
export function build1600RetinaUrl(data: WikipediaSummaryResponse): string | null {
  const rawUrl =
    (data.originalimage && data.originalimage.source) ||
    (data.thumbnail && data.thumbnail.source) ||
    null;
  const thumbUrl = data.thumbnail && data.thumbnail.source ? data.thumbnail.source : null;

  if (typeof thumbUrl === 'string' && thumbUrl.includes('/thumb/')) {
    return thumbUrl.replace(/\/\d+px-/, '/1600px-');
  }
  if (typeof rawUrl === 'string' && rawUrl.includes('/thumb/')) {
    return rawUrl.replace(/\/\d+px-/, '/1600px-');
  }
  return typeof rawUrl === 'string' && rawUrl.startsWith('https://') ? rawUrl : null;
}

/**
 * Builds an optimal high-resolution Wikimedia URL using standard supported thumbnail steps
 * (1920px / 1280px) or the full original image so Wikimedia never rejects with HTTP 400.
 */
export function buildOptimalWikiImageUrl(data: WikipediaSummaryResponse): string | null {
  const origSource =
    data.originalimage &&
    typeof data.originalimage.source === 'string' &&
    data.originalimage.source.startsWith('https://')
      ? data.originalimage.source
      : null;
  const origWidth = data.originalimage?.width || 0;
  const thumbSource =
    data.thumbnail &&
    typeof data.thumbnail.source === 'string' &&
    data.thumbnail.source.startsWith('https://')
      ? data.thumbnail.source
      : null;

  if (thumbSource && thumbSource.includes('/thumb/')) {
    if (origWidth >= 1920) {
      return thumbSource.replace(/\/\d+px-/, '/1920px-');
    }
    if (origWidth >= 1280) {
      return thumbSource.replace(/\/\d+px-/, '/1280px-');
    }
    if (origSource && !/\.(tif|tiff)$/i.test(origSource)) {
      return origSource;
    }
    return thumbSource.replace(/\/\d+px-/, '/960px-');
  }

  return origSource || thumbSource;
}

/**
 * Asynchronously preloads an image URL into browser cache.
 */
export function preloadImageUrl(src: string | null | undefined): void {
  if (!src || preloadedUrls.has(src) || typeof window === 'undefined') return;
  preloadedUrls.add(src);
  const img = new window.Image();
  img.decoding = 'async';
  img.src = src;
}

/**
 * Fetches Wikipedia summary visual for an article title.
 * Caches results in-memory, deduplicates concurrent requests, and supports AbortSignal cancellation.
 */
export async function fetchWikiVisual(
  articleTitle: string,
  signal?: AbortSignal
): Promise<WikiVisualResult | null> {
  if (!articleTitle || signal?.aborted) return null;
  if (wikiCache.has(articleTitle)) {
    return wikiCache.get(articleTitle)!;
  }

  let requestPromise = inFlightRequests.get(articleTitle);
  if (!requestPromise) {
    requestPromise = (async (): Promise<WikiVisualResult | null> => {
      try {
        let data: WikipediaSummaryResponse | null = null;
        const headers: Record<string, string> =
          typeof window !== 'undefined'
            ? { Accept: 'application/json' }
            : {
                Accept: 'application/json',
                'Api-User-Agent': 'WorldMuseum/2.0 (Educational Museum Exhibition)',
                'User-Agent': 'WorldMuseum/2.0 (Educational Museum Exhibition)'
              };
        const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(articleTitle)}`;
        const res = await fetch(url, { headers });

        if (res.ok) {
          data = await res.json();
        } else {
          const fallbackApiUrl = `https://en.wikipedia.org/w/api.php?action=query&redirects=1&prop=pageimages|description&piprop=original|thumbnail&pithumbsize=1920&titles=${encodeURIComponent(
            articleTitle
          )}&format=json&origin=*`;
          const fbRes = await fetch(fallbackApiUrl, { headers });
          if (fbRes.ok) {
            const fbJson = await fbRes.json();
            const pages = fbJson?.query?.pages;
            const page = pages ? (Object.values(pages)[0] as Record<string, unknown>) : null;
            if (page) {
              const orig = page.original as { source?: string; width?: number; height?: number } | undefined;
              const thumb = page.thumbnail as { source?: string; width?: number; height?: number } | undefined;
              data = {
                title: typeof page.title === 'string' ? page.title : articleTitle.replace(/_/g, ' '),
                description: typeof page.description === 'string' ? page.description : '',
                originalimage: orig?.source
                  ? { source: orig.source, width: orig.width, height: orig.height }
                  : undefined,
                thumbnail: thumb?.source
                  ? { source: thumb.source, width: thumb.width, height: thumb.height }
                  : undefined
              };
            }
          }
        }

        if (!data) throw new Error('Wiki fetch failed');

        const rawUrl =
          (data.originalimage && data.originalimage.source) ||
          (data.thumbnail && data.thumbnail.source) ||
          null;
        const optimalUrl = buildOptimalWikiImageUrl(data);
        const originalFallback =
          typeof rawUrl === 'string' && rawUrl.startsWith('https://') ? rawUrl : null;
        const thumbFallback =
          data.thumbnail &&
          typeof data.thumbnail.source === 'string' &&
          data.thumbnail.source.startsWith('https://')
            ? data.thumbnail.source
            : null;

        const primaryUrl = optimalUrl || originalFallback || thumbFallback;
        if (primaryUrl) {
          preloadImageUrl(primaryUrl);
        }

        const result: WikiVisualResult = {
          imgUrl: primaryUrl,
          originalUrl: originalFallback,
          thumbUrl: thumbFallback,
          title: data.title || articleTitle.replace(/_/g, ' '),
          description: data.description || ''
        };
        wikiCache.set(articleTitle, result);
        return result;
      } catch {
        return null;
      } finally {
        inFlightRequests.delete(articleTitle);
      }
    })();
    inFlightRequests.set(articleTitle, requestPromise);
  }

  const result = await requestPromise;
  if (signal?.aborted) return null;
  return result;
}
