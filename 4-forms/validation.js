"use strict";
var Validation = {

    init:function(){
        
        var button = document.querySelector("#singlebutton");
        // button.setAttribute("type", "submit");
        
        
        var allowedName = /^[\ws*$åäöÅÄÖ][^0-9]/;
        var allowedPostalNumber = /^[0-9]{5}$|^[0-9]{3}-[0-9]{2}$|^[0-9]{3}\s[0-9]{2}$|^SE\d{5}$|^SE\d{3}-\d{2}$|^SE\d{3}\s\d{2}$|^SE\s[0-9]{3}\s[0-9]{2}$|^SE\s[0-9]{3}-\d{2}$/;
        var allowedEmail = /\S+@\S+\.\S+/;
        
        var forname = document.querySelector("#Fornamn");
        var lastname = document.querySelector("#Efternamn");
        var epost = document.querySelector("#Epost");
        var zipcode = document.querySelector("#Postnummer");
        
        forname.onblur = function(){
            var fornameinput = document.querySelector("#Fornamn").value;
            
            if(allowedName.test(fornameinput)){
                forname.style.background = "transparent";
                forname.style.borderColor = "#66CD00";
                return true;
                
            }
            else{
                forname.style.background = "transparent";
                forname.style.borderColor = "#FF3030";
                var p = document.getElementById("fornamnfeltext");
                var fel = document.createTextNode("FEL");
                p.appendChild(fel);
                 return false;
            }
        };
        
        
        lastname.onblur = function(){
            var lastnameinput = document.querySelector("#Efternamn").value;
            
            if(allowedName.test(lastnameinput)){
                lastname.style.background = "transparent";
                lastname.style.borderColor = "#66CD00";
                return true;
            }
            else{
                lastname.style.background = "transparent";
                lastname.style.borderColor = "#FF3030";
                var p = document.getElementById("efternamnfeltext");
                var fel = document.createTextNode("FEL");
                p.appendChild(fel);
                return false;
            }
        };
        
        epost.onblur = function(){
            var epostinput = document.querySelector("#Epost").value;
            
            if(allowedEmail.test(epostinput)){
                epost.style.background = "transparent";
                epost.style.borderColor = "#66CD00";
                return true;
            }
            else{
                epost.style.background = "transparent";
                epost.style.borderColor = "#FF3030";
                var p = document.getElementById("epostfeltext");
                var fel = document.createTextNode("FEL");
                p.appendChild(fel);
                return false;
            }
        };
        
        zipcode.onblur = function(){
            var zipcodeinput = document.querySelector("#Postnummer").value;
            
            if(allowedPostalNumber.test(zipcodeinput)){
                zipcode.style.background = "transparent";
                zipcode.style.borderColor = "#66CD00";
                return true;
            }
            else{
                zipcode.style.background = "transparent";
                zipcode.style.borderColor = "#FF3030";
                var p = document.getElementById("postnummerfeltext");
                var fel = document.createTextNode("FEL");
                p.appendChild(fel);
                return false;
            }
        };

         button.onclick = function(){
             if(forname.onblur() && lastname.onblur() && epost.onblur() && zipcode.onblur()){
                 
                 var popup = document.createElement("div");
                 popup.className = "popup";
                 
                 document.body.appendChild(popup);
                 
                 var button = document.createElement("button");
                 button.setAttribute("id", "skickatillserver");
                 
                 button.appendChild(document.createTextNode("Skicka"));
                 
                 popup.appendChild(button);
                 
                 var p = document.createElement("p");
                 
                 popup.appendChild(p);
                 
                 
                 
                 
             }
         };
        
        
        
    },

};
window.onload = Validation.init;