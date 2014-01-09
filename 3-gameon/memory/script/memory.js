"use strict";

var Memory = {
    
    cols: 4,
    rows: 4,
    trys: 0,
    totaltrys: 0,
    
    picsave: [],
    random: [],
    
    init:function(e){
        
    Memory.random = new RandomGenerator.getPictureArray(Memory.cols, Memory.rows);
    
    Memory.tablesize();
    },
    tablesize: function(){      
        var cellid = 0;
        var div = document.getElementById("memory");
        var table = document.createElement("table");
        div.appendChild(table);
        var tbody = document.createElement("tbody");
        table.appendChild(tbody);
        
        for(var r = 0; r < Memory.rows; r+=1){
            var tr = document.createElement("tr");
            
                for(var c = 0; c < Memory.cols; c+=1){
                    tr.appendChild(Memory.creattd(cellid));
                    cellid+=1;
                    
            }
            tbody.appendChild(tr);
            
        }
    },
    creattd: function(cellid){
        var td = document.createElement("td");
                    var img0 = document.createElement("img");
                    var a = document.createElement("a");
                    a.setAttribute("href", "#");
                    
                    img0.setAttribute("src", "../pics/0.png");
                    
                    td.appendChild(a);
                    a.appendChild(img0);
                    
                        a.onclick = function(){
                            if(img0.getAttribute("src") == "../pics/0.png"){
                                Memory.totaltrys +=1;
                                Memory.flip(cellid);   
                            }
                        };
                    img0.setAttribute("id", cellid);
        return td;
    },
    changepic: function(cellid){
        var img = document.getElementById(cellid);
        if(img.getAttribute("src") == "../pics/0.png"){
            img.setAttribute("src", "../pics/" +Memory.random[cellid] +".png");
            Memory.picsave.push(cellid);
                    
        }
        else{
            setTimeout(function() {
                img.setAttribute("src", "../pics/0.png");
            }, 500);
        }

        
    },
    flip: function(cellid){
        Memory.changepic(cellid);
        var size = Memory.cols * Memory.rows / 2;
        if(Memory.picsave.length == 2){
            if(Memory.random[Memory.picsave[0]] == Memory.random[Memory.picsave[1]]){
                setTimeout(function() {
                Memory.trys +=1;
                if(size == Memory.trys){
                    var totaltryss = Memory.totaltrys / 2;
                        var tryss = document.getElementById("hej");
                        var textt = document.createTextNode("GRATTIS DU HAR VUNNIT");
                        tryss.appendChild(textt);
                        
                        var trys = document.getElementById("hej2");
                        var text = document.createTextNode("Antal försök: "+totaltryss);
                        trys.appendChild(text);
                }
                }, 500);
                
            }
            else{
                    Memory.changepic(Memory.picsave[0]);
                    Memory.changepic(Memory.picsave[1]); 
            } 
             Memory.picsave.length = 0;
        }
    },
    
};
window.onload = Memory.init;