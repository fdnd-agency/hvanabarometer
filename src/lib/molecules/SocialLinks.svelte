     
  <div class="container-icons-search">
    <div class="wrapper-icons">
      <a
        class="twitter-1"
        title="X"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/HvanA_nl"
      >
        <img class="twitter-img" src="/assets/twitter.png" alt="twitter-logo" />
      </a>
      <a
        class="instagram"
        title="Instagram"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/hvana_nl/"
      >
        <img
          class="insta-img"
          src="/assets/instagram.png"
          alt="instagram-icon"
        />
      </a>
      <a
        class="youtube"
        title="YouTube"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.youtube.com/c/HvanA"
      >
        <img class="yt-img" src="/assets/youtube.png" alt="yt-logo" />
      </a>
      <a
        class="icon-linkedin"
        title="LinkedIn"
        target="_blank"
        rel="noopener noreferrer"
        href="https://nl.linkedin.com/company/hvana"
      >
        <img
          class="linkedin-img"
          src="/assets/linkedin.png"
          alt="linkedin-logo"
        />
      </a>
    </div>

    <button>
      <img class="search-img" src="/assets/search.svg" alt="search-icon" />
    </button>

    <button class="menu">
      <img class="menu-img" src="/assets/menu.png" alt="menu-icon" />
    </button>
  </div>

  <style>
    
  .container-icons-search {
    display: flex;
    gap: clamp(0.625rem, 0rem + 3.125vw, 2.5rem);

    @media (min-width: 810px) {
      grid-column: 3;
      grid-row: 1;
      justify-self: end;
    }
  }
  .wrapper-icons {
    display: none;
    @media (min-width: 810px) {
      display: flex;
      gap: 25px;
    }
  }

  .wrapper-icons a {
    color: var(--awb-color1);
    font-size: 24px; /*how to change color bron: https://www.youtube.com/watch?v=Ni49a8gZQxY*/
  }

  button {
    all: unset;
    cursor: pointer;
    gap: 0;
  }

  .menu {
    display: flex;
    @media (min-width: 810px) {
      display: none;
    }
  }
img {
    filter: brightness(0) saturate(100%) invert(20%) sepia(69%) saturate(6268%)
      hue-rotate(218deg) brightness(90%) contrast(94%);
    height: 24px;
    width: 24px;
  }
  
  
  @media (prefers-color-scheme: dark) {
     a {
      color: var(--text);
    }
    .wrapper-icons img,
    .search-img {
      filter: brightness(0) invert(1);
    }
      img {
      filter: brightness(0) invert(1);
    }
  }
  </style>