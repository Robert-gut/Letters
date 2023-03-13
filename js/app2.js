// 1 input
let input = document.querySelector('input')
let btn = document.querySelector('button')

// btn 'Enter'
window.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        addLetters();
    }
})


btn.addEventListener('click', addLetters = () => {
    // 1 обєкт
    let letters = {}
    // 2 цикл який створює ключи і підравує
    for (let i = 0; i < input.value.length; i++) {
        const letter = input.value[i];
        if (letters[letter]) {
            letters[letter]++;
        } else {
            letters[letter] = 1;
        }
      }

    //3 наш обєкт сортує від більшого до меншого і отримаємо масив ключів
    let keySort = Object.keys(letters).sort(function (a, b) { return letters[b] - letters[a] })

    
    // 4 створюємо змінні з списком і довжиною інпута
    let ul = document.querySelector('ul')
    let input_length = input.value.length

    // 5 вираховуємо в % і створюмо елемент в дом дереві
    for (let i = 0; i < keySort.length; i++) {
        // символ з масива відсортованих ключів 
        let d = keySort[i]
        // формула підрахунку % ,(число) / (общая_сумма) * 100%.
        let interest = letters[d] / input_length * 100
        // створюмо li з нашими даними і записуємо в дом дерево
        ul.insertAdjacentHTML('beforeend',
            `<li>"${d}": ${letters[d]} - ${interest.toFixed(3)} %</li>`
        )
    }
})