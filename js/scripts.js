$(document).ready(function(){
    $("#mycarousel").carousel({ interval: 200 });
    $("#carouselButton").click(function(){
        if($("#carouselButton").children('span').hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
        } else {
            $("#mycarousel").carousel('cycle');
        }
        
        $("#carouselButton").children('span').toggleClass("fa-pause");
        $("#carouselButton").children('span').toggleClass("fa-play");
    });

    $("#loginButton").click(function(){
        $("#loginModal").modal('show');
    })

    $("#loginModal").find(".modal-header").find("[type='button']").click(function(){
        $("#loginModal").modal("hide");
    })

    $("#reservetableButton").click(function(){
        $("#reserveModal").modal("show");
    })

    $("#reserveModal").find(".modal-header").find("[type='button']").click(function(){
        $("#reserveModal").modal("hide");
    })
});