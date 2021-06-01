const btn = document.querySelector("#search-button");
btn.addEventListener("click", loadDataFromApi);

function loadDataFromApi() {
  fetch("https://api.wheretheiss.at/v1/satellites/25544")
    .then((response) => response.json())
    .then(getPositionFromApi);
}

function getPositionFromApi(dataFromApi) {
  const lat = dataFromApi.latitude;
  const long = dataFromApi.longitude;

  fetch(
    "https://api.wheretheiss.at/v1/coordinates/" +
      dataFromApi.latitude +
      "," +
      dataFromApi.longitude
  )
    .then((response) => response.json())
    .then((data) => {
      window.open(data.map_url);
    });
}
