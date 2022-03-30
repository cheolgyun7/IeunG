$(function(){
    $(".information_my_subtitle").hide();
    $(".information_my_subtitle:nth-of-type(1)").show();
    // $(".information_my_subtitle:nth-of-type(2)").show();
    $(".ieung_sub_information_title>a").on("click",function(e){
        e.preventDefault();
        let subpageTitle = $(this).index();
        console.log(subpageTitle);
        $(".information_my_subtitle").eq(subpageTitle).show().siblings().hide();
        $(this).addClass('active').siblings().removeClass('active');
        
    })
})