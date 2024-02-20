const hourE1 = document.getElementById("hour");
const minuteE1 = document.getElementById("minutes");
const secondE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");
const dayE1 = document.getElementById("day");

function updateClock() {
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let day = now.getDay();

    let ampm = "AM";
    if (h >= 12) {
        ampm = "PM";
       // h = h - 12;
    }
    if (h === 0) {
        h = 00; // 12 AM should be displayed as 00, not 12
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourE1.innerText = h;
    minuteE1.innerText = m;
    secondE1.innerText = s;
    ampmE1.innerText = ampm;
    dayE1.innerText = getDayName(day);

    setTimeout(updateClock, 1000);
}

function getDayName(day) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return daysOfWeek[day];
}

updateClock();