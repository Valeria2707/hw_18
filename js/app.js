let img = ["./img/0.jpg", "./img/1.jpg", "./img/2.jpg", "./img/3.jpg","./img/4.jpg","./img/5.jpg","./img/6.jpg","./img/7.jpg","./img/8.jpg","./img/9.jpg"]

function digitalClock() {
  let date = new Date();
  let hours = String(date.getHours());
  let minutes = String(date.getMinutes());
  let seconds = String(date.getSeconds());

  let hour1 = document.querySelector('.hour1');
  let hour2 = document.querySelector('.hour2');
  let minut1 = document.querySelector('.minut1');
  let minut2 = document.querySelector('.minut2');
  let seconds1 = document.querySelector('.seconds1');
  let seconds2 = document.querySelector('.seconds2');

  createTime(hour1, hour2, hours);
  createTime(minut1, minut2, minutes);
  createTime(seconds1, seconds2, seconds);

  setTimeout(digitalClock, 1000);
}


function createTime(numberTime1, numberTime2, timeType){
  if(timeType < 10){
    numberTime1.src = img[0];
    numberTime2.src = img[timeType.charAt(0)];
  }
  else{
    numberTime1.src = img[timeType.charAt(0)];
    numberTime2.src = img[timeType.charAt(1)];
  }
}

digitalClock();