import ProgressBar from '@badrap/bar-of-progress';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import Router from 'next/router';

import { SEO } from '@/constants/seo-constants';
import Layout from '@/layout';
import '@/styles/globals.css';
import { Mantine } from '@/theme';

const progress = new ProgressBar({
  size: 2,
  color: `#22D3EE`,
  className: `bar-of-progress`,
  delay: 100,
});

Router.events.on(`routeChangeStart`, progress.start);
Router.events.on(`routeChangeComplete`, () => {
  progress.finish();
  window.scrollTo(0, 0);
});
Router.events.on(`routeChangeError`, progress.finish);

const {
  DEFAULT_TITLE_TEMPLATE,
  DEFAULT_DESCRIPTION,
  DEFAULT_CANONICAL,
  SITE_NAME,
  DEFAULT_TITLE,
  DEFAULT_OG_IMAGE,
  FAVICON_LINK,
} = SEO;

const queryClient = new QueryClient();

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  const canonicalPath = router.pathname === `/` ? `` : router.pathname;
  const url = `${DEFAULT_CANONICAL}${canonicalPath}`;

  return (
    <>
      <DefaultSeo
        title={DEFAULT_TITLE}
        titleTemplate={DEFAULT_TITLE_TEMPLATE}
        description={DEFAULT_DESCRIPTION}
        canonical={url}
        openGraph={{
          type: `website`,
          locale: `en_US`,
          url,
          site_name: SITE_NAME,
          title: SITE_NAME,
          description: DEFAULT_DESCRIPTION,
          images: [
            {
              url: DEFAULT_OG_IMAGE,
              alt: SITE_NAME,
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: `shortcut icon`,
            href: FAVICON_LINK,
          },
        ]}
      />
      <QueryClientProvider client={queryClient}>
        <Mantine>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Mantine>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
