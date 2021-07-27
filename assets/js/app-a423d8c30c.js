(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// Example

// var $ = require('jquery');
// var ScrollBooster = require('scrollbooster');
// require('isotope-masonry-horizontal');
// var isotope = require('isotope-layout');
// var masonryHorizontal = require('./masonry-horizontal')

var SBRef;
var grid;

function Setup() {
    grid = new Isotope( '.work-posts-wrapper', {
        layoutMode: 'masonryHorizontal',
        itemSeletor: '.grid-item',
        masonryHorizontal: {
            rowHeight: $(window).height() > 700 && $(window).width() > 650 ? 235 : 167,
            gutter: $(window).height() > 700 && $(window).width() > 650 ? 20 : 10
        }
    });

    if(SBRef && grid) {
        grid.layout();
    }

    if($(window).width() > 650) {
        if(!SBRef) { 
            var viewport = document.querySelector('.scroll-wrapper');
            var content = document.querySelector(".scroll-wrapper > .scroll-content");
            SBRef = new ScrollBooster({
                viewport,
                content,
                direction: "horizontal",
                scrollMode: 'transform',
                preventDefaultOnEmulateScroll: true,
                // bounce: true,
                textSelection: false,
                emulateScroll: true,
                onWheel: (state, event) => {
                    let offsetX = 0
                    if (event.deltaY >= 0 && event.deltaX >= 0) offsetX = Math.max(event.deltaY, event.deltaX)
                    if (event.deltaY <= 0 && event.deltaX <= 0) offsetX = Math.min(event.deltaY, event.deltaX)
                    SBRef.scrollOffset.x = -offsetX
                    SBRef.scrollOffset.y = -event.deltaY
                    // console.log(SBRef);
                }
            });
        }
        if(SBRef && grid) {
            grid.layout();
            SBRef.updateMetrics();
        }
    } else {
        if(SBRef && grid) {
            SBRef.destroy();
            grid.destroy();
            SBRef = null;
            grid = null;
        }
    }
    
   
    
}


$(window).on('resize',function () {
    Setup();
});
$(function() {
    $(window).trigger('resize');
    var myInterval;  // Declare it on global scope.

    $('img.img-loop')
        .mouseover(function() {
        $(this).data('old-src', $(this).attr('src'));
        var alt_src = $(this).data('alt-src').split(';');

        /*  Removed this part...
            var i;
            for (i = 0; i < alt_src.length; i++) {
                $(this).attr('src', alt_src[i]);
            }
            */
        var that = $(this);
        var i=0;

        // setTimeout(function(){
            i++;
            that.attr('src', alt_src[i]);
        // }, 300)
        
        myInterval = setInterval(function(){  // Set an interval
            if(i==alt_src.length){
                i=0;
                that.attr("src", that.data('old-src'));
            }else{
                that.attr('src', alt_src[i]);
                i++;
            }
        }, 750);  // Interval delay in millisecs.
    })
    .mouseout(function() {
        clearInterval(myInterval);  // Clear the interval
        $(this).attr('src', $(this).data('old-src'));
    });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvX2Fzc2V0cy9qYXZhc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBFeGFtcGxlXG5cbi8vIHZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG4vLyB2YXIgU2Nyb2xsQm9vc3RlciA9IHJlcXVpcmUoJ3Njcm9sbGJvb3N0ZXInKTtcbi8vIHJlcXVpcmUoJ2lzb3RvcGUtbWFzb25yeS1ob3Jpem9udGFsJyk7XG4vLyB2YXIgaXNvdG9wZSA9IHJlcXVpcmUoJ2lzb3RvcGUtbGF5b3V0Jyk7XG4vLyB2YXIgbWFzb25yeUhvcml6b250YWwgPSByZXF1aXJlKCcuL21hc29ucnktaG9yaXpvbnRhbCcpXG5cbnZhciBTQlJlZjtcbnZhciBncmlkO1xuXG5mdW5jdGlvbiBTZXR1cCgpIHtcbiAgICBncmlkID0gbmV3IElzb3RvcGUoICcud29yay1wb3N0cy13cmFwcGVyJywge1xuICAgICAgICBsYXlvdXRNb2RlOiAnbWFzb25yeUhvcml6b250YWwnLFxuICAgICAgICBpdGVtU2VsZXRvcjogJy5ncmlkLWl0ZW0nLFxuICAgICAgICBtYXNvbnJ5SG9yaXpvbnRhbDoge1xuICAgICAgICAgICAgcm93SGVpZ2h0OiAkKHdpbmRvdykuaGVpZ2h0KCkgPiA3MDAgJiYgJCh3aW5kb3cpLndpZHRoKCkgPiA2NTAgPyAyMzUgOiAxNjcsXG4gICAgICAgICAgICBndXR0ZXI6ICQod2luZG93KS5oZWlnaHQoKSA+IDcwMCAmJiAkKHdpbmRvdykud2lkdGgoKSA+IDY1MCA/IDIwIDogMTBcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYoU0JSZWYgJiYgZ3JpZCkge1xuICAgICAgICBncmlkLmxheW91dCgpO1xuICAgIH1cblxuICAgIGlmKCQod2luZG93KS53aWR0aCgpID4gNjUwKSB7XG4gICAgICAgIGlmKCFTQlJlZikgeyBcbiAgICAgICAgICAgIHZhciB2aWV3cG9ydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY3JvbGwtd3JhcHBlcicpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjcm9sbC13cmFwcGVyID4gLnNjcm9sbC1jb250ZW50XCIpO1xuICAgICAgICAgICAgU0JSZWYgPSBuZXcgU2Nyb2xsQm9vc3Rlcih7XG4gICAgICAgICAgICAgICAgdmlld3BvcnQsXG4gICAgICAgICAgICAgICAgY29udGVudCxcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb246IFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgICAgICAgIHNjcm9sbE1vZGU6ICd0cmFuc2Zvcm0nLFxuICAgICAgICAgICAgICAgIHByZXZlbnREZWZhdWx0T25FbXVsYXRlU2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vIGJvdW5jZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB0ZXh0U2VsZWN0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlbXVsYXRlU2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgICAgIG9uV2hlZWw6IChzdGF0ZSwgZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9mZnNldFggPSAwXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kZWx0YVkgPj0gMCAmJiBldmVudC5kZWx0YVggPj0gMCkgb2Zmc2V0WCA9IE1hdGgubWF4KGV2ZW50LmRlbHRhWSwgZXZlbnQuZGVsdGFYKVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGVsdGFZIDw9IDAgJiYgZXZlbnQuZGVsdGFYIDw9IDApIG9mZnNldFggPSBNYXRoLm1pbihldmVudC5kZWx0YVksIGV2ZW50LmRlbHRhWClcbiAgICAgICAgICAgICAgICAgICAgU0JSZWYuc2Nyb2xsT2Zmc2V0LnggPSAtb2Zmc2V0WFxuICAgICAgICAgICAgICAgICAgICBTQlJlZi5zY3JvbGxPZmZzZXQueSA9IC1ldmVudC5kZWx0YVlcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coU0JSZWYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmKFNCUmVmICYmIGdyaWQpIHtcbiAgICAgICAgICAgIGdyaWQubGF5b3V0KCk7XG4gICAgICAgICAgICBTQlJlZi51cGRhdGVNZXRyaWNzKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBpZihTQlJlZiAmJiBncmlkKSB7XG4gICAgICAgICAgICBTQlJlZi5kZXN0cm95KCk7XG4gICAgICAgICAgICBncmlkLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIFNCUmVmID0gbnVsbDtcbiAgICAgICAgICAgIGdyaWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgXG4gICAgXG59XG5cblxuJCh3aW5kb3cpLm9uKCdyZXNpemUnLGZ1bmN0aW9uICgpIHtcbiAgICBTZXR1cCgpO1xufSk7XG4kKGZ1bmN0aW9uKCkge1xuICAgICQod2luZG93KS50cmlnZ2VyKCdyZXNpemUnKTtcbiAgICB2YXIgbXlJbnRlcnZhbDsgIC8vIERlY2xhcmUgaXQgb24gZ2xvYmFsIHNjb3BlLlxuXG4gICAgJCgnaW1nLmltZy1sb29wJylcbiAgICAgICAgLm1vdXNlb3ZlcihmdW5jdGlvbigpIHtcbiAgICAgICAgJCh0aGlzKS5kYXRhKCdvbGQtc3JjJywgJCh0aGlzKS5hdHRyKCdzcmMnKSk7XG4gICAgICAgIHZhciBhbHRfc3JjID0gJCh0aGlzKS5kYXRhKCdhbHQtc3JjJykuc3BsaXQoJzsnKTtcblxuICAgICAgICAvKiAgUmVtb3ZlZCB0aGlzIHBhcnQuLi5cbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGFsdF9zcmMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3NyYycsIGFsdF9zcmNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKi9cbiAgICAgICAgdmFyIHRoYXQgPSAkKHRoaXMpO1xuICAgICAgICB2YXIgaT0wO1xuXG4gICAgICAgIC8vIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIHRoYXQuYXR0cignc3JjJywgYWx0X3NyY1tpXSk7XG4gICAgICAgIC8vIH0sIDMwMClcbiAgICAgICAgXG4gICAgICAgIG15SW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpeyAgLy8gU2V0IGFuIGludGVydmFsXG4gICAgICAgICAgICBpZihpPT1hbHRfc3JjLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgaT0wO1xuICAgICAgICAgICAgICAgIHRoYXQuYXR0cihcInNyY1wiLCB0aGF0LmRhdGEoJ29sZC1zcmMnKSk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGF0LmF0dHIoJ3NyYycsIGFsdF9zcmNbaV0pO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgNzUwKTsgIC8vIEludGVydmFsIGRlbGF5IGluIG1pbGxpc2Vjcy5cbiAgICB9KVxuICAgIC5tb3VzZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChteUludGVydmFsKTsgIC8vIENsZWFyIHRoZSBpbnRlcnZhbFxuICAgICAgICAkKHRoaXMpLmF0dHIoJ3NyYycsICQodGhpcykuZGF0YSgnb2xkLXNyYycpKTtcbiAgICB9KTtcbn0pO1xuIl19
