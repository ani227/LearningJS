//search something and delete

// const para = document.querySelectorAll('p')

// para.forEach(function(text) {
//     if (text.textContent.includes('the')) {
//         text.remove()
//     }
// })

// para.forEach(function(text) {
//     if (text.textContent.includes('The')) {
//         text.remove()
//     }
// })


// todos left

const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]

const incompleteTodos = todos.filter(function(todo) {
    return !todo.completed
})

const summary = document.createElement('p')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function(todo) { // list all todos on browser
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})


//listen for new todo creation

document.querySelector('#add-todo').addEventListener('dblclick', function() { //active on double click
    console.log('Yes it worked!')
})

document.querySelector('#del-todo').addEventListener('click', function() {
    document.querySelectorAll('.del-para').forEach(function(todos) {
        todos.remove()
    })
})

//add new todo

document.querySelector('#new-todo').addEventListener('input', function(e) {
    console.log(e.target.value)
})