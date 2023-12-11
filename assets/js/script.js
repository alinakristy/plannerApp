//1

var curentDay = $("#currentDay");

curentDay.text(dayjs().format('dddd - MMM - YYYY - hA'));

//var for nr2
var timeBlocks = $("#time-block");
//2
var startBussinesHour = 9;
var endBussinesHour = 17;

function createHourHtml() {
    //add div  hour for timeBlock
    var timeBlockHour = $('<div class="position-relative col-1 hour start-75 end-10 top-25 bottom-45">');


    //add span 
    var ourHour = $('<span>');
    ourHour.text(dayjs().hour(i).format('hA'))
    timeBlockHour.append(ourHour)
    return timeBlockHour;
}

function createTextArea(hour) {
    var text = $('<textarea class="col-lg-10 description"></textarea>');
    text.attr('data-hour', hour)
    var timeHours = ''
    if (dayjs().hour() === hour) {
        timeHours = 'present'
    } else if (dayjs().hour() < hour) {
        timeHours = 'future'
    } else {
        timeHours = "past"
    }
    text.addClass(timeHours)
    var localStorageVal=localStorage.getItem(hour.toString())
    if (localStorageVal!== null){
        text.val(localStorageVal)
    }
    return text;
}

function createButton(hour) {
    //add button 
    var button = $('<button class="saveBtn col-1">')
    button.attr('data-hour', hour)
    var buttonIcon = $('<i class="fas fa-save fa-lg d-flex justify-content-center">')
    buttonIcon.attr('data-hour', hour)
    button.append(buttonIcon)
    return button;

}

for (i = startBussinesHour; i <= endBussinesHour; i++) {
    var timeBlock = $('<div class="time-block row">');
    timeBlock.append(createHourHtml())//add hours 
    timeBlock.append(createTextArea(i));
    timeBlock.append(createButton(i));
    timeBlocks.append(timeBlock); //add row
}

timeBlocks.on('click', ".saveBtn", function (event) {
    var eventHour = event.target.attributes['data-hour'].value
    var textArea = $('textarea[data-hour="' + eventHour + '"]')
    var userInputHour = textArea.val()

    localStorage.setItem(eventHour.toString(), userInputHour)
});