<script lang="ts">
  export let section: string
  export let onClick: (e: MouseEvent) => void
  export let title: string
  export let href: string
</script>

<li class:active={section.endsWith(href)}>
  <a {href} on:click={onClick}>
    {#if href === "/kits"}
      <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"
        ><path
          d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42ZM7 16.5l-4.74-2.85M7 16.5l5-3M7 16.5v5.17M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3ZM17 16.5l-5-3M17 16.5l4.74-2.85M17 16.5v5.17"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round" /><path
          d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8ZM12 8 7.26 5.15M12 8l4.74-2.85M12 13.5V8"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round" /></svg>
    {:else}
      <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"
        ><path
          d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round" /><path
          d="M3.29 7 12 12l8.71-5M12 22V12"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round" /></svg>
    {/if}
    <span>{title}</span></a>
</li>

<style>
  li {
    border-radius: var(--_nav-item-radius);
    border: 2px solid var(--header-background, var(--theme-header-background));
    flex: 1;
  }

  li a {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--space-m);
    gap: var(--space-xs);
    text-align: center;
    color: inherit;
    text-decoration: none;
  }

  li span {
    padding: 0;
  }

  li:is(:hover, :focus),
  li.active {
    background: var(--header-background, var(--theme-header-background));
  }
</style>
