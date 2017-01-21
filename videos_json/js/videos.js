var header = document.querySelector('header');
var section = document.querySelector('section');
var requestURL = 'json/videos.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var videos = request.response;
    populateContent(videos);
}

function populateContent(jsonObj) {

    var h1 = document.createElement('h1');
    h1.textContent = 'Videos';
    header.appendChild(h1);

    for (x in jsonObj['data']['items']) {
        var myH1 = document.createElement('h1');
        myH1.textContent = jsonObj['data']['items'][x]['title'];
        section.appendChild(myH1);
        var myPara = document.createElement('p');
        var link = document.createElement('a');
        var image = document.createElement('img');
        var categories = document.createElement('p');

        link.href = jsonObj['data']['items'][x]['player']['default']
        image.src = jsonObj['data']['items'][x]['thumbnail']['default'];
        categories.textContent = 'Categories: ' + jsonObj['data']['items'][x]['category'];

        link.appendChild(image);
        section.appendChild(myPara);
        section.appendChild(link);
        section.appendChild(categories);
    }
}