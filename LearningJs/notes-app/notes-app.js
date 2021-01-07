//DOM - Doc Object Model

//Query and remove - 1

// const p = document.querySelector('p')
//     // p.remove()
// p.textContent = 'Hello im JS'


//query all and remove - 2

// const ps = document.querySelectorAll('p')
// ps.forEach(function(p) {
//     // console.log(p.textContent) // to read the content
//     // p.remove() // to remove
//     p.textContent = 'content changed using JS' //to change the content
// })

// add new element under body tag at last - 3

// const newHead = document.createElement('p')
// newHead.textContent = 'This is new Head from JS'
// document.querySelector('body').appendChild(newHead)

// - 4

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

//changing content of item by id btn-notes

const newHead = document.createElement('p')
document.querySelector('#btn-notes').addEventListener('click', function(e) {
    // console.log('Did this work?')  //print on console
    e.target.textContent = 'Notes Created'
    newHead.textContent = 'This is new Notes'
    document.querySelector('body').appendChild(newHead)
})

//to remove content after button click

document.querySelector('#btn-delete').addEventListener('click', function() {
    document.querySelectorAll('.note').forEach(function(note) {
        note.remove()
    })
})