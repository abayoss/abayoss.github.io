  /* -------------------------------------------------------------------------
     begin Scroll Down Button
   * ------------------------------------------------------------------------- */
  (function() {
    'use strict';
  
    const btnScrollDown = document.querySelector('#scroll_down');
  
    function scrollDown() {
      const windowCoords = document.documentElement.clientHeight / 2;
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
  
    btnScrollDown.addEventListener('click', scrollDown);
  })();
    /* -------------------------------------------------------------------------
       end Scroll Down Button
     * ------------------------------------------------------------------------- */