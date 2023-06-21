const search = async () => {
  const name = document.querySelector("#inp").value;
  document.querySelector("#output").innerHTML = '';
  let str = "";
  let err="";
  const weather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=d33519434c63e2f0f6cd439f42daf3f5`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => data);
  console.log("this is weather", weather);
  if(!weather.main){
    err+=`<p class="text-danger">Invalid City Name</p>`
    document.getElementById('inp').classList.add('is-invalid')
    document.getElementById('error').innerHTML=err
  }else {
    document.getElementById('inp').classList.remove('is-invalid')
    document.getElementById('error').innerHTML=err
  }

  str += `  <div class="card w-25 mx-auto">
            <div class="card-header bg-info text-light text-center">
                <h4>Weather</h4>
            </div>
            <div class="card-body p-0">
            <div class="container-fluid d-flex p-0 m-0 mt-2">
                <div class="container-fluid text-center">
                <p class="'p-0 m-0 title">Temp &deg;</p>
                <h1 class="p-0 m-0"><i class="bi bi-brightness-high"></i></h1>
                   <h6>${(weather.main.temp - 273.15).toFixed(2)} &deg; C</h6>
                </div>
                 <div class="container-fluid text-center">
                    <p class="'p-0 m-0 title">Humidity</p>
                  <h1 class="p-0 m-0"><i class="bi bi-droplet"></i></h1>
                   <h6>${weather.main.humidity}%</h6>
                </div>
                <div class="container-fluid text-center">
                    <p class="p-0 m-0 title">Clouds</p>
                  <h1 class="p-0 m-0"><i class="bi bi-clouds"></i></h1>
                   <h6>${weather.clouds.all}%</h6>
                </div>
            </div>
            <div class="container-fluid d-flex p-0 m-0 mt-2">
                <div class="container-fluid text-center">
                    <p class="p-0 m-0 title">Wind</p>
                    <h1 class="p-0 m-0"><i class="bi bi-wind"></i></h1>
                    <h6>${weather.wind.speed}</h6>
                </div>
                <div class="container-fluid text-center mx-auto">
                    <p class="p-0 m-0 title">sunset</p>
                    <h1 class="p-0 m-0"><i class="bi bi-sunset"></i></h1>
                    <h6>${new Date(
                      weather.sys.sunset * 1000
                    ).getHours()} : ${new Date(
    weather.sys.sunset * 1000
  ).getMinutes()}</h6>
                </div>
            </div>
            </div>
        </div>`;

  document.querySelector("#output").innerHTML = str;
};
