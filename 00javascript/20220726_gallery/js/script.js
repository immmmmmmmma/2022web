console.log("ok");
$(".itemWrap>li").click(function(){
    console.log($(this).index())
    let i = $(this).index();
    $("#images>p").hide().eq(i).show();
})

// $(".right").click(function(){
//     current++;
//     if(current == 3) {current = 2}
//     console.log(current);
//     let value = current * -760;
//     // $(".itemWrap").css("left",current*-760)
//     $(".itemWrap").stop().animate({"left":value},300)
// })
// $(".left").click(function(){
//     current--;
//     if(current < 0){current = 0}
//     let value = current * -760;
//     // $(".itemWrap").css("left",current*-760)
//     $(".itemWrap").stop().animate({"left":value},300)
// })


let current = 0;
$(".right").click(function(){
    current++;
    if(current == 3) { current = 2 }
    console.log(current);
    view(current)
})

$(".left").click(function(){
    current--;
    if(current < 0){current = 0}
    view(current)
})

function view(current){
    let value = current * -760;
    // $(".itemWrap").css("left",value)
    $(".itemWrap").stop().animate({"left":value},300)
}


// let current = 0;

// $(".right").click(function(){
//     current++;
//     viewCurrent(current)
// })

// $(".left").click(function(){
//     current--;
//     viewCurrent(current)
// })

// function viewCurrent(count){
// console.log(count)
// }