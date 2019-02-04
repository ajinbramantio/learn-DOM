const dataTodos = ['bebas coy', 'masa lalu', 'move on']
const listUL = document.getElementById('ul') //get ul  ( <ul></ul> )
const todos = {
  displayTodos: function() {
    listUL.innerHTML = ''
    dataTodos.forEach(dataTodo => {
      const liDom = document.createElement('li')
      var removeButton = document.createElement('INPUT')
      removeButton.setAttribute('type', 'submit')
      removeButton.setAttribute('value', dataTodo)
      removeButton.setAttribute('id', 'name')
      removeButton.setAttribute('onclick', 'todos.removeTodos(event)')
      const textDOM = document.createTextNode(dataTodo)
      liDom.appendChild(textDOM)
      liDom.appendChild(removeButton)
      listUL.appendChild(liDom)
      // console.log(textDOM)
    })
  },

  submit: function(event) {
    // console.log(event)
    event.preventDefault()
    const textTodos = document.getElementById('input-text').value

    if (textTodos !== '') {
      let result = dataTodos.filter(dataTodo => {
        return dataTodo !== textTodos
      })
      // console.log(dataTodos.length, result.length)

      if (result.length === dataTodos.length) {
        dataTodos.push(textTodos)
        todos.displayTodos()
      } else {
        alert('data sudah ada')
      }

      document.getElementById('input-text').value = ''
    }
  },

  removeTodos: function(event) {
    let removeBro = document.getElementById('name').value
    console.log(removeBro)

    if (confirm('are you sure remove is it ?')) {
      console.log(dataTodos)
    } else {
      console.log('cancel')
    }
  }
}
todos.displayTodos()

// console.log(listUL)
