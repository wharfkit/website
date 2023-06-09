<script lang="ts">
  import { capitalize } from "../../../lib/utils"
  import type { PageData } from "./$types"

  export let data: PageData
</script>

<main>
  <h1>
    {capitalize(data.section)}
  </h1>

  <h2>Articles</h2>
  <ul>
    {#each data.docs as doc}
      <li>
        <a href={`/docs/${data.section}/${doc.slug}`}>
          {doc.title}
        </a>
      </li>
    {/each}
  </ul>

  <hr />

  <h2>Latest Updates</h2>

  <ul>
    <li>
      <time>June 8, 2023</time>
      <p>
        Released v1.902.2 of the documentation. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Expedita, doloribus esse fugiat similique iusto asperiores necessitatibus praesentium
        totam quae, alias impedit, nemo blanditiis. Reprehenderit eos officia voluptatem similique
        veritatis aliquam.
      </p>
    </li>
    <li>
      <time>June 6, 2023</time>
      <p>
        Released v1.902.2 of the documentation. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Expedita, doloribus esse fugiat similique iusto asperiores necessitatibus praesentium
        totam quae, alias impedit, nemo blanditiis. Reprehenderit eos officia voluptatem similique
        veritatis aliquam.
      </p>
    </li>
    <li>
      <time>June 4, 2023</time>
      <p>
        Released v1.902.2 of the documentation. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Expedita, doloribus esse fugiat similique iusto asperiores necessitatibus praesentium
        totam quae, alias impedit, nemo blanditiis. Reprehenderit eos officia voluptatem similique
        veritatis aliquam.
      </p>
    </li>
  </ul>
</main>
