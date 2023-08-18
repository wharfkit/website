<script lang="ts">
  import { afterUpdate } from "svelte"
  import { activeTocSection, scrollPosition } from "$lib/stores"

  afterUpdate(() => {
    const sections = document.querySelectorAll(
      "section[data-heading-rank='2'], section[data-heading-rank='3']"
    ) as NodeListOf<HTMLElement>

    sections.forEach((section, index) => {
      const nextSection = sections[index + 1]
      const nextSectionPosition = nextSection ? nextSection.offsetTop : Infinity
      if ($scrollPosition >= section.offsetTop - 48 && $scrollPosition < nextSectionPosition) {
        $activeTocSection = section.getAttribute("aria-labelledby") || ""
      }
    })
  })
</script>

<slot />
