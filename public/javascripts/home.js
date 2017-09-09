var str = "CHECK OUT MY WORK";

var spans = '<span>' + str.split("").join(' </span><span>') + '</span>';

$(spans).hide().appendTo('body').each(function(i) {
    $(this).delay(100 * i).fadeIn();
});