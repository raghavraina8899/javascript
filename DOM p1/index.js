var a = document.querySelector("h6")

var accept = document.querySelector("#add")

var decline = document.querySelector("#remove")

accept.addEventListener("click",function(){
    a.innerHTML = "ACCEPTED"
    a.style.fontSize = "25px"
    a.style.color = "green"
    accept.remove();
    decline.remove();
})

decline.addEventListener("click",function(){
    a.innerHTML = "DECLINED"
    a.style.fontSize = "25px"
    a.style.color = "Red"
    accept.remove();
    decline.remove();
})