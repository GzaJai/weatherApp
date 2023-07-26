async function checkWeather (){

  const city = document.querySelector(".search-bar__input").value;
  const qAPI = "&q="+city;
  const keyAPI = "20d656c06cc13a5ffcdd5188422b9a7a";
  let urlAPI = `https://api.openweathermap.org/data/2.5/weather?appid=${keyAPI}${qAPI}&units=metric`;
  const response = await fetch(urlAPI);
  var data = await response.json();

  if(response.status == 404){
    document.querySelector(".error__div").style.display = "block";
    document.querySelector(".info__div").style.display = "none";
  }

  console.log(data);

  document.querySelector(".city-name").innerHTML = data.name;
  document.querySelector(".current-temp").innerHTML = Math.round(data.main.temp)+"°";
  const weatherImg =  document.querySelector("#current-weather");

  const weather = data.weather[0].main;
    if(weather == "Clouds"){
      weatherImg.setAttribute("src", "./sources/clouds.png")
    }else if(weather == "Thunderstorm"){
      weatherImg.setAttribute("src", "./sources/lightning.png")
    }else if(weather == "Drizzle"||weather == "Rain"){
      weatherImg.setAttribute("src", "./sources/rain.png")
    }else if(weather == "Clear"){
      weatherImg.setAttribute("src", "./sources/sun.png")
    }else if(weather == "Snow"){
      weatherImg.setAttribute("src", "./sources/snow.png")
    }


    document.querySelector(".info__div").style.display = "block";
    document.querySelector(".error__div").style.display = "none";
}

const btn = document.querySelector(".search-bar__btn");
btn.addEventListener('click', checkWeather);