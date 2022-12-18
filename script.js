const hourEl = document.getElementById('hour');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const ampmEl = document.getElementById('ampm');

function liveClock()
{
    let h =  new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let ampm = "PM";

    if(h>12)
    {
        h=h-12;
        ampm = "PM";
    }

    h = h<10? "0" + h : h;
    m = m<10? "0" + m : m;
    s = s<10? "0" + s : s;


    hourEl.innerHTML = h;
    minutesEl.innerHTML = m;
    secondsEl.innerHTML = s;
    ampmEl,(innerHTML = ampm);

    setTimeout(()=>{
        liveClock()
    },1000)
}

liveClock()
