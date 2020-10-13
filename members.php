<div id="card">
    <div class="color color-top"></div>

    <div class="slider">
        <div class="item">
            <div class="item-inner" style="background-color: black;">
                <img src="pictures/profiles/Punch.png" alt="Punch" style="border: 25px solid #f5b402;">
                <div class="name" style="color: black; background-color: #f5b402;">PUNCH</div>
                <div class="skill" style="color: #fff;">Writer</div>
            </div>
        </div>
        <div class="item">
            <div class="item-inner" style="background-color: #f5b402">
                <img src="pictures/profiles/Meepooh.png" alt="Meepooh" style="border: 25px solid black;">
                <div class="name" style="color: #fff; background-color: black;">MEEPOOH</div>
                <div class="skill" style="color: black;">Designer</div>
            </div>
        </div>
        <div class="item">
            <div class="item-inner" style="background-color: black;">
                <img src="pictures/profiles/Pantai.png" alt="Pantai" style="border: 25px solid #f5b402;">
                <div class="name" style="color: black; background-color: #f5b402;">PANTAI</div>
                <div class="skill" style="color: #fff;">Writer</div>
            </div>
        </div>
        <div class="item">
            <div class="item-inner" style="background-color: #f5b402">
                <img src="pictures/profiles/Pleum.png" alt="Pleum" style="border: 25px solid black;">
                <div class="name" style="color: #fff; background-color: black;">PLEUM</div>
                <div class="skill" style="color: black;">3D Modeler</div>
            </div>
        </div>
        <div class="item">
            <div class="item-inner" style="background-color: black;">
                <img src="pictures/profiles/Teen.png" alt="Teen" style="border: 25px solid #f5b402;">
                <div class="name" style="color: black; background-color: #f5b402;">TEEN</div>
                <div class="skill" style="color: #fff;">Programmer</div>
            </div>
        </div>
        <div class="item">
            <div class="item-inner" style="background-color: #f5b402">
                <img src="pictures/profiles/Yow.png" alt="Yow" style="border: 25px solid black;">
                <div class="name" style="color: #fff; background-color: black;">YOW</div>
                <div class="skill" style="color: black;">Programmer</div>
            </div>
        </div>
    </div>

    <div class="color color-bottom"></div>
</div>

<script>
$("document").ready(function() {
    let sliderSetting;

    if(documentWidth > 1300) {
        sliderSetting = {
            centerMode: true,
            slidesToShow: 5
        }
    } else if(documentWidth > 800) {
        sliderSetting = {
            centerMode: true,
            slidesToShow: 3
        }
    } else {
        sliderSetting = {
            centerMode: true,
            slidesToShow: 1
        }
    }

    $(".slider").slick(sliderSetting);

    intervalSlideNextFunction = setInterval(slideNext, 3000);
});
</script>
