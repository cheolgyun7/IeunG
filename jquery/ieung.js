$(function () {
    AOS.init();


    $(".ieungX>a").on("click",function(){
        $(".ieung_notice").slideUp(500);
    })

    // 모바일 햄버거버튼 toggle
    var hamb = $(".ham>a").length;
    console.log(hamb);
    $(".ham>a").on("click",function(e){
        e.preventDefault();
        var hamIndex = $(this).index();
        $(this).removeClass("active").siblings().addClass("active");
        if(hamIndex==0){
            $("#ieung_nav").show();
        }
        else{
            $("#ieung_nav").hide();
        }
        console.log(hamIndex)
    })

    // var wwWidth = $(window).width();
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
            curIndex=IbannerTotal;
            $(".ieung_mainBanner").css("margin-left",-100 * curIndex + "%")
        }

        curIndex--;
        moveBanner();
    })

    $(".nextBtn>a").on("click",function(){
        if(curIndex == IbannerTotal){
            curIndex=0;
            $(".ieung_mainBanner").css("margin-left", 0);
        }
        console.log(curIndex);
        curIndex++;
        moveBanner();
    
    })

    $(".ieung_Product_subbox>.ieung_love").on("click",function(){
      
        let heartIndex = $(this).index();
        // console.log(heartIndex)
        if(heartIndex==0){
            $(this).parent().find(".ieung_love:nth-child(2)")
            .addClass('active').siblings().removeClass('active'); 
        }
        else{
            $(this).parent().find(".ieung_love:nth-child(1)").addClass('active').siblings().removeClass('active');
        }
 
    })


    //윈도우의 스크롤 이벤트가 발생하면 스크롤의
    //위치값을 받아서 배경그림의 위치값을 얼마나? 움직일까?
    $(window).on("scroll",function(){
        let yPos=$(window).scrollTop();
        // console.log(yPos);
        //그림이 움직일 위치는
        let moveY=yPos*0.1;
        //center뒤에 공백을줘서 됨
        // $('.ieung_logitech>.ieung_parallax').css("background-position","center "+moveY+"px")
    })

    $(".buttonBox>a").on("click",function(e){
        e.preventDefault();

        var selectIndex = $(this).index();
        $(".ieung_Product_Allparts>.ieung_Product_parts").eq(selectIndex).show().siblings().hide();
        $(this).addClass('active').siblings().removeClass('active');
    })

    // let Lkbanner = $(".ieung_logitech_keyboard").index();
    // console.log(Lkbanner);
    // Lkbanner.hide();
    $(".ieung_logitech_keyboard").hide();
    $(".ieung_logitech_keyboard:nth-of-type(1)").show();
    
    $(".logitech_title>a").on("click",function(e){
        e.preventDefault();
        var logiBtn = $(this).index();
        console.log(logiBtn);
        $(".ieung_logitech_kinds_pic>.ieung_logitech_keyboard").eq(logiBtn).fadeIn(1000).siblings().fadeOut(1000);
        $(this).addClass('active').siblings().removeClass('active');
        $(".ieung_logitech_explain>p").eq(logiBtn).show().siblings().hide();
        $(this).addClass('active').siblings().removeClass('active');
    })

    // 배너 변수 정하기
    let gradeIndex=0;
    // 높이값정하기
    let liHeight = $(".ieung_after_write>.wide_innerbox>div:eq(0)").height();
    console.log(liHeight);
    //배너의 개수 알아내기
    let gradeCount = $(".ieung_after_write>.wide_innerbox>div").length;
    console.log(gradeCount);
    let objFirst = $(".ieung_after_write>.wide_innerbox>div:first").clone();
    $(".ieung_after_write>.wide_innerbox").append(objFirst)

    $(".ieung_after_write>.wide_innerbox").height((gradeCount+1)*liHeight)

    function gradeBanner(){
        if(gradeIndex==3){
            gradeIndex=0;
            $(".ieung_after_write>.wide_innerbox").css("margin-top",0)
        }
        gradeIndex++;
        $(".ieung_after_write>.wide_innerbox").stop().animate({
            marginTop:-gradeIndex*liHeight
        },1000)
    }
    setInterval(gradeBanner,4000);

    $(window).resize(function(){
        wwWidth=$(window).width();
        resizeOO();
    })

    // 메인 슬라이드 배너 리사이즈
    function resizeOO(){
        curIndex=0;
        $(".ieung_mainBanner").css("margin-left",0);
        
        $(".ieung_mainBanner>li").outerWidth(wwWidth);
        Ieung_Allwidth = $(".ieung_mainBanner>li").outerWidth();
        // console.log(Ieung_Allwidth);

        //리사이즈하고싶은 것들은 무조건 다시 선언을 해주어야 한다
        Ieung_width= $(".ieung_mainBanner>li").outerWidth();
        console.log(Ieung_width);
        $(".ieung_mainBanner").width(Ieung_Allwidth*(IbannerTotal+2));
        // console.log($(".ieung_mainBanner").outerWidth())
    }


    //모바일 햄버거버튼  아코디언 효과
    $("#ieung_nav>li>a").on("click",function(){
        $(this).next(".nav").slideToggle(500);
        $(this).parent().toggleClass("active")
        .siblings().removeClass("active");
        // .children(".nav").slideUp(500);
    })

})