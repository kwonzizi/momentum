const images = ["봄.jpg","여름.jpg","가을.jpg","겨울.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];

const bgImg = document.createElement("img");
bgImg.src = `kwonzizi.github.io/${chosenImage}`;

document.body.appendChild(bgImg);

bgImg.classList.add("background");
