
function addPerson() {
    var peopleEntered = document.getElementById('count-el');
    var number = peopleEntered.innerHTML; // number is the value within count-el
    number++; // this increments the value on click
    peopleEntered.innerHTML = number; // stores the value
}

function delPerson() {
    var peopleEntered = document.getElementById('count-el');
    var number = peopleEntered.innerHTML; // number is the value within count-el
    number--; // this increments the value on click
    peopleEntered.innerHTML = number; // stores the value
}
