<p>
  <button type="submit">Inplannen</button>
</p>

<style>
  p {
    display: grid;
    justify-items: start;
  }

  [type="submit"] {
    /* Uit base.css: knoppen zijn minimaal 44px (aanraakpunt) */
    min-block-size: var(--target-size);
    cursor: pointer;
    padding-inline: var(--spacing-m);
    border: 0;
    border-radius: var(--border-radius);
    background: var(--primary-color);
    color: var(--text-on-primary);
    font-weight: var(--font-weight-bold);
    letter-spacing: var(--letter-spacing-caps);
    text-transform: uppercase;

    &:hover {
      background: var(--text-color);
      color: var(--background-color);
    }
  }
</style>
