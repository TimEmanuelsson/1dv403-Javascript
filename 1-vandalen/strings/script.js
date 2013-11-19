"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.
		var letterstring = "";
		
		for(var i = 0; i<str.length; i += 1){
		    var lowercaseletter = str.charAt(i);
		    var uppercaseletter = str.charAt(i);
		    
		    
		    uppercaseletter = uppercaseletter == str.charAt(i).toUpperCase();
		    lowercaseletter = lowercaseletter == str.charAt(i).toLowerCase();
		    
		    if(str.charAt(i) == "a" || str.charAt(i) == "A"){
		        letterstring += "#";
		    }
		    else{
		    
		    if(uppercaseletter === true){
		        letterstring += str.charAt(i).toLowerCase();
		    }
		    
		    
		    if(lowercaseletter === true){
		        letterstring += str.charAt(i).toUpperCase();
		    }
		}
		}
		// Om man inte skriver något i rutan eller skriver siffror så kastats ett undantag.
		
        if(!isNaN(str * 1)){
            return "Var vänlig skriv in bokstäver!"
        }
		
		// Returnera den konverterade strängen.
		
		return letterstring;
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
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};