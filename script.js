const plus = document.querySelector('.plus');
const todoEl = document.getElementById('todos');
const error = document.querySelector('.error');
const input = document.querySelector('#input')
const form = document.querySelector('#form');

const todos = JSON.parse(localStorage.getItem('todos'))

todos.forEach(todo => {

    const li = document.createElement('li');
    li.innerText = todo.text
    todoEl.append(li);
    const div = document.createElement('div');
    div.classList.add('remove');
    const i = document.createElement('i');
    i.className = 'fa-solid fa-square-check';
    li.append(div)
    div.append(i)

})

completeTodo()

plus.addEventListener('click', () => {
    addNewTodo();
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addNewTodo();


})

function removeError() {
    error.style.display = "none";
}

function addNewTodo(todo) {
    let newTodo = input.value;
    if (todo) {
        newTodo = todo.text
        console.log(newTodo)
    }
    if (newTodo) {
        const li = document.createElement('li');
        li.innerText = newTodo
        todoEl.append(li)
        const div = document.createElement('div')
        div.classList.add('remove')
        const i = document.createElement('i')
        i.className = 'fa-solid fa-square-check'
        li.append(div)
        div.append(i)
        removeError()
        input.value = ''
        updateLS()
    }

    else {
        error.style.display = "block";
    }


    completeTodo()

}

function completeTodo() {

    const todosLi = document.querySelectorAll('.todos li');

    todosLi.forEach(li => {
        const remove = li.querySelector('.remove')
        remove.addEventListener('click', () => {
            if (!li.classList.contains('completed')) {
                remove.style.display = 'none';
                li.classList.add('completed')
                updateLS()

            }

        })
    })
}

function updateLS() {

    const todosEl = document.querySelectorAll('.todos li')
    const todos = [];

    todosEl.forEach(todoEl => {

        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    todos.forEach(todo => {
        if (todo.completed === true) {
            todos.pop(todo);
        }
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}










