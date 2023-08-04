// This function is a script to count and display the days left from 
// a certain point in time - in this case, the release of 'Cyberpunk 2077'

var countDownDate = new Date("April 16, 2020 00:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();
    
    var distance = countDownDate - now;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("countDown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s LEFT!!!";
    
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countDown").innerHTML = "EXPIRED";
    }
}, 1000);