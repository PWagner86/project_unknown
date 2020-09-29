var dateTag = document.querySelector(".date-tag");
setInterval(function () { return myDate(); }, 1000);
function myDate() {
    var date = new Date;
    var year = date.getFullYear();
    var month = "" + (date.getMonth() + 1);
    var day = "" + date.getDate();
    if (month.length < 2) {
        month = "0" + month;
    }
    if (day.length < 2) {
        day = "0" + day;
    }
    dateTag.innerHTML = day + "." + month + "." + year;
}
;
