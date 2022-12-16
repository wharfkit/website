<script>
    import logo from '$lib/assets/logos/Wharf-logo-horizontal.svg'
</script>

<header class="switcher">
    <div class="logo">
        <a href="/">
            <img src={logo} alt="wharf logo" width="203" />
        </a>
    </div>
    <nav class="cluster">
        <a href="/brand">Brandkit</a>
        <a href="/docs">Docs</a>
        <a href="/">Progress</a>
    </nav>
</header>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-block: var(--s2);
    }

    nav {
        justify-content: flex-end;
        align-items: center;
    }

    nav a {
        font-family: var(--ff-heading);
        color: var(--wharf-blue);
        text-decoration: none;
        padding-inline: 1em;
        padding-block: 0.5em;
        border-radius: var(--s-1);
        font-size: var(--fs-0);
        background-color: none;
        transition: var(--background-transition);
    }

    nav a:is(:hover, :focus-visible) {
        background-color: var(--swell-mist);
        /* outline: none; */
    }
</style>
