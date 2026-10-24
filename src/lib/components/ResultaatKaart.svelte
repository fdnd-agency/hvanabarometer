<h2>Alle uitslagen</h2>

<section class="kaarten">
    <span>8</span>
    <p>Leuke gastspreker op school gekomen</p>
    <time>vandaag 10:30</time>
</section>

<section class="prompt">
    <h3>Nog geen cijfer gegeven vandaag?</h3>
    <p>Het kost je minder dan een minuut en je blijft anoniem.</p>

    <a class="prompt-button" href="/popupsomethingidk">
        + HVA-METER INVULLEN
    </a>
</section>

<style>

h2{
    width: 80%;
    margin-inline: auto;
    margin-bottom: 25px;
}
.kaarten {
    display: grid;
    grid-template-columns: 80px 1fr;
    grid-template-rows: auto auto;
    column-gap: 20px;
    padding-bottom: 18px;
    border-bottom: 1px solid #e5eaf5;
    width: 80%;
    margin-inline: auto;
}

.kaarten span {
    grid-column: 1;
    grid-row: 1 / 3;
    display: grid;
    place-items: center;
    width: 80px;
    aspect-ratio: 1; /*dan blijft het blokje altijd vierkant ondanks de inhoud*/
    background-color: #0751d8;
    color: white;
    font-weight: bolder;
}

.kaarten p {
    grid-column: 2;
    grid-row: 1;
    margin: 0;
    font-size: 18px;
}

.kaarten time {
    grid-column: 2;
    grid-row: 2;
    margin: 0;
    color: #687ba5;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
}

/* APARTE COMPONENT MAKEN DIT IS DE ONDERKANTSTUK */
.prompt {
    position: fixed;
    bottom: 10px;
    left:0;
    right:0;
    margin-inline: auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
    width: 80%;
    padding: 20px;
    background: white;
    border: 1px solid #0751d8;
}

.prompt h3,
.prompt p {
    grid-column: 1;
}

.prompt p {
    margin-top: 5px;
    color: #52617d;
    font-size: 16px;
}

    .prompt-button {
    grid-column: 1;
    grid-row: auto;
    padding: 11px 16px;
    background: #0751d8;
    color: white;
    font-size: 16px;
    text-decoration: none;
    align-self: center;
}

</style>