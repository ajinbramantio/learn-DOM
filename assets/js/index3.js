let datasTodos = [
  { id: 1, name: 'test' },
  { id: 2, name: 'coba' },
  { id: 3, name: 'fix data' }
]
const listUL = document.getElementById('ULDom')
// console.log(datasTodos.length)
let newId = datasTodos.length > 0 ? datasTodos[0].id : 0

const Todos = {
  displayTodos: () => {
    let ID = newId
    console.log(ID)

    listUL.innerHTML = ''
    if (datasTodos.length > 0) {
      datasTodos.forEach(dataTodo => {
        const liDom = document.createElement('li')
        liDom.setAttribute('id', dataTodo.id)
        let submitRemove = document.createElement('INPUT')
        submitRemove.setAttribute('id', dataTodo.id)
        submitRemove.setAttribute('type', 'submit')
        submitRemove.setAttribute('value', 'X')
        submitRemove.setAttribute('onclick', 'Todos.removeTodo(' + ID++ + ')')
        const textDom = document.createTextNode(dataTodo.name)
        liDom.appendChild(textDom)
        liDom.appendChild(submitRemove)
        listUL.appendChild(liDom)
      })
      //   console.log(listUL)
    } else {
      console.log('none')
    }
  },

  submitAdd: function(event) {
    // console.log(event)
    event.preventDefault()
    let textTodo = document.getElementById('input-text').value
    // console.log(textTodos, datasTodos[0].name)

    if (textTodo !== '') {
      let result = datasTodos.filter(dataTodo => {
        return dataTodo.name !== textTodo
      })
      if (result.length === datasTodos.length) {
        let newId = datasTodos.length + 1
        let newTodo = {
          id: newId,
          name: textTodo
        }
        datasTodos.push(newTodo)
        Todos.displayTodos()
      } else {
        alert('Data Sudah ada bro')
      }
      document.getElementById('input-text').value = ''
    }
  },

  removeTodo: ID => {
    event.preventDefault()
    if (confirm('are you sure remove is it ?')) {
      //   let test = datasTodos[0].id
      let removeData = datasTodos.filter(dataTodo => {
        console.log(dataTodo.id, ID)
        return dataTodo.id !== ID
      })
      datasTodos = removeData

      Todos.displayTodos()
    } else {
      console.log('cancel')
    }
  }
}

Todos.displayTodos()
