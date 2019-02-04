let todosData = [
  { id: 1, name: 'Do something' },
  { id: 2, name: 'Run something' },
  { id: 3, name: 'Fix something' }
]

const listUL = document.getElementById('ULDom')

let newId = todosData.length > 0 ? todosData[todosData.length - 1].id + 1 : 1

const Todos = {
  displayTodos: () => {
    listUL.innerHTML = ''

    if (todosData.length > 0) {
      todosData.forEach(dataTodo => {
        const liDom = document.createElement('li')
        liDom.setAttribute('data-id', dataTodo.id)

        const removeButton = document.createElement('INPUT')

        removeButton.setAttribute('type', 'button')
        removeButton.setAttribute('value', 'X')
        removeButton.setAttribute('onclick', `Todos.removeTodo(${dataTodo.id})`)

        const textDom = document.createTextNode(dataTodo.name)
        liDom.appendChild(textDom)
        liDom.appendChild(removeButton)
        listUL.appendChild(liDom)
      })
    } else {
      console.log('none')
    }
  },

  submitAdd: function(event) {
    event.preventDefault()

    let textTodo = document.getElementById('input-text').value
    // console.log(textTodos, todosData[0].name)

    if (textTodo !== '') {
      const result = todosData.filter(dataTodo => {
        return dataTodo.name !== textTodo
      })

      if (result.length === todosData.length) {
        const newId = todosData.length + 1
        const newTodo = {
          id: newId,
          name: textTodo
        }
        todosData.push(newTodo)
        Todos.displayTodos()
      } else {
        alert('Data sudah ada bro')
      }

      document.getElementById('input-text').value = ''
    }
  },

  removeTodo: ID => {
    event.preventDefault()

    if (confirm('Are you sure you want to remove this?')) {
      // const test = todosData[0].id
      const removeData = todosData.filter(dataTodo => {
        // console.log(dataTodo.id, ID)
        return dataTodo.id !== ID
      })

      todosData = removeData

      Todos.displayTodos()
    } else {
      console.log('Cancelled')
    }
  }
}

Todos.displayTodos()
