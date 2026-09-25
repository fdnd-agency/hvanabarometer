<header>
    <nav>
        <ul>
            <li>Nieuws</li>
            <li>Video</li>
            <li>Columns</li>
            <li>Opinie</li>
            <li>Podcast</li>
        </ul>
    </nav>
    <img
        class="hvana-logo"
        width="667"
        height="202"
        alt="HvanA"
        src="https://hvana.nl/wp-content/uploads/2023/03/hvana_logo_wit-2025.svg"
        data-orig-src="https://hvana.nl/wp-content/uploads/2023/03/hvana_logo_wit-2025.svg"
    />

    <div class="wrapper-icons">
        <a
            class="twitter-1"
            style="color:var(--awb-color1);font-size:24px;"
            title="X"
            aria-label="twitter"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/HvanA_nl"
        >
            <img class="twitter-img" src="/assets/twitter.png" />
        </a>
        <a
            class="instagram"
            style="color:var(--awb-color1);font-size:24px;"
            title="Instagram"
            aria-label="instagram"
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
            style="color:var(--awb-color1);font-size:24px;"
            title="YouTube"
            aria-label="youtube"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/c/HvanA"
        >
            <!-- how to change color bron: https://www.youtube.com/watch?v=Ni49a8gZQxY -->
            <img
                class="yt-img"
                src="/assets/youtube.png"
            />
        </a>
        <a
            class="icon-linkedin"
            style="color:var(--awb-color1);font-size:24px;"
            title="LinkedIn"
            aria-label="linkedin"
            target="_blank"
            rel="noopener noreferrer"
            href="https://nl.linkedin.com/company/hvana"
        >
            <img class="linkedin-img" src="/assets/linkedin.png" />
        </a>
    </div>

    <div class="mobile-container">
    <img class="search-img" src="/assets/search.svg" />
    <img class="menu-img" src="/assets/menu.png" />
    </div>

</header>

<style>
    :global(*) {
        margin: 0;
    }
    ul{
        list-style: none;
        display:none;
        @media (min-width: 1120px){
            display:flex;
            gap: 15px;
         
        }
    }
    li{
        font-size: 20px;
        color:#0751d8;
        &:hover{
            text-decoration: underline;
        }
    }
    header img {
       filter: brightness(0) saturate(100%) invert(20%) sepia(69%) saturate(6268%) hue-rotate(218deg) brightness(90%) contrast(94%);
            height: 24px;
            width: 24px;
    }
    header {
        position:sticky;
        display:flex;
        justify-content: space-between;
        align-items: center;
        top:0;
        z-index: 100;
        background-color: white;
        padding: 10px;
        @media (min-width:810px){
            display:flex;
            justify-content: space-between;
        }
    }

    .hvana-logo{
        width:clamp(7.75rem, 5.9583rem + 8.9583vw, 13.125rem);
        height: clamp(2.3125rem, 1.75rem + 2.8125vw, 4rem);
    }
    .wrapper-icons{
        display:none;
        @media (min-width:810px){
            display:flex;
            gap:15px;
        }
    }
    .mobile-container{
        display:flex;
        gap:15px;

    }
  
    .menu-img{
display:flex;
@media (min-width:810px){
    display:none;
}
    }
</style>
