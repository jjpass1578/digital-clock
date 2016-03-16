$(document).ready(function(){
    function displayTime(){
        var meridiem = "AM";
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var clockDiv = document.getElementById('clock');
          if (seconds <10){
        seconds = "0" + seconds;
    }
        if (hours >12){
            hours= hours - 12;
             meridiem = "PM";
        }
        
        if (hours <10){
            hours= "0" + hours;
        }
        
        if (minutes <10){
            minutes = "0" + minutes;
        }
        
        
        if (hours === 0){
            hours = 12;
        }
        
        clockDiv.innerText = hours + ":" + minutes + ":" + seconds;
        clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
    }
    displayTime();
    setInterval(displayTime, 1000);
    
  
    
});