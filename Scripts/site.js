$.noConflict();
jQuery(document).ready(function($) {


    // PLUGINS
    //-------------------------------------------------------------------

    // FOUNDATION
    $(document).foundation();                   

    // BX SLIDERS
    $('.bxslider').bxSlider({
            pager: false
        }); 
    $('.bxslider.auto').bxSlider({
            pager: false,
            auto: true,
            infiniteLoop: true
        }); 

    // SMOOTH SCROLL
    $('a.js-scroller').smoothScroll();          

    // SCROLLUP 
    $(function () {
        $.scrollUp({
            topDistance: 480, 
            topSpeed: 500, 
            animation: 'slide', 
            animationInSpeed: 500, 
            animationOutSpeed: 500, 
            scrollText: 'Scroll to top', 
            scrollImg: true
        });
    });

    // SCRIPTS
    //---------------------------------------------------------------------

    // PANELES SUPERIORES

    var btnAbrir = $(".show-panel");
    var btnCerrar = $(".hide-panel");
    var btnManuales = $(".show-panel.manuals");
    var menuApps = $(".widget-menu-widget:not(.widget-navigation)");
    var contactPanel = $(".top-panel.contact");
    var manualsPanel  = $(".top-panel.manuals");

    btnAbrir.click(function(){ 
        contactPanel.slideToggle('slow', function() {
            if (contactPanel.is(':hidden')) {
                menuApps.slideDown();
            } 
            else {
                menuApps.slideUp('fast');
                manualsPanel.slideUp('fast');
            }
        });
    });

    btnManuales.click(function(){
        contactPanel.hide();
        manualsPanel.slideToggle('slow');
    });

    btnCerrar.click(function(){
        contactPanel.slideUp('fast',function () {
            menuApps.slideDown();
        });
        manualsPanel.slideUp('fast');
    });


    // ACORDEONES 
    var cur_stus;
    //var cerrar = $('<br><a href="#" class="small button punch acordeon-cerrar">Cerrar</a>');
  
    $('.acordeon-contenido').hide();
    $('.acordeon-titulo').attr('stus', '')/*.prepend(abrir)*/;
    $('.acordeon-titulo').click(function(){
        cur_stus = $(this).attr('stus');
        if(cur_stus != "active")
        {
            $('.acordeon-contenido').slideUp();
            $('.acordeon-titulo').attr('stus', '');
             
            $(this).next().slideDown();
            //$(this).attr('stus', 'active').append(cerrar);
        }
        else
        {
            $(this).next().slideUp(function(){
                    $('a').remove('.acordeon-cerrar');
                });
            $(this).attr('stus', '');
        }
        return false;
    }); 


    // INTERFAZ 

    // Añade classes a los .metadata  del blog
    $('.published').addClass('panel callout');

});


_cookie_banner_enable_cookies = true;
_cookie_banner_disable_cookies = false;

(function() {

// Localize jQuery variable
var jQuery;

/******** Load jQuery if not present *********/
if (window.jQuery === undefined || window.jQuery.fn.jquery !== '1.7') {
  var script_tag = document.createElement('script');
  script_tag.setAttribute("type","text/javascript");
  script_tag.setAttribute("src",
    "http://ajax.googleapis.com/ajax/libs/jquery/1.7/jquery.min.js");
  if (script_tag.readyState) {
    script_tag.onreadystatechange = function () { // For old versions of IE
      if (this.readyState == 'complete' || this.readyState == 'loaded') {
        scriptLoadHandler();
      }
    };
  } else {
    script_tag.onload = scriptLoadHandler;
  }
  // Try to find the head, otherwise default to the documentElement
  (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
} else {
  // The jQuery version on the window is the one we want to use
  jQuery = window.jQuery;
  main();
}

/******** Called once jQuery has loaded ******/
function scriptLoadHandler() {
  // Restore $ and window.jQuery to their previous values and store the
  // new jQuery in our local jQuery variable
  jQuery = window.jQuery.noConflict(true);
  // Call our main function
  main(); 
}



/******** Our main function ********/
function main() { 
  jQuery(document).ready(function($) { 
                                      
    !function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function n(e){return e}function o(e){return decodeURIComponent(e.replace(t," "))}function i(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return r.json?JSON.parse(e):e}catch(n){}}var t=/\+/g,r=e.cookie=function(t,c,a){if(void 0!==c){if(a=e.extend({},r.defaults,a),"number"==typeof a.expires){var u=a.expires,f=a.expires=new Date;f.setDate(f.getDate()+u)}return c=r.json?JSON.stringify(c):String(c),document.cookie=[r.raw?t:encodeURIComponent(t),"=",r.raw?c:encodeURIComponent(c),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}for(var d=r.raw?n:o,p=document.cookie.split("; "),s=t?void 0:{},m=0,x=p.length;x>m;m++){var l=p[m].split("="),g=d(l.shift()),v=d(l.join("="));if(t&&t===g){s=i(v);break}t||(s[g]=i(v))}return s};r.defaults={},e.removeCookie=function(n,o){return void 0!==e.cookie(n)?(e.cookie(n,"",e.extend(o,{expires:-1})),!0):!1}});

    function updateWidgetPosition(t){switch($widget=$("#cookie_banner_wrapper"),$widget.removeClass("top-left top-right bottom-left bottom-right"),t){case"top-left":$widget.addClass("top-left");break;case"top-right":$widget.addClass("top-right");break;case"bottom-left":$widget.addClass("bottom-left");break;case"bottom-right":$widget.addClass("bottom-right")}}function updateWidgetTheme(t){$widget=$("#cookie_banner_wrapper"),t.match(/dark/)?$widget.addClass("dark"):$widget.removeClass("dark"),t.match(/large/)?$widget.addClass("large"):$widget.removeClass("large")}

    $el = $('#cookie_banner_container')
    $el.html("<div id=\"cookie_banner_wrapper\">\n <div id=\"cookie_wrapper_inner\">\n<p>Esta web usa cookies para mejorar la experiencia de los usuarios, haz clic para aceptar nuestra política de privacidad.<\/p>\n\n	<div class=\"buttons\">\n <a href=\"#\" class=\"btn-accept\">Acepto<\/a>\n <a href=\"/guia-sobre-el-uso-de-cookies\" class=\"btn-more\" target=\"_blank\">Más información<\/a>\n <\/div>\n<\/div>\n<\/div>");
	
    var cookie_banner_settings = {"headline":"","text":"Esta web usa cookies para mejorar la experiencia de los usuarios, haz clic para aceptar nuestra política de privacidad.","accept_text":"Acepto","more_text":"Más información","policy_url":"/guia-sobre-el-uso-de-cookies","position":"bottom-right"}
    template = 'small-light';

    // show or hide ?
    if ($.cookie('cookie_banner_enable_cookies') == 'true') {
      $el.hide();
    } else {
      $el.show();
    }

    if (template && template != '') {
      updateWidgetTheme(template);
    }
    if (position = cookie_banner_settings['position']) {
      updateWidgetPosition(position);
    }

    $el.find('a.btn-accept').click(function() {
      $.cookie('cookie_banner_enable_cookies', true, { expires: 356, path: '/' });
      $el.fadeOut();
    });

    $el.find('a.btn-decline').click(function() {
      $.cookie('cookie_banner_disable_cookies', true, { expires: 356, path: '/' });
    });

    $el.find('a.btn-more').click(function() {

    });

  });
}

})(); 

