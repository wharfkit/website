<script lang="ts">
    import logo from '$lib/assets/logos/Wharf-logo-horizontal.svg'
    import {page} from '$app/stores'

    $: section = $page.url.pathname

    let navItems = [
        {name: 'Wharf', href: '#'},
        {name: 'Kits', href: '#'},
        {name: 'Learn', href: '#'},
        {name: 'Documentation', href: '#'},
        {name: 'Blog', href: '/blog'},
        {name: 'Brand', href: '/brand'},
    ]

    let isNavOpen = false

    function openNav() {
        isNavOpen = true
    }

    function closeNav() {
        isNavOpen = false
    }
</script>

<header class="">
    <div class="left">
        <a href="/">
            <img src={logo} alt="wharf logo" width="203" />
        </a>
        {#if isNavOpen}
            <button class="navToggle close" on:click={closeNav}>
                <span class="visually-hidden">Close</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    ><line x1="18" y1="6" x2="6" y2="18" /><line
                        x1="6"
                        y1="6"
                        x2="18"
                        y2="18"
                    /></svg
                >
            </button>
        {:else}
            <button class="navToggle open" on:click={openNav}>
                <span class="visually-hidden"> Open </span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    ><line x1="4" y1="12" x2="20" y2="12" /><line
                        x1="4"
                        y1="6"
                        x2="20"
                        y2="6"
                    /><line x1="4" y1="18" x2="20" y2="18" /></svg
                >
            </button>
        {/if}
    </div>

    <nav class:hidden={!isNavOpen}>
        {#each navItems as { name, href }}
            <a {href} class:active={new RegExp(href).test(section)} on:click={closeNav}>{name}</a>
        {/each}
    </nav>

    <a class="button" href="#">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            ><path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
            /><path d="M9 18c-4.51 2-5-2-7-2" /></svg
        >Github</a
    >
</header>

<style>
    header {
        color: white;
        background: var(--wharf-blue);
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        align-items: center;
        gap: var(--space-l);
        margin-block: var(--space-l);
        border-radius: var(--space-m);
    }

    .navToggle {
        display: none;
    }

    nav {
        display: flex;
        justify-content: center;
        gap: var(--space-l);
    }

    nav a {
        font-family: var(--ff-heading);
        color: var(--wharf-blue);
        color: white;
        text-decoration: none;
        padding-block: var(--space-3xs);
        border-radius: var(--space-xs);
        font-size: var(--fs-0);
        position: relative;
    }

    nav a::after {
        content: '';
        background-color: var(--color-secondary-700);
        opacity: 0;
        position: absolute;
        height: 4px;
        inset: 0;
        top: auto;
        border-radius: inherit;
        transition: opacity 200ms ease-out;
    }

    nav a:is(:hover, :focus-visible)::after {
        opacity: 50%;
    }
    nav a:is(.active)::after {
        opacity: 70%;
    }

    nav a:is(:active)::after {
        opacity: 100%;
    }

    a.button {
        justify-self: end;
        padding-inline: var(--space-xl);
        margin: var(--space-s);
    }

    @media (max-width: 768px) {
        header {
            position: relative;
            grid-template-columns: 1fr;
        }

        header .left {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: var(--space-l);
        }

        .navToggle {
            display: grid;
            place-items: center;
            cursor: pointer;
            background: var(--swell-mist);
            padding: var(--space-m);
            border-radius: var(--space-l);
            aspect-ratio: 1;
        }

        nav.hidden {
            transform: translateY(-200%);
        }

        nav {
            position: absolute;
            top: 83px;
            flex-direction: column;
            justify-content: flex-start;
            gap: var(--space-m);
            background: var(--swell-mist);
            background: var(--wharf-blue);
            padding: var(--space-l);
            border-radius: var(--border-radius, var(--space-s));
            width: 100%;
            transform: translateY(0);
            transition: transform 200ms ease-out;
            z-index: 1;
        }

        a.button {
            display: none;
        }
    }
</style>
