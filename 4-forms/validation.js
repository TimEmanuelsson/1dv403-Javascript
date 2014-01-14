"use strict";
var Validation = {

    init:function(){
        var button = document.querySelector("#singlebutton");
        button.setAttribute("type", "submit");
        
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
                
            }
            else{
                forname.style.background = "transparent";
                forname.style.borderColor = "#FF3030";
               
            }
        };
        
        lastname.onblur = function(){
            var lastnameinput = document.querySelector("#Efternamn").value;
            
            if(allowedName.test(lastnameinput)){
                lastname.style.background = "transparent";
                lastname.style.borderColor = "#66CD00";
            }
            else{
                lastname.style.background = "transparent";
                lastname.style.borderColor = "#FF3030";
            }
        };
        
        epost.onblur = function(){
            var epostinput = document.querySelector("#Epost").value;
            
            if(allowedEmail.test(epostinput)){
                epost.style.background = "transparent";
                epost.style.borderColor = "#66CD00";
            }
            else{
                epost.style.background = "transparent";
                epost.style.borderColor = "#FF3030";
            }
        };
        
        zipcode.onblur = function(){
            var zipcodeinput = document.querySelector("#Postnummer").value;
            
            if(allowedPostalNumber.test(zipcodeinput)){
                zipcode.style.background = "transparent";
                zipcode.style.borderColor = "#66CD00";
            }
            else{
                zipcode.style.background = "transparent";
                zipcode.style.borderColor = "#FF3030";
            }
        };
        
        
},

};
window.onload = Validation.init;