<script lang="ts">
  import { capitalize } from "$lib/utils/general"
  import type { PageData } from "./$types"

  export let data: PageData
</script>

<main>
  <h1>
    {capitalize(data.section.title)}
  </h1>

  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, quo?</p>

  <h2>Features</h2>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod laudantium provident nostrum
    tempora aut voluptates et delectus enim voluptatem reprehenderit aliquid omnis quo facere
    eligendi, quae deleniti illum culpa commodi voluptatibus velit facilis tempore. Qui iure eius
    reprehenderit dignissimos voluptas explicabo ad doloremque debitis vitae! Quae autem eveniet
    aliquam cupiditate?
  </p>

  <h2>Articles</h2>
  <ul>
    {#each data.section.articles as doc}
      <li>
        <a href={`/docs/${data.section.title}/${doc.slug}`}>
          {doc.title}
        </a>
      </li>
    {/each}
  </ul>

  <hr />

  <h2>Latest Updates</h2>

  <ol>
    <li>
      <time>June 8, 2023</time>
      <ul>
        <li>
          <p>
            Released v1.902.2 of the documentation. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Expedita, doloribus esse fugiat similique iusto asperiores
            necessitatibus praesentium totam quae, alias impedit, nemo blanditiis. Reprehenderit eos
            officia voluptatem similique veritatis aliquam.
          </p>
        </li>
      </ul>
    </li>
    <li>
      <time>June 6, 2023</time>
      <ul>
        <li>
          <p>
            Released v1.902.2 of the documentation. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Expedita, doloribus esse fugiat similique iusto asperiores
            necessitatibus praesentium totam quae, alias impedit, nemo blanditiis. Reprehenderit eos
            officia voluptatem similique veritatis aliquam.
          </p>
        </li>
      </ul>
    </li>
    <li>
      <time>June 4, 2023</time>
      <ul>
        <li>
          <p>
            Released v1.902.2 of the documentation. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Expedita, doloribus esse fugiat similique iusto asperiores
            necessitatibus praesentium totam quae, alias impedit, nemo blanditiis. Reprehenderit eos
            officia voluptatem similique veritatis aliquam.
          </p>
        </li>
      </ul>
    </li>
  </ol>
</main>

<style>
  h1 {
    font-size: var(--fs-4);
    line-height: var(--space-xl);
    margin-block-start: var(--space-s);
    margin-block-end: var(--space-s);
  }

  h2 {
    font-size: var(--fs-3);
    line-height: var(--space-xl);
    margin-block-start: var(--space-l);
    margin-block-end: var(--space-m);
  }

  p {
    line-height: var(--space-l);
  }

  ol {
    list-style: none;
    padding-inline-start: 0;
  }

  ol > li {
    margin-block-end: var(--space-l);
  }

  ol ul {
    list-style: disc;
  }
</style>
