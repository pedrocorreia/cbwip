// (function(){
var snapper = new Snap({
    element: document.getElementById('content'),
    dragger: null,
    disable: 'right',
    addBodyClasses: true,
    hyperextensible: false,
    resistance: 0.5,
    flickThreshold: 50,
    transitionSpeed: 0.3,
    easing: 'ease',
    maxPosition: 266,
    minPosition: -266,
    tapToClose: true,
    touchToDrag: true,
    slideIntent: 40,
    minDragDistance: 5,
    additionalElements: ['main-nav'],
});

document.getElementById("snap-toggler").addEventListener('click', function(){
    if( snapper.state().state=="left" ){
        snapper.close();
    } else {
        snapper.open('left');
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
    window.addEventListener('resize',function(){
        var tds = Ink.ss('.td');
        for ( var i=0; i < tds.length; i++ ) {
            var avatarEl = tds[i].parentNode.parentNode.parentNode.firstElementChild;
            var avatarHeight = Ink.Dom.Element.elementHeight(avatarEl);
            tds[i].style.height = avatarHeight + 'px';
        }
    });
}).call(this, window, document);