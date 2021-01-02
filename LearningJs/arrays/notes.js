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