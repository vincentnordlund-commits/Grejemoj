let cookies = navigator.cookieEnabled;
document.getElementById("demo").innerHTML = "Cookies enabled: " + cookies;

let language = navigator.language;
document.getElementById("lang").innerHTML = "Browser language:" + language;

let bowser = navigator.userAgent;
document.getElementById("bowser").innerHTML = "Bowser version:" + bowser;