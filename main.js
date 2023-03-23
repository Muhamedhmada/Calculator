window.onload = function(){
    input.value = ""
}
let input = document.getElementById("input")
let btn = document.getElementsByClassName("btn")
let clear = document.getElementsByClassName("clear")
let del = document.getElementsByClassName("del")
let equal = document.getElementsByClassName("equal")
let oop = document.getElementsByClassName("oop")
// the clear btn function
clear[0].onclick = function(){
    window.location.reload()
}
// the del btn function
del[0].onclick = function(){
    input.value =input.value.slice(0,-1)
}
// the other btn function
for(let i = 0; i<btn.length; i++){
    btn[i].onclick = function(){
        input.value += btn[i].value
        for(let d=0; d<oop.length;d++){
            oop[d].removeAttribute("disabled")
            oop[d].style.background = "white"
            oop[d].style.color = "#333"
        }
        equal[0].disabled = false
    }
}
// the equal btn functoin
equal[0].onclick= function(){
    input.value = eval(input.value)
}
// function to prevent the the oop to repeat after each other
for(let a =0; a<oop.length; a++){
    oop[a].onclick = function(){
        input.value += oop[a].value
        equal[0].disabled = true
        btn[0].disabled = false
        btn[0].style.background = "white"
        btn[0].style.color = "#333"
        for(let a = 0; a<oop.length;a++){
            oop[a].disabled = true
            oop[a].style.background = "#cccccc"
            oop[a].style.color = "666666"
        }
    }
}
//  the function to prevent . to repeat 
 btn[0].onclick = function(){
    input.value += this.value
     this.disabled =true
     this.style.background = "#cccccc"
     this.style.color = "666666"
 }