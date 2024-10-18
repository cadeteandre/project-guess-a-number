import './style.css'

const inputGuess = document.querySelector('#inputGuess') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const showResults = document.querySelector('#showResults') as HTMLElement;
const roundsContainer = document.querySelector('.rounds') as HTMLElement;
const roundOptions = document.querySelectorAll('.roundsAmount') as NodeListOf<HTMLInputElement>;
const randomNum: number = Math.floor(Math.random() * 100) +1;

const howManyRounds = (e: Event) => {
  const target = e.target as HTMLInputElement;
  let roundsAmount: number = 0;
  // ! still need to put the custom function
  // if(target.value === 'custom') {
  //   const inputCustom = document.createElement('input') as HTMLInputElement;
  //   inputCustom.setAttribute('type', 'text');
  //   roundsContainer.appendChild(inputCustom);
  // }
  
  roundsAmount = Number(target.value);

  let counter: number = 1;
  button.addEventListener('click', () => {
    const userGuess: number = Number(inputGuess.value);
    const result = document.createElement('p') as HTMLParagraphElement;

    if(userGuess === randomNum) {
      showResults.innerHTML = `<span class="victory">Congratulations!!</span> The number is ${randomNum}`
      roundsContainer.innerHTML = `${counter} / ${roundsAmount}`;
    } else if(counter < roundsAmount) {
        switch(true) {
          case (userGuess > 100):
              result.textContent =  `${counter} - You need to guess a number between 1 and 100`;
              roundsContainer.innerHTML = `${counter} / ${roundsAmount}`;
              showResults.appendChild(result);
            break;
          case (userGuess < randomNum):
            result.textContent = `${counter} - You need to guess higher than ${userGuess}. Try again...`;
            roundsContainer.innerHTML = `${counter} / ${roundsAmount}`;
            showResults.appendChild(result);
            break;
          case (userGuess > randomNum):
            result.textContent = `${counter} - You need to guess lower than ${userGuess}. Try again...`;
            roundsContainer.innerHTML = `${counter} / ${roundsAmount}`;
            showResults.appendChild(result);
            break;
        };
      } else {
        roundsContainer.innerHTML = `${counter} / ${roundsAmount}`;
        showResults.innerHTML = `
          <p>You are out of moves :/</p>
          <a class="yellowLink" href="index.html">Try again</a>
        `;
      }
    inputGuess.value = '';
    counter++;
    console.log(randomNum);
  });
};

for(let i: number = 0; i < roundOptions.length; i++) {
  roundOptions[i].addEventListener('click', howManyRounds);
};