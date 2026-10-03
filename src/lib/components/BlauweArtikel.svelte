<section>
    <article class="deco-wrapper">
        <a href="#WONTDO">
            <img
                class="artikel-img"
                src="/assets/deco-img.jpg"
                alt="decoratie-img"
            />
            <q>Steeds meer van mijn studie gebeurt achter een scherm.</q>
        </a>
    </article>
</section>


<style>

.deco-wrapper{
position:relative;
transition: transform 0.3s ease-in-out;

&:hover{
transform: translateY(20px);
}
&::after{
content: "";
position: absolute;
inset: 0;
background: linear-gradient( /* bron: hvana.nl code */
180deg,
transparent 60%,
#0751D8 100%
);
cursor:pointer;
}
}

.artikel-img {
width: 100%;
height: 500px;
object-fit: cover;
display: block;
}

q{
position:absolute;
bottom: 80px;
left: 20px;
color:white;
font-weight: bolder;
font-size: 30px;
z-index: 10;
}
</style>