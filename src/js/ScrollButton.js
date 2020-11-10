/* -------------------------------------------------------------------------
      begin Scroll Down Button
* ------------------------------------------------------------------------- */
(function scrollButton () {
    'use strict';
    // console.log("scrolling")

    const btnScrollDown = document.querySelector('#scroll_down');

    function scrollDown() {
        const windowCoords = document.documentElement.clientHeight - document.documentElement.clientHeight / 3;
        (function scroll() {
            if (window.pageYOffset < windowCoords) {
                window.scrollBy(0, 10);
                setTimeout(scroll, 0);
            }
            if (window.pageYOffset > windowCoords) {
                window.scrollTo(0, windowCoords);
            }
        })();
    }
    if (btnScrollDown) {
        btnScrollDown.addEventListener('click', scrollDown);
    }
})();
/* -------------------------------------------------------------------------
      end Scroll Down Button
* ------------------------------------------------------------------------- */
