<script lang="ts">
  import ContractKitGraphic from "./ContractKitGraphic.svelte"
  import wharfCode1 from "$lib/assets/videos/wharf-code.webm"
  import wharfCode2 from "$lib/assets/videos/wharf-code.mp4"
</script>

<svelte:head>
  <style>
    body {
      --body-gap: var(--space-3xl-4xl);
    }
    /* prettier-ignore */
    body[data-theme="light"] {
      --footer-background: var(--swell-mist);
      --footer-background: white;
      --page-background:
      linear-gradient(
        180deg,
        #494E62 0rem,
        #7be7ce 40rem,
        #b2f2e1 50rem,
        #f4faf4 60rem
        /* #ffffff 10rem */
      );
    }

    /* prettier-ignore */
    body[data-theme="dark"] {
      --page-background:
        linear-gradient(180deg, 
        #7BE7CE -8rem, 
        /* #494E62 10rem,  */
        color-mix(in srgb, #494E62 100%, #262936) 30rem,
        color-mix(in srgb, #494E62 60%, #262936) 35rem,
        color-mix(in srgb, #494E62 40%, #262936) 40rem,
        color-mix(in srgb, #494E62 20%, #262936) 45rem,
        color-mix(in srgb, #494E62 10%, #262936) 50rem,
        #262936 60rem,
        #262936 calc(100% - 10rem),
        var(--color-primary-999) 100%
        ) no-repeat;
    }
  </style>
</svelte:head>

<main class="stack">
  <section class="hero | center stack | text-center align-center">
    <svg width="172" height="171" fill="none" xmlns="http://www.w3.org/2000/svg"
      ><g clip-path="url(#a)"
        ><path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M53.047 50.477c0-1.14.784-2.234 2.181-3.04l14.047-8.11c.466-.27 1.097-.42 1.756-.42H92.1c.658 0 1.29.15 1.756.42l21.07 12.164c1.397.807 2.181 1.9 2.181 3.041s-.784 2.235-2.181 3.042l-21.07 12.164c-1.397.807-3.292 1.26-5.268 1.26s-3.87-.453-5.267-1.26l-28.094-16.22c-1.397-.806-2.181-1.9-2.181-3.04Zm5.693-1.013c-.466.269-.727.633-.727 1.014 0 .38.261.744.727 1.013l28.093 16.22c.466.269 1.098.42 1.756.42.659 0 1.29-.151 1.756-.42l21.07-12.165c.466-.269.727-.633.727-1.014 0-.38-.261-.744-.727-1.013L92.101 42.368l-8.78 5.068c-.97.56-2.541.56-3.511 0l-8.78-5.068-12.29 7.096Zm18.286-7.69h9.08l-4.54 2.621-4.54-2.621ZM71.03 54.532c-.97-.56-.97-1.467 0-2.027l3.511-2.028c.97-.56 2.543-.56 3.512 0 .97.56.97 1.468 0 2.028l-3.511 2.027c-.97.56-2.542.56-3.512 0Zm7.023 4.055c-.97-.56-.97-1.467 0-2.027l14.047-8.11c.97-.56 2.542-.56 3.511 0 .97.56.97 1.468 0 2.027l-14.046 8.11c-.97.56-2.542.56-3.512 0Zm7.023 4.055c-.97-.56-.97-1.467 0-2.027l14.047-8.11c.97-.56 2.542-.56 3.512 0 .969.56.969 1.468 0 2.027l-14.047 8.11c-.97.56-2.542.56-3.511 0Z"
          fill="currentColor" /></g
      ><mask id="c" maskUnits="userSpaceOnUse" x="0" y="0" width="172" height="171" fill="#000"
        ><path fill="currentColor" d="M0 0h172v171H0z" /><path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M171.399 80.009V57.556c0-6.536-3.5-12.57-9.172-15.817L95.252 3.407a18.225 18.225 0 0 0-18.105 0L10.172 41.74A18.225 18.225 0 0 0 1 57.556v55.917a18.226 18.226 0 0 0 9.177 15.821l66.975 38.301a18.223 18.223 0 0 0 18.095 0l66.975-38.301a18.226 18.226 0 0 0 9.177-15.821V80.009ZM25.857 49.38c-3.39 1.957-3.39 5.13 0 7.086L80.39 87.947c3.39 1.957 8.884 1.957 12.274 0l54.531-31.48c3.39-1.957 3.39-5.13 0-7.087L92.663 17.9c-3.39-1.957-8.885-1.957-12.274 0L25.857 49.38Z" /></mask
      ><path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M171.399 80.009V57.556c0-6.536-3.5-12.57-9.172-15.817L95.252 3.407a18.225 18.225 0 0 0-18.105 0L10.172 41.74A18.225 18.225 0 0 0 1 57.556v55.917a18.226 18.226 0 0 0 9.177 15.821l66.975 38.301a18.223 18.223 0 0 0 18.095 0l66.975-38.301a18.226 18.226 0 0 0 9.177-15.821V80.009ZM25.857 49.38c-3.39 1.957-3.39 5.13 0 7.086L80.39 87.947c3.39 1.957 8.884 1.957 12.274 0l54.531-31.48c3.39-1.957 3.39-5.13 0-7.087L92.663 17.9c-3.39-1.957-8.885-1.957-12.274 0L25.857 49.38Z"
        fill="url(#b)" /><path
        d="m162.227 41.739-.248.434.248-.434ZM95.252 3.407l.248-.434-.248.434Zm-18.105 0-.248-.434.248.434ZM10.172 41.74l-.248-.434.248.434Zm.005 87.555-.248.434.248-.434Zm66.975 38.301.248-.434-.248.434Zm18.095 0 .248.434-.248-.434Zm66.975-38.301.248.434-.248-.434ZM25.857 56.466l.25-.433-.25.433Zm0-7.086-.25-.433.25.433ZM80.39 87.947l.25-.433-.25.433Zm12.274 0 .25.433-.25-.433Zm54.531-31.48-.25-.434.25.433Zm0-7.087-.25.433.25-.433ZM92.663 17.9l.25-.434-.25.433Zm-12.274 0 .25.432-.25-.433Zm90.51 39.656v22.453h1V57.556h-1Zm-8.92-15.383a17.726 17.726 0 0 1 8.92 15.383h1a18.725 18.725 0 0 0-9.424-16.251l-.496.868ZM95.004 3.84l66.975 38.332.496-.868L95.5 2.973l-.496.868Zm-17.609 0a17.724 17.724 0 0 1 17.609 0l.496-.868a18.724 18.724 0 0 0-18.601 0l.496.868ZM10.42 42.173 77.395 3.84l-.496-.868L9.924 41.305l.496.868ZM1.5 57.556a17.724 17.724 0 0 1 8.92-15.383l-.496-.868A18.724 18.724 0 0 0 .5 57.555h1Zm0 22.453V57.556h-1v22.453h1Zm0 .486v-.486h-1v.486h1Zm0 32.978V80.495h-1v32.978h1Zm8.925 15.386A17.723 17.723 0 0 1 1.5 113.473h-1c0 6.717 3.598 12.92 9.429 16.255l.496-.869ZM77.4 167.161l-66.975-38.302-.496.869 66.975 38.301.496-.868Zm17.599 0a17.723 17.723 0 0 1-17.599 0l-.496.868a18.723 18.723 0 0 0 18.591 0l-.496-.868Zm66.975-38.302-66.975 38.302.496.868 66.975-38.301-.496-.869Zm8.925-15.386c0 6.359-3.406 12.23-8.925 15.386l.496.869a18.726 18.726 0 0 0 9.429-16.255h-1Zm0-32.978v32.978h1V80.495h-1Zm0-.486v.486h1v-.486h-1ZM26.107 56.033c-1.603-.926-2.292-2.069-2.292-3.11 0-1.04.689-2.184 2.292-3.11l-.5-.866c-1.785 1.031-2.792 2.453-2.792 3.976 0 1.524 1.006 2.945 2.792 3.976l.5-.866ZM80.64 87.514l-54.532-31.48-.5.865L80.14 88.38l.5-.866Zm11.774 0c-1.601.924-3.73 1.4-5.887 1.4-2.157 0-4.286-.476-5.887-1.4l-.5.866c1.788 1.033 4.101 1.535 6.387 1.535 2.285 0 4.598-.502 6.387-1.535l-.5-.866Zm54.531-31.48-54.531 31.48.5.866 54.531-31.48-.5-.867Zm0-6.22c1.604.925 2.292 2.069 2.292 3.11 0 1.04-.688 2.183-2.292 3.11l.5.865c1.786-1.03 2.792-2.452 2.792-3.976 0-1.523-1.006-2.945-2.792-3.976l-.5.866ZM92.413 18.331l54.531 31.481.5-.866-54.531-31.48-.5.865Zm-11.774 0c1.6-.924 3.73-1.4 5.887-1.4 2.156 0 4.286.476 5.887 1.4l.5-.866c-1.789-1.032-4.102-1.534-6.387-1.534-2.286 0-4.599.502-6.387 1.534l.5.866ZM26.107 49.813l54.532-31.48-.5-.867-54.532 31.481.5.866Z"
        fill="currentColor"
        mask="url(#c)" /><path
        d="M1 80.01v33.464a18.223 18.223 0 0 0 9.177 15.82l66.975 38.302a18.223 18.223 0 0 0 18.095 0l66.975-38.302a18.224 18.224 0 0 0 9.177-15.82V80.01l-76.152 43.55a18.223 18.223 0 0 1-18.095 0L1 80.01Z"
        fill="currentColor"
        fill-opacity=".1" /><defs
        ><linearGradient id="b" x1="86.2" y1="1" x2="86.2" y2="170" gradientUnits="userSpaceOnUse"
          ><stop stop-color="currentColor" /><stop
            offset="0"
            stop-color="currentColor"
            stop-opacity=".31" /><stop
            offset="1"
            stop-color="currentColor"
            stop-opacity="0" /></linearGradient
        ><clipPath id="a"
          ><path
            fill="currentColor"
            transform="matrix(.86603 -.5 .86603 .5 42.938 52.505)"
            d="M0 0h48.659v48.659H0z" /></clipPath
        ></defs
      ></svg>
    <h1 class="title">Contract Kit</h1>
    <p class="subtitle">Easily read and write to the blockchain.</p>
  </section>

  <section class="feature one | with-sidebar">
    <div class="image | box place-center">
      <ContractKitGraphic />
    </div>
    <div class="content | box flow | align-left justify-center">
      <h2>Smart contracts, made simple.</h2>
      <div class="description">
        <p>
          Smart contracts are the backbone of every Web3 application. The Contract Kit makes it easy
          to retrieve and write data to smart contracts by:
        </p>
        <ul>
          <li>
            Providing an easy-to-use query language to retrieve data from smart contracts, which is
            automatically returned as native Antelope types.
          </li>
          <li>
            Offering methods to create actions that make it easy to interact with smart contracts,
            using either plain Javascript or native Antelope types.
          </li>
        </ul>
      </div>
      <div class="button-group | cluster">
        <a href="#" class="button">Learn How to Read Tables</a>
        <a href="#" class="button">Learn How to Create Actions</a>
      </div>
    </div>
  </section>

  <section class="feature two | stack">
    <div class="box center stack | text-center text-balance">
      <h2>Provide your users with faster response times.</h2>
      <p>
        The Contract Kit is designed to optimize API access, which in turn reduces load time and
        provides users with a faster, more seamless experience in-app. It does this by optimizing
        the requests made to API nodes and automatically compressing transactions to reduce resource
        costs and bandwidth usage. But the benefits don't stop there:
      </p>
    </div>

    <div class="examples | switcher">
      <div class="card | box">
        <h3><span>50%</span><br />smaller API file size</h3>
        <p>
          API response sizes are automatically reduced by 50% when returning Table and Contract data
          from the smart contract.
        </p>
      </div>
      <div class="card | box">
        <h3><span>4X</span><br />more data per API request</h3>
        <p>
          The number of possible table rows returned per API request are quadrupled when compared to
          other Antelope library calls.
        </p>
      </div>
    </div>
  </section>

  <section class="cta | box center stack | text-center text-balance align-center">
    <h2>Want to write your own custom smart contract first?</h2>
    <p>
      Explore the new resources released by the ENF! Enhance your understanding and stay updated
      with the cutting-edge developments in the world of Smart Contracts.
    </p>
    <a href="https://docs.eosnetwork.com/docs/latest/quick-start/write-a-contract/" class="button">
      Click here to access the new resources
    </a>
  </section>

  <section class="feature three">
    <div class="video">
      <video autoplay loop muted playsinline>
        <source src={wharfCode1} type="video/webm" />
        <source src={wharfCode2} type="video/mp4" />
      </video>
    </div>
    <div class="content | box flow | align-left justify-center">
      <h2>Enhance your developer environment.</h2>
      <div class="description">
        <p>
          Wharf’s Command Line Tool (CLI) can automatically generate code to represent a smart
          contract in a TypeScript application. This saves you time writing code and makes it easy
          to understand parameters for tables and actions while working with a contract. Some of the
          benefits of working with the CLI include:
        </p>
        <ul>
          <li>
            Integrated IntelliSense that provides information in real-time about smart contract
            parameters and enables code completion.
          </li>
          <li>
            Enforced type checking against the smart contract to prevent errors during development.
          </li>
          <li>
            Further optimization of the API calls required by the Contract Kit, to improve the user
            experience.
          </li>
        </ul>
      </div>
      <a href="#" class="button">Learn to Use the CLI</a>
    </div>
  </section>

  <section class="cta | box center stack | text-center text-balance align-center">
    <h2>Learn more about the Contract Kit with the Guides and Documentation.</h2>
    <a href="/guides/contract-kit" class="button">Go to Contract Kit Guides</a>
  </section>
</main>

<style>
  main {
    margin-block-start: var(--space-xl);
    gap: var(--space-6xl);
  }

  .switcher {
    --threshold: 768px;
  }

  .flow {
    gap: var(--space-m);
  }

  .title {
    font-size: var(--fs-6);
  }
  .subtitle {
    font-size: var(--fs-2);
  }

  .feature .content {
    padding: var(--space-2xl);
  }

  .feature .image {
    background: var(--background);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom center;
    padding: var(--space-2xl);
  }

  .feature.one {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap-reverse;
    gap: var(--space-xl);
  }

  .feature.one .image {
    --background: url("/src/lib/assets/images/9adffb9d8509834788bd5a77f798bc5b.webp");
    flex-basis: fit-content;
  }

  .button-group > * {
    white-space: nowrap;
  }

  .feature .description ul {
    margin-top: var(--space-s);
  }

  .box {
    border-radius: var(--space-l);
  }

  .feature.two {
    --measure: 80ch;
    gap: var(--space-xl);
  }

  .card {
    background-color: var(--theme-surface7);
    display: grid;
    grid-template-columns: 12ch 1fr;
    gap: var(--space-xl);
    padding: var(--space-l-xl);
    font-size: var(--fs-1);
  }

  .card h3 {
    color: var(--theme-text4);
    text-align: center;
    font-size: var(--fs-1);
  }

  .card h3 span {
    font-size: var(--fs-7);
    line-height: 1;
  }

  .feature.three .description {
    max-inline-size: 100ch;
  }

  video {
    border-radius: var(--space-l);
  }
</style>
