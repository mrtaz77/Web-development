setTimeout(function() {
    console.log('2 seconds have passed')
},2000)

var time = 0

var timer = setInterval(function() {
    time += 1
    console.log(time+' seconds have passed')
    if(time > 7)clearInterval(timer)
},1000)
