// $(".navbar ul li").mouseover(function(){
//     let i = $(this).index();
//     console.log(i);

//     let value = i * 240;
//     $(".bar").css("left",value)
// });


// menu 0 1 2 3 4
function nowMenu(menu){
    console.log(menu)

    if(menu == "main"){
        $(".navbar ul").find("li").mouseover(over);
        $(".navbar ul").mouseout(out);
    }else{
        $(".navbar li").eq(menu).addClass("active"); //현재 메뉴의 위치(after에서 점)
        $(".bar").css({left:menu*240,opacity:1}); // 처음 바의 위치

        $(".navbar ul").find("li").mouseover(over); // function over 호출
        
        $(".navbar ul").mouseout(function(){
            $(".bar").css({left:menu*240,opacity:1}); // mouseout 시 원위치로 이동
        });
    }

}


function over(){
    let i = $(this).index();
    let value = i * 240;
    $(".bar").css({left:value,opacity:1})
}
function out(){
    $(".bar").css({opacity:0})
}
