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
    // console.log(input.value.length)
    // 1 обєкт
    let letters = {}
    // 2 присвоїм в обєкт всі символи
        // а) проходимось по черзі через кожний символ
    for (let i = 0; i < input.value.length; i++) {
        // б) перевіряємо чи в нас немає такого ключа і якщо немажє створюємо і присвоюємо 0
        for (let b = 0; b <= Object.keys(letters).length; b++) {
            if (input.value[i] !== Object.keys(letters)[b]) {
                letters[input.value[i]] = 0
            }
        }
    }
    
    // 3 цикл для підрунку кожного символа
    // а) проходимося по всім ключам обєкта letters 
    for (let b = 0; b <= Object.keys(letters).length; b++) {
        // б) проходимося по всьому тексту і при зустрічі з знайомим символом робимо +1 в
        for (let i = 0; i < input.value.length; i++) {
            if (input.value[i] === Object.keys(letters)[b]) {
                letters[Object.keys(letters)[b]] += 1
            }
        }
    }

    //4 наш обєкт сортує від більшого до меншого і отримаємо масив ключів
    let keySort = Object.keys(letters).sort(function (a, b) { return letters[b] - letters[a] })

    
    // 5 створюємо змінні з списком і довжиною інпута
    let ul = document.querySelector('ul')
    let input_length = input.value.length

    // 6 вираховуємо в % і створюмо елемент в дом дереві
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