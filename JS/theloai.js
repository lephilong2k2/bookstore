$(document).ready(function(){
    $(".submenu li:nth-child(1)").click(function(){
        $(".content div").show();
    });
});

$(document).ready(function(){
    $(".submenu li:nth-child(2)").click(function(){
        $(".content div").not(".thieunhi").hide();
    });
});

$(document).ready(function(){
    $(".submenu li:nth-child(3)").click(function(){
        $(".content div").not(".congnghe").hide();
    });
});

$(document).ready(function(){
    $(".submenu li:nth-child(4)").click(function(){
        $(".content div").not(".kinhte").hide();
    });
});

$(document).ready(function(){
    $(".submenu li:nth-child(5)").click(function(){
        $(".content div").not(".lichsu").hide();
    });
});

$document.ready(function(){
    $('li').hover(function(){
        $(this).toggleClass('submenu li');
    });
});