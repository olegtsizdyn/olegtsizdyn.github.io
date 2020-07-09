function mode() {
        if ($('#checkbox')[0].checked) {
                $("body").css("background", "white");
                $(".mouse").css("border", "2px solid black");
                $(".wheel").css("background", "black");
                $("h1").css("color", "black");
                $("h2").css("color", "black");
                $("h3").css("color", "black");
                $("p").css("color", "black");
                $(".work").css("box-shadow", "0px 0px 20px 0px black");
        } else {
                $("body").css("background", "black");
                $(".mouse").css("border", "2px solid white");
                $(".wheel").css("background", "white");
                $("h1").css("color", "white");
                $("h2").css("color", "white");
                $("h3").css("color", "white");
                $("p").css("color", "white");
                $(".work").css("box-shadow", "0px 0px 20px 0px white");
        }
}