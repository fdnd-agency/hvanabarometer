<header>
    <nav>
        <ul>
            <li>
                <a href="#Niews">Nieuws</a>
            </li>

            <li>
                <a href="#Video">Video</a>
            </li>
            <li>
                <a href="#Columns">Columns</a>
            </li>

            <li>
                <a href="#Opinie">Opinie</a>
            </li>
            <li>
                <a href="#Podcast">Podcast</a>
            </li>
        </ul>
    </nav>
    <img
        class="hvana-logo"
        width="667"
        height="202"
        alt="HvanA"
        src="https://hvana.nl/wp-content/uploads/2023/03/hvana_logo_wit-2025.svg"
        data-orig-src="https://hvana.nl/wp-content/uploads/2023/03/hvana_logo_wit-2025.svg"
        fetchpriority="high"
    />
    <div class="container-icons-search">
        <div class="wrapper-icons">
            <a
                class="twitter-1"
                title="X"
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/HvanA_nl"
            >
                <img
                    class="twitter-img"
                    src="/assets/twitter.png"
                    alt="twitter-logo"
                />
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
            <img
                class="search-img"
                src="/assets/search.svg"
                alt="search-icon"
            />
        </button>

        <button class="menu">
            <img class="menu-img" src="/assets/menu.png" alt="menu-icon" />
        </button>
    </div>
</header>

<style>
    header {
        position: fixed;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        top: 0;
        z-index: 10;
        background-color: transparent;
        color: white;
        padding: 10px 20px;

        animation: ScrollAnimation linear forwards;
        animation-timeline: view();
        animation-range-start: 100vh;
        animation-range-end: 130vh;

        @media (min-width: 810px) {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            padding: 10px 40px;
        }
    }
    @keyframes ScrollAnimation {
        100% {
            background-color: white;
            color: #0751d8;
        }
    }
    nav {
        @media (min-width: 810px) {
            grid-column: 1;
            grid-row: 1;
        }
    }
    ul {
        list-style: none;
        display: none;
        padding: 0;
        @media (min-width: 1120px) {
            display: flex;
            gap: 15px;
        }
    }
    li {
        font-size: 20px;
        color: inherit;
        a {
            color: inherit;
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    .hvana-logo {
        width: clamp(7.75rem, 5.9583rem + 8.9583vw, 13.125rem);
        height: clamp(2.3125rem, 1.75rem + 2.8125vw, 4rem);
        filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%)
            hue-rotate(305deg) brightness(100%) contrast(103%);
        animation: ColorChange step-end forwards;
        animation-timeline: view();
        animation-range-start: 100vh;
        animation-range-end: 120vh;
        @media (min-width: 810px) {
            grid-column: 2;
            grid-row: 1;
        }
    }
    @keyframes ColorChange {
        100% {
            filter: brightness(0) saturate(100%) invert(20%) sepia(69%)
                saturate(6268%) hue-rotate(218deg) brightness(90%) contrast(94%);
        }
    }
    .container-icons-search {
        --_test: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%)
            hue-rotate(305deg) brightness(100%) contrast(103%);
        display: flex;
        gap: clamp(0.625rem, 0rem + 3.125vw, 2.5rem);
        filter: var(--_test);
        animation: IconColor step-end forwards;
        animation-timeline: view();
        animation-range-start: 100vh;
        animation-range-end: 120vh;
        img {
            height: 24px;
            width: 24px;
        }
        @media (min-width: 810px) {
            grid-column: 3;
            grid-row: 1;
            justify-self: end;
        }
    }
    @keyframes IconColor {
        100% {
            filter: brightness(0) saturate(100%) invert(20%) sepia(69%)
                saturate(6268%) hue-rotate(218deg) brightness(90%) contrast(94%);
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
        color: inherit;
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
</style>
