
class myDate {

    private dateTag: Element;
    private date: any;
    private year: any;
    private month: any;
    private day: any;

    constructor(
    date: any = new Date, 
    year: any = date.getFullYear(),
    month: any = "" + (date.getMonth() + 1), 
    day: any = "" + date.getDate()){
        this.dateTag = document.querySelector(".date-tag");
        this.date = date;
        this.year = year;
        this.month = month;
        this.day = day;
        this.updateDate();

        setInterval(this.updateDate, 1000);
    }

    private updateDate(){
        if(this.month.length < 2){
            this.month = "0" + this.month;
        }
    
        if(this.day.length < 2){
            this.day = "0" + this.day;
        }
    
        this.dateTag.innerHTML = `${this.day}.${this.month}.${this.year}`;
    }
    
}

let newDate = new myDate;

