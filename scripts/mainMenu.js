// This function is intended to make my menu responsive to a user's
// screen size such as a phone/tablet

function menuResponsive() {
    
    var x = document.getElementById("mainMenuId");
    
    if (x.className === "mainMenu") {x.className += " responsive";}
    else {x.className = "mainMenu";}
}