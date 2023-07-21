<script lang="ts">
  import logoHorizontal from "$lib/assets/logos/Wharf_logo_bright_horizontal_svgfix.svg"
  import logoVertical from "$lib/assets/logos/Wharf_logo_bright_vector_no_bg_svgfix.svg"
  import ColorPalette from "./ColorPalette.svelte"
  import Toast from "$lib/components/Toast.svelte"

  let toast = ""
  let copyText = async ({ target }) => {
    navigator.clipboard.writeText(target.innerText)
    toast = target.innerText
    setTimeout(() => (toast = ""), 1500)
  }
</script>

<main>
  <!-- <section class="default hero">
    <p class="title">Dive Into the Wharf Brand</p>
    <p class="subtitle">Brand guidelines and assets for Wharf.</p>
  </section> -->

  <div class="with-sidebar">
    <aside class="sidebar">
      <div class="sidebar-header">
        <h1 class="sidebar-title">
          <a href="/brand"> Brand </a>
        </h1>
      </div>
      <ul class="sidebar-list">
        <li class="sidebar-list-item">
          <a href="#assets" class="sidebar-subtitle"> Assets </a>
        </li>
        <li class="sidebar-list-item">
          <a href="#logo" class="sidebar-subtitle"> Logo </a>
        </li>
        <li class="sidebar-list-item">
          <a href="#colors" class="sidebar-subtitle"> Colors </a>
        </li>
        <li class="sidebar-list-item">
          <a href="#font" class="sidebar-subtitle"> Font </a>
        </li>
        <li class="sidebar-list-item">
          <a href="#backgrounds" class="sidebar-subtitle"> Backgrounds </a>
        </li>
      </ul>
    </aside>
    <div class="content | flow">
      <section id="assets">
        <h1>Brand Assets and Guidelines</h1>
        <p>
          Thank you for your interest in the Wharf brand! We would like to make it as easy as
          possible for you to reference Wharf in your project, so we've prepared all the essentials
          for you here: the logo, colors, font, and background images. If you would like to go
          further in your usage of the Wharf brand, please download the Brand Guidelines PDF for
          additional images and information.
        </p>
        <div class="buttons | cluster">
          <a class="button" href="https://assets.wharfkit.com/wharf-brand-assets.zip" download
            >Download Brand Assets (ZIP)</a>
          <a class="button" href="https://assets.wharfkit.com/wharf-brand-guidelines.pdf" download
            >Download Brand Guidelines (PDF)</a>
        </div>
      </section>
      <hr />
      <section id="logo">
        <h2>Wharf Logo</h2>
        <div class="logos | switcher">
          <div class="vertical | stack">
            <div class="frame">
              <img src={logoVertical} alt="wharf logo vertical" width="215" height="215" />
            </div>
            <a
              class="button"
              href="https://assets.wharfkit.com/wharf-brand-assets/logo/svg/wharf-logo-bright-vector-no-bg.svg"
              download>Download Logo (SVG)</a>
          </div>

          <div class="horizontal | stack">
            <div class="frame">
              <img src={logoHorizontal} alt="wharf logo horizontal" width="215" height="215" />
            </div>
            <a
              class="button"
              href="https://assets.wharfkit.com/wharf-brand-assets/logo/svg/wharf-logo-bright-horizontal-vector-no-bg.svg"
              download>Download Logo (SVG)</a>
          </div>
        </div>
      </section>
      <hr />
      <section id="colors">
        <h2>Brand Colors</h2>
        <div class="brand-colors">
          <div class="brand-color">
            <div class="label">
              <h3>Wharf Blue</h3>
              <table>
                <tbody>
                  <tr>
                    <td> Hex: </td>
                    <td class="underline" on:click={copyText} on:keydown={copyText}>#494E62</td>
                  </tr>
                  <tr>
                    <td> RGB: </td>
                    <td>73-78-98</td>
                  </tr>
                  <tr>
                    <td> CMYK: </td>
                    <td>26-20-0-62</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="palette">
              <ColorPalette variant="primary" />
            </div>
          </div>
          <div class="brand-color">
            <div class="label">
              <h3>Reef Turquoise</h3>
              <table>
                <tbody>
                  <tr>
                    <td> Hex: </td>
                    <td class="underline" on:click={copyText} on:keydown={copyText}>#7BE7CE</td>
                  </tr>
                  <tr>
                    <td> RGB: </td>
                    <td>123-231-206</td>
                  </tr>
                  <tr>
                    <td> CMYK: </td>
                    <td>47-0-11-9</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="palette">
              <ColorPalette variant="secondary" />
            </div>
          </div>
          <div class="brand-color">
            <div class="label">
              <h3>Seafoam Mint</h3>
              <table>
                <tbody>
                  <tr>
                    <td> Hex: </td>
                    <td class="underline" on:click={copyText} on:keydown={copyText}>#B2F2E1</td>
                  </tr>
                  <tr>
                    <td> RGB: </td>
                    <td>178-242-225</td>
                  </tr>
                  <tr>
                    <td> CMYK: </td>
                    <td>26-0-7-5</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="palette">
              <ColorPalette variant="secondary" highlight="200" />
            </div>
          </div>
          <div class="brand-color">
            <div class="label">
              <h3>Swell Mist</h3>
              <table>
                <tbody>
                  <tr>
                    <td> Hex: </td>
                    <td class="underline" on:click={copyText} on:keydown={copyText}>#F4FAF4</td>
                  </tr>
                  <tr>
                    <td> RGB: </td>
                    <td>244-250-244</td>
                  </tr>
                  <tr>
                    <td> CMYK: </td>
                    <td>2-0-2-2</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="palette">
              <ColorPalette variant="accent" />
            </div>
          </div>
        </div>
      </section>
      <hr />
      <section id="font">
        <h2>Brand Font</h2>
        <div>
          <p class="montserrat">Wharf headlines are set in Montserrat.</p>
          <p>All body text is typeset in Inter.</p>
        </div>

        <div class="fonts | switcher">
          <a href="https://fonts.google.com/specimen/Montserrat">
            <div class="montserrat | box flow">
              <h3>Montserrat</h3>
              <p>Headline font.</p>
              <p class="underline">https://fonts.google.com/specimen/Montserrat</p>
            </div>
          </a>
          <a href="https://fonts.google.com/specimen/Inter">
            <div class="inter | box flow">
              <h3>Inter</h3>
              <p>Content font.</p>
              <p class="underline">https://fonts.google.com/specimen/Inter</p>
            </div>
          </a>
        </div>
      </section>
      <hr />
      <section id="backgrounds">
        <h2>Background Images</h2>
        <picture>
          <source srcset="/images/brand/background-image-example.avif" type="image/avif" />
          <source srcset="/images/brand/background-image-example.webp" type="image/webp" />
          <img
            src="/images/brand/background-image-example.png"
            srcset="/images/brand/background-image-example-2x.png 2x"
            alt="wharfkit background" />
        </picture>
        <div class="buttons | cluster">
          <a class="button" href="https://assets.wharfkit.com/wharf-brand-image.zip" download>
            Download Full Image (ZIP)
          </a>
          <a class="button" href="https://assets.wharfkit.com/wharf-brand-image-bg.zip" download>
            Download Background Only (ZIP)
          </a>
        </div>
      </section>
    </div>
  </div>
