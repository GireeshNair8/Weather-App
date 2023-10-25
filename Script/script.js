
const searchInput = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const image = document.querySelector('.icon')
async function getWeather(city) {
  var res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f8cda5bc532566d5323b5cf572aab229&units=metric`)
  if (res.status == 404) {
    document.querySelector('.error').style.display = "block";
  }
  else {
    document.querySelector('.error').style.display = "none";
  }

  var data = await res.json();

  if (res.status == 404) {
    document.querySelector('#card1').style.display = "none"
    document.querySelector('#card2').style.display = "none"
    document.querySelector('.icon1').style.display = "unset"
    document.querySelector('#welcome').style.display = "none"
    document.querySelector('#city').style.display = "none"
    document.querySelector('#temp').style.display = "none"
    document.querySelector('.climate').style.display = "none"
    document.querySelector('.feel').style.display = "none"
    document.querySelector('#country').style.display = "none"
    document.querySelector('#humid').style.display = "none"
    document.querySelector('#wind').style.display = "none"
    document.querySelector('#press').style.display = "none"
    document.querySelector('#btn').style.display = "unset"
    document.querySelector('#dates').style.display = "none"
    document.querySelector('#clock').style.display = "none"
    document.querySelector('body').style.background = "url('./Images/Background-error.png')"
    document.querySelector('#cityname').value = ""
    document.querySelector('#cityname').focus()

  } else {
    document.querySelector('.icon1').style.display = "none"
    document.querySelector('#hazel').style.display = "unset"
    document.querySelector('#card1').style.display = "unset"
    document.querySelector('#card2').style.display = "unset"
    document.querySelector('#welcome').style.display = "none"
    document.querySelector('#city').innerHTML = data.name;
    document.querySelector('#city').style.display = "block";
    document.querySelector('#temp').innerHTML = data.main.temp.toFixed(1) + "°C";
    document.querySelector('#temp').style.display = "block";
    document.querySelector('.climate').innerHTML = data.weather[0].description.toUpperCase();
    document.querySelector('.climate').style.display = "block";
    document.querySelector('.feel').innerHTML = "Feels like: " + data.main.feels_like.toFixed(1) + "°C"
    document.querySelector('.feel').style.display = "block";
    document.querySelector('#country').innerHTML = "Country: " + data.sys.country;
    document.querySelector('#country').style.display = "block";
    document.querySelector('#humid').innerHTML = "Humidity: " + data.main.humidity + "%";
    document.querySelector('#humid').style.display = "block";
    document.querySelector('#wind').innerHTML = "Wind: " + data.wind.speed + "Km/h";
    document.querySelector('#wind').style.display = "block";
    document.querySelector('#press').innerHTML = "Pressure: " + data.main.pressure + "mb";
    document.querySelector('#press').style.display = "block";
    document.querySelector('#btn').style.display = "unset";
    document.querySelector('#dates').style.display = "block";
    document.querySelector('#clock').style.display = "block";
  }

  if (data.weather[0].main == "Clouds") {
    if (data.weather[0].description == "overcast clouds") {
      document.querySelector('.icon').innerHTML = image.src = "./Images/overcast-day.svg"
      document.querySelector('.icon').style.display = "unset"
      document.querySelector('body').style.background = "url('./Videos/Overcast.gif')";
      document.querySelector('body').style.backgroundRepeat = "no-repeat"
      document.querySelector('body').style.backgroundSize = "cover"
      document.querySelector('#haz').onclick = function voice() {
        var sound = new Audio();
        sound.src = "./Weather voice/Clouds.mp3";
        sound.load();
        sound.play();
      }
    } else {
      document.querySelector('.icon').innerHTML = image.src = "./Images/cloudy.svg"
      document.querySelector('.icon').style.display = "unset"
      document.querySelector('body').style.background = "url('./Videos/Cloudy.gif')";
      document.querySelector('body').style.backgroundRepeat = "no-repeat"
      document.querySelector('body').style.backgroundSize = "cover"
      document.querySelector('#haz').onclick = function voice1() {
        var sound1 = new Audio();
        sound1.src = "./Weather voice/Cloud.mp3";
        sound1.load();
        sound1.play();
      }
    }
  } else if (data.weather[0].main == "Clear") {
    document.querySelector('.icon').innerHTML = image.src = "./Images/clear-day.svg"
    document.querySelector('.icon').style.display = "unset"
    document.querySelector('body').style.background = "url('./Videos/Clear.gif')";
    document.querySelector('body').style.backgroundRepeat = "no-repeat"
    document.querySelector('body').style.backgroundSize = "cover"
    document.querySelector('#haz').onclick = function voice2() {
      var sound2 = new Audio();
      sound2.src = "./Weather voice/Clear.mp3";
      sound2.load();
      sound2.play();
    }
  }
  else if (data.weather[0].main == "Rain") {
    document.querySelector('.icon').innerHTML = image.src = "./Images/rain.svg"
    document.querySelector('.icon').style.display = "unset"
    document.querySelector('body').style.background = "url('./Videos/Rain.gif')";
    document.querySelector('body').style.backgroundRepeat = "no-repeat"
    document.querySelector('body').style.backgroundSize = "cover"
    document.querySelector('#haz').onclick = function voice3() {
      var sound3 = new Audio();
      sound3.src = "./Weather voice/Rain.mp3";
      sound3.load();
      sound3.play();
    }

  }

  else if (data.weather[0].main == "Drizzle") {
    document.querySelector('.icon').innerHTML = image.src = "./Images/drizzle.svg"
    document.querySelector('.icon').style.display = "unset"
    document.querySelector('body').style.background = "url('./Videos/Drizzle.gif')";
    document.querySelector('body').style.backgroundRepeat = "no-repeat"
    document.querySelector('body').style.backgroundSize = "cover"
    document.querySelector('#haz').onclick = function voice4() {
      var sound4 = new Audio();
      sound4.src = "./Weather voice/Drizzle.mp3";
      sound4.load();
      sound4.play();
    }
  }

  else if (data.weather[0].main == "Haze") {
    document.querySelector('.icon').innerHTML = image.src = "./Images/haze.svg"
    document.querySelector('.icon').style.display = "unset"
    document.querySelector('body').style.background = "url('./Videos/Haze.gif')";
    document.querySelector('body').style.backgroundRepeat = "no-repeat"
    document.querySelector('body').style.backgroundSize = "cover"
    document.querySelector('#haz').onclick = function voice5() {
      var sound5 = new Audio();
      sound5.src = "./Weather voice/Haze.mp3";
      sound5.load();
      sound5.play();
    }
  }

  else if (data.weather[0].main == "Mist") {
    document.querySelector('.icon').innerHTML = image.src = "./Images/mist.svg"
    document.querySelector('.icon').style.display = "unset"
    document.querySelector('body').style.background = "url('./Videos/Mist.gif')";
    document.querySelector('body').style.backgroundRepeat = "no-repeat"
    document.querySelector('body').style.backgroundSize = "cover"
    document.querySelector('#haz').onclick = function voice6() {
      var sound6 = new Audio();
      sound6.src = "./Weather voice/Mist.mp3";
      sound6.load();
      sound6.play();
    }

  }

  else if (data.weather[0].main == "Snow") {
    document.querySelector('.icon').innerHTML = image.src = "./Images/snow.svg"
    document.querySelector('.icon').style.display = "unset"
    document.querySelector('body').style.background = "url('./Videos/Snow.gif')";
    document.querySelector('body').style.backgroundRepeat = "no-repeat"
    document.querySelector('body').style.backgroundSize = "cover"
    document.querySelector('#haz').onclick = function voice7() {
      var sound7 = new Audio();
      sound7.src = "./Weather voice/Snow.mp3";
      sound7.load();
      sound7.play();
    }
  }

  else if (data.weather[0].main == "Thunderstorm") {
    document.querySelector('.icon').innerHTML = image.src = "./Images/thunderstorms-rain.svg"
    document.querySelector('.icon').style.display = "unset"
    document.querySelector('body').style.background = "url('./Videos/Thunderstorm.webp')";
    document.querySelector('body').style.backgroundRepeat = "no-repeat"
    document.querySelector('body').style.backgroundSize = "cover"
    document.querySelector('#haz').onclick = function voice8() {
      var sound8 = new Audio();
      sound8.src = "./Weather voice/Thunderstorm.mp3";
      sound8.load();
      sound8.play();
    }
  }

}
searchInput.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    getWeather(searchInput.value);
    getTime()
    getDay()
  }
}
)
searchBtn.addEventListener('click', () => {
  if (searchInput.value.length == 0) {
    document.querySelector('#card1').style.display = "none"
    document.querySelector('#card2').style.display = "none"
    document.querySelector('.icon1').style.display = "unset"
    document.querySelector('.error').style.display = "block";
    document.querySelector('#welcome').style.display = "none"
    document.querySelector('#city').style.display = "none"
    document.querySelector('#temp').style.display = "none"
    document.querySelector('.climate').style.display = "none"
    document.querySelector('.feel').style.display = "none"
    document.querySelector('#country').style.display = "none"
    document.querySelector('#humid').style.display = "none"
    document.querySelector('#wind').style.display = "none"
    document.querySelector('#press').style.display = "none"
    document.querySelector('#btn').style.display = "unset"
    document.querySelector('#dates').style.display = "none"
    document.querySelector('#clock').style.display = "none"
    document.querySelector('body').style.background = "url('./Images/Background-error.png')"
    document.querySelector('#cityname').focus()

  } else {
    getWeather(searchInput.value);
    getTime()
    getDay()
  }
}
)
function getDay() {
  const date = new Date()
  let day = date.getDate()
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let month = months[date.getMonth()];
  let year = date.getFullYear()
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let dayz = days[date.getDay()];
  dates.innerHTML = `${day} ${month} ${year}, ${dayz}`

}
function getTime() {
  const time = new Date()
  var hour = time.getHours()
  var min = time.getMinutes()
  var ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  hour = hour ? hour : 12;
  min = min < 10 ? '0' + min : min;

  clock.innerHTML = `${hour} : ${min} ${ampm} ${' GMT+05:30 IST'}`
}
function reset() {
  document.querySelector('#welcome').style.display = "unset"
  document.querySelector('.icon1').style.display = "none"
  document.querySelector('#card1').style.display = "none"
  document.querySelector('#card2').style.display = "none"
  document.querySelector('.icon').style.display = "none"
  document.querySelector('#city').style.display = "none";
  document.querySelector('#temp').style.display = "none"
  document.querySelector('.climate').style.display = "none"
  document.querySelector('.feel').style.display = "none"
  document.querySelector('#country').style.display = "none"
  document.querySelector('#humid').style.display = "none"
  document.querySelector('#wind').style.display = "none"
  document.querySelector('#press').style.display = "none"
  document.querySelector('#dates').style.display = "none"
  document.querySelector('#clock').style.display = "none"
  document.querySelector('#btn').style.display = "none"
  document.querySelector('body').style.background = "url('./Images/Background.jpeg')"
  document.querySelector('body').style = "cover"
  document.querySelector('.error').style.display = "none";
  document.querySelector('#cityname').value = ""
  document.querySelector('#cityname').focus()
}
