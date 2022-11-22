<script>
  export let pageUrl = "https://wharfkit.com"
  export let pageDescription =
    "Wharf provides intuitive and reliable developer tools that make it easy to build Antelope-based web apps."
  export let pageTitle = ""
  let baseTitle = "Wharf Kit"
  $: fullTitle = pageTitle ? baseTitle.concat(" | ", pageTitle) : baseTitle
</script>

<svelte:head>
  <title>{fullTitle}</title>
  <meta name="description" content={pageDescription} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@wharfkit" />
  <meta name="twitter:title" content={fullTitle} />
  <meta name="twitter:description" content={pageDescription} />
  <meta name="twitter:image" content="https://wharfkit.com/images/wharf-logo.svg" />

  <meta property="og:type" content="article" />
  <meta property="og:title" content={fullTitle} />
  <meta property="og:description" content={pageDescription} />
  <meta property="og:url" content={pageUrl} />
  <meta property="og:image" content="https://wharfkit.com/images/wharf-logo.svg" />
</svelte:head>
