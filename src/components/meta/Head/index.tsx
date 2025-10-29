import NextHead from 'next/head';
import { useRouter } from 'next/router';
import settings from '../../../../settings.json';
import { getPageInfos } from '../../../utils/getPageInfos';

export default function Head({
  componentProps,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  componentProps: any;
}) {
  const { currentPage } = getPageInfos();
  const router = useRouter();
  const baseURL = 'https://demenezes.dev';

  const isPostPage = currentPage === 'post';

  const { metadata, pages, src } = settings;
  const { titleBase, descriptionBase, keywordsBase } = metadata;

  const pageTitleFirstPart = isPostPage
    ? componentProps.post.data.post.title
    : pages[currentPage].pageTitle;

  const pageTitle = `${pageTitleFirstPart} | ${titleBase}`;

  const seoTitle = isPostPage
    ? componentProps.post.data.post.seoTitle
    : pageTitle;

  const pageDescriptionFirstPart = isPostPage
    ? componentProps.post.data.post.metaDescription
    : pages[currentPage].description;

  const pageDescription =
    pages[currentPage].pageTitle !== 'Home'
      ? `${pageDescriptionFirstPart} | ${descriptionBase}`
      : `${descriptionBase}`;

  function getImageMetaTag() {
    switch (currentPage) {
      case 'home':
      case 'listing':
        return componentProps.currentPosts[0].thumbnail.url;
      case 'post':
        return componentProps.post.data.post.thumbnail.url;
      case 'about':
        return componentProps.aboutPageContent.data.profileImage.profileImage
          .responsiveImage.src;
      case 'contact':
        return componentProps.contactContent.data.profileImage.profileImage.responsiveImage.srcSet
          .split(',')[3]
          .split(' ')[0];
      default:
        return '';
    }
  }

  const imageMetaTag = getImageMetaTag();

  const pageKeywords = pages[currentPage].keywords
    .join(', ')
    .concat(', ')
    .concat(isPostPage ? componentProps.post.data.post.keywords : '')
    .concat(', ')
    .concat(keywordsBase.join(', '))
    .replace(', , ', ', ');

  return (
    <NextHead>
      {/* TITLE */}
      <title>{pageTitle}</title>
      <meta property="og:title" content={seoTitle} />
      <meta name="twitter:title" content={seoTitle} />

      {/* DESCRIPTION */}
      <meta name="description" content={pageDescription} />
      <meta property="og:description" content={pageDescription} />
      <meta name="twitter:description" content={pageDescription} />

      {/* IMAGE */}
      <meta property="og:image" content={imageMetaTag} />
      <meta name="twitter:image" content={imageMetaTag} />

      {/* KEYWORDS */}
      <meta name="keywords" content={pageKeywords} />

      {/* RESPONSIVITY */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* BROWSERS */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="apple-mobile-web-app-title" content="deMenezes" />

      {/* SOURCES */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="stylesheet" href={src.font} />
      <link rel="stylesheet" href={src.icon} />
      <link rel="stylesheet" href={src.codeThemeVsCode} />

      {/* FAVICON */}
      <link
        rel="apple-touch-icon"
        sizes="57x57"
        href="/favicon/apple-icon-57x57.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/favicon/apple-icon-60x60.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="72x72"
        href="/favicon/apple-icon-72x72.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicon/apple-icon-76x76.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href="/favicon/apple-icon-114x114.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href="/favicon/apple-icon-120x120.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href="/favicon/apple-icon-144x144.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href="/favicon/apple-icon-152x152.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-icon-180x180.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/favicon/android-icon-192x192.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="96x96"
        href="/favicon/favicon-96x96.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <meta
        name="msapplication-TileImage"
        content="/favicon/ms-icon-144x144.png"
      />
      <link rel="manifest" href="/favicon/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />

      {/* OTHERS */}
      <meta charSet="UTF-8" />
      <meta property="og:type" content="article" />
      <meta property="og:url" content={`${baseURL}${router.asPath}`} />
      <meta name="author" content="André Menezes" />
      <meta name="twitter:creator" content="@aaamenezes" />
      <meta name="twitter:site" content="@aaamenezes" />
      <meta property="og:site_name" content={titleBase} />
      <meta property="og:locale" content="pt_BR" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="twitter:card" content="summary" />
      {componentProps.post &&
        componentProps.post.data.post._firstPublishedAt && (
          <meta
            property="article:published_time"
            content={componentProps.post.data.post._firstPublishedAt}
          />
        )}

      {componentProps.post && componentProps.post.data.post._updatedAt && (
        <meta
          property="article:modified_time"
          content={componentProps.post.data.post._updatedAt}
        />
      )}
      <meta
        name="google-adsense-account"
        content="ca-pub-8067715093735707"
      ></meta>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8067715093735707"
        crossOrigin="anonymous"
      ></script>
    </NextHead>
  );
}
