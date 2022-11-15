<script>
  export let link = ""
</script>

<a href={link}><slot /></a>

<style>
  a {
    background-color: var(--color-primary-600);
    border-radius: var(--s-1);
    text-align: center;
    padding: 0.75rem;
    color: var(--white);
    text-decoration: none;
  }
</style>
