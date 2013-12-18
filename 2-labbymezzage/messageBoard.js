"use strict";

//Omringa hela projektet i ett obejekt då det nu inte ligger på windows fönstret.
var MessageBoard = {
    
    //Arrayen där texterna ligger
    messages: [],
    
    init:function(e)
    {   //Hämtar knappen från html
        var messagebuttom = document.getElementById("knapp");
        
        //När man klickar så anropar den newmesssage.
        messagebuttom.onclick = MessageBoard.newmessage;
        
        //När man klickar enter så skickar den och shift-enter hoppar ner en rad.
        document.getElementById("textram").onkeypress = function(e){
            if(!e){  
                e = window.event;
            }
            if(e.keyCode === 13 && !e.shiftKey){
                MessageBoard.newmessage();
                return false;
            }
        }
    }, 
    newmessage:function(){
        
        //Läser av inmatningen från textfältet.
        var inmatning = document.querySelector("#textarea").value;
        
        var mess = new Message(inmatning, new Date());
        
        //Pushar upp texten från textfältet till arrayen.
        MessageBoard.messages.push(mess);
        
        //Anropar renderMessages.
        MessageBoard.renderMessages();
        
    
    },
    renderMessages: function(){
        
        //Clera upp alla meddelanden som ligger i divtwo.
        document.querySelector("#divtwo").innerHTML = "";

        //Räknar upp antal meddelanden i arrayen.
        for(var i = 0; i < MessageBoard.messages.length; i+=1){
            
            MessageBoard.renderMessage(i);
            }
        
        //Rensar antal meddelanden.
        document.getElementById("pp").innerHTML = "";
        
        //Räknar antal meddelanden.(antal arrayer).
        var number = MessageBoard.messages.length;
        
         //Skriver ut antal meddelanden.
        var pp = document.getElementById("pp");
        var text = document.createTextNode("Antal meddelande: "+number);
        pp.appendChild(text);
       
        
    },
    renderMessage: function(messageID){
        
        //Skapar en ny div.
        var textmessage = document.createElement("div");
        
        //Ger diven ett classnamn.
        textmessage.className = "textmessage";
        
        var divtwo = document.getElementById("divtwo");
        var p = document.createElement("p");
        
        //Lägger div(textmessage) i diven divtwo.
        divtwo.appendChild(textmessage);
        
        //Lägger in p i textmessage.
        textmessage.appendChild(p);
        
        //Ger newDate tiden i timmar och minuter.
        var newDate = MessageBoard.messages[messageID].getTimeT();
        
        //Skapar ett nytt textnode.
        var date = document.createTextNode(newDate);
        textmessage.appendChild(date);
        
        //Skriver ut varje array med text i p.
        p.innerHTML = MessageBoard.messages[messageID].getHTMLText();

          //Skapar img tag och lägger in bild.
          var img = document.createElement("img");
          img.setAttribute("src", "delete1.png");
          textmessage.appendChild(img);
          
          //När man klickar anropas funktionen removeMessage.
          img.onclick = function(){
              MessageBoard.removeMessage(messageID);
          };
          
          var imgtwo = document.createElement("img");
          imgtwo.setAttribute("src", "star1.png");
          textmessage.appendChild(imgtwo);
          
          //När man klickar kommer en alert upp och exakt datum och tid när meddelandes skickades.
          imgtwo.onclick = function(){
              alert(MessageBoard.messages[messageID].getDateText());
          };
        
    },
    //Funktion som gör att du kan radera meddelanden.
    removeMessage: function(messageID){
        if(confirm("Vill du ta bort detta meddelandet?")){
            MessageBoard.messages.splice(messageID, 1);
            MessageBoard.renderMessages();
        }
    }
    
    
    
};
//Skriptet läses in när sidan är färdig laddad.
window.onload = MessageBoard.init;