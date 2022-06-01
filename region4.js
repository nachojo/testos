let img = document.querySelector('img');

let btn6 = document.querySelector("#btn6");
let btn7 = document.querySelector("#btn7");
let btn8 = document.querySelector("#btn8");

btn6.addEventListener('click', () => {
    img.src = "대여소개수.png"
})
btn7.addEventListener('click', () => {
    img.src = "거치대개수.png"
})
btn8.addEventListener('click', () => {
    img.src = "대여소평균거치대수.png"
})