let img = {
  "0": "./img/0.jpg",
  "1": "./img/1.jpg",
  "2": "./img/2.jpg",
  "3": "./img/3.jpg",
  "4": "./img/4.jpg",
  "5": "./img/5.jpg",
  "6": "./img/6.jpg",
  "7": "./img/7.jpg",
  "8": "./img/8.jpg",
  "9": "./img/9.jpg",
  ":": "./img/colon.jpg",
}

function digitalClock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if(hours < 10){
    hours = '0'+ hours;
  }
  if(minutes < 10){
    minutes = '0'+ minutes;
  }
 
  if(seconds < 10){
    seconds = '0'+ seconds;
  }

  let string = hours + ":" + minutes + ":" + seconds;

  document.getElementById('id_clock').innerHTML = '';

  for (let i = 0; i < string.length; i++) {
    const photoTime = document.createElement('img');
    photoTime.src = img[string[i]];
    photoTime.style.width = '100px';
    photoTime.style.height = '100px';
    document.getElementById('id_clock').appendChild(photoTime);
  }

  setTimeout(digitalClock, 1000);
}


digitalClock();