
//1

var curentDay=$("#currentDay");

curentDay.text(dayjs().format('MMM, ddd, HH'));


//var for nr2
var timeBlocks=$("#time-block");
//2
var startBussinesHour=9;
var endBussinesHour=17; 



function createHourHtml() {
    //add div  hour for timeBlock
var timeBlockHour=$('<div class="position-relative col-1 hour start-75 end-10 top-25 bottom-45">');


//add span 
 var ourHour=$('<span>');
 ourHour.text(dayjs().hour(i).format('hA'))
timeBlockHour.append(ourHour)
return timeBlockHour;
}

function createTextArea(hour){
    var text=$('<textarea class="col-lg-10 description"></textarea>');
    var timeHours=''
    if (dayjs().hour()===hour){
    timeHours= 'present'
    }else if (dayjs().hour()<hour){
        timeHours= 'future'
    }else {
      timeHours="past"
    }
    text.addClass(timeHours)
    return text;
}

function createButton(){
//add button 
var button=$('<button class="saveBtn col-1">')
var buttonIcon=$('<i class="fas fa-save fa-lg d-flex justify-content-center">')
button.append(buttonIcon)
return button;

}
/*
<div class="time-block row">
      <div class="position-relative col-1 hour start-75 end-10 top-25 bottom-45">
        <span>9 am</span>
      </div>
      <textarea class="col-lg-10 description"></textarea>
        <button class="saveBtn col-1">
          <i class="fas fa-save fa-lg d-flex justify-content-center"></i>
        </button>
    </div>
*/
for (i=startBussinesHour; i<=endBussinesHour; i++) {
var timeBlock=$('<div class="time-block row">');  
timeBlock.append(createHourHtml())//add hours 
timeBlock.append(createTextArea(i));
timeBlock.append(createButton());
timeBlocks.append(timeBlock); //add row
}

