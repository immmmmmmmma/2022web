$(".navbar ul li").mouseover(function(){
    let i = $(this).index();

    let value = i * 240;
    $(".bar").css("left",value)
})

$(".navbar ul").find("li").mouseover(over);
$(".navbar ul").mouseover(over)

founction over(){
    let i = $(this).index();
    let value = i * 240;
    $(".bar").css({left:value,opacity:1})
}
function out(){
    $(".bar").css({opacity:1})
}

