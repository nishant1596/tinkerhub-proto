$(function(){
var sheetUrl = 'https://spreadsheets.google.com/feeds/cells/1M-444B44qT78GDJH7MiGJ363FjVxA06-MmZVBqJ3IkQ/1/public/full?alt=json';
$.getJSON(sheetUrl, function(data){
  var entry = data.feed.entry;
  var name = []; // the leftmost column of the Google Sheets
  var college = []; // second column
  var phone_no = []; // third column
  var technology=[]; //fourth column
  var level=[];      //fifth column
  var photo=[]; //sixth column

for (var i = 0; i < entry.length; i += 6){
    // entry[i].content.$t retrieves the content of each cell
    name.push(entry[i].content.$t);
    college.push(entry[i+1].content.$t);
    phone_no.push(entry[i+2].content.$t);
    technology.push(entry[i+3].content.$t);
    level.push(entry[i+4].content.$t);
    photo.push(entry[i+5].content.$t);
  }
  console.log(name);
  console.log(college);
  console.log(phone_no);
  console.log(technology);
  console.log(level);
  console.log(photo);

})
});

// for (var i = 0; i < entry.length; i++) {
//
// }



var $message = 'Learn to Teach \n Teach to Learn'.split('').reverse();

// Set the frequency of your 'pops'
var $timeout = 200;

var outputSlowly = setInterval(function() {

    // Add text to the target element
    $('#home-gif').append($message.pop());

    // No more characters - exit
    if ($message.length === 0) {
        clearInterval(outputSlowly);
    }

}, $timeout);



// Getting data as Json from spreadsheet
