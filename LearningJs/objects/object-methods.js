let resturent = {
    name: 'Taj',
    guestCapacity: 90,
    guestCount: 1,
    checkAvailability: function(partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize) { //task
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function(partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

// let status = resturent.checkAvailability(90)
// console.log(status)
console.log(resturent.checkAvailability(80)) //can be used directly

resturent.seatParty(15)
console.log(resturent.checkAvailability(80))

resturent.removeParty(6)
console.log(resturent.checkAvailability(80))