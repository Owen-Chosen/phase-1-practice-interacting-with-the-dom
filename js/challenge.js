let counter = 0;
let likesCount = 0;
const likePair = {}
let paused = false;

let id = setInterval (incrementCounter, 1000)

function incrementCounter () {
    const counterElement = document.querySelector ('#counter')
    counterElement.innerHTML = ++counter
}

function decrementCounter () {
    const counterElement = document.querySelector ('#counter')
    counterElement.innerHTML = --counter
}

document.addEventListener ('click', (e) => {
    let likesCount = 0;
    if (e.target.id === 'minus') decrementCounter()
    else if (e.target.id === 'plus') incrementCounter()
    else if (e.target.id === 'heart') {
        ++likesCount
        if (likePair.hasOwnProperty (counter)) ++likesCount 
        let li = document.createElement ('li')
        if (likesCount > 1) {    
            li.innerHTML = `${counter} has been liked ${likesCount} time`
        } else {
            li.innerHTML = `${counter} has been liked ${likesCount} time`
        }
        document.querySelector ('.likes').appendChild (li)
        likePair[counter] = likesCount
    }
    else if (e.target.id === 'pause') {
        if (paused === true) {
            paused = false
            id = setInterval (incrementCounter, 1000)
        }
        else {
            paused = true
            clearInterval (id)
        }
    }
})

const form = document.querySelector ('#comment-form')
const list = document.querySelector ('#list')

form.addEventListener ('submit', (event) => {
    event.preventDefault()
    ul = document.createElement ('ul')
    li = document.createElement ('li')
    li.textContent  = form.querySelector ('#comment-input').value
    ul.appendChild (li)
    list.appendChild (ul)
    form.reset()
})