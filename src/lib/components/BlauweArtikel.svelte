<section class="artikel-wrapper">
    <article class="artikel-groot">
        <a href="#WONTDO">
            <img
                class="artikel-img"
                src="/assets/deco-img.jpg"
                alt="student achter een laptop"
            />
            <h2>Steeds meer van mijn studie gebeurt achter een scherm.</h2>
        </a>
    </article>
        <article class="artikel">
        <a href="#WONTDO">
            <img
                class="artikel-img"
                src="/assets/deco-img.jpg"
                alt="student achter een laptop"
            />
            <h2>Steeds meer van mijn studie gebeurt achter een scherm.</h2>
        </a>
    </article>    
    
    <article class="artikel">
        <a href="#WONTDO">
            <img
                class="artikel-img"
                src="/assets/deco-img.jpg"
                alt="student achter een laptop"
            />
            <h2>Steeds meer van mijn studie gebeurt achter een scherm.</h2>
        </a>
    </article>
</section>


<style>
.artikel-wrapper{
    display:flex;
    flex-direction: column;
    gap:20px;
    
    @media (min-width:1024px){
      display: grid;
grid-template-columns: 3fr 2fr;
gap: 10px 15px;
height: 100vh;
    }
}

.artikel-groot{
    grid-row: 1/3;
}

.artikel,
.artikel-groot{
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
transition: transform 0.3s ease-in-out;

&:hover{
transform: translateY(10px);
}}}

.artikel-img {
width: 100%;
height: 500px; 
object-fit: cover;
display: block;
@media (min-width:1024px){
    height: 100%;
}
}

h2{
position:absolute;
bottom: 40px;
left: 20px;
color:white;
font-weight: bolder;
font-size: 30px;
z-index: 10;
line-height: 1.5;
}
</style>