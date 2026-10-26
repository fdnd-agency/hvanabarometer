<header class="hva-meter">
  <p>
    
    <span class="headertext">
      <strong>HvA-Meter</strong>
      <data class="score" value="7.2">7.2</data>
      <a class="voting" href="/barometer">
        312 stemmen
      </a>
      <span class="today">vandaag</span>
    </span>  
  </p>
  <p class="question">Welk cijfer geef jij je dag?</p>
  <button class="vote" command="show-modal" commandfor="popup">Stem ➔</button>
</header>

<style>
  .hva-meter {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    height: 3.5rem;
    padding: 0 1rem;
    background: #1450d2;
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    justify-content: space-between;

    p{
      margin: 0;
    }

    a {
      color: white;
    }
    .headertext {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    strong {
      font-size: 1.25rem;
    }

    .view,
    .today,
    .question {
      display: none;
    }
    .vote {
      padding: 0.15rem 0.4rem;
      border: none;
      border-radius: 50px;
      background-color: rgb(255, 255, 255);
      color:#1450d2;
      font-weight: 800;
      text-transform: uppercase;
      cursor: pointer;
      transition: transform .2s ease;
      
      &:hover{
        transform:scale(1.1)
      }

      &:focus-visible{
        outline: 2px solid white;
        outline-offset: 3px;
      }
    }

    .score {
      font-size: 1.6rem;
      font-weight: 900;
    }

    .voting {
      padding: 0.25rem 0.6rem;
      border: 1.5px solid rgba(255, 255, 255, 0.8);
      border-radius: 50rem;
      color: white;
      white-space: nowrap;
      text-decoration: none;
      transition: background-color 0.2s ease;

        &:hover {
          background-color: rgba(138, 222, 255, 0.15);
        }
 
        &:focus-visible {
          outline: 2px solid #fff;
          outline-offset: 3px;
        }
    }

    @media (min-width: 48rem) {
      .hva-meter {
        gap: 1rem;
        padding: 0 2rem;
      }
      strong {
        font-size: 1.375rem;
      }

      .score {
        font-size: 1.875rem;
      }

      .voting {
        padding-left: 1rem;
        font-size: 1.0625rem;
      }

      .today {
        display: inline;
      }

      .vote {
        font-size: 1.125rem;
      }
    }

    @media (min-width: 64rem) {
      .hva-meter {
        gap: 1.25rem;
        height: 4rem;
      }

      .score {
        font-size: 1.85rem;
      }

      strong {
        font-size: 1.375rem;
      }
      
      .question {
        display: inline;
        margin-left: auto;
        font-size: 1.125rem;
      }

      .vote {
        margin-left: 1.75rem;
      }
    }
  }
</style>
