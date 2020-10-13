let documentWidth = $(window).width();

// Hamburger Menu
let menuOpen = false;

// ---Members.php---
let intervalSlideNextFunction;

function load(siteName, dataTarget) {
    // ---Members.php---
    clearInterval(intervalSlideNextFunction);

    if(siteName == "home.php") $("#menubar").css("display", "none");
    else $("#menubar").css("display", "block");

    $.get(siteName, function(data) {
        $(dataTarget).html(data);
    });
}

// Hamburger Menu
function hamburgerMenuClick() {
    if(menuOpen) {
        menuOpen = false;
        $("#slideMenu").css("right", "-100%");
    } else {
        menuOpen = true;
        $("#slideMenu").css("right", "0");
    }
}

// ---Index.php---
function resolutionFixAlertClose() {
    $("#resolutionFixAlert").css("top", "-100%");
}

// ---Members.php---
function slideNext() {
    $(".slick-next").click();
}

$("document").ready(function() {
    load("home.php", "#content");

    // ---Home.php---
    // Section 3
    let problemElementVis = false;

    $(window).scroll(function() {
        // ---Home.php---
        let documentViewTop = $(window).scrollTop();
        let documentViewBottom = documentViewTop + $(window).height();
        let sec2Top = $("#sec2").offset().top;
        let sec2Bottom = sec2Top + $("#sec2").height();

        let problemElementTop = $(".problem").offset().top;

        // ---Home.php---
        // Section 1
        if(documentViewTop > 300) {
            $('#sec1_text').css('left', '-100%');
            $('#astronautImage').css('top', '-100%');
        } else if(documentViewTop <= 300) {
            $('#sec1_text').css('left', '0');
            $('#astronautImage').css('top', '26%');
        }

        // Section 2
        if(documentViewBottom <= sec2Bottom) {
            if(documentWidth > 1300) {
                $('#sec2_text').css('font-size', "calc(" + (documentViewTop / 4) + "px + " + 5 + "vw)");
            } else {
                $('#sec2_text').css('font-size', "calc(" + (documentViewTop / 8) + "px + " + 2 + "vw)");
            }
        }

        // Section 3
        if(!problemElementVis && documentViewBottom > problemElementTop) {
            problemElementVis = true;

            $(".problem_number").counterUp({
                delay: 3,
                time: 500
            });
        }
    });
});
