// (function(){
  var snapper = new Snap({
    element: document.getElementById('content'),
    dragger: null,
    disable: 'none',
    addBodyClasses: true,
    hyperextensible: false,
    resistance: 0.5,
    flickThreshold: 50,
    transitionSpeed: 0.3,
    easing: 'ease',
    maxPosition: 266,
    minPosition: -266,
    tapToClose: true,
    touchToDrag: false,
    slideIntent: 40,
    minDragDistance: 5,
    additionalElements: ['main-nav'],
  });

  document.getElementById("main-toggler").addEventListener('click', function(){
    if( snapper.state().state=="left" ){
      snapper.close();
    } else {
      snapper.open('left');
    }
  });
  document.getElementById("user-toggler").addEventListener('click', function(){
    if( snapper.state().state=="right" ){
      snapper.close();
    } else {
      snapper.open('right');
    }
  });
  window.addEventListener('load',function(){
    if (window.innerWidth >= 650) {
      snapper.disable();
    }
  });
  window.addEventListener('resize', function(){
    if (window.innerWidth >= 650) {
      if( snapper.state().state=="left" || snapper.state().state=="right" ){ 
        snapper.close();
        snapper.disable();
      } else {
        snapper.disable();
      }
    } else {
      snapper.enable();
    }
  });

  (function(){

    function speakerInfo(reset) {
      var tds = Ink.ss('.td');
      if(reset === true) {
        for ( var i=0; i < tds.length; i++ ) {
          var avatarEl = tds[i].parentNode.parentNode.parentNode.firstElementChild;
          var avatarHeight = Ink.Dom.Element.elementHeight(avatarEl);
          tds[i].removeAttribute('style');
        } 
      } else {
        for ( var i=0; i < tds.length; i++ ) {
          var avatarEl = tds[i].parentNode.parentNode.parentNode.firstElementChild;
          var avatarHeight = Ink.Dom.Element.elementHeight(avatarEl);
          tds[i].style.height = avatarHeight + 'px';
        }
      }
    }

    window.addEventListener('resize',function(){
      if (window.innerWidth >= 650) {
        speakerInfo();
      } else {
        speakerInfo(true);
      }

    });

    window.addEventListener('load',function(){
      if (window.innerWidth >= 650) {
        speakerInfo();
      } else {
        speakerInfo(true);
      }
    });

    $('.flexslider').flexslider({
      animation: "slide",
      controlNav: false,
    });

    Ink.requireModules( ['Ink.Dom.Selector_1', 'Ink.UI.ImageQuery_1'], function( Selector, ImageQuery ){
      // var imageQueryElement = Ink.s('.imageQueryExample img');
      var imageQueryObj = new ImageQuery('img.iq',{
        src: './img/{:label}/{:file}',
        queries: [
        {
          label: 'small',
          width: 480
        },
        {
          label: 'medium',
          width: 640
        },
        {
          label: 'large',
          width: 1024
        }   
        ]
      });
    });

    Ink.requireModules( ['Ink.Dom.Selector_1', 'Ink.UI.SmoothScroller_1'], function( Selector, SmoothScroller ){
      console.log('asdjhadshjasjasjhasjhadsjhg');
    });

  }).call(this, window, document);