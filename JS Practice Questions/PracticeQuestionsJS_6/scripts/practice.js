/**
 * Practice Question #6
 *
 *      Name: <Stephen Crocker>
 *      Date: <Jul 10, 2024>
 */


// QUESTION 1
// Constructor for User with fields name and age
function User(name, age) {
    this.name = name;
    this.age = age;
}

var users = [];

// Creates a new User object and add it to the users array
function makeObj() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var user = new User(name, age);
    users.push(user);
}

// Display all User objects
function displayObj() {
    var output1 = '';
    users.forEach(function(user, index) {
        output1 += '<p>User ' + (index + 1) + '<br> Name: ' + user.name + '<br>Age: ' + user.age + '</p>';
    });
    document.getElementById("output1").innerHTML = output1;
}

document.getElementById("makeObj").addEventListener("click", makeObj);
document.getElementById("displayObj").addEventListener("click", displayObj);


// QUESTION 2
// Function to fetch and display JSON data
function showJSON() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "data/user.json", true);
    xhr.onload = function() {
        if (xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            var output2 = '<p>Name: ' + data.name + '<br>Company: ' + data.company + '</p>';
            document.getElementById("output2").innerHTML = output2;
        }
    }
    xhr.send();
}

document.getElementById("btnq2").addEventListener("click", showJSON);


// QUESTION 3
// Output MIME type from filename extension
function mimeFromFilename() {
    const mimeTypes = {
        'html': 'text/html',
        'htm': 'text/html',
        'css': 'text/css',
        'js': 'text/javascript',
        'jpg': 'image/jpeg',
        'jpeg': 'image/jpeg',
        'gif': 'image/gif',
        'bmp': 'image/bmp',
        'ico': 'image/x-icon',
        'cur': 'image/x-icon',
        'png': 'image/png',
        'svg': 'image/svg+xml',
        'webp': 'image/webp',
        'mp3': 'audio/mp3',
        'wav': 'audio/wav',
        'mp4': 'video/mp4',
        'webm': 'video/webm',
        'json': 'application/json',
        'mpeg': 'video/mpeg',
        'csv': 'text/csv',
        'ttf': 'font/ttf',
        'woff': 'font/woff',
        'zip': 'application/zip',
        'avi': 'video/x-msvideo'
    };

    var filename = document.getElementById("filename").value;
    const ext = filename.split('.').pop().toLowerCase();
    var mimeType = mimeTypes[ext] || 'application/octet-stream';
    document.getElementById("output3").innerHTML = mimeType;
}

document.getElementById("btnq3").addEventListener("click", mimeFromFilename);
