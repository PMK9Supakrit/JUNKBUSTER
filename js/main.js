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
    // Section 2
    let problemElementVis = false;

    $(window).scroll(function() {
        // ---Home.php---
        let height = $(window).scrollTop();
        let problemElementTop = $(".problem").offset().top;

        // ---Home.php---
        // Section 1
        let isOpen = true;
        if(height > 300 && isOpen) {
            $('#sec1_text').css('left', '-40%');
            $('#sec1_astronaut').css('top', '-40%');
        } else if(height <= 300 && isOpen) {
            $('#sec1_text').css('left', '10%');
            $('#sec1_astronaut').css('top', '20%');
        }

        // Section 2
        if(height > 0 && height < 1200) $('#sec2_text').css('font-size', (height / 10) + 120);

        if(!problemElementVis && height > problemElementTop) {
            problemElementVis = true;

            $(".problem_number").counterUp({
                delay: 5,
                time: 500
            });
        }
    });
});
