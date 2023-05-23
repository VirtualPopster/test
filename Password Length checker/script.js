var length = document.getElementById('len').value;
var resu = document.getElementById('res');

var password = document.getElementById('pass').value;
// Generate a random number between 1 and 10
function check() {
    if ((String(password).length) == length || (String(password).length) < length) {
        resu.innerHTML = "Correct !"
    } else {

        resu.innerHTML = "Incorrect"
    }

}