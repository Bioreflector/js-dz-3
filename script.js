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
