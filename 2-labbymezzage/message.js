"use strict";

function Message(message, date) {
    
    
    this.getText = function() {
        return message;
    };
    
    this.setText = function(_text){
        message = _text;
    };
    
    this.getDate = function() {
        return date;
    };
    
    this.setDate = function(_date) {
        date = _date;
    };
}

Message.prototype.toString = function() {
    return this.getText()+" ("+this.getDate()+")";
};

Message.prototype.getHTMLText = function() {
    return this.getText().replace(/[\n\r]/g, "<br />");
};

Message.prototype.getDateText = function() {
    var month = this.getDate().getMonth();
    var year = this.getDate().getFullYear();
    var day = this.getDate().getDate();
    var hours = this.getDate().getHours();
    var minutes = this.getDate().getMinutes();
    var secounds = this.getDate().getSeconds();
    
    if(month === 0){
        month = "Januari";
    }
    if(month == 1){
        month = "Februari";
    }
    if(month == 2){
       month = "Mars";
    }
    if(month == 3){
        month = "April";
    }
    if(month == 4){
        month = "Maj";
    }
    if(month == 5){
        month = "Juni";
    }
    if(month == 6){
       month = "Juli";
    }
    if(month == 7){
        month = "Augusti";
    }
    if(month == 8){
        month = "September";
    }
    if(month == 9){
        month = "Oktober";
    }
    if(month == 10){
        month = "November";
    }
    if(month == 11){
        month = "December";
    }
    
    return "Inlägget skapades den "+day+" "+month+" "+year+" Klockan "+hours+":"+minutes+":"+secounds;

};

//Hämtar tiden med bara timmar och minuter.
Message.prototype.getTimeT = function() {
    return this.getDate().toLocaleTimeString();
};
