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
				
				var p = document.createElement("p");
				p.setAttribute("id", "ptagg")
				var desktopname = document.createTextNode("Image Viewer");
				
				var buttonremove = document.createElement("button");
				buttonremove.setAttribute("id", "avbryt");
				buttonremove.appendChild(document.createTextNode("X"));
				
				p.appendChild(desktopname);
				topleft.appendChild(p);
				topright.appendChild(buttonremove);
				
				desktop.imageview();
				
				buttonremove.onclick = function(){
					main.removeChild(document.querySelector("#popup"));
					
					inside = false;
					
				}
				
			}
		
	},
	
	
	imageview:function(){
		
		var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
		
		new AjaxCon(url, function(data){
			
			if(data === "loading data"){
				var img = document.createElement("img");
				img.setAttribute("id", "loader");
				img.setAttribute("src", "ajax-loader.gif");
				
				var bottom = document.getElementById("bottom");
				bottom.appendChild(img);
				
			}
			else{
				var pic = JSON.parse(data);
				
				var maxheight = 0;
				var maxwidth = 0;
				
				
				
				for(var i = 0; i < pic.length; i+=1){
					if(pic[i].thumbWidth > maxwidth){
						maxwidth = pic[i].thumbWidth;
					}
					if(pic[i].thumbHeight > maxheight){
						maxheight = pic[i].thumbHeight;
					}
				}
				
				for(var i = 0; i < pic.length; i+=1){
				var mid = document.getElementById("mid");
				var div = document.createElement("div");
				div.setAttribute("id", "ram");
				var a = document.createElement("a");
				var image = document.createElement("img");
				mid.appendChild(div);
				div.appendChild(a);
				a.appendChild(image);
				
				a.setAttribute("href", pic[i].URL);
				image.setAttribute("src", pic[i].thumbURL);
				div.style.height = maxheight + 20 + "px";
				div.style.width = maxwidth + 20 + "px";
				a.style.height = maxheight + 20 + "px";
				a.style.width = maxwidth + 20 + "px";
			}
			}
			
			
		})
		
	}
};
window.onload = desktop.init;