<script>
  import logo from "$lib/assets/logos/Wharf-logo-horizontal.svg"
  import { page } from "$app/stores"

  $: section = $page.url.pathname

  let navItems = [
    { name: "Blog", href: "/blog" },
    { name: "Brand", href: "/brand" },
  ]
</script>

<header class="">
  <div class="logo">
    <a href="/">
      <img src={logo} alt="wharf logo" width="203" />
    </a>
  </div>
  <nav>
    {#each navItems as { name, href }}
      <a {href} class:active={new RegExp(href).test(section)}>{name}</a>
    {/each}
  </nav>
</header>

<style>
  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding-block: var(--s2);
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: var(--s2);
  }

  nav a {
    font-family: var(--ff-heading);
    color: var(--wharf-blue);
    text-decoration: none;
    padding-block: var(--s-2);
    border-radius: var(--s-1);
    font-size: var(--fs-0);
    position: relative;
  }

  nav a::after {
    content: "";
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
</style>
