setInterval(() =>{

    date=new Date();

    htime=date.getHours();
    mtime=date.getMinutes();
    stime=date.getSeconds();

    Hrotation=30*htime +mtime/2;
    Mrotation=6*mtime;
    Srotation=6*stime;

    hours.style.transform=`rotate(${Hrotation}deg)`;
    minutes.style.transform=`rotate(${Mrotation}deg)`;
    seconds.style.transform=`rotate(${Srotation}deg)`;

},1000)