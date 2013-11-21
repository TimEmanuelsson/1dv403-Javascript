"use strict";

window.onload = function(){

	
	var birthday = function(date){
	
        var day = new Date(date+"T23:59:59");
        var toDaysDate = new Date();
        
        var mili = day.getTime();
        
        day.setFullYear(toDaysDate.getFullYear());
        
        var total = mili - toDaysDate;
        
        if(total < 0){
            day.setFullYear(toDaysDate.getFullYear() + 1);
        }
        
        var change = 86400000;
        
        var result = Math.floor((day.getTime() - toDaysDate.getTime()) / change);
        
        return result;

	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};