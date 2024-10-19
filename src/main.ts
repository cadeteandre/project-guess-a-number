import './style.css'

const inputGuess = document.querySelector('#inputGuess') as HTMLInputElement;
const button = document.querySelector('button') as HTMLButtonElement;
const showResults = document.querySelector('#showResults') as HTMLElement;
const roundsContainer = document.querySelector('.rounds') as HTMLElement;
const roundOptions = document.querySelectorAll('.roundsAmount') as NodeListOf<HTMLInputElement>;
// const rounds4 = document.querySelector('#rounds4') as HTMLInputElement;
// const rounds5 = document.querySelector('#rounds5') as HTMLInputElement;
// const rounds6 = document.querySelector('#rounds6') as HTMLInputElement;
const randomNum: number = Math.floor(Math.random() * 100) +1;

let roundsAmount: number = 0;
let counter: number = 1;

roundOptions[3].addEventListener('click', () => {
  const inputCustom = document.createElement('input') as HTMLInputElement;
  inputCustom.setAttribute('type', 'number');
  inputCustom.classList.add('customRounds');
  roundsContainer.appendChild(inputCustom);
  const customRounds = document.querySelector('.customRounds') as HTMLInputElement;
  customRounds.addEventListener('input', () => {
    roundOptions[3].value = customRounds.value;
  });
});

// button.addEventListener('click', () => {
//   switch(true) {
//     case (roundOptions[0].checked):
//       roundsAmount = roundsValue(roundOptions[0]);
//       break;
//     case (roundOptions[1].checked):
//       roundsAmount = roundsValue(roundOptions[1]);
//       break;
//     case (roundOptions[2].checked):
//       roundsAmount = roundsValue(roundOptions[2]);
//       break;
//     case (roundOptions[3].checked):
//       const customRounds = document.querySelector('.customRounds') as HTMLInputElement;
//       roundsAmount = Number(customRounds.value);
//       break;
//   }
//   console.log(roundsAmount);
// });

// const howManyRounds = (e: Event) => {
  // const target = e.target as HTMLInputElement;
  // // ! still need to put the custom function
  // if(target.value === 'custom') {
    // const inputCustom = document.createElement('input') as HTMLInputElement;
    // inputCustom.setAttribute('type', 'number');
    // inputCustom.classList.add('customRounds');
    // roundsContainer.appendChild(inputCustom);
  // }
  // const customRounds = document.querySelector('.customRounds') as HTMLInputElement;
  // const customValue = (elt: HTMLInputElement) => Number(elt.value);

  // roundsAmount =  Number(target.value);

  // let counter: number = 1;

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
    // * user guess check and show results
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
          <p>The number was ${randomNum}</p>
          <a class="yellowLink" href="index.html">Try again</a>
        `;
      }
    inputGuess.value = '';
    counter++;
  };
  button.addEventListener('click', guessANumber);

  // button.addEventListener('click', guessANumber);
// };

// for(let i: number = 0; i < roundOptions.length; i++) {
//   roundOptions[i].addEventListener('click', howManyRounds);
// };