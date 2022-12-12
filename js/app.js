let input = document.querySelector('input')

window.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        add();
    }
})

document.querySelector('button').addEventListener('click', add = () => {
    let letters = {}
    for (let i = 0; i < input.value.length; i++) {
        for (let b = 0; b <= Object.keys(letters).length; b++) {
            if (input.value[i] !== Object.keys(letters)[b]) {
                letters[input.value[i]] = 0
            }
        }
    }

    for (let b = 0; b <= Object.keys(letters).length; b++) {
        for (let i = 0; i < input.value.length; i++) {
            if (input.value[i] === Object.keys(letters)[b]) {
                letters[Object.keys(letters)[b]] = letters[Object.keys(letters)[b]] + 1
            }
        }
    }

    let keySort = Object.keys(letters).sort(function (a, b) { return letters[b] - letters[a] })

    let ul = document.querySelector('ul')
    let input_length = input.value.length
    for (let i = 0; i < keySort.length; i++) {
        let d = keySort[i]
        let interest = letters[d] / input_length * 100
        ul.insertAdjacentHTML('beforeend',
            `<li>"${d}": ${letters[d]} - ${interest.toFixed(3)} %</li>`
        )
    }
})