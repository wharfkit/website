<script>
    import PostPreview from '$lib/components/PostPreview.svelte'

    export let data
    let {posts} = data
</script>

<div class="page | stack">
    <div class="hero | box stack">
        <h1>Shipping great code starts with a solid platform.</h1>
        <p>
            A Web Client SDK being developed by <a href="https://greymass.com">Greymass</a> and
            funded by blockchains within the <a href="https://antelope.io">Antelope Coalition</a>.
        </p>
    </div>

    <ul class="posts | center stack">
        {#each posts as post}
            <li>
                <PostPreview {...post} />
                <hr />
            </li>
        {/each}
    </ul>
</div>

<style>
    .page {
        gap: var(--s4);
    }

    .hero {
        --border-radius: var(--s0);
        padding-block: var(--s4);
        padding-inline: var(--s2);
        font-weight: 600;
        gap: var(--s-1);
        background: url('/images/header-lines.svg'), url('/images/header-background.svg'),
            linear-gradient(to left, var(--reef-turquoise), var(--swell-mist));
        background-repeat: no-repeat;
        text-align: center;
    }

    .hero > * {
        margin-inline: auto;
    }

    .hero h1 {
        font-size: var(--fs-2);
        font-family: var(--ff-heading);
    }

    .hero p {
        font-size: var(--fs-0);
        font-family: var(--ff-heading);
        font-weight: 500;
        max-width: 50ch;
    }

    .hero a {
        color: var(--wharf-blue);
    }

    .posts {
        list-style: none;
        gap: var(--s3);
        padding-inline: unset;
    }

    hr {
        margin-block-start: var(--s3);
    }
</style>
