<script lang="ts">
    import '../styles/app.scss'
    import {page} from '$app/stores'
    import Header from '$lib/components/Header.svelte'
    import Footer from '../lib/components/Footer.svelte'
    import Seo from '../lib/components/Seo.svelte'

    $: pageUrl = String($page.url)
    $: pageTitle = $page.data.meta?.title
    $: pageDescription = $page.data.meta?.description
    $: seoImage = $page.data.meta?.seoImage
</script>

<Seo {pageUrl} {pageTitle} {pageDescription} {seoImage} />

<div class="wrapper | center stack">
    <Header />
    <div>
        <slot />
    </div>
    <Footer />
</div>

<style>
    .wrapper {
        max-inline-size: 1000px;
        gap: var(--s2);
    }
    div {
        flex: 1;
    }
</style>
