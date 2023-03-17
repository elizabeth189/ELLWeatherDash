
$(function () {
    var today = dayjs();
    $('#currentDay').text(today.format('MM/DD/YYYY, h:mm a'));
  });

var city;

let searchbarEl = $('#search-bar');
let searchresultsEl = $('#search-results');

// API CONSTANTS
const APIKey = '73cba836a1208710a9c533154d3f9c35';
const searchURL = 'https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}'

//  SEARCH API REQUEST OPTIONS
let main = {
    q: city,
    temp: '',
    key: APIKey,
    wind: '',
    humidity: '',
}

function sendRequest() {
    $.getJSON(searchURL, options, function(data){
        console.log(data);
        requestLoop(data);
    })
  }

  function requestLoop(data) {

    $.each(data.items, function(i, item){
        var vidThumb = item.snippet.thumbnails.medium.url;
        var vidTitle = item.snippet.title;
        var vidDesc = item.snippet.description.substring(0, 200);
        var vidId = item.id.videoId;

        $('#search-results').append(`
            <article class="weather" >
            <div class="info">
            <h3>${vidTitle}</h3>
            <p>${vidDesc}</p>
            </div>
            </article>
        `);
    });
  }

  $('#show').click(sendRequest);