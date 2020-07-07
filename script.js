//nav
$('.burgerIcon1').hover(

    function(){
    tweenMax.to('.burgerLine:first-child',0.2, {x: -10});
    tweenMax.to('.burgerLine:last-child',0.2, {x: 10});
}, 

    function(){
        tweenMax.to('.burgerLine:first-child',0.2, {x: 0});
        tweenMax.to('.burgerLine:last-child',0.2, {x: 0});
    
});
