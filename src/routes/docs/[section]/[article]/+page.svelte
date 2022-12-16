<script lang="ts">
    import type {PageData} from './$types'

    export let data: PageData
</script>

<h1>{data.meta.title}</h1>

{@html data.PostContent}

<!-- <pre>
  {JSON.stringify(data, null, 2)}
</pre> -->