</main>

{#if toast}
  <Toast text={`Copied ${toast}`} />
{/if}

<style>
  aside {
    display: none;
  }

  @media screen and (min-width: 900px) {
    aside {
      display: block;
    }
  }

  /* aside ul {
    position: sticky;
    top: var(--space-xl);
  } */

  .content {
    gap: var(--space-l);
  }

  :target {
    scroll-margin-block-start: var(--space-xl);
  }

  section {
    display: flex;
    flex-direction: column;
    gap: var(--space-m);
    max-inline-size: none;
  }

  section :is(h1, h2) {
    font-size: var(--fs-4);
  }

  .buttons {
    display: flex;
    gap: var(--space-s);
  }

  .buttons > * {
    flex-grow: 1;
  }

  .logos .frame {
    aspect-ratio: 1;
    padding: var(--space-l);
    border: var(--border-style);
    border-radius: var(--space-s);
  }

  .logos .frame img {
    object-fit: contain;
    inline-size: 80%;
    block-size: 80%;
  }

  .logos .frame {
    border: 2px solid var(--color-neutral-100);
    border-radius: var(--space-s);
    background: white;
  }

  .fonts .box {
    background-color: var(--theme-surface2);
    border-radius: var(--space-s);
    padding: var(--space-l);
    gap: var(--space-3xs);
    transition: var(--background-transition);
    flex: 1;
  }

  p.montserrat {
    font-size: var(--fs-1);
    line-height: 1.5em;
    margin-block-end: var(--space-xs);
  }

  .fonts h3 {
    font-size: var(--fs-2);
    font-weight: 600;
  }

  .montserrat {
    font-family: var(--ff-heading);
  }

  .fonts a {
    font-size: var(--fs-0);
    text-decoration: none;
    color: var(--theme-text-body);
    font-weight: inherit;
    display: flex;
  }

  .fonts .box:is(:hover, :focus-visible) {
    background-color: var(--theme-surface2-hover);
  }

  .brand-colors {
    display: flex;
    flex-direction: column;
    gap: var(--space-xl);
  }

  .brand-colors td {
    padding-inline: 0;
    padding-block: var(--space-3xs);
  }

  #colors .label {
    flex-basis: 14rem;
    margin-inline-end: var(--space-xl);
  }

  #colors h3 {
    font-family: var(--ff-heading);
    font-size: var(--fs-1);
    font-weight: 600;
    margin-block-end: var(--space-3xs);
  }

  #colors table td:first-of-type {
    width: 10ch;
  }

  #colors .palette {
    flex-grow: 1;
    flex-basis: 14rem;
    margin-block-start: var(--space-xs);
  }

  .underline {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
