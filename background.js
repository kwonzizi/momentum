const images = ["spring.jpg","summer.jpg","fall.jpg","winter.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImg = document.createElement("img");
bgImg.src = `https://kwonzizi.github.io/momentum/${chosenImage}`;

document.body.appendChild(bgImg);

bgImg.classList.add("background");
