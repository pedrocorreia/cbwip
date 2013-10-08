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
    additionalElements: ['cena'],
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
        snapper.disable();
        snapper.close();
    } else {
        snapper.enable();
    }
});