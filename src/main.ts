import './style.css'

const inputGuess = document.querySelector('#inputGuess') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const showResults = document.querySelector('#showResults') as HTMLElement;
const roundsContainer = document.querySelector('.rounds') as HTMLElement;
const roundOptions = document.querySelectorAll('.roundsAmount') as NodeListOf<HTMLInputElement>;
const randomNum: number = Math.floor(Math.random() * 100) +1;

let roundsAmount: number = 0;
let counter: number = 1;

roundOptions[3]. addEventListener('click', () => {
  const inputCustom = document.createElement('input') as HTMLInputElement;
  inputCustom.setAttribute('type', 'number');
  inputCustom.classList.add('customRounds');
  roundsContainer.appendChild(inputCustom);

  const customRounds = document.querySelector('.customRounds') as HTMLInputElement;
  customRounds.addEventListener('input', () => {
  roundOptions[3].value = customRounds.value;
  });
});

const guessANumber = () => {
  const userGuess: number = Number(inputGuess.value);
  const result = document.createElement('p') as HTMLParagraphElement;
  console.log(roundOptions[3].value);

  // * How many rounds ?
  switch(true) {
    case (roundOptions[0].checked):
      roundsAmount = Number(roundOptions[0].value);
      break;
    case (roundOptions[1].checked):
      roundsAmount = Number(roundOptions[1].value);
      break;
    case (roundOptions[2].checked):
      roundsAmount = Number(roundOptions[2].value);
      break;
    case (roundOptions[3].checked):
      roundsAmount = Number(roundOptions[3].value);
      break;
  }

  if(userGuess === randomNum) {
    showResults.innerHTML = `<span class="victory">Congratulations!!</span> The number is ${randomNum}`
    roundsContainer.innerHTML = `${counter} / ${roundsAmount}`;
    return; 
  };

  if(counter === roundsAmount) {
    roundsContainer.innerHTML = `${counter} / ${roundsAmount}`;
    showResults.innerHTML = `
      <p>You are out of moves :/</p>
      <p>The number was ${randomNum}</p>
      <a class="yellowLink" href="index.html">Try again</a>
    `;
    return;
  };

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

  inputGuess.value = '';
  counter++;
};
button.addEventListener('click', guessANumber);