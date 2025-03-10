function updadeClock(){
    const clockElemente = document.querySelector(".clock");
    const hoursElemente = document.querySelector(".hours");
    const minutesElemente = document.querySelector(".minutes");
    const secondsElemente = document.querySelector(".seconds");


    const now = new Date();
    const hours = now.getHours().toString().padStart(2,"0");
    const minutes = now.getMinutes().toString().padStart(2,"0");
    const seconds = now.getSeconds().toString().padStart(2,"0");

    hoursElemente.textContent = hours;
    minutesElemente.textContent = minutes;
    secondsElemente.textContent = seconds;

    


}

setInterval(
    updadeClock, 1000
); 