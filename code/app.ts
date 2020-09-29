let dateTag: Element = document.querySelector(".date-tag");





setInterval(()=> myDate(), 1000);


function myDate(){
    let date: any = new Date;

    let year: any  = date.getFullYear();
    let month: any = "" + (date.getMonth() + 1);
    let day: any = "" + date.getDate();

    if(month.length < 2){
        month = "0" + month;
    }

    if(day.length < 2){
        day = "0" + day;
    }

    dateTag.innerHTML = `${day}.${month}.${year}`;
};