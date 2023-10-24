<script lang="ts">
  import SessionAnimation from "../SessionAnimation.svelte"
  import screenshot1 from "$lib/assets/images/kits/sessionkit/screenshot-1.webp"
  import screenshot2 from "$lib/assets/images/kits/sessionkit/screenshot-2.webp"
  import screenshot3 from "$lib/assets/images/kits/sessionkit/screenshot-3.webp"
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
      ><g clip-path="url(#a)" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"
        ><path
          d="M83.318 51.49c-.97.56-.97 1.468 0 2.028s2.542.56 3.511 0c.97-.56.97-1.467 0-2.027s-2.541-.56-3.511 0Zm-3.512 4.056c-2.909-1.68-2.909-4.403 0-6.083 2.91-1.68 7.626-1.68 10.535 0 2.91 1.68 2.91 4.403 0 6.083-2.91 1.68-7.626 1.68-10.535 0ZM60.246 51.071c1.371 0 2.483.642 2.483 1.433.001 3.422 2.356 6.703 6.546 9.122 4.19 2.42 9.873 3.779 15.799 3.78 1.371 0 2.483.641 2.483 1.433s-1.112 1.433-2.484 1.433c-7.242 0-14.188-1.662-19.31-4.619-5.121-2.956-7.999-6.967-8-11.148 0-.792 1.111-1.434 2.483-1.434Zm22.345-12.9c0-.792 1.112-1.434 2.483-1.434 7.243 0 14.189 1.662 19.31 4.619 5.121 2.957 7.999 6.967 8 11.148 0 .792-1.111 1.434-2.483 1.434-1.371 0-2.483-.641-2.483-1.433-.001-3.422-2.355-6.703-6.546-9.122-4.19-2.419-9.873-3.778-15.799-3.779-1.371 0-2.483-.642-2.482-1.434ZM70.168 51.06c1.371 0 2.482.642 2.482 1.434-.001.942.32 1.875.944 2.745.624.87 1.538 1.662 2.692 2.328 1.154.666 2.524 1.194 4.031 1.555 1.508.36 3.124.545 4.755.544 1.372 0 2.484.641 2.485 1.433 0 .792-1.11 1.434-2.482 1.435-2.284 0-4.546-.259-6.657-.763-2.11-.505-4.028-1.244-5.644-2.177-1.615-.932-2.896-2.04-3.77-3.258-.873-1.219-1.322-2.525-1.32-3.843 0-.792 1.113-1.434 2.484-1.433Zm12.422-7.152c0-.792 1.11-1.434 2.482-1.434 2.284-.001 4.547.258 6.657.762 2.11.505 4.028 1.244 5.644 2.177 1.615.932 2.896 2.04 3.769 3.258.874 1.219 1.323 2.525 1.322 3.844-.001.791-1.113 1.433-2.485 1.432-1.371 0-2.482-.642-2.481-1.434 0-.942-.32-1.875-.944-2.745-.624-.87-1.54-1.662-2.693-2.328-1.154-.666-2.523-1.194-4.031-1.554a20.565 20.565 0 0 0-4.755-.545c-1.371 0-2.484-.641-2.484-1.433Z" /></g
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

    <h1 class="title">Session Kit</h1>
    <p class="subtitle">Create an experience that your users will love.</p>
  </section>

  <section class="feature one | switcher">
    <div class="content | box flow | align-left justify-center">
      <h2>Manage sessions with ease.</h2>
      <div class="description">
        <p>
          Sessions are essential both for applications connecting to the blockchain and for users
          connecting with applications. The Session Kit helps you to establish these sessions
          quickly and reliably by providing resources for:
        </p>

        <ul>
          <li>Creating sessions for use in scripts or bots</li>
          <li>Logging in and starting a new session from web applications</li>
          <li>Logging out and ending sessions</li>
          <li>Automatically persisting a session between log-ins and log-outs</li>
        </ul>
      </div>
      <a href="/guides/session-kit" class="button">Go to Session Kit Guides</a>
    </div>
    <div class="image | box place-center">
      <SessionAnimation />
    </div>
  </section>

  <section class="feature two">
    <div class="box center stack | text-center text-balance">
      <h2>Give your users the freedom to interact with the blockchain.</h2>
      <p>
        The Session Kit makes it easy to sign transactions and perform actions on-chain, so that
        you're never limited in the options you can provide to your users. Here's a few examples of
        actions that the Session Kit can orchestrate:
      </p>
    </div>

    <div class="examples">
      <div class="grid">
        <div class="card | box stack">
          <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"
            ><path
              d="m16 6-8 8 8 8M8 14h32M32 42l8-8-8-8M40 34H8"
              stroke="#7BE7CE"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round" /></svg>
          <h3>Sending and receiving tokens.</h3>
          <p>
            Users can receive tokens from outside services, or initiate in-app transactions to
            exchange tokens with other users.
          </p>
        </div>
        <div class="card | box stack">
          <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"
            ><path
              d="M8 40h32a4 4 0 0 0 4-4V16a4 4 0 0 0-4-4H24.14a4 4 0 0 1-3.32-1.8l-1.64-2.4A4 4 0 0 0 15.86 6H8a4 4 0 0 0-4 4v26c0 2.2 1.8 4 4 4ZM24 20v12"
              stroke="#7BE7CE"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round" /><path
              d="m18 26 6-6 6 6"
              stroke="#7BE7CE"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round" /></svg>
          <h3>Moving NFTs.</h3>
          <p>
            Provide users with NFTs, or give them the option to send, receive, or store NFTs from
            other sources.
          </p>
        </div>
        <div class="card | box stack">
          <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg"
            ><path
              d="m18 24 4 4 8-8"
              stroke="#7BE7CE"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round" /><path
              d="M10 14c0-2.2 1.8-4 4-4h20a4 4 0 0 1 4 4v24H10V14ZM44 38H4"
              stroke="#7BE7CE"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round" /></svg>
          <h3>Voting for block producers.</h3>
          <p>
            Simplify the on-chain governance process by giving users the option of registering their
            vote within your app.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="feature three | switcher">
    <div class="image | box place-center">
      <div class="screenshots">
        <img src={screenshot1} alt="Session Kit screenshot" loading="lazy" />
        <img src={screenshot2} alt="Session Kit screenshot" loading="lazy" />
        <img src={screenshot3} alt="Session Kit screenshot" loading="lazy" />
      </div>
    </div>
    <div class="content | box flow | align-left justify-center">
      <h2>Provide a smooth user experience.</h2>
      <p>
        UX can make or break an app. That's why the Session Kit provides a Wharf-themed UI Renderer
        that was created by a professional UX designer, making it simple to create a pleasant and
        intuitive experience for your users.
      </p>
      <p>
        The UI Renderer comes with out-of-the-box functionality that covers a range of common user
        scenarios, and can be paired with the Session Kit's Localization Engine to support multiple
        languages.
      </p>
      <a href="https://ui-test.wharfkit.com/" class="button" target="_blank" rel="noopener"
        >See It In Action
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-external-link"
          ><path
            d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3" /></svg
        ></a>
    </div>
  </section>

  <section class="cta | box center stack | text-center text-balance align-center">
    <h2>Learn more about the Session Kit through our guides.</h2>
    <a href="/guides/session-kit" class="button">Go to Guides</a>
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

  .feature.one .image {
    --background: url("/src/lib/assets/images/9adffb9d8509834788bd5a77f798bc5b.webp");
    inline-size: fit-content;
  }

  .feature.three .image {
    --background: linear-gradient(hsla(228 15% 34% / 0.5), hsla(228 15% 34% / 0.5)),
      url("/src/lib/assets/images/e352306b2329b918c36de9f39666159f.webp");
  }

  .screenshots {
    column-count: 2;
    column-gap: var(--space-m);
  }

  .screenshots img:nth-child(2) {
    margin-top: var(--space-m);
  }

  .content .button svg {
    width: 1.2em;
    height: 1.2em;
    margin-bottom: 2px;
  }

  .feature .description ul {
    margin-top: var(--space-s);
  }

  .examples .grid {
    --minimum: 40ch;
    margin-top: var(--space-xl);
  }

  .box {
    border-radius: var(--space-l);
  }

  .card {
    background-color: var(--theme-surface7);
    padding: var(--space-l-xl);
  }

  .cta {
    gap: var(--space-l);
  }
</style>
