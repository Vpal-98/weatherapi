const button = document.getElementById("search-button");
const input = document.getElementById("search-input");
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");
const apikey = "79466eda1a9642b68ec91944250702";

button.addEventListener("click", async () => {
  const value = input.value;
  const result = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${value}`
  );
  const data = await result.json();
  console.log(data);
  cityName.innerText = data.location.name;
  cityTime.innerText = data.location.localtime;
  cityTemp.innerText = data.current.temp_c;
});
