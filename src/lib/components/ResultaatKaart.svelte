<script>
    let {responses = []} = $props();
</script>
<h2>Alle uitslagen</h2>

{#each responses as response (response.id)}
<section class="kaarten">
    <span>{response.score}</span>
    <p>{response.explanation ||"Geen toelichting gegeven"}</p>
    <time datetime="{response.submitted_at}">Vandaag {new Date(response.submitted_at).toLocaleString("nl-NL",{
        hour: "2-digit",
        minute: "2-digit",
})}</time>
</section>
{:else}
<p>Er zijn nog geen uitslagen</p>
{/each}

<section class="prompt">
    <h3>Nog geen cijfer gegeven vandaag?</h3>
    <p>Het kost je minder dan een minuut en je blijft anoniem.</p>

    <button  command="show-modal" commandfor="popup" class="prompt-button" >
        + HVA-METER INVULLEN
    </button>
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

        @media (min-width: 768px) {
            bottom: 25px;
            grid-template-columns: 1fr auto;

}
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
    align-self: center;
    border: none;
        &:hover {
            background: #063fa8;
}
         @media (min-width:768px){
            grid-column: 2;
            grid-row: 1 / 3;
}
}

</style>