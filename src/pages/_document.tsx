/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-explicit-any */

import createEmotionServer from '@emotion/server/create-instance';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { Children } from 'react';

import theme from '@/themes/theme';
import createEmotionCache from '@/utils/createEmotionCache';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' className='scroll-smooth'>
        <Head>
          <meta name='theme-color' content={theme.palette.primary.main} />
          <link
            rel='preload'
            href='/fonts/inter-var-latin.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          <meta charSet='UTF-8' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          {/* @ts-expect-error: attribute not existing */}
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...emotionStyleTags, ...Children.toArray(initialProps.styles)],
  };
};

export default MyDocument;
