"use strict";

var Memory = {
    
    cols: 4,
    rows: 4,
    
    random: [],
    
    init:function(e){
        
    var picturearray = new RandomGenerator.getPictureArray(Memory.cols, Memory.rows);
    Memory.random.push(picturearray);
    
    Memory.tablesize();
    },
    tablesize: function(){
        
        var div = document.getElementById("memory");
        var table = document.createElement("table");
        div.appendChild(table);
        var tbody = document.createElement("tbody");
        table.appendChild(tbody);
        
        for(var r = 0; r < Memory.rows; r+=1){
            var tr = document.createElement("tr");
            
                for(var c = 0; c < Memory.cols; c+=1){
                    var td = document.createElement("td");
                tr.appendChild(td);
                
                var img0 = document.createElement("img");
                img0.setAttribute("src", "../pics/0.png");
                td.appendChild(img0);
                
            }
            tbody.appendChild(tr);
            
        }
        
    }
    
    
    
};
window.onload = Memory.init;