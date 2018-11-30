function play(adLib) {
    var audio = document.getElementById(adLib);
    audio.cloneNode(true).play();
}


$(".borders").on("click", function(){
    adLib = $(this).attr("data-adLib");
    play(adLib);
})

