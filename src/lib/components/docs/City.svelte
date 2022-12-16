<script lang="ts">
    export let index: number
    export let name: string
    export let deleted: boolean
    export let coordinates: number[]
</script>

<p>{index} -- {name}</p>
<p>Deleted: {deleted}</p>
<p>
    Coordinates:
    {#each coordinates as coord}
        <span>{coord}</span>
    {/each}
</p>

<style>
    /* your styles go here */
</style>
