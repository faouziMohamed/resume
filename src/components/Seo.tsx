/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable react/destructuring-assignment */
import Head from 'next/head';
import { useRouter } from 'next/router';

import { openGraph } from '@/lib/helper';

import seoData, { ISeoData } from '@/data/seo/seoData';

import { favicons } from '@/components/Favicons';

import theme from '@/themes/theme';

type SeoType = ISeoData & { url?: string; image: string; locale?: string };
type SeoProps = {
  date?: string;
  templateTitle?: string;
  logo?: string;
  theme: 'light' | 'dark';
} & Partial<SeoType>;

export default function Seo(props: SeoProps) {
  const router = useRouter();
  const meta = {
    url: process.env.NEXT_PUBLIC_SITE_URL,
    locale: 'en_US',
    ...seoData,
    ...props,
  };
  meta.title = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;
  // Use siteName if there is templateTitle
  // but show full sectionName if there is none
  meta.image = openGraph({
    description: meta.description,
    siteName: props.templateTitle ? meta.siteName : meta.title,
    // templateTitle: props.templateTitle,
    logo: meta.logo.toString(),
    theme: 'light',
  });

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />
      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:sectionName' content={meta.title} />
      <meta property='og:locale' content={meta.locale} />
      <meta name='image' property='og:image' content={meta.image} />
      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content={meta.twitterSite} />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          <meta name='author' property='article:author' content={meta.author} />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='msapplication-TileColor' content='#ffffff' />
      <meta
        name='msapplication-TileImage'
        content='/favicon/ms-icon-144x144.png'
      />
      <meta name='theme-color' content={theme.palette.primary.main} />
    </Head>
  );
}
