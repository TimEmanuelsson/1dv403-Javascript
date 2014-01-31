"use strict";
var desktop = {
	
	init:function(){
		
		var button = document.querySelector("#knapp");
		var inside = false;
		
			button.onclick = function(){
				
				//kollar om sidan redan finns
				if(inside === true){
					return false;
				}
				inside = true;

				//skapar popup fönstret
				var popup = document.createElement("div");
				popup.setAttribute("id", "popup");
				document.body.appendChild(popup);
				
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
				
				var p = document.createElement("p");
				p.setAttribute("id", "ptagg")
				var desktopname = document.createTextNode("Image Viewer");
				
				var buttonremove = document.createElement("button");
				buttonremove.setAttribute("id", "avbryt");
				buttonremove.appendChild(document.createTextNode("X"));
				
				p.appendChild(desktopname);
				topleft.appendChild(p);
				topright.appendChild(buttonremove);
				
				//Kör imageview funktionen
				desktop.imageview();
				
				buttonremove.onclick = function(){
					document.body.removeChild(document.querySelector("#popup"));
					
					inside = false;
					
				}
				
			}
		
	},
	
	
	imageview:function(){
		
		//Var du hämtar datan ifrån
		var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
		
		//skapar ett nytt obejekt och skickar med url och datan från servern.
		new AjaxCon(url, function(data){
			
			//Om datan laddar så visas ladd ikonen.
			if(data === "loading data"){
				var bottom = document.getElementById("bottom");

				var img = document.createElement("img");
				img.setAttribute("id", "loader");
				img.setAttribute("src", "ajax-loader.gif");
				
				bottom.appendChild(img);
			}
			else{
				//Dölj laddar knappen när hämtningen är färdig.
				document.getElementById("loader").style.visibility='hidden';

				//Parsa om datan som du hämtat ut.
				var pic = JSON.parse(data);
				
				var maxheight = 0;
				var maxwidth = 0;
				
				
				//Loopar igenom och kolla vilket som är max värderna på bilderna.
				for(var i = 0; i < pic.length; i+=1){
					if(pic[i].thumbWidth > maxwidth){
						maxwidth = pic[i].thumbWidth;
					}
					if(pic[i].thumbHeight > maxheight){
						maxheight = pic[i].thumbHeight;
					}
				}
				
				//Skapar ramar och skriver ut bilderna.
				for(var i = 0; i < pic.length; i+=1){
				var mid = document.getElementById("mid");
				var a = document.createElement("a");
				a.setAttribute("id", "atagg");
				var image = document.createElement("img");
				mid.appendChild(a);
				a.appendChild(image);
				
				a.setAttribute("href", pic[i].URL);
				image.setAttribute("src", pic[i].thumbURL);
				a.style.height = maxheight + 10 + "px";
				a.style.width = maxwidth + 10 + "px";
				a.style.lineHeight = maxheight -5 + "px";

				//När du klickar på bilderna så ändras bodyn till bilden (bakgrunden).
				a.onclick = function() {
                    document.getElementsByTagName("body")[0].style.background = "url("+ this.href +")";
                    return false;
                }
			}
			}
			
			
		})
		
	}
};
window.onload = desktop.init;