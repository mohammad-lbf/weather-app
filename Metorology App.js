const searchInput = document.querySelector("#search-input");
const form = document.querySelector("form");
const messageSec = document.querySelector(".msg");
const citiesSec = document.querySelector(".cities");



form.addEventListener("submit" , (e) =>{
e.preventDefault();
let cityName = searchInput.value;
console.log(cityName)
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=edc228562ac0a8aa3116d41c0687cf56&units=metric`
   // searchInput.value= "";
   fetch(apiUrl)
   .then(res1 => res1.json())
   .then(data2 => {
      const {main,name,sys,weather} = data2;
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${weather[0]["icon"]}.svg`;
      const li = document.createElement("li");
      li.classList.add("city");
      const markup = `<h2 class='city-name' data-name=${name},${sys.country}>
              <span>${name}</span>
              <span>${sys.country}</span>
          </h2>
          <div class='city-temp'>${Math.round(main.temp)}</div>
          <figure>
              <img class='city-icon' src='${icon}' alt ='city' >
              <figurecaption>${weather[0].description}</figurecaption>
          </figure>`;
          li.innerHTML = markup;
          citiesSec.appendChild(li);
          messageSec.innerText  = "";
  })
  .catch( data3 => {message.innerText = "لطفا نام شهر را به درستی وارد کنید"})
})