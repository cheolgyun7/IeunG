$(function () {
    let curIndex = 0;
    let IbannerTotal = $(".ieung_mainBanner>li").length;
    console.log(IbannerTotal);
    let Ieung_width = $(".ieung_mainBanner>li:eq(0)").width();
    console.log(Ieung_width);
    let Ieung_Allwidth = $(".ieung_mainBanner").outerWidth();
    console.log(Ieung_Allwidth);
    let lastChild = $(".ieung_mainBanner>.ieung_mainBanner_slide4").clone();
    let firstChild = $(".ieung_mainBanner>.ieung_mainBanner_slide1").clone();
    $(".ieung_mainBanner").append(firstChild);
    $(".ieung_mainBanner").prepend(lastChild);

    let IeungTotalWidth = Ieung_width*(IbannerTotal+2)
    $(".ieung_mainBanner").width(IeungTotalWidth);

    $(".ieung_mainBanner>li").width(Ieung_width);

    function moveBanner(){
        $(".ieung_mainBanner").stop().animate({
            marginLeft: -curIndex*Ieung_width
        },1000)

        if(curIndex == IbannerTotal){
            $(".ieung_mainBannerBtn>li").eq(0).addClass("active")
            .siblings().removeClass("active");
        }
        $(".ieung_mainBannerBtn>li").eq(curIndex).addClass("active")
        .siblings().removeClass("active");
    }

    //bannerBtn>li를 클릭하면 해당하는 버튼은 클래스 active를 줘서
    //형제는 active를 제거
    $(".ieung_mainBannerBtn>li").on("click",function(){
        curIndex=$(this).index();
        moveBanner();
    })

    //left
    $(".prevBtn>a").on("click",function(){
        if(curIndex==0){
            curIndex=4;
            $(".ieung_mainBanner").css("margin-left",-100*curIndex+"%")
        }

        curIndex--;
        moveBanner();
    })

    $(".nextBtn>a").on("click",function(){
        if(curIndex == IbannerTotal){
            curIndex=0;
            $(".ieung_mainBanner").css("margin-left",-100*curIndex+"%");
        }
        console.log(curIndex);
        curIndex++;
        moveBanner();
    
    })


    //윈도우의 스크롤 이벤트가 발생하면 스크롤의
    //위치값을 받아서 배경그림의 위치값을 얼마나? 움직일까?
    $(window).on("scroll",function(){
        let yPos=$(window).scrollTop();
        console.log(yPos);
        //그림이 움직일 위치는
        let moveY=yPos*0.1;
        //center뒤에 공백을줘서 됨
        // $('.ieung_logitech>.ieung_parallax').css("background-position","center "+moveY+"px")
    })
})