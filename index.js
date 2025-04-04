let cityName = document.querySelector(".weather_city");
let dateTime = document.querySelector(".weather_date_time");
let w_foreCast = document.querySelector(".weather_forecast");
let w_icon = document.querySelector(".weather_icon");
let w_temperture = document.querySelector(".weather_temperature");
let w_minTem = document.querySelector(".weather_min");
let w_maxTerm = document.querySelector(".weather_max");

// to get the actual country Name
const getCountryName = (code) => {
    return new Intl.DisplayNames([code], {type:"region"}).of(code);
};

// Fetch Weather Data
const getWeatherData = async () => {
let tempCity="Lucknow";
if (city)
    tempCity=city
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${tempCity}&
APPID=ec4fcd50ecbd9935df9015005cb699ec`;

try{
    const res = await fetch(weatherUrl);
    // data in json format to original form(object)
    const data = await res.json();
    // console.log(data);

 const {main,name,weather,wind,sys,dt} = data;

  cityName.innerHTML = `${name}, ${getCountryName(sys.country)}`;

    }catch(error){
    console.log(error);
    }
};

document.body.addEventListener("load", getWeatherData());

// Review API Data(Review the structure of the API response)

