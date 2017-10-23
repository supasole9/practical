var nameHeader = document.getElementById('nameHeader');
var emailHeader = document.getElementById('emailHeader');
var phone = document.getElementById('phone');
var github = document.getElementById('github');

document.addEventListener('DOMContentLoaded', function() {
     var request = new XMLHttpRequest();
     request.onreadystatechange = function () {
       if (request.readyState == XMLHttpRequest.DONE) {
         if (request.status >= 200 && request.status < 400) {
           var dataFromServer = request.responseText;
           var parsedData = JSON.parse(dataFromServer);
          //  Name
           var nameData = document.createElement("h1");
           nameData.innerHTML = parsedData['name'];
           nameHeader.appendChild(nameData);
          //  Email
           var nameData = document.createElement("h1");
           nameData.innerHTML = parsedData['email'];
           emailHeader.appendChild(nameData);
           //  Phone
            var nameData = document.createElement("h1");
            nameData.innerHTML = parsedData['phone'];
            phone.appendChild(nameData);
            //  Github
            var nameData = document.createElement("h1");
            nameData.innerHTML = parsedData['Github'];
            github.appendChild(nameData);

         } else {
              console.log(request.responseText);
         }
       }
     };
     request.open("GET", "https://api.myjson.com/bins/9xma7");
     request.send()
}, false);
