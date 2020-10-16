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

function scrollView(elem) {
    let docViewTop = $(window).scrollTop();
    let docViewBottom = docViewTop + $(window).height();
    let elemTop = $(elem).offset().top;
    let elemBottom = elemTop + $(elem).height();

    return ((docViewTop > elemTop && docViewTop < elemBottom) || (docViewBottom > elemTop && docViewBottom < elemBottom));
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
        let docViewTop = $(window).scrollTop();

        // ---Home.php---
        // Section 1
        if(docViewTop > 300) {
            $('#sec1_text').css('left', '-100%');
            $('#astronautImage').css('top', '-100%');
        } else if(docViewTop <= 300) {
            $('#sec1_text').css('left', '0');
            $('#astronautImage').css('top', '26%');
        }

        // Section 2
        if(scrollView("#sec2")) {
            if(documentWidth > 1300) {
                $('#sec2_text').css('font-size', "calc(" + (docViewTop / 12) + "px + " + 5 + "vw)");
            } else {
                $('#sec2_text').css('font-size', "calc(" + (docViewTop / 14) + "px + " + 2 + "vw)");
            }
        }

        // Section 3
        if(!problemElementVis && scrollView(".problem")) {
            problemElementVis = true;

            $(".problem_number").counterUp({
                delay: 3,
                time: 500
            });
        }

        // Section 5
        if(scrollView("#sec5 > img:nth-child(1)")) $("#sec5 > img:nth-child(1)").css("transform", "translateX(0)");
        if(scrollView("#sec5 > img:nth-child(2)")) $("#sec5 > img:nth-child(2)").css("transform", "translateX(0)");
        if(scrollView("#sec5 > img:nth-child(3)")) $("#sec5 > img:nth-child(3)").css("transform", "translateX(0)");
        if(scrollView("#sec5 > img:nth-child(4)")) $("#sec5 > img:nth-child(4)").css("transform", "translateX(0)");
        if(scrollView("#sec5 > img:nth-child(5)")) $("#sec5 > img:nth-child(5)").css("transform", "translateX(0)");
    });
});
