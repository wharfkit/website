<script lang="ts">
  import Tag from "../Tag.svelte"
  // import {copyIcon} from "$lib/addCopyButton"

  import type { PageData } from "./$types"
  export let data: PageData

  const { plugin } = data
  const installCommand = `yarn install ${plugin.pluginId}`

  function copyToClipboard() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(installCommand)
    }
  }
</script>

<section>
  <article>
    <header>
      <div class="plugin-title-wrapper">
        <div class="plugin-title">
          <svg width="77" height="77" fill="none" xmlns="http://www.w3.org/2000/svg"
            ><path
              d="M0 35.586v15.073a8.209 8.209 0 0 0 4.134 7.126L34.3 75.037a8.209 8.209 0 0 0 8.15 0l30.167-17.252a8.209 8.209 0 0 0 4.133-7.126V35.586l-34.3 19.616a8.209 8.209 0 0 1-8.15 0L0 35.586Z"
              fill="#7BE7CE" /><path
              d="M0 35.806c0 1.178.63 2.265 1.652 2.85L34.298 57.34a8.209 8.209 0 0 0 8.155 0L75.1 38.656a3.284 3.284 0 0 0 1.652-2.85V25.474a8.209 8.209 0 0 0-4.13-7.124L42.452 1.084a8.209 8.209 0 0 0-8.155 0L4.131 18.35A8.209 8.209 0 0 0 0 25.474v10.332Z"
              fill="#B2F2E1" /><path
              d="M6.894 24.414c-1.766-1.02-1.766-2.674 0-3.694L35.321 4.31c1.767-1.02 4.631-1.02 6.398 0l28.427 16.41c1.767 1.02 1.767 2.674 0 3.694l-28.427 16.41c-1.767 1.02-4.631 1.02-6.398 0L6.894 24.415Z"
              fill="#7BE7CE" /><g
              clip-path="url(#a)"
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="#494E62"
              ><path
                d="M34.844 16.322c0-.475.668-.86 1.492-.86h12.656c.824 0 1.491.385 1.491.86v7.307c0 .476-.667.861-1.491.861-.824 0-1.492-.385-1.492-.86v-6.447H36.336c-.824 0-1.492-.385-1.492-.86ZM27.898 20.332c.824 0 1.492.386 1.492.861v6.446h11.164c.824 0 1.492.386 1.492.861 0 .476-.668.861-1.492.861H27.898c-.823 0-1.491-.385-1.491-.86v-7.308c0-.475.668-.86 1.491-.86Z" /></g
            ><defs
              ><clipPath id="a"
                ><path
                  fill="#fff"
                  transform="matrix(.86603 -.5 .86603 .5 13.133 22.411)"
                  d="M0 0h29.228v29.228H0z" /></clipPath
              ></defs>
          </svg>
          <div>
            <h1>{plugin.name}</h1>
            <p>
              {#if plugin.version}
                <span>{plugin.version}</span>
              {/if}
              {#if plugin.version && plugin.lastPublishedDate}
                -
              {/if}
              {#if plugin.lastPublishedDate}
                <span>{plugin.lastPublishedDate}</span>
              {/if}
            </p>
          </div>
        </div>

        <ul class="tags | cluster">
          {#each plugin.tags as tag}
            <Tag>{tag}</Tag>
          {/each}
        </ul>
      </div>
    </header>

    <div id="readme">
      {@html plugin.readme}
    </div>
  </article>
  <aside>
    <div class="install">
      <p>Install</p>
      <code>
        {installCommand}
      </code>
      <button class="button" on:click={copyToClipboard}>Copy install script</button>
    </div>
    <dl class="hidden-sm">
      {#if plugin.version}
        <dt>Version</dt>
        <dd>{plugin.version}</dd>
      {/if}

      {#if plugin.license}
        <dt>License</dt>
        <dd>{plugin.license}</dd>
      {/if}

      {#if plugin.lastPublishedDate}
        <dt>Last Published</dt>
        <dd>{plugin.lastPublishedDate}</dd>
      {/if}

      {#if plugin.author}
        <dt>Creator</dt>
        <dd class="author">
          <img src={plugin.authorIcon} class="author-icon" alt="" width="28" height="28" />
          {plugin.author}
        </dd>
      {/if}
    </dl>
  </aside>
</section>

<style>
  section {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-m);
  }

  article {
    flex-basis: 0;
    flex-grow: 999;
    min-inline-size: 55%;
  }

  #readme :global(h1) {
    display: none;
  }

  #readme :global(> *) {
    margin-top: var(--space-m);
  }

  #readme :global(hr) {
    margin-block: var(--space-xl);
  }

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: var(--space-l);
  }

  aside {
    display: grid;
    gap: var(--space-s);
    align-items: start;
    align-content: start;
    flex-basis: 16rem;
    flex-grow: 1;
  }

  @media (max-width: 768px) {
    section {
      gap: var(--space-xl);
    }
  }

  .install {
    display: grid;
    gap: var(--space-2xs);
  }

  .install code {
    --_input-bg: var(--input-background-color, var(--theme-surface2));
    resize: none;
    border: none;
    background-color: var(--_input-bg);
    padding-inline: var(--space-s);
    padding-block: var(--space-xs);
    border-radius: var(--space-xs);
    font-size: var(--fs--1);
    color: color-mix(in srgb, var(--_input-bg), var(--theme-text-body) 70%);
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    user-select: all;
  }

  .install code::before {
    content: "$";
    margin-right: var(--space-2xs);
  }

  .install p {
    font-family: var(--ff-heading);
    font-size: var(--fs-1);
    font-weight: 600;
  }

  .plugin-title {
    display: grid;
    grid-template-columns: 77px auto;
    gap: var(--space-m);
  }

  .tags {
    list-style: none;
    gap: var(--space-xs);
    padding: 0;
    padding-top: var(--space-m);
  }

  dl {
    background: var(--theme-surface8);
    padding: var(--space-m);
    padding-block-start: var(--space-xs);
    border-radius: var(--space-m);
  }

  dt,
  dd {
    padding-top: var(--space-xs);
  }

  dt {
    font-weight: 600;
    font-family: var(--ff-heading);
  }

  dd {
    font-size: var(--fs--1);
  }

  dd:not(:last-child) {
    padding-bottom: var(--space-xs);
    border-bottom: 1px solid var(--theme-border2);
  }

  dd.author {
    display: flex;
    gap: var(--space-2xs);
    align-items: center;
  }

  .author-icon {
    border-radius: var(--space-2xs);
  }

  .hidden-sm {
    @media (max-width: 768px) {
      display: none;
    }
  }
</style>
