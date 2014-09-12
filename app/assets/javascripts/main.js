$(function() {
    var navToggle = false;
    $('a#navDrop').click(function() {
        navToggle = !navToggle;
        $('aside').slideToggle(800);
        if (navToggle) {
            $(this).addClass('dropActive');
        } else {
            $(this).removeClass('dropActive');
        }
        return false;
    });
    $('div.flag a.countryLink').hover(function() {
        $(this).next().css('font-weight', 'bold');
    }, function() {
        $(this).next().css('font-weight', 'normal');
    });
});
var clockInterval = null;
var setDebtClockFast = function(debtFigFast, incrFast) {
    var countFast = 0;
    var debtFigFast = debtFigFast;
    var incrFast = Math.round(incrFast);
    $('span#debtDisplayFast').html(addCommas(Math.round(debtFigFast)));
    clockIntervalFast = setInterval(function() {
        var currentFast = parseInt(debtFigFast, 10) + (parseInt(incrFast, 10) * parseInt(countFast, 10));
        $('span#debtDisplayFast').html(addCommas(Math.round(currentFast)));
        countFast++;
    }, 1000);
}
var setDebtClock = function(debtFig, incr) {
    var count = 1;
    var debtFig = debtFig;
    var incr = Math.round(incr);
    $('span#debtDisplay').html(addCommas(Math.round(debtFig)));
    $('h3#debtWords').html(toWords(Math.round(debtFig)));
    clockInterval = setInterval(function() {
        var current = parseInt(debtFig, 10) + (parseInt(incr, 10) * parseInt(count, 10));
        $('span#debtDisplay').html(addCommas(Math.round(current)));
        $('h3#debtWords').html(toWords(Math.round(current)));
        count = count + 2;
    }, 2000);
}
var addCommas = function(x) {
    return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, " ");
}