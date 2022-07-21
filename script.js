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
console.log(createList(listText))
// put that list into the above wrapper
function addToWrapper(itemAdd) {
    wrapper.insertAdjacentElement('beforeend', itemAdd)
}
addToWrapper(createList(listText))
// create an image
const img = document.createElement('img')
// set the source to an image
img.src = 'https://picsum.photos/200'

