var $message = 'Learn to Teach -- Teach to Learn'.split('').reverse();

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
