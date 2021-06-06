const event = {
    eventName : 'BirthDay Party',
    guestslist : ['Ritesh','Tushar','Tanish','Madhan','Sanjay'],
    invitationList() {
        console.log('List of ' + this.eventName)
        
    },
    guestList: function() {
        this.guestslist.forEach((guest) =>{
            console.log(guest + ' is invited for '+ this.eventName)
        })
    }

}

event.invitationList()
event.guestList()