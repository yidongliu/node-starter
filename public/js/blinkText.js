'use strict';

var text = 'Check Out My Node.js Work!';
$(text).hide().appendTo('h2').each(function(i) {
    $(this).delay(100 * i).fadeIn();
});