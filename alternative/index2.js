const dataTodos = ['coba', 'test', 'try'] // data yg ada di dlm dataTodos
const taskListDom = document.getElementById('ul') // get ul
// console.log(taskListDom)

function display() {
  taskListDom.innerHTML = '' // make ul default
  dataTodos.forEach(dataTodo => {
    // looping dataTodos
    const liDom = document.createElement('li') // create li sabe in (lidom)
    const textDom = document.createTextNode(dataTodo) // create dataTodo per string
    liDom.appendChild(textDom) // menambahkan textDom ke dalam lidom
    taskListDom.appendChild(liDom) // menambahkan liDom ke dlm taskListDom
  })
  //   console.log(taskListDom)
}

function myFunction(event) {
  event.preventDefault()
  const textTodos = document.getElementById('input-text').value

  if (textTodos !== '') {
    dataTodos.push(textTodos)
    display()
    document.getElementById('input-text').value = ''
    console.log(dataTodos)
  }
}
display()
