let timerfunv = setInterval(digiClock,1000);
   function digiClock(){
        var d = new Date();
        var time = d.toLocaleTimeString('it-IT');
        var date = d.toLocaleDateString();
        document.getElementById("time").innerHTML =time;
        document.getElementById("date").innerHTML =date;
    }
    function starts(){
        timerfunv = setInterval(digiClock,1000);
    }
   function clear(){
       clearInterval(timerfunv);
   }
 document.getElementById("myBtn2").onclick = clear;
 document.getElementById("myBtn1").onclick = starts;
   