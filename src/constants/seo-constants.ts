export const getURL = (): string => {
  const url =
    process?.env?.URL && process.env.URL !== ``
      ? process.env.URL
      : process?.env?.VERCEL_URL && process.env.VERCEL_URL !== ``
      ? process.env.VERCEL_URL
      : `http://localhost:3000`;
  return url.includes(`http`) ? url : `https://${url}`;
};

const DEFAULT_TITLE = `Filmpire - The official Home of Movie Gangs!`;
const DEFAULT_TITLE_TEMPLATE = `%s`;
const DEFAULT_DESCRIPTION = ``;
const DEFAULT_CANONICAL = getURL();
const SITE_NAME = `Filmpire - The official Home of Movie Gangs!`;
const DEFAULT_OG_IMAGE = `${DEFAULT_CANONICAL}/preview.png`;
const FAVICON_LINK = `/images/favicon.png`;

export const SEO = {
  DEFAULT_TITLE,
  DEFAULT_TITLE_TEMPLATE,
  DEFAULT_DESCRIPTION,
  DEFAULT_CANONICAL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  FAVICON_LINK,
};
