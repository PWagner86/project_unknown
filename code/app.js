var dateTag = document.querySelector(".date-tag");
setInterval(function () { return myDate(); }, 1000);
function myDate() {
    var date = new Date;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    if (month >= 9) {
        dateTag.innerHTML = day + ".0" + month + "." + year;
    }
    else {
        dateTag.innerHTML = day + "." + month + "." + year;
    }
}
;
