var a = document.querySelector("h1")        //--- Selection of an element
// a.innerHTML = "Document Object Model(DOM)"           //--- Changing HTML
// a.style.color = "grey"           //--- Changing CSS
// a.style.backgroundColor = "aliceblue"    

var press = 0

a.addEventListener("click",function(){
    if(press == 0){
        a.innerHTML = "That's Great!"
        a.style.backgroundColor = "grey"
        a.style.color = "black"
        press = 1
    } else {
        a.innerHTML = "Document Object Model"
        a.style.backgroundColor = "transparent"
        a.style.color = "aliceblue"
        press = 0
    }
})

var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")

var tap = 0

btn.addEventListener("click",function(){
    if(tap == 0){
        bulb.style.backgroundColor = "white"
        console.log("Bulb ON!")
        tap = 1
    } else {
        bulb.style.backgroundColor = "transparent"
        console.log("Bulb OFF!")
        tap = 0
    }
})