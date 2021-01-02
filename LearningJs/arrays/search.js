//searching part 1

// console.log(notes.indexOf('note4 new')) // -1 value means it does not exit, if exit it returns index value
// notes.indexOf('note 4')

//findIndex is better option to search in object insted of indexOf becoz indexOf always use === for objects to find

const notes = [{}, {
    title: 'trip',
    body: 'spain'
}, {
    title: 'habbits',
    body: 'exercise'
}, {
    title: 'Office',
    body: 'noida'
}]

// console.log(notes.length)
// console.log(notes)

// const index = notes.findIndex(function(note, index) {
//     return note.title === 'habbits'
// })
// console.log(index)

//searching part 2
const findNote = function(notes, noteTitle) {
    const index = notes.findIndex(function(note, index) {
        return note.title === noteTitle //converting everything in lower case for case insensitive search
    })
    return notes[index]
}

const note = findNote(notes, 'Office')
console.log(note)