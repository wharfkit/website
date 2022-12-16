<script lang="ts">
  import logoHorizontal from "$lib/assets/logos/Wharf-logo-horizontal.svg"
  import logoVertical from "$lib/assets/logos/Wharf-logo-vertical.svg"
  import ColorPalette from "./ColorPalette.svelte"

  let copyText = async ({ target }) => {
    navigator.clipboard.writeText(target.innerText)
  }
</script>

<div class="with-sidebar">
  <aside class="sidebar">
    <ul class="flow">
      <li><a href="#guidelines">Guidelines</a></li>
      <li><a href="#logo">Logo</a></li>
      <li><a href="#colors">Colors</a></li>
      <li><a href="#font">Font</a></li>
      <li><a href="#backgrounds">Backgrounds</a></li>
    </ul>
  </aside>
  <div class="content | flow">
    <section id="guidelines">
      <h2>Brand guidelines</h2>
      <p>
        Thank you for your interest in the WharfKit brand! We would like to make it as easy as
        possible for you to reference WharfKit in your project, so we’ve prepared all the essentials
        for you here: the logo, colors, font, and background images. If you would like to go further
        in your usage of the WharfKit brand, please download the Brand Guidelines PDF for additional
        images and information.
      </p>
      <div class="buttons | cluster">
        <a class="button" href="/downloads/wharf-brand_assets.zip" download
          >Download brand assets (ZIP)</a>
        <a
          class="button"
          data-type="secondary"
          href="/downloads/wharf-brand_guidelines.pdf"
          download>Download brand guidelines (PDF)</a>
      </div>
    </section>
    <section id="logo">
      <h2>Wharf logo</h2>
      <div class="logos | switcher">
        <div class="vertical | stack">
          <div class="frame">
            <img src={logoVertical} alt="wharf logo vertical" />
          </div>
          <a
            class="button"
            data-type="secondary"
            href="/downloads/wharf-brand_assets/logo/svg/Wharf_logo_bright_vector_no_bg.svg"
            download>Download logo (SVG)</a>
        </div>

        <div class="horizontal | stack">
          <div class="frame">
            <img src={logoHorizontal} alt="wharf logo horizontal" />
          </div>
          <a
            class="button"
            data-type="secondary"
            href="/downloads/wharf-brand_assets/logo/svg/Wharf_logo_bright_horizontal_vector_no_bg.svg"
            download>Download logo (SVG)</a>
        </div>
      </div>
    </section>
    <section id="colors">
      <h2>Brand colors</h2>
      <div>
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
      <div>
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
      <div>
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
          <ColorPalette variant="tertiary" />
        </div>
      </div>
      <div>
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
    </section>
    <section id="font">
      <h2>Brand font</h2>
      <div>
        <p class="montserrat">Wharf headlines are set in Montserrat.</p>
        <p>Typeset all body text in Inter.</p>
      </div>

      <div class="fonts | switcher">
        <a href="https://fonts.google.com/specimen/Montserrat">
          <div class="montserrat | box flow">
            <h3>Montserrat</h3>
            <p>Headline font</p>
            <p class="underline">https://fonts.google.com/specimen/Montserrat</p>
          </div>
        </a>
        <a href="https://fonts.google.com/specimen/Inter">
          <div class="inter | box flow">
            <h3>Inter</h3>
            <p>Content font</p>
            <p class="underline">https://fonts.google.com/specimen/Inter</p>
          </div>
        </a>
      </div>
    </section>
    <section id="backgrounds">
      <h2>Background images</h2>
      <img src="/images/background-image-example.png" alt="" />
      <div class="buttons | cluster">
        <a class="button" data-type="secondary" href="/downloads/wharf-brand_image.zip" download>
          Download full image (ZIP)
        </a>
        <a class="button" data-type="secondary" href="/downloads/wharf-brand_image_bg.zip" download>
          Download background only (ZIP)
        </a>
      </div>
    </section>
  </div>
</div>

<style>
  aside ul {
    position: sticky;
    top: var(--s3);
    list-style: none;
    margin-block-end: var(--s3);
  }

  aside li {
    display: flex;
  }

  aside a {
    flex: 1;
    block-size: 100%;
    text-decoration: none;
    color: var(--color-secondary-500);
    padding-block: var(--s-1);
  }

  aside a:hover {
    text-decoration: underline;
  }

  .content {
    gap: var(--s3);
  }

  .content > :not(:last-child) {
    padding-block-end: var(--s3);
    border-block-end: var(--border-style);
  }

  :target {
    scroll-margin-block-start: var(--s3);
  }

  section {
    display: flex;
    flex-direction: column;
    gap: var(--s2);
    max-inline-size: none;
  }

  section :is(h1, h2) {
    font-family: var(--ff-heading);
    font-size: var(--fs-3);
    font-weight: 600;
  }

  .buttons {
    display: flex;
    gap: var(--s0);
  }

  .buttons > * {
    flex-grow: 1;
  }

  .logos .frame {
    aspect-ratio: 1;
    padding: var(--s2);
  }

  .logos .frame img {
    object-fit: contain;
  }

  .logos .frame {
    border: var(--border-style);
    border-radius: var(--s0);
  }

  .fonts .box {
    background-color: var(--color-secondary-100);
    border-radius: var(--s0);
    padding: var(--s2);
    gap: var(--s-5);
    transition: var(--background-transition);
  }

  p.montserrat {
    font-size: var(--fs-1);
    line-height: 1.5em;
    margin-block-end: var(--s-1);
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
    color: inherit;
    font-weight: inherit;
  }

  .fonts .box:is(:hover, :focus-visible) {
    background-color: var(--color-secondary-200);
  }

  #colors > div {
    display: flex;
    flex-wrap: wrap;
  }

  #colors .label {
    flex-basis: 14rem;
    margin-inline-end: var(--s3);
  }

  #colors h3 {
    font-family: var(--ff-heading);
    font-size: var(--fs-1);
    font-weight: 600;
    margin-block-end: var(--s-4);
  }

  #colors table {
    border-collapse: collapse;
    min-width: fit-content;
  }

  #colors table td:first-of-type {
    width: 10ch;
  }

  #colors .palette {
    flex-grow: 1;
    flex-basis: 14rem;
    margin-block-start: var(--s-1);
  }

  .underline {
    text-decoration: underline;
    cursor: pointer;
  }
</style>
