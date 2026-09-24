<section>
  <article class="cards">
    <a class="card" href="#WONTDO">
      <img
        src="https://picsum.photos/id/1005/600/400"
        alt="decoratieve-img"
        loading="lazy"
      />
      <span class="tag">Column</span>
      <h3>
        ‘We laten studenten samenwerken zonder ze ooit te leren hoe je dat doet’
      </h3>
    </a>
  </article>
</section>

<style>
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 40px;
    text-align: left;

    .card {
      position: relative;
      background: white;
      color: black;
      text-decoration: none;
      box-shadow: 6px 6px 0 #c9431f;

      img {
        width: 100%;
        aspect-ratio: 3 / 2;
        object-fit: cover;
        display: block;
      }
      h3 {
        margin: 0;
        padding: 16px 20px 28px;
        font-size: 22px;
        font-weight: 500;
      }
    }
    .tag {
      position: absolute;
      top: 0;
      left: 0;
      background: black;
      color: white;
      padding: 8px 12px;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
</style>
