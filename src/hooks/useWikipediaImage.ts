import { useState, useEffect, useCallback } from 'react';
import { fetchWikiVisual, wikiCache, preloadedUrls, WikiVisualResult } from '@/lib/wikipedia';

export interface UseWikipediaImageResult {
  wikiData: WikiVisualResult | null;
  activeSrc: string | null;
  imgLoaded: boolean;
  handleImageLoad: () => void;
  handleImageError: () => void;
}

export function useWikipediaImage(articleTitle: string): UseWikipediaImageResult {
  const [wikiData, setWikiData] = useState<WikiVisualResult | null>(() => wikiCache.get(articleTitle) || null);
  const [activeSrc, setActiveSrc] = useState<string | null>(() => {
    const cached = wikiCache.get(articleTitle);
    return cached ? cached.imgUrl : null;
  });
  const [imgLoaded, setImgLoaded] = useState<boolean>(() => {
    const cached = wikiCache.get(articleTitle);
    return Boolean(cached && cached.imgUrl && preloadedUrls.has(cached.imgUrl));
  });

  useEffect(() => {
    if (!articleTitle) {
      setWikiData(null);
      setActiveSrc(null);
      setImgLoaded(false);
      return undefined;
    }

    const cached = wikiCache.get(articleTitle);
    if (cached && cached.imgUrl) {
      setWikiData(cached);
      setActiveSrc(cached.imgUrl);
      setImgLoaded(preloadedUrls.has(cached.imgUrl));
      return undefined;
    }

    setImgLoaded(false);
    const controller = new AbortController();
    fetchWikiVisual(articleTitle, controller.signal).then((res) => {
      if (!controller.signal.aborted && res && res.imgUrl) {
        setWikiData(res);
        setActiveSrc(res.imgUrl);
      }
    });

    return () => {
      controller.abort();
    };
  }, [articleTitle]);

  const handleImageLoad = useCallback(() => {
    setImgLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    // If 1600px thumb exceeds original file width on Wikimedia, fall back to full originalUrl, then thumbUrl
    if (wikiData && wikiData.originalUrl && activeSrc !== wikiData.originalUrl) {
      setActiveSrc(wikiData.originalUrl);
    } else if (wikiData && wikiData.thumbUrl && activeSrc !== wikiData.thumbUrl) {
      setActiveSrc(wikiData.thumbUrl);
    }
  }, [wikiData, activeSrc]);

  return {
    wikiData,
    activeSrc,
    imgLoaded,
    handleImageLoad,
    handleImageError
  };
}
