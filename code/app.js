// Variables
var btn = document.querySelector("button");
// Events
btn.addEventListener("click", function (e) {
    e.preventDefault();
    getInfo();
});
// Functions
// Time and date function
function startDateAndTime() {
    var date = new Date;
    var year = date.getFullYear();
    var month = (date.getMonth() + 1);
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var dateTag = document.querySelector(".date-tag");
    var timeTag = document.querySelector(".time-tag");
    month = checkTime(month);
    day = checkTime(day);
    minute = checkTime(minute);
    second = checkTime(second);
    dateTag.innerHTML = day + "." + month + "." + year;
    timeTag.innerHTML = hour + ":" + minute + ":" + second;
    setTimeout(startDateAndTime, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
startDateAndTime();
function getInfo() {
    fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log(data);
        var person = document.querySelector(".person");
        var quoter = document.querySelector(".quote");
        deleteText(person);
        deleteText(quoter);
        person.innerText = data[0].author;
        quoter.innerText = data[0].quote;
    });
}
function deleteText(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
