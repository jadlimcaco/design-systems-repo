 
/* RESPONSIVE NAV
---------------------------------------------------------------------------- */
$(document).ready(function() {
	
    $(function() {
        var pull 		= $('.pull');
            menu 		= $('.responsive-nav .nav');
            menuHeight	= menu.height();

        $(pull).on('click', function(e) {
            e.preventDefault();
            menu.slideToggle(240);
        });

        $(window).resize(function(){
            var w = $(window).width();
            if(w > 320 && menu.is(':hidden')) {
                menu.removeAttr('style');
            }
        });
    });

    /* PULL ANIMATED MENU */
    var anchor = document.querySelectorAll('button');
    
    [].forEach.call(anchor, function(anchor){
      var open = false;
      anchor.onclick = function(event){
        event.preventDefault();
        if(!open){
          this.classList.add('close');
          open = true;
        }
        else{
          this.classList.remove('close');
          open = false;
        }
      }
    }); 

});