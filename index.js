function myFunction(p1, p2) {
    return p1 / p2;
}

let result = myFunction(4, 3);
document.getElementById("demo").innerHTML = result;

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars[1]);

const car = {
    name: "mers",
    color: "red",
    model: "300",
    image: "image.png"
};

document.getElementById('name').innerHTML = car.name;
document.getElementById('color').innerHTML = car.color;
document.getElementById('model').innerHTML = car.model;
document.getElementById('image').innerHTML = car.image;

let paragraph = document.getElementsByTagName('p');

for (i = 0; i < paragraph.length; i++) {
    paragraph[i].style.color = "red"
    paragraph[i].style.fontSize = "24px"
}

let flex = document.getElementsByClassName('flex');

for (let i = 0; i < flex.length; i++) {
    flex[i].style.color = 'blue';
}

console.log(document.baseURI);


const elements = document.querySelectorAll('#demo');
elements.forEach(el => {
    el.style.color = "grey";
});

document.writeln('asdsa');
console.log('asdsa');

let random = Math.floor(Math.random() * 100);
console.log(random);

function test() {
    let x = document.getElementById("change").value;
    document.getElementById("demo").innerHTML = x;
}

function bigImg(x) {
    x.style.color = "red";
    x.style.fontSize = "24px";
}

function normalImg(x) {
    x.style.color = "blue";
    x.style.fontSize = "24px";
}

function me() {
    console.log("Muhammad");
}
