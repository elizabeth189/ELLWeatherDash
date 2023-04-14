$(function () {
  var today = dayjs();
  $("#currentDay").text(today.format("MM/DD/YYYY, h:mm a"));
});

var city;
var lon;
var lat;

// let searchbarEl = $("#search-bar");
// let searchresultsEl = $("#search-results");

// API CONSTANTS
const APIKey = "73cba836a1208710a9c533154d3f9c35";
//const searchURL = "https://api.openweathermap.org/data/2.5/forecast?q={cityname}&appid={APIkey}";
const searchInput = document.querySelector("#search");
const searchHistory = [];
const searchResults = document.querySelector("#searchResults");

function saveHistory() {
  let search = searchInput.value;
  searchHistory.push(search);
  console.log(searchHistory);
  localStorage.setItem("history", JSON.stringify(searchHistory));
  renderHistory();
}

function renderHistory() {
  localStorage.getItem("search-history");

  for (i = searchHistory.length - 1; i >= 0; i--) {
    let btn = document.createElement("button");
    btn.textContent = searchHistory[i];
    searchResults.append(btn);
  }
}

$("#searchStart").click(function () {
  saveHistory();
  city = $("#search").val();
  var findCityAPI =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&units=imperial&appid=" +
    APIKey;

  $.getJSON(findCityAPI, function (json) {
    console.log(json.coord.lat);
    lat = json.coord.lat;
    console.log(json.coord.lon);
    lon = json.coord.lon;
    var weatherLonLatAPI =
      "https://api.openweathermap.org/data/2.5/forecast?lat=" +
      lat +
      "&lon=" +
      lon +
      "&units=imperial&appid=" +
      APIKey;

    $.getJSON(weatherLonLatAPI, function (data) {
      var today = dayjs();
      $("#currentDay").text(today.format("MM/DD/YYYY, h:mm a"));

      $("#cityName").text(data.city.name);
      $("#currentDay").text(today);

      $("#t1").text(json.main.temp);
      $("#w1").text(json.wind.speed);
      $("#hum1").text(json.main.humidity);

      var futureDate = today.add(1, "day");
      $("#day1").text(futureDate.format("MM/DD/YYYY"));
      $("#t2").text(data.list[0].main.temp);
      $("#w2").text(data.list[0].wind.speed);
      $("#hum2").text(data.list[0].main.humidity);

      futureDate = today.add(2, "day");
      $("#day2").text(futureDate.format("MM/DD/YYYY"));
      $("#t3").text(data.list[1].main.temp);
      $("#w3").text(data.list[1].wind.speed);
      $("#hum3").text(data.list[1].main.humidity);

      futureDate = today.add(3, "day");
      $("#day3").text(futureDate.format("MM/DD/YYYY"));
      $("#t4").text(data.list[2].main.temp);
      $("#w4").text(data.list[2].wind.speed);
      $("#hum4").text(data.list[2].main.humidity);

      futureDate = today.add(4, "day");
      $("#day4").text(futureDate.format("MM/DD/YYYY"));
      $("#t5").text(data.list[3].main.temp);
      $("#w5").text(data.list[3].wind.speed);
      $("#hum5").text(data.list[3].main.humidity);

      futureDate = today.add(5, "day");
      $("#day5").text(futureDate.format("MM/DD/YYYY"));
      $("#t6").text(data.list[4].main.temp);
      $("#w6").text(data.list[4].wind.speed);
      $("#hum6").text(data.list[4].main.humidity);
      console.log(data.list);
    });
  });
    //add functionality to set suggested cities
  // create a function to handle the button click event
// function richmondClick() {
//   fetch(findCityAPI )
//     .then(response => response.json())
//     .then(searchResults)
//     .catch(error => console.error(error));
// }

// add a click event listener to the button
// const button = document.getElementById('richmond');
// button.addEventListener('click', handleButtonClick
//)

});
