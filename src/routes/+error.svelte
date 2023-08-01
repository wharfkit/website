<script lang="ts">
  import { page } from "$app/stores"
  // export let data
  // export let form
</script>

<main>
  <div class="hero default">
    {#if $page.status === 404}
      <h1 class="title">Lost in the Digital Swell: <br /> The Ballad of the 404</h1>
    {:else}
      <h1 class="title">Error {$page.status}</h1>
    {/if}
    <p class="subtitle">
      {$page.status} - {$page.error?.message}
    </p>
  </div>

  {#if $page.status === 404}
    <div class="lyrics">
      <pre>
(Verse 1) 
Oh, gather 'round me hearties, and listen to my tale, 'Bout a brave sailor's journey, through the web's vast email. He set his course upon the waves, a-clickin' with delight, But little did he know, he'd face a fearsome digital fight.

(Chorus) 
404 Page Not Found, a sailor's dreadful plight, Lost upon the cyberspace, his hopes dashed out of sight. He searched the realms of websites, through every link he'd tread, But the 404 Page Not Found, it filled his heart with dread.

(Verse 2) 
With each click and query, he sought the treasure trove, But as the pages loaded, his hopes began to erode. The captain, bold and weary, cried, "Avast, what's this I see? A 404 Page Not Found, 'tis a cruel and heartless plea!"

(Chorus) 
404 Page Not Found, a sailor's dreadful plight, Lost upon the cyberspace, his hopes dashed out of sight. He searched the realms of websites, through every link he'd tread, But the 404 Page Not Found, it filled his heart with dread.

(Verse 3) 
Undeterred, he sailed on, through the vast digital sea, Hoping to find his destination, where he longed to be. But the 404's haunted him, like ghostly sirens' song, Leading him astray, his quest seemed forever long.

(Chorus) 
404 Page Not Found, a sailor's dreadful plight, Lost upon the cyberspace, his hopes dashed out of sight. He searched the realms of websites, through every link he'd tread, But the 404 Page Not Found, it filled his heart with dread.

(Bridge) 
But lo, a glimmer of hope appeared on the horizon, A webmaster's hand reached out, to mend the page's prison. With a click, the page refreshed, and there it stood so proud, The sailor found his treasure, as the clouds above him bowed.

(Chorus) 
404 Page Not Found, a sailor's dreadful plight, Lost upon the cyberspace, his hopes dashed out of sight. He searched the realms of websites, through every link he'd tread, But the 404 Page Not Found, it filled his heart with dread.

(Outro) 
So let this shanty be a warning, to sailors near and far, Beware the treacherous 404, the web's wicked scar. But fear not, brave adventurers, for with resilience we shall sail, Navigating through the unknown, with our spirits fierce and hale!
    </pre>
    </div>
  {/if}
</main>

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

  pre {
    text-align: left;
    white-space: pre-wrap;
  }
</style>
