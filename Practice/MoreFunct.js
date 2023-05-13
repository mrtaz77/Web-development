
//normal function
function intro(){
    console.log('hello')
}

intro()

//function expression
var bye = function(){
    console.log('bye')
}

bye()


function callFunction(fun){
    fun()
}

callFunction(bye)