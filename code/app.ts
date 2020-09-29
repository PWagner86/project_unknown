let dateTag: Element = document.querySelector(".date-tag");





setInterval(()=> myDate(), 1000);


function myDate(){
    let date: any = new Date;

    let year: number  = date.getFullYear();
    let month: number = date.getMonth() + 1;
    let day: number = date.getDate();

    if(month >= 9){
        dateTag.innerHTML = `${day}.0${month}.${year}`;
    }else{
        dateTag.innerHTML = `${day}.${month}.${year}`;    }
};