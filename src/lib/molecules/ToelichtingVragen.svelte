<p>
  <label
    ><input type="checkbox" name="allow-comment" checked /> Toelichting
    vragen</label
  >
  <small>Mag een student een korte tekst bij de stem schrijven?</small>
</p>

<style>
  p {
    display: grid;
    justify-items: start;
    gap: var(--spacing-xs);
  }

  small {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: var(--spacing-xs);
    justify-self: stretch;
    color: var(--text-color-muted);
  }

  label:has(> [type="checkbox"]) {
    display: flex;
    align-items: center;
    gap: var(--spacing-s);
    font-weight: var(--font-weight-bold);
    cursor: pointer;

    &:hover {
      color: var(--primary-color);
    }

    input {
      inline-size: var(--control-size);
      block-size: var(--control-size);
      accent-color: var(--primary-color);
    }
  }
</style>
