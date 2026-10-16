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
 * Caches results in-memory and supports AbortSignal cancellation.
 */
export async function fetchWikiVisual(
  articleTitle: string,
  signal?: AbortSignal
): Promise<WikiVisualResult | null> {
  if (!articleTitle) return null;
  if (wikiCache.has(articleTitle)) {
    return wikiCache.get(articleTitle)!;
  }
  try {
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(articleTitle)}`;
    const res = await fetch(url, { headers: { Accept: 'application/json' }, signal });
    if (!res.ok) throw new Error('Wiki status ' + res.status);
    const data: WikipediaSummaryResponse = await res.json();

    const rawUrl =
      (data.originalimage && data.originalimage.source) ||
      (data.thumbnail && data.thumbnail.source) ||
      null;
    const retina1600Url = build1600RetinaUrl(data);
    const originalFallback =
      typeof rawUrl === 'string' && rawUrl.startsWith('https://') ? rawUrl : null;
    const thumbFallback =
      data.thumbnail &&
      typeof data.thumbnail.source === 'string' &&
      data.thumbnail.source.startsWith('https://')
        ? data.thumbnail.source
        : null;

    const primaryUrl = retina1600Url || originalFallback || thumbFallback;
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
  } catch (err: unknown) {
    if (err && typeof err === 'object' && 'name' in err && (err as { name: string }).name === 'AbortError') {
      return null;
    }
    return null;
  }
}
