<script>
  export let link = ""
</script>

<a href={link}>
  <slot />
  <svg width="24" height="24" fill="none">
    <path
      d="M8 21H20.4C20.7314 21 21 20.7314 21 20.4V3.6C21 3.26863 20.7314 3 20.4 3H3.6C3.26863 3 3 3.26863 3 3.6V16"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round" />
    <path
      d="M10 6L18 6"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round" />
    <path
      d="M6 6H7"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round" />
    <path
      d="M3.5 20.5L12 12M12 12V16M12 12H8"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round" />
  </svg></a>

<style>
  a {
    background-color: var(--color-primary-600);
    border-radius: var(--s-1);
    text-align: center;
    padding: 1em;
    color: var(--white);
    text-decoration: none;
    font-size: var(--fs-300);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
  }

  svg {
    /* height: 0.75em; */
  }
</style>
