const images = ["spring.JPG","summer.JPG","fall.JPG","winter.JPG"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImg = document.createElement("img");
bgImg.src = `../${chosenImage}`;

document.body.appendChild(bgImg);

bgImg.classList.add("background");
