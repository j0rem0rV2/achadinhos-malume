AOS.init();

const promoDate = new Date("Jul 22, 2024 00:00:00");
const promoStamp = promoDate.getTime();

const promoClock = setInterval(function(){
    const now = new Date();
    const nowStamp = now.getTime();

    const promoDistance = promoStamp - nowStamp;

    const dayInMs = 1000 * 60 * 60 * 24;
    const hourInMs = 1000 * 60 * 60;
    const minInMs = 1000 * 60;

    const daysAt = Math.floor(promoDistance / dayInMs);
    const hourAt = Math.floor((promoDistance % dayInMs) / hourInMs);
    const minAt = Math.floor((promoDistance % hourInMs) / minInMs);
    const secAt = Math.floor((promoDistance % minInMs) / 1000);

    document.getElementById('promoClockAlive').innerHTML = `Faltam ${daysAt}d ${hourAt}h ${minAt}m ${secAt}s para começar as promoções`;

    if (promoDistance < 0) {
        clearInterval(promoClock);
        document.getElementById('promoClockAlive').innerHTML = 'O evento infelizmenta já terminou...';
    }
},1000);