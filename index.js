const card = document.getElementById('game-div')

let arrCards = [];


const cardIcons = ['🍋', '🍌', '🍎', '🍍', '🥥', '🍑', '🍐', '🍇', '🍋', '🍌', '🍎', '🍍', '🥥', '🍑', '🍐', '🍇'];

function shuffle(array) {
      let currentIndex = array.length;
      while (currentIndex != 0) {
            let randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            [array[currentIndex], array[randomIndex]] = [
                  array[randomIndex], array[currentIndex]];
      }
}

const divArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
shuffle(cardIcons)


divArr.map((el, index) => {
      const div = document.createElement('div');
      div.innerText = '?'
      div.classList.add('stylesDiv')
      card.appendChild(div)
      div.addEventListener('click', function handleClick() {
            div.classList.add('bg-div')
            div.innerText = cardIcons[index];
            arrCards.push(div)
            if (arrCards.length % 2 !== 0) {
                  return
            }
            const [card1, card2] = arrCards.slice(-2)
            if (card2.textContent !== card1.textContent) {
                  arrCards = arrCards.slice(0, arrCards.length - 2);
                  card1.classList.add('red-bg');
                  card2.classList.add('red-bg');
                  setTimeout(() => {
                        card1.classList.remove('bg-div')
                        card1.classList.remove('red-bg')
                        card2.classList.remove('bg-div')
                        card2.classList.remove('red-bg')
                        card1.innerText = '?';
                        card2.innerText = '?';
                  }, 500)

            } else {
                  card1.classList.add('green-bg')
                  card2.classList.add('green-bg');
                  setTimeout(() => {
                        card1.classList.remove('green-bg')
                        card2.classList.remove('green-bg')
                        card1.innerText = '';
                        card2.innerText = '';
                        console.log(card2, '2')
                        card2.removeEventListener('click', handleClick);
                        card1.removeEventListener('click', handleClick);
                        console.log(card1, '1');
                  }, 500)
                  card1.classList.add('blue-bg')
                  card2.classList.add('blue-bg')
            }
      })
})



