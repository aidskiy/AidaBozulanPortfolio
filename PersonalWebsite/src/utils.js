export const getImageUrl = (path) => {
    return new URL(`/src/assets/${path}`, import.meta.url).href;
  };