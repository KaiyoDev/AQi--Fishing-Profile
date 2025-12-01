/**
 * Image Cache Utility
 * Preloads and manages image cache to prevent duplicate downloads
 */

const imageCache = new Map<string, HTMLImageElement>();
const preloadPromises = new Map<string, Promise<void>>();

/**
 * Preload an image and store it in cache
 */
export const preloadImage = (url: string): Promise<void> => {
  // Return existing promise if already loading
  if (preloadPromises.has(url)) {
    return preloadPromises.get(url)!;
  }

  // Return resolved promise if already cached
  if (imageCache.has(url)) {
    return Promise.resolve();
  }

  const promise = new Promise<void>((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      imageCache.set(url, img);
      preloadPromises.delete(url);
      resolve();
    };
    img.onerror = () => {
      preloadPromises.delete(url);
      reject(new Error(`Failed to load image: ${url}`));
    };
    img.src = url;
  });

  preloadPromises.set(url, promise);
  return promise;
};

/**
 * Preload multiple images
 */
export const preloadImages = (urls: string[]): Promise<void[]> => {
  const uniqueUrls = Array.from(new Set(urls));
  return Promise.all(uniqueUrls.map(url => preloadImage(url).catch(() => {})));
};

/**
 * Check if image is cached
 */
export const isImageCached = (url: string): boolean => {
  return imageCache.has(url);
};

/**
 * Get cached image element
 */
export const getCachedImage = (url: string): HTMLImageElement | undefined => {
  return imageCache.get(url);
};

