# Afspraken over samenwerking: Q42 Museumplatform
> In dit document staan de afspraken over hoe wij samenwerken aan het project HavanA. Door dezelfde werkwijze en codeconventies te gebruiken, houden we het project overzichtelijk en behouden we de consistentie.
 
## Teamafspraken & teamcanvas
 
- ### Team canvas
 https://www.figma.com/design/9FWic2H39qxzVw1M8mHraP/HavanA?node-id=0-1&t=LS3LHUzmzoLhh9B9-0
 
### Gedeelde doelen
- Het beter begrijpen van het framework SvelteKit.
- Kwalitatieve code leveren.
- Elkaar ondersteunen bij het behalen van persoonlijke leerdoelen.
- Efficiënt en gestructureerd werken.
 
### Teamafspraken
- Elke lesdag houden we een korte stand-up.
- Taken en voortgang houden we bij in het [projectboard](https://github.com/orgs/fdnd-agency/projects/114).
- Iedere taak heeft een toegewezen persoon.
- We starten taken aan de hand van issues.
- We verdelen het werk zo dat iedereen bijdraagt aan alle fases van de DLC.
- We vragen en geven actief feedback aan elkaar.
- We volgen de FDND-codeconventies.
- We reviewen elkaars werk voordat het wordt gemerged via een PR.
- Aan het einde van iedere week reflecteren we kort op onze samenwerking.
 
 
## Workflow

 
```bash
issue
-> branch
-> commits
-> pull request
-> review
-> feedback verwerken
-> mergen
-> done
```
 
### `Issues`
Voor iedere taak maken we een issue aan, bijvoorbeeld:
```
[Feature]
[Documentation]
[Task]
[Team]
```
Een issue bevat minimaal:
- Een korte uitleg van wat er moet gebeuren.
- Een korte uitleg van wat er toegevoegd is.
- Een hoofdverantwoordelijke door middel van toewijzing. 
- Welke keuzes onderweg zijn gemaakt.
- Wat het resultaat is.
 
### issue template
Om onze issues consistent en navolgbaar te houden gebruiken we bij ieder nieuw issue dezelfde basisstructuur.
 
```
# [Korte duidelijke titel]
 
## Doel
<!-- Wat wil je met dit issue bereiken? -->
 
 
## Context
<!-- Waarom is dit issue nodig? Wat is het probleem, knelpunt of de aanleiding? -->
 
 
## Acceptance criteria
<!-- Wanneer is dit issue klaar? -->
 
```
- Tijdens het werken gebruiken we de comments onder het issue om belangrijke keuzes, schetsen, feedback, blockers en iteraties vast te leggen. Zo blijft het issue zelf overzichtelijk, terwijl het proces wel navolgbaar blijft.
 
 
### `Branches`
Vanuit de main maken wij branches aan voor een korte taak. Wij pushen uiteindelijk alles naar de branch Dev.
- De naam beschrijft waar je aan werkt, bijvoorbeeld:
```
feature-person-card
fix-person-image
docs-contributing
```
Een branch hoort bij een duidelijk issue en blijft gericht op één taak of feature.
 
### `Commits`
We volgen de FDND-workflowconventies en gebruiken Conventional Commits. https://docs.fdnd.nl/conventies.html#commits
 
Structuur:
```
type: korte beschrijving #issuenummer
```
- `feat:` nieuwe functionaliteit
- `fix:` probleem oplossen
- `docs:` documentatie
- `refactor:` code verbeteren zonder de functionaliteit te veranderen
- `test:` tests toevoegen of aanpassen
- `style:` styling toevoegen of aanpassen
 
> Iedere relevante commit verwijst naar het bijbehorende issue.
 
### `Pull request & review`

1. Voor pull requests gebruiken we de onderstaande template:
 
```
## Wat verandert er?
 
Lost issue #27 op.
 
<!-- Een PR moet genoeg informatie bevatten zodat anderen begrijpen wat er is veranderd en waarom deze keuzes zijn gemaakt. Beschrijf bijvoorbeeld: wat was het probleem / waarom was deze wijziging nodig, hoe lost deze PR het probleem op en zijn er nog vragen of discussiepunten? -->
 
 
## Hoe is dit getest?
 
<!-- Link hier naar de testresultaten in de Wiki -->
 
### RAPPE-principes
 
- [ ] [User test]()
- [ ] [Accessibility test]()
- [ ] [Progressive Enhancement test]()
- [ ] [Performance test]()
- [ ] [Responsive Design test]()
- [ ] [Device test]()
- [ ] [Browser test]()
 
## Afbeeldingen
 
<!-- Vooral relevant bij visuele/UI-wijzigingen. Voeg indien mogelijk screenshots toe van de situatie vóór en na de wijziging. -->
 
## Hoe review je deze PR?
 
<!-- Geef de reviewer duidelijke stappen om de wijziging te controleren. -->
```
2. Minimaal één teamgenoot reviewt het werk.
3. Feedback wordt eerst verwerkt of onderbouwd voordat de PR wordt gemerged.
 
***
 
## Codeconventies
We volgen de [FDND-codeconventies](https://docs.fdnd.nl/conventies.html#code-conventies)
 
***
 
 
### Reflecteren op de samenwerking
Aan het einde van iedere week bespreken we kort:
- Wat ging goed?
- Wat liep minder goed?
- Hebben we de taken van de week af? Zo niet, waarom?
- Kunnen we elkaar nog ergens mee ondersteunen?
- Hebben we knelpunten op tijd besproken?
- Hoe verliep het geven en ontvangen van feedback?
- Wat willen we volgende week verbeteren?
- Zijn er nog vragen of onduidelijkheden die besproken moeten worden?
 
### Stand-ups & communicatie
Op iedere lesdag houden we een korte stand-up
 Iiedereen benoemt:
- Waar werk ik aan?
- Wat heb ik gedaan?
- Wat is mijn volgende stap?
- Loop ik ergens op vast?
- Heb ik hulp of feedback nodig?
 