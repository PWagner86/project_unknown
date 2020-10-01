function startDateAndTime(){
    let date: Date = new Date;
    let year: number = date.getFullYear();
    let month: number = (date.getMonth() + 1);
    let day: number = date.getDate();
    let hour: number = date.getHours();
    let minute: number = date.getMinutes();
    let second: number = date.getSeconds();

    let dateTag: Element = document.querySelector(".date-tag");
    let timeTag: Element = document.querySelector(".time-tag");

    month = checkTime(month);
    day = checkTime(day);
    minute = checkTime(minute);
    second = checkTime(second);

    dateTag.innerHTML = `${day}.${month}.${year}`;
    timeTag.innerHTML = `${hour}:${minute}:${second}`;

    setTimeout(startDateAndTime, 500);
}

function checkTime(i){
    if(i < 10){
        i = "0" + i;
    }
    return i;
}

startDateAndTime();