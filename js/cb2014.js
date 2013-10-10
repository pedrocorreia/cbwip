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
        if( snapper.state().state=="open" ){ 
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

}).call(this, window, document);