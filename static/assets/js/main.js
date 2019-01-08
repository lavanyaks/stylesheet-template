var request = new XMLHttpRequest();
var data = {};

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://djangocontentservices.dev.postmedia.digital/api-root/lists/ffa9bbcf-8cfc-44cd-9d2e-b654f4f5ac93/amp-list.json/?format=json', true);

request.onload = function () {
    // Begin accessing JSON data here
    data = JSON.parse(this.response);

    var example = new Vue({
        el: '#example-1',
        data: data 
    });
}

window.onload = function () {
    // Send request
    request.send();
};
