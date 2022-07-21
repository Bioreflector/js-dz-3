// Make a div
const wrapper = document.createElement('div')
// add a class of wrapper to it
wrapper.classList.add('wrapper')
// put it into the body
const body = document.querySelector('body')
body.insertAdjacentElement('afterbegin', wrapper)
// make an unordered list
// add three list items with the words "one, two, three" in them
const listText = ['one', 'two', 'trhee']
function createListItem(text) {
    const listItem = document.createElement('li')
    listItem.classList.add('list-item')
    listItem.innerText = text
    return listItem
}
function createList(listText) {
    const list = document.createElement('ul')
    list.classList.add('list')
    const listItemArr = listText.map(createListItem)
    listItemArr.forEach((li) => {
        list.insertAdjacentElement('beforeend', li)
    });
    return list
}
// put that list into the above wrapper
function addToWrapper(itemAdd) {
    wrapper.insertAdjacentElement('beforeend', itemAdd)
}
addToWrapper(createList(listText))
// create an image
const img = document.createElement('img')
// set the source to an image
img.src = 'https://picsum.photos/200'
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper
img.style = 'width: 200px'
img.classList.add('cute')
img.alt = 'Cute Puppy'
wrapper.insertAdjacentElement('beforebegin' , img)
// with HTML string, make a div, with two paragraphs inside of it
const strElementHtml = "<div><p></p><p></p></div>"
const range = document.createRange()
const fragment = range.createContextualFragment(strElementHtml)
const element = fragment.firstElementChild
// put this div before the unordered list from above
wrapper.insertAdjacentElement('afterbegin', element)
// add a class to the second paragraph called warning
// remove the first paragraph
element.lastChild.classList.add('warning')
element.firstChild.remove()
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
    const cardBox = document.createElement('div')
    cardBox.classList.add('playerCard')
    const cardTitle = document.createElement('h3')
    cardTitle.innerText = `${name} --- ${age}`
    const cardText = document.createElement('p')
    const cardBtn = document.createElement('button')
    cardBtn.classList.add('cardBtn')
    cardBtn.innerText = 'remove'
    cardText.innerText = `They are ${height} and ${age} years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!`
    cardBox.insertAdjacentElement('beforeend', cardTitle)
    cardBox.insertAdjacentElement('beforeend', cardText)
    cardBox.insertAdjacentElement('beforeend', cardBtn)
    return cardBox
}
// make a new div with a class of cards
const card = document.createElement('div')
card.classList.add('card')
// make 4 player cards using generatePlayerCard
card.insertAdjacentElement('beforeend', generatePlayerCard('Jeck', '1', '5'))
card.insertAdjacentElement('beforeend', generatePlayerCard('Jeck', '2', '6'))
card.insertAdjacentElement('beforeend', generatePlayerCard('Jeck', '3', '8'))
card.insertAdjacentElement('beforeend', generatePlayerCard('Jeck', '4', '8'))
// put the div into the DOM just before the wrapper element
wrapper.insertAdjacentElement('beforebegin', card)
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const cardBtn = document.querySelectorAll('.cardBtn')
function removePlayerCard(e){
    const element = e.target
    element.closest('.playerCard').remove()
}
cardBtn.forEach((btn) => {
    btn.addEventListener('click', removePlayerCard)
})
// Метод Element.closest() возвращает ближайший родительский элемент (или сам элемент), который соответствует заданному CSS-селектору или null, если таковых элементов вообще нет.