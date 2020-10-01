// Variables
const btn: Element = document.querySelector("button");








// Events



btn.addEventListener("click", (e)=>{
    e.preventDefault();
    getInfo();
});






// Functions




// Time and date function
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




function getInfo(){
    fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let person: any = document.querySelector(".person");
        let quoter: any = document.querySelector(".quote");

        deleteText(person);
        deleteText(quoter);

        person.innerText = data[0].author;
        quoter.innerText = data[0].quote;
    })
}


function deleteText(container){
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
}


