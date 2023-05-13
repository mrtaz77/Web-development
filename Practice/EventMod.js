var events = require('events')
var eventEmitter = new events.EventEmitter()
var util = require('util')

//Event Handler
var myEventHandler = function(){
    console.log('Scream heard')
}

eventEmitter.on('scream',myEventHandler)
eventEmitter.emit('scream')

var Person = function(name){
    this.name = name
}

util.inherits(Person,events.EventEmitter)

var james = new Person('james')
var rakesh = new Person('rakesh')
var larry = new Person('larry')

var people = [james,rakesh,larry]

people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name + ' said: ' + msg)
    })
})

james.emit('speak','howdy friendo')
rakesh.emit('speak','hey bud')
larry.emit('speak','rakesh')