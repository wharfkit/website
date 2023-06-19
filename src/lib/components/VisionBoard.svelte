<div class="wrapper | box">
  <div class="title | box">
    <hgroup>
      <h2>Vision</h2>
      <p>Hear from the <br /> people behind Wharf</p>
    </hgroup>
  </div>
  <div class="columns">
    <div class="column one">
      <div class="card">
        <div class="bio">
          <!-- TODO: placeholder image -->
          <div class="picture">
            <img src="http://placekitten.com/60/60" alt="profile picture of aaron" loading="lazy" />
          </div>
          <h3>Aaron Cox of Greymass</h3>
        </div>
        <div class="testimonial">
          <!-- TODO: placeholder text -->
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quasi ut ratione
            distinctio hic, eligendi sed quas sunt omnis excepturi ipsam? Obcaecati accusantium
            quisquam placeat illum quos alias omnis vitae. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Eius quasi ut ratione distinctio hic, eligendi sed quas sunt omnis
            excepturi ipsam? Obcaecati accusantium quisquam placeat illum quos alias omnis vitae.
          </p>
        </div>
      </div>
    </div>
    <div class="column two">
      <div class="card">
        <div class="bio">
          <div class="picture">
            <img src="http://placekitten.com/60/60" alt="profile picture of yves" loading="lazy" />
          </div>
          <h3>Yves La Rose of the ENF</h3>
        </div>
        <div class="testimonial">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quasi ut ratione
            distinctio hic, eligendi sed quas sunt omnis excepturi ipsam? Obcaecati accusantium
            quisquam placeat illum quos alias omnis vitae.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--space-l);
    padding: var(--space-l);
    padding-bottom: var(--space-2xl);
    background: url("/src/lib/assets/images/squiggle-2.svg"),
      linear-gradient(113.44deg, #7be7ce 0%, #494e62 100%);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    border-radius: inherit;
    overflow: hidden;
  }

  .title {
    display: grid;
    align-items: center;
  }

  hgroup h2 {
    color: var(--wharf-blue);
    font-size: var(--fs-4);
    font-weight: 600;
    margin-bottom: var(--space-s);
  }

  hgroup p {
    color: white;
    font-family: var(--ff-heading);
    font-size: var(--fs-4);
    font-weight: 600;
    line-height: 1.2;
  }

  h3 {
    line-height: 1.2;
    text-wrap: balance;
  }

  .columns {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--space-m);
    isolation: isolate;
  }

  .column {
    flex: 1;
    display: grid;
    place-content: center;
  }

  .card {
    background: var(--theme-surface7);
    border-radius: var(--space-l);
    padding: var(--space-l);
    position: relative;
    display: grid;
    gap: var(--space-m);
  }

  .card::before,
  .card::after {
    content: "";
    display: none;
    position: absolute;
    inset: 0;
    z-index: -1;
    background: var(--wharf-blue);
    border-radius: inherit;
  }
  .card::before {
    transform: translateY(calc(-100% - var(--space-m)));
  }
  .card::after {
    transform: translateY(calc(100% + var(--space-m)));
  }

  .two .card::after {
    display: block;
  }

  .bio {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-s);
  }

  .bio img {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-right: var(--space-s);
  }

  @media (min-width: 768px) {
    .wrapper {
      grid-template-columns: 1fr 1fr;
      padding: var(--space-2xl);
      gap: 0;
    }

    .one .card::before,
    .two .card::after {
      display: block;
    }
  }

  @media (min-width: 1024px) {
    .wrapper {
      padding: var(--space-4xl);
    }

    .columns {
      flex-direction: row;
    }

    .card::before,
    .card::after {
      display: block;
    }
  }
</style>
