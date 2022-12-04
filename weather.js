const api_key = "a3591a980c1ce0cbc952faa0b4fa95c5";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}&units=metric`;
    
    fetch(url). then(response => response.json().then(data=>{
        const weather = document.querySelector("#weather span:first-child");
        const weatherCity = document.querySelector("#weather span:last-child");
        weatherCity.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp} `
        
    }));
    
}

function onGeoError(){

    alert("Can't find you. No weather for you.")

}


navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);


