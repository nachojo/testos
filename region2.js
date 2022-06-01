let img = document.querySelector('img');

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
let btn4 = document.querySelector("#btn4");
let btn5 = document.querySelector("#btn5");

btn1.addEventListener('click', () => {
    img.src = "밀집도1.png"
})
btn2.addEventListener('click', () => {
    img.src = "밀집도2.png"
})
btn3.addEventListener('click', () => {
    img.src = "밀집도3.png"
})
btn4.addEventListener('click', () => {
    img.src = "밀집도4.png"
})
btn5.addEventListener('click', () => {
    img.src = "밀집도5.png"
})