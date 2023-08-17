<script lang="ts">
  import { afterUpdate } from "svelte"
  import { intersectingSections } from "$lib/stores"

  // Intersection Observer callback function
  const intersectionCallback: IntersectionObserverCallback = (entries) => {
    entries.forEach((entry) => {
      let id = entry.target.getAttribute("aria-labelledby") || ""
      if (entry.isIntersecting) {
        intersectingSections.update((existing) => [...existing, id])
      } else {
        intersectingSections.update((existing) => existing.filter((e) => e !== id))
      }
    })
  }

  let observer: IntersectionObserver

  // Create the Intersection Observer instance
  afterUpdate(() => {
    observer = new IntersectionObserver(intersectionCallback, {
      root: null,
      rootMargin: "0% 0% -50% 0%",
      threshold: 0.1, // Adjust as needed
    })

    // Observe all relevant section elements
    const sections = document.querySelectorAll(
      "section[data-heading-rank='2'], section[data-heading-rank='3']"
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  })
</script>

<slot />
