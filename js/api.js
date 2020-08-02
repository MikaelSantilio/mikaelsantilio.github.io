var request_projects = new XMLHttpRequest();
var request_services = new XMLHttpRequest();

request_projects.open('GET', 'http://127.0.0.1:8000/projects/', true);
request_services.open('GET', 'http://127.0.0.1:8000/services/', true);

function loadJsonContent(url) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);

    var dt;
    request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
            var data = JSON.parse(this.response);
            // console.log(data);
        } else {
            // TODO: Make a error <log></log>
            console.log({});
        }
    };

    request.onerror = function() {
        // There was a connection error of some sort
    };

    request.onreadystatechange = function () {
        if(request.readyState === XMLHttpRequest.DONE && request.status === 200) {
            console.log(request.responseText);
            return request.responseText;
        }
    };
    
    request.send();

    return new Promise(resolve => {
        data;
    })
}

var s = await loadJsonContent('http://127.0.0.1:8000/services/');
var p = await loadJsonContent('http://127.0.0.1:8000/projects/');

console.log('#############');
console.log(s);

// request_projects.onerror = function() {
//     // There was a connection error of some sort
// };

// request_projects.send();
// request_services.send();

// console.log(projects);
// console.log(services);


// console.log(request_services);
