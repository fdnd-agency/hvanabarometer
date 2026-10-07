<section class="article-wrapper">
    <article class="article-big">
        <a href="#WONTDO">
        <picture>
        <source srcset="/assets/deco-img.avif" type="image/avif">
        <source srcset="/assets/deco-img.webp" type="image/webp">

            <img
                class="article-img"
                src="/assets/deco-img.jpg"
                alt="student achter een laptop"
                width="510"
                height="520"
                fetchpriority="high"
            />
            </picture>
            <h3>Steeds meer van mijn studie gebeurt achter een scherm.</h3>
        </a>
    </article>
        <article class="article">
        <a href="#WONTDO">
        <picture>
        <source srcset="/assets/deco-img2.avif" type="image/avif">
        <source srcset="/assets/deco-img2.webp" type="image/webp">

            <img
                class="article-img"
                src="/assets/deco-img2.jpg"
                alt="student achter een laptop"
                width="510"
                height="520"
            />
        </picture>
            <h3>Steeds meer van mijn studie gebeurt achter een scherm.</h3>
        </a>
    </article>    
    
    <article class="article">
        <a href="#WONTDO">
        <picture>
        <source srcset="/assets/deco-img3.avif" type="image/avif">
        <source srcset="/assets/deco-img3.webp" type="image/webp">

            <img
                class="article-img"
                src="/assets/deco-img3.jpg"
                alt="student achter een laptop"
                width="510"
                height="520"
            />
        </picture>
            <h3>Steeds meer van mijn studie gebeurt achter een scherm.</h3>
        </a>
    </article>
</section>


<style>
.article-wrapper{
    display:flex;
    flex-direction: column;
    gap:20px;
    
    @media (min-width:1024px){
      display: grid;
grid-template-columns: 3fr 2fr;
gap: 15px 10px;
height: 75vh;
    }
}

.article-big{
    grid-row: 1/3;
}

.article,
.article-big{
      position:relative;
    overflow: hidden;
    
&::after{
content: "";
pointer-events: none;
position: absolute;
inset: 0;
background: linear-gradient( /* bron: hvana.nl code */
180deg,
transparent 60%,
#0751D8 100%
);
}

    @media(min-width:1024px){ 
        @media(prefers-reduced-motion: no-preference){
transition: transform 0.3s ease-in-out;

&:hover{
transform: translateY(10px);
       }
         }
            }
        }

.article-img {
width: 100%;
height: 500px; 
object-fit: cover;
display: block;
@media (min-width:1024px){
    height: 100%;
}
}

h3{
position:absolute;
bottom: 40px;
left: 20px;
color:white;
font-weight: bolder;
z-index: 10;
}
</style>