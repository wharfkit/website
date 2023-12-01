<script lang="ts">
  import { page } from "$app/stores"
  import { goto } from "$app/navigation"

  const defaultOptions = [
    { value: "desc", label: "Latest posts" },
    { value: "asc", label: "Oldest posts" },
  ]

  export let options: { value: string; label: string }[] = defaultOptions
  export let selected = options[0].value

  $: selectedLabel = options.find((option) => option.value === selected)?.label

  let details: HTMLDetailsElement

  const changeSort = () => {
    const url = new URL($page.url)
    url.searchParams.set("sort", selected)
    goto(url, { noScroll: true })
  }

  const handleClick = (option: (typeof options)[number]) => {
    selected = option.value
    changeSort()
    details.removeAttribute("open")
  }
</script>

<select
  bind:value={selected}
  on:change={changeSort}
  name="sort"
  id="select-sort"
  class="visually-hidden">
  {#each options as option}
    <option value={option}>
      {option.label}
    </option>
  {/each}
</select>

<details bind:this={details}>
  <summary>
    <span>{selectedLabel}</span>
    <span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 9L12 15L18 9"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round" />
      </svg>
    </span>
  </summary>
  <ul>
    {#each options as option}
      <li>
        <button on:click={() => handleClick(option)}>
          {option.label}
        </button>
      </li>
    {/each}
  </ul>
</details>

<style>
  details {
    position: relative;
    font-family: var(--ff-body);
    font-size: var(--fs--1);
    font-weight: 600;
  }

  summary {
    color: var(--theme-text-heading);
    background: var(--theme-surface1);
    border-radius: 12px;
    padding-inline-start: var(--space-m);
    padding-inline-end: var(--space-s);
    padding-block: var(--space-2xs);
    display: flex;
    justify-content: space-between;
    gap: var(--space-2xs);
    align-items: center;
    cursor: pointer;
    user-select: none;
  }

  ul {
    list-style: none;
    padding-inline: var(--space-2xs);
    padding-block: var(--space-2xs);
    background: var(--theme-surface1);
    border-radius: 12px;
    margin-top: var(--space-2xs);
    display: grid;
    position: absolute;
    width: 100%;
  }

  svg {
    width: 20px;
    transition: transform 60ms ease-out;
  }

  details[open] svg {
    transform: rotate(-180deg);
  }

  li button {
    padding-inline: var(--space-xs);
    padding-block: var(--space-2xs);
    border-radius: 8px;
    cursor: pointer;
    color: var(--theme-text-heading);
    width: 100%;
    text-align: left;
  }

  summary:hover {
    background: color-mix(in srgb, var(--theme-text-heading) 3%, var(--theme-surface1));
  }

  li button:hover {
    background: color-mix(in srgb, var(--theme-text-heading) 3%, var(--theme-surface1));
  }
</style>