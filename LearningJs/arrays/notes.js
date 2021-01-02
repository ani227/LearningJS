const notes = ['Note 1', 'Note 2', 'Note 3']

console.log(notes)

//for end of array
notes.pop() //remove last item of array
notes.push('note 4') //add item at last
notes.push('note 3')
console.log(`removing last item i.e. ${notes.pop()}`) //removing and printing last item
console.log(notes.length)
console.log(notes[0]) //to get item at index 0
console.log(notes[notes.length - 1]) //to get last item
console.log(`I have complete ${notes[0]}`) //to print item at 1st place along with msg

//for start of array 
console.log(notes)
console.log(notes.shift()) //removing and printing 1st item
notes.unshift('note 1') //to add item at start of array 

//for middle of array
console.log(notes)
notes.splice(1, 1) //start at index 1 and remove 1 item
console.log(notes)
notes.splice(1, 0, 'note 2 new') //start at index 1, del 0 item and add note 2 new as item at index 1

//combine above 2 codes to replace item or do -
notes[2] = 'note4 new' //replace item at index 2 with new item
console.log(notes)

//looping
notes.forEach(function() { //this function will be called no. of time equal to no. of nodes
    console.log('testing')
})

notes.forEach(function(items) { //to print items one by one
    console.log(items)
})

notes.forEach(function(items, index) {
    console.log(index) //to print index
    console.log(items) //to print item at that index
})

notes.forEach(function(items, numb) {
    const num = numb + 1
    console.log(`${num}. ${items}`) //Note: when Fn is call into Fn it is callback function
})
console.log(notes)

//for Loop

for (let count = 0; count <= 2; count++) { //to count from 0 to 2
    console.log(count)
}

for (let count = 2; count >= 0; count--) { //count from 2 to 0
    console.log(count)
}

for (let count = 0; count < notes.length; count++) { //list items in array notes
    console.log(notes[count])
}

for (let count = notes.length - 1; count >= 0; count--) { //list items in reverse order of array notes
    console.log(notes[count])
}

//task : to print items in array using for loop

for (let count = 1; count <= notes.length; count++) { //list items in array notes
    console.log(`${count}. ${notes[count - 1]}`)
}
//or
for (let count = 0; count < notes.length; count++) { //list items in array notes
    console.log(`${count + 1}. ${notes[count]}`)
} //or 
for (let count = 0; count < notes.length; count++) { //list items in array notes
    const num = count + 1
    const items = notes[count]
    console.log(`${num}. ${items}`)
}

//searching 

console.log(notes.indexOf('note4 new')) // -1 value means it does not exit, if exit it returns index value
notes.indexOf('note 4')