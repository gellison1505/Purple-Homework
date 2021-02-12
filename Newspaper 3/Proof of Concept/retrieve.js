async function getApi() {
  const url ="https://api.openweathermap.org/data/2.5/onecall?lat=21.3294&lon=-157.846&exclude=hourly,minutely&units=imperial&appid=ff0faf46c6e68c55865492e2f7690d51";
  const response = await fetch(url);

  var data = await response.json();
  console.log(data);
  if (response) {
    hideLoader();    
  }
  show(data);
}

function hideLoader() {
  document.getElementById("loading").style.display = "none";
}

function show(data) {
  let myData = data;
  document.getElementById("#report").innerHTML = myData[0].city;
}