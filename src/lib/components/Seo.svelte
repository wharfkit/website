<script>
  import { page } from "$app/stores"

  const baseTitle = "WharfKit"

  $: pageUrl = String($page.url) || "https://wharfkit.com"

  $: seoImage = $page.data.meta?.seoImage || "https://wharfkit.com/images/wharf-logo.svg"

  $: pageDescription =
    $page.data.meta?.description ||
    "Wharf provides intuitive and reliable developer tools that make it easy to build Antelope-based web apps."

  $: pageTitle = $page.data.meta?.title
    ? $page.data.meta?.title.concat(" | ", baseTitle)
    : baseTitle
</script>

<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@wharfkit" />
  <meta name="twitter:title" content={pageTitle} />
  <meta name="twitter:description" content={pageDescription} />
  <meta name="twitter:image" content={seoImage} />

  <meta property="og:type" content="article" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:url" content={pageUrl} />
  <meta property="og:image" content={seoImage} />
</svelte:head>
