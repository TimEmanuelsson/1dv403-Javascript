"use strict";

var Memory = {
    
    random: [],
    
    init:function(e){
        
    var picturearray = new RandomGenerator.getPictureArray(4, 4);
    Memory.random.push(picturearray);
    
    console.log(Memory.random);
    
    }
    
};
window.onload = Memory.init;