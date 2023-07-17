<script>
  import { page } from "$app/stores"
  import { browser } from "$app/environment"

  const baseTitle = "WharfKit"

  $: pageUrl = String($page.url) || "https://wharfkit.com"

  $: metaImage = $page.data.meta?.metaImage || "https://wharfkit.com/images/wharf-logo.svg"

  $: pageDescription =
    $page.data.meta?.description ||
    "Wharf provides intuitive and reliable developer tools that make it easy to build Antelope-based web apps."

  $: pageTitle = $page.data.meta?.title.concat(" - ", baseTitle) || baseTitle

  $: browser && (document.title = pageTitle)
</script>

<svelte:head>
  <meta name="description" content={pageDescription} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@wharfkit" />
  <meta name="twitter:title" content={pageTitle} />
  <meta name="twitter:description" content={pageDescription} />
  <meta name="twitter:image" content={metaImage} />

  <meta property="og:type" content="article" />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:url" content={pageUrl} />
  <meta property="og:image" content={metaImage} />
</svelte:head>
