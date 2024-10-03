let btn1 = document.querySelector("#b1");
let btn2 = document.querySelector("#b2");
let body = document.querySelector("body");
let para = document.querySelector("#p2");

let first = "rgb(18, 13, 66)";
let second = "rgb(176, 111, 129)";
changeBackgroundColor();

btn1.addEventListener("click", () => {
    let color = rgb();
    first = color[0];
    para.innerText = paraText();
    btn1.innerText = decToHex(color);
    changeBackgroundColor();
});

btn2.addEventListener("click", () => {
    let color = rgb();
    second = color[0];
    para.innerText = paraText();
    btn2.innerText = decToHex(color);
    changeBackgroundColor();
});

function changeBackgroundColor() {
    body.style.backgroundImage = `linear-gradient(to right, ${first}, ${second})`;
}
function decToHex(color) {
     return "#" + String(color[1].toString(16)) + String(color[2].toString(16)) + String(color[3].toString(16));
}

function paraText() {
    return `background-image: linear-gradient(to right, ${first}, ${second});`;
}

function rgb() {
    let rand1 = Math.floor(Math.random() * 256);
    let rand2 = Math.floor(Math.random() * 256);
    let rand3 = Math.floor(Math.random() * 256);
    let rgb = `rgb(${rand1}, ${rand2}, ${rand3})`;
    return [rgb, rand1, rand2, rand3];
}
