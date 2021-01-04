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

// const deleteTodo = function(todos, todoText) {
//     const index = todos.findIndex(function(todo) {
//         return todo.text.toLowerCase() === todoText.toLowerCase()
//     })

//     if (index > -1) {
//         todos.splice(index, 1)
//     }
// }

// const getThingsToDo = function(todos) {
//     return todos.filter(function(todo) {
//         return !todo.completed
//     })
// }

// console.log(getThingsToDo(todos))

// deleteTodo(todos, '!!buy food')
// console.log(todos)

//sorting

// for false first
const sortNotes = function(todos) {
    todos.sort(function(a, b) {
        if (!a.completed && b.completed) { //!a.completed means false i.e. not completed
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

sortNotes(todos)
console.log(todos)

//for true first
// const sortNotes = function(todos) {
//     todos.sort(function(a, b) {
//         if (!a.completed && b.completed) { //!a.completed means false i.e. not completed
//             return 1
//         } else if (!b.completed && a.completed) {
//             return -1
//         } else {
//             return 0
//         }
//     })
// }

// sortNotes(todos)
// console.log(todos)