function displayTime() {
     let dateTime = new Date();
     let hrs = dateTime.getHours();
     let min = dateTime.getMinutes();
     let sec = dateTime.getSeconds();
     let session = document.getElementById('session');

     if (hrs >= 12) {
          session.innerHTML = 'PM';
          hrs = hrs - 12;
     }
     else {
          session.innerHTML = 'AM'
     }
     if (min > 9) {
          document.getElementById('minute').innerHTML = min;
     }
     else {
          document.getElementById('minute').innerHTML = '0' + min;
     }
     if (sec > 9) {
          document.getElementById('second').innerHTML = sec;
     }
     else {
          document.getElementById('second').innerHTML = '0' + sec;

     }
     if (hrs > 9) {
          document.getElementById('hour').innerHTML = hrs;
     }
     else {
          document.getElementById('hour').innerHTML = '0' + hrs;
     }






}

setInterval(displayTime);