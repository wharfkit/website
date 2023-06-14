<script lang="ts">
  import { page } from "$app/stores"
  export let data
  export let form
</script>

<div class="">
  <h1>{$page.status}</h1>
  <p>
    {$page.error?.message}
  </p>

  {#if data}
    <pre>
        {JSON.stringify(data, null, 2)}
    </pre>
  {/if}

  {#if form}
    <pre>
        {JSON.stringify(form, null, 2)}
    </pre>
  {/if}
</div>

<style>
  div {
    display: grid;
    place-content: center;
    text-align: center;
  }
  h1 {
    font-size: var(--fs-7);
    font-family: var(--ff-heading);
  }

  p {
    font-size: var(--fs-2);
  }
</style>
