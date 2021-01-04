//sort() only sort items alphabetically.
// also capital 'A' comes first not 'a'.

const notes = [{
    title: 'trip',
    body: 'spain'
}, {
    title: 'habbits',
    body: 'exercise'
}, {
    title: 'Office',
    body: 'noida'
}]

const sortNotes = function(notes) {
    notes.sort(function(a, b) { //condition of alphabet
        if (a.title.toLowerCase() < b.title.toLowerCase()) { //conver everything in lower case
            return -1 // if a < b then don't print
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1 // if b < a then print it
        } else {
            return 0
        }
    })
}

sortNotes(notes)
console.log(notes)