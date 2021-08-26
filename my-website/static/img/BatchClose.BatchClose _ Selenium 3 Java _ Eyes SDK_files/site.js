
var $ = jQuery;
var $b = $('body');
var $w = $(window);
var $header = $('#site-header');


(function($) {

    window.onresize = function() {
        $b.removeClass('navigation-open');
        $("li.menu-item-has-children.is-open").removeClass("is-open");
    }
    $('#site-menu-open').on('click', function(e){
        e.preventDefault();
        $b.addClass('navigation-open');
    });
    $('#site-menu-close').on('click', function(e){
        e.preventDefault();
        $b.removeClass('navigation-open');
    });
    $('.menu-item-has-children > a').on('click', function(e){
        e.preventDefault();
        if($(window).width() <= 1024) {
            $(this).closest('li').toggleClass('is-open');
        }
    });
    $('#footer-menus .title').on('click', function(e){
        e.preventDefault();
        $(this).closest('.menu-group').toggleClass('is-open');
    });

    //At the applitools site the search input is defined as id=searchBox in Flare its defined as class="search-field"
    var $searchField = $('.search-field'); 
    $('#search-open').on('click', function(e){
        e.preventDefault();
        $b.addClass('search-shown');
        $searchField.focus().select();
    });
    $('#search-close').on('click', function(e){
        e.preventDefault();
        $b.removeClass('search-shown');
    });
    $b.on('keyup', function(e){
        // keyCode is getting deprecated use key instead when supported, which makes this messy
        let evt = e || window.event;
        var isEscape = false;
        if ("key" in evt) {
            isEscape = (evt.key == "Escape" || evt.key == "Esc");
        } else {
            isEscape = (evt.keyCode == 27);
        }
        if (isEscape) {
            $b.removeClass('search-shown');
        }
    });
    
})( jQuery );