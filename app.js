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


function myMap() {
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
