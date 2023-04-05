<script lang="ts">
  export let style = ""
  export let title = ""
  export let number = 1
  export let icon: string = ""
  export let list: Array<string> = []
  export let background: string = "var(--reef-turquoise)"
  let color: string = background === "var(--wharf-blue)" ? "255 255 255" : "73 78 98" // wharf-blue
</script>

<div
  class="wrapper"
  style={style +
    `--card-number: ${number}; --card-background: ${background}; --card-content-color: ${color};`}>
  <div class="card">
    <div class="head">
      <h2>{title}</h2>
      <img src={icon} alt="" />
    </div>
    <div class="body">
      <ul>
        {#each list as item}
          <li>
            {item}
          </li>
        {/each}
      </ul>
      <a href="#" class="more">
        <span class="label">Read more</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"><path d="m9 18 6-6-6-6" /></svg>
      </a>
    </div>
  </div>
</div>

<style>
  .wrapper {
    --r: var(--space-l);
    --d: calc(2 * var(--r));
    --gutter: 10px;
    position: relative;
    flex: 1;
    flex-basis: 25rem;
  }

  /* prettier-ignore */
  .card {
    height: 100%;
    container-type: inline-size;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    background: var(--card-background, var(--reef-turquoise));
    padding: var(--space-l);
    border-radius: var(--r);
    mask-image: 
      linear-gradient(to bottom, black, black), 
      linear-gradient(to bottom, black, black),
      radial-gradient(circle at center, white var(--r), transparent var(--r)),
      radial-gradient(circle at center, white var(--r), transparent var(--r)),
      radial-gradient(circle at top right, transparent calc(var(--r) + var(--gutter)), white calc(var(--r) + var(--gutter)));
    mask-repeat: no-repeat;
    mask-position: 
      0 0, 
      0 100%, 
      calc(100% - 2 * var(--r) - var(--gutter)) 0,
      100% calc(2 * var(--r) + var(--gutter)), 
      calc(100% - var(--r) ) var(--r);
    mask-size: 
      calc(100% - 3 * var(--r) - var(--gutter)) 100%, 
      100% calc(100% - 3 * var(--r) - var(--gutter)), 
      var(--d) var(--d),
      var(--d) var(--d), 
      calc(var(--d) + var(--gutter) * 2) calc(var(--d) + var(--gutter) * 2);
    -webkit-mask-image: 
      linear-gradient(to bottom, black, black), 
      linear-gradient(to bottom, black, black),
      radial-gradient(circle at center, white var(--r), transparent var(--r)),
      radial-gradient(circle at center, white var(--r), transparent var(--r)),
      radial-gradient(circle at top right, transparent calc(var(--r) + var(--gutter)), white calc(var(--r) + var(--gutter)));
    -webkit-mask-repeat: no-repeat;
    -webkit-mask-position: 
      0 0, 
      0 100%, 
      calc(100% - 2 * var(--r) - var(--gutter)) 0,
      100% calc(2 * var(--r) + var(--gutter)), 
      calc(100% - var(--r) ) var(--r);
    -webkit-mask-size: 
      calc(100% - 3 * var(--r) - var(--gutter)) 100%, 
      100% calc(100% - 3 * var(--r) - var(--gutter)), 
      var(--d) var(--d),
      var(--d) var(--d), 
      calc(var(--d) + var(--gutter) * 2) calc(var(--d) + var(--gutter) * 2);
  }

  .wrapper::before {
    counter-reset: variable var(--card-number);
    content: counter(variable);
    position: absolute;
    top: 0;
    right: 0;
    width: calc(var(--d) - var(--gutter));
    width: calc(var(--d));
    aspect-ratio: 1;
    background: white;
    border-radius: var(--r);
    display: grid;
    place-content: center;
    font-family: var(--ff-heading);
    font-size: var(--fs-3);
    font-weight: 400;
    color: var(--wharf-blue);
  }

  @container (width < 600px) {
    .card {
      background-color: red;
    }
  }

  .card .head {
    flex: 1;
    flex-basis: 15rem;
    display: flex;
    flex-direction: column;
  }

  .card .head img {
    align-self: center;
  }

  .card .body {
    flex: 999;
    flex-basis: 0;
    min-inline-size: 60%;
    margin-block-start: var(--space-l);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h2 {
    font-family: var(--ff-heading);
    font-size: var(--fs-4);
    font-weight: 600;
    color: var(--wharf-blue); /* fallback */
    color: rgb(var(--card-content-color));
    max-width: 7ch;
  }

  ul {
    padding-inline-start: 1em;
    margin-bottom: var(--space-m);
  }

  ul :not(:last-child) {
    margin-bottom: var(--space-m);
  }

  li {
    font-weight: 500;
    color: var(--color-neutral-700); /* fallback */
    color: rgb(var(--card-content-color));
    position: relative;
  }

  li:first-of-type::before {
    /* content: ""; */
    /* position: absolute; */
    float: right;
    /* display: inline; */
    top: 0;
    right: 0;
    width: calc(2 * var(--space-l));
    height: var(--space-l);
    background-color: blueviolet;
    /* margin-top: var(--space-m); */
    /* margin-bottom: var(--space-m); */
  }

  .more {
    display: inline-flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    gap: var(--space-xs);
    font-family: var(--ff-heading);
    font-size: var(--fs-0);
    font-weight: 700;
    text-decoration: none;
    margin-block-start: var(--space-s);
    padding: var(--space-xs) var(--space-m);
    border-radius: var(--space-xs);
    color: var(--wharf-blue); /* fallback */
    color: rgb(var(--card-content-color));
    background: rgba(var(--card-content-color) / 0.1);
  }

  .more:is(:hover, :focus) {
    background: rgba(var(--card-content-color) / 0.2);
  }
</style>
