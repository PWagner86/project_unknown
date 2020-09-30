var myDate = /** @class */ (function () {
    function myDate(date, year, month, day) {
        if (date === void 0) { date = new Date; }
        if (year === void 0) { year = date.getFullYear(); }
        if (month === void 0) { month = "" + (date.getMonth() + 1); }
        if (day === void 0) { day = "" + date.getDate(); }
        this.dateTag = document.querySelector(".date-tag");
        this.date = date;
        this.year = year;
        this.month = month;
        this.day = day;
        this.updateDate();
        setInterval(this.updateDate, 1000);
    }
    myDate.prototype.updateDate = function () {
        if (this.month.length < 2) {
            this.month = "0" + this.month;
        }
        if (this.day.length < 2) {
            this.day = "0" + this.day;
        }
        this.dateTag.innerHTML = this.day + "." + this.month + "." + this.year;
    };
    return myDate;
}());
var newDate = new myDate;
