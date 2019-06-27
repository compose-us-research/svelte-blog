<script>
  function getRandomText() {
    const adjs = [
      "a few",
      "cool",
      "creative",
      "funny",
      "great",
      "helpful",
      "interesting",
      "loving",
      "multiple",
      "nice",
      "real",
      "total",
      "understanding"
    ];
    const subs = [
      "coders",
      "developers",
      "digital nomads",
      "geeks",
      "humans",
      "kids",
      "learners",
      "monkeys",
      "nerds",
      "optimists",
      "programmers"
    ];
    const locations = [
      "Bavaria",
      "Germany",
      "Europe",
      "Landshut",
      "Passau",
      "around the world"
    ];
    return `· created by ${randomOf(adjs)} ${randomOf(subs)} from ${randomOf(
      locations
    )} ·`;

    function randomOf(arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
  }

  let randomText = getRandomText();
</script>

<style>
  .footer {
    align-items: center;
    background: var(--navigation-background);
    color: var(--navigation-text-color);
    display: flex;
    flex-direction: column;
    font-size: 0.8em;
    justify-content: center;
    text-align: center;
    padding: 15px;
  }

  .footer a {
    color: var(--navigation-link-color);
  }
</style>

<div class="footer">
  <div>
    -· © 2018 compose.us GmbH · Kontaktiert uns via
    <a href="mailto:hello@compose.us">hello@compose.us</a>
    ·
    <a href="/imprint">Impressum & Credits</a>
    ·-
  </div>
  <div
    id="random-footer"
    on:pointerenter={() => (randomText = getRandomText())}>
    {randomText}
  </div>
</div>
