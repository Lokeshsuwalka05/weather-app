const apikey="76113da2d71ddd5d459eddc5ad2328d4";
const apiurl="https://api.openweathermap.org/data/2.5/weather?q=sangrur&units=metric";
async function getWeather(){
    const response=await fetch(apiurl+`&appid=${apikey}`);
    const data=await response.json();
    console.log(data);
    document.querySelector(".temp").innerHTML=data.main.temp+"°c";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
}
getWeather();
