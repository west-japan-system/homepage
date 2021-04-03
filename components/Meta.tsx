import Head from "next/head";

type Props = {
  title: string;
  description: string;
  ogType: string;
  ogUrl: string;
};

export const Meta: React.FC<Props> = ({
  title,
  description,
  ogType,
  ogUrl,
}) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta http-equiv="content-language" content="ja" />
      <meta name="description" content={description} />
      <meta name="theme-color" content="#000000" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
      <meta name="apple-mobile-web-app-title" content="WestJapanSystem" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta
        name="keywords"
        content="WestJapanSystem,westjapansystem,ウエストジャパンシステム"
      />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={ogType} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={ogUrl} />
      <meta
        property="og:image"
        content="https://west-japan-system.com/images/company_ogp-logo.png"
      />
      <meta property="og:site_name" content="株式会社 West Japan System" />
      <meta property="og:locale" content="ja_JP" />
      <noscript data-n-css="true"></noscript>
      <link
        rel="apple-touch-icon-precomposed"
        href="/images/apple-touch-icon.png"
      />
      <link rel="canonical" href="https://west-japan-system.com" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};
