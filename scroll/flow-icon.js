var halfScreenHeight = Math.floor(screenHeight / 3);
var topy;
var icony = 0;
function scrollFunction(select) {
            topy = document.body.scrollTop || document.documentElement.scrollTop;
            icony = topy + halfScreenHeight;
            $(select).stop().animate({
                top: icony + 'px'
            }, 1000);
        }
scrollFunction(param);
$(window).scroll(scrollFunction(param));
