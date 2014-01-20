"use strict";
var Validation = {

    init:function(){
        
        var button = document.querySelector("#singlebutton");
        
        //regulara uttrycken
        var allowedName = /^[\ws*$åäöÅÄÖ][^0-9]/;
        var allowedPostalNumber = /^[0-9]{5}$|^[0-9]{3}-[0-9]{2}$|^[0-9]{3}\s[0-9]{2}$|^SE\d{5}$|^SE\d{3}-\d{2}$|^SE\d{3}\s\d{2}$|^SE\s[0-9]{3}\s[0-9]{2}$|^SE\s[0-9]{3}-\d{2}$/;
        var allowedEmail = /\S+@\S+\.\S+/;
        
        //Hämta rutan
        var forname = document.querySelector("#Fornamn");
        var lastname = document.querySelector("#Efternamn");
        var epost = document.querySelector("#Epost");
        var zipcode = document.querySelector("#Postnummer");
        
        //När man markera och klicka ut = onblur
        forname.onblur = function(){
            
            //Hämta ut inmatningen
            var fornameinput = document.querySelector("#Fornamn").value;
            var p = document.getElementById("fornamnfeltext");
            
            //Ta bort varningen = första barnet
            if(p.firstChild !== null){
                p.removeChild(p.firstChild);
            }
            
            if(allowedName.test(fornameinput)){
                
                //Gör borden grön
                forname.style.background = "transparent";
                forname.style.borderColor = "#66CD00";
                return true;
                
            }
            else{
                
                //Gör borden röd
                forname.style.background = "transparent";
                forname.style.borderColor = "#FF3030";
                var fel = document.createTextNode("FEL");
                p.style.color = "#FF3030";
                p.appendChild(fel);
                 return false;
            }
        };
        
        
        lastname.onblur = function(){
            var lastnameinput = document.querySelector("#Efternamn").value;
            var p = document.getElementById("efternamnfeltext");
            
            if(p.firstChild !== null){
                p.removeChild(p.firstChild);
            }
            
            if(allowedName.test(lastnameinput)){
                lastname.style.background = "transparent";
                lastname.style.borderColor = "#66CD00";
                return true;
            }
            else{
                lastname.style.background = "transparent";
                lastname.style.borderColor = "#FF3030";
                var fel = document.createTextNode("FEL");
                p.style.color = "#FF3030";
                p.appendChild(fel);
                return false;
            }
        };
        
        epost.onblur = function(){
            var epostinput = document.querySelector("#Epost").value;
            var p = document.getElementById("epostfeltext");
            
            if(p.firstChild !== null){
                p.removeChild(p.firstChild);
            }
            
            if(allowedEmail.test(epostinput)){
                epost.style.background = "transparent";
                epost.style.borderColor = "#66CD00";
                return true;
            }
            else{
                epost.style.background = "transparent";
                epost.style.borderColor = "#FF3030";
                var fel = document.createTextNode("FEL");
                p.style.color = "#FF3030";
                p.appendChild(fel);
                return false;
            }
        };
        
        zipcode.onblur = function(){
            var zipcodeinput = document.querySelector("#Postnummer").value;
            var p = document.getElementById("postnummerfeltext");
            
            if(p.firstChild !== null){
                p.removeChild(p.firstChild);
            }
            
            if(allowedPostalNumber.test(zipcodeinput)){
                zipcode.style.background = "transparent";
                zipcode.style.borderColor = "#66CD00";
                return true;
            }
            else{
                zipcode.style.background = "transparent";
                zipcode.style.borderColor = "#FF3030";
                var fel = document.createTextNode("FEL");
                p.style.color = "#FF3030";
                p.appendChild(fel);
                return false;
            }
        };

         button.onclick = function(){
             
             //Om alla onblur är true går det att klicka på skicka
             if(forname.onblur() && lastname.onblur() && epost.onblur() && zipcode.onblur()){
                 
                 //Hämta ut form och gör att det bara gå att läsa.
                 var f = document.querySelector("form");
                 for(var i=0; i<f.length; i+=1){
                     f.elements[i].readOnly = true;
                 }
                 
                 //Hämnta ut all inmatning igen.
                 var fornameinput = document.querySelector("#Fornamn").value;
                 var lastnameinput = document.querySelector("#Efternamn").value;
                 var epostinput = document.querySelector("#Epost").value;
                 var zipcodeinput = document.querySelector("#Postnummer").value;
                 var modell = document.querySelector("#rullgardin").value;
                 
                 //Skapa en bakgrund.
                 var background = document.createElement("div");
                 background.setAttribute("id", "shadow");
                 document.body.appendChild(background);
                 
                 var popup = document.createElement("div");
                 popup.className = "popup";
                 
                 document.body.appendChild(popup);
                 
                 
                 
                 var h1 = document.createElement("h1");
                 h1.setAttribute("id", "h1");
                 
                 var text = document.createElement("div");
                 text.setAttribute("id", "text");
                 
                 var divone = document.createElement("div");
                 divone.setAttribute("id", "div");
                 
                 var divtwo = document.createElement("div");
                 divtwo.setAttribute("id", "div");
                 
                 var divthree = document.createElement("div");
                 divthree.setAttribute("id", "div");
                 
                 var divfour = document.createElement("div");
                 divfour.setAttribute("id", "div");
                 
                 var divfive = document.createElement("div");
                 divfive.setAttribute("id", "div");
                 
                 
                 var pf = document.createElement("p");
                 pf.setAttribute("id", "ptagtext");
                 var nameinput = document.createElement("p");
                 nameinput.setAttribute("id", "inputtext");
                 
                 var pe = document.createElement("p");
                 pe.setAttribute("id", "ptagtext");
                 var snameinput = document.createElement("p");
                 snameinput.setAttribute("id", "inputtext");
                 
                 var pp = document.createElement("p");
                 pp.setAttribute("id", "ptagtext");
                 var zipinput = document.createElement("p");
                 zipinput.setAttribute("id", "inputtext");
                 
                 var pepost = document.createElement("p");
                 pepost.setAttribute("id", "ptagtext");
                 var postinput = document.createElement("p");
                 postinput.setAttribute("id", "inputtext");
                 
                 var pm = document.createElement("p");
                 pm.setAttribute("id", "ptagtext");
                 var modellinput = document.createElement("p");
                 modellinput.setAttribute("id", "inputtext");
                 
                 popup.appendChild(text);
                 text.appendChild(h1);
                 
                 text.appendChild(divone);
                 text.appendChild(divtwo);
                 text.appendChild(divthree);
                 text.appendChild(divfour);
                 text.appendChild(divfive);
                 
                 
                 divone.appendChild(pf);
                 divone.appendChild(nameinput);
                 divtwo.appendChild(pe);
                 divtwo.appendChild(snameinput);
                 divthree.appendChild(pp);
                 divthree.appendChild(zipinput);
                 divfour.appendChild(pepost);
                 divfour.appendChild(postinput);
                 divfive.appendChild(pm);
                 divfive.appendChild(modellinput);
                 
                 h1.appendChild(document.createTextNode("Vänligen bekräfta ditt köp"));
                 pf.appendChild(document.createTextNode("Förnamn: "));
                 nameinput.appendChild(document.createTextNode(fornameinput));
                 pe.appendChild(document.createTextNode("Efternamn: "));
                 snameinput.appendChild(document.createTextNode(lastnameinput));
                 pp.appendChild(document.createTextNode("Postnummer: "));
                 zipinput.appendChild(document.createTextNode(zipcodeinput));
                 pepost.appendChild(document.createTextNode("E-post: "));
                 postinput.appendChild(document.createTextNode(epostinput));
                 pm.appendChild(document.createTextNode("Prismodell: "));
                 modellinput.appendChild(document.createTextNode(modell));
                 
                 var buttons = document.createElement("div");
                 buttons.setAttribute("id", "knappar");
                 
                 var buttonremove = document.createElement("button");
                 buttonremove.setAttribute("id", "tabortknapp");
                 buttonremove.appendChild(document.createTextNode("Avbryt"));
                 
                 var buttonsend = document.createElement("button");
                 buttonsend.setAttribute("id", "skickatillserver");
                 buttonsend.appendChild(document.createTextNode("Bekräfta till köp"));
                 
                 popup.appendChild(buttons);
                 buttons.appendChild(buttonremove);
                 buttons.appendChild(buttonsend);
                 
                buttonremove.onclick = function(){
                    
                    //Gör fälten till ändringsbara igen.
                    var f = document.querySelector("form");
                    for(var i=0; i<f.length; i+=1){
                        f.elements[i].readOnly = false;
                 }
                 
                 //Ta bort bakgrunden.
                 document.body.removeChild(document.querySelector(".popup"));
                 document.body.removeChild(document.querySelector("#shadow"));
                 
                 
                };
         
                buttonsend.onclick = function(){
                    //Hämta form och skicka.
                    var f = document.querySelector("form");
                    f.submit();
                };
                 
             }
         };
         
         
        
        
        
    },

};
window.onload = Validation.init;