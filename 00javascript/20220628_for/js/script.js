console.log('ko');

document.getElementsByClassName("box")[0].innerHTML = "안녕하세요.";

// let btn = document.getElementsByClassName("btn");
// let box = document.getElementsByClassName("box");


let btn = document.querySelector("button.btn");
let box = document.querySelector("div.box");
// 커리 셀렉터안에서는() <- 자식 요소 등도 사용가능

let btn = document.querySelectorAll("button.btn")[0];
let box = document.querySelectorAll("div.box")[0];

btn.addEventListener("click",function(){
    console.log('click');
    // box[0].innerHTML = "안녕1.";
    box.innerHTML = "안녕1.";
})

let han0 = ""
let num = 0;
let array = [1,2,3,4]