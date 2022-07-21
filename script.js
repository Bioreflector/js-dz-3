// Make a div
const wrapper = document.createElement('div')
// add a class of wrapper to it
wrapper.classList.add('wrapper')
// put it into the body
const body = document.querySelector('body')
body.insertAdjacentElement('afterbegin', wrapper)