"use strict";
var desktop = {
	
	init:function(){
		
		var button = document.querySelector("#knapp");
		var inside = false;
		
			button.onclick = function(){
				
				if(inside === true){
					return false;
				}
				inside = true;
				
				var popup = document.createElement("div");
				popup.setAttribute("id", "popup");
				var main = document.getElementById("main");
				main.appendChild(popup);
				
				var top = document.createElement("div");
				top.setAttribute("id", "top");
				var mid = document.createElement("div");
				mid.setAttribute("id", "mid");
				var bottom = document.createElement("div");
				bottom.setAttribute("id", "bottom");
				
				popup.appendChild(top);
				popup.appendChild(mid);
				popup.appendChild(bottom);
				
				var topright = document.createElement("div");
				topright.setAttribute("id", "topright");
				
				var topleft = document.createElement("div");
				topleft.setAttribute("id", "topleft");
				
				top.appendChild(topleft);
				top.appendChild(topright);
				
				var desktopname = document.createTextNode("Image Viewer");
				
				var buttonremove = document.createElement("button");
				buttonremove.setAttribute("id", "avbryt");
				buttonremove.appendChild(document.createTextNode("X"));
				
				topleft.appendChild(desktopname);
				topright.appendChild(buttonremove);
				
				buttonremove.onclick = function(){
					main.removeChild(document.querySelector("#popup"));
					
					inside = false;
					
				}
				
			}
		
	},
	
	
	imageview:function(){
		
		
		
	}
};
window.onload = desktop.init;