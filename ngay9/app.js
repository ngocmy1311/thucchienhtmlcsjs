var search = document.querySelector('.search'); 
var city = document.querySelector('.city'); 
var country = document.querySelector('country'); 
var value = document.querySelector('value'); 
var shortDesc = document.querySelector('.short-desc'); 
var visibility = document.querySelector('.visibility'); 
var wind = document.querySelector('.wind'); 
var sun = document.querySelector('.sun'); 
async function changeWeatherUI(){
    search.value.trim();
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={8a003bc0c9c585b74b86f3254732912e}`;
    let data = await fetch(apiURL).then(res => res.json())
    console.log(data);
    city.innerText = data.name;

}
changeWeatherUI();