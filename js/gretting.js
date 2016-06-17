var today = new Date();
var hourNow = today.getHours()
var gretting;

if (hourNow > 18){
	gretting = "Good evening!";
}

else if (hourNow > 12 ){

	gretting = "Good afternoon!";
}

else if (hourNow > 0) {  
 greeting = "Good morning!";
}

else {
	gretting =  " Welcome :) ";
}

document.write ("<h3>" + gretting + "</h3>");