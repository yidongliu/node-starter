'use strict';

var text = 'CHECK OUT MY NODE.JS WORK!';
var blinkText = '<span>' + text.split('').join('</span><span>') + '</span>';
$(blinkText).hide().appendTo('#blink').each(function(i) {
    $(this).delay(100 * i).fadeIn();
});