<script lang="ts">
  // your script goes here
  import data from "$lib/footerData"
  import { capitalize } from "../utils"
  import logo from "$lib/assets/logos/Wharf-logo-vertical.svg"
</script>

<footer class="box with-sidebar">
  <nav class="">
    <!-- <div class="box"> -->
    <img src={logo} alt="Wharf logo" width="100%" height="auto" />
    <!-- </div> -->
    {#each data as section}
      <div class="box">
        <h3>{capitalize(section.title)}</h3>
        <ul>
          {#each section.items as { name, href }}
            <li><a {href}>{capitalize(name)}</a></li>
          {/each}
        </ul>
      </div>
    {/each}
  </nav>
</footer>

<style>
  footer {
    background: var(--footer-background, white);
  }

  nav {
    max-inline-size: var(--max-inline-size);
    margin-inline: auto;
    min-inline-size: 85%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
    justify-content: stretch;
  }
  img {
    max-width: 60px;
    flex-basis: 5rem;
    grid-row: 1 / 3;
    margin: var(--space-s);
  }

  div.box {
    padding: var(--space-s);
    inline-size: max-content;
    display: flex;
    flex-direction: column;
    gap: var(--space-2xs);
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    line-height: 2em;
  }

  h3 {
    font-family: var(--ff-heading);
    font-weight: 600;
    font-size: var(--fs-0);
    color: var(--color-neutral-500);
    white-space: nowrap;
  }

  a {
    display: block;
    height: 100%;
    color: #000;
    text-decoration: none;
    font-weight: 400;
    font-size: var(--fs--1);
  }

  a:hover {
    color: var(--color-neutral-500);
  }

  @media (max-width: 39rem) {
    img {
      /* grid-row: 1 / 2; */
      grid-column: 1 / 3;
    }
    nav {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>
