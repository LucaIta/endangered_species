
var uncenterCurrentlyCenteredAnimal = function () {
    $(".selectedAnimal").removeClass("selectedAnimal"); // target the current selected animal and unselect it so that they don't overlap
}

var removeBlurEffect = function () {
    $(".container").removeClass("blurred");

}

var moveAnimalOnClick = function (animal) {
    if (!$(animal).hasClass("selectedAnimal")) {
        uncenterCurrentlyCenteredAnimal();
        $(".container").addClass("blurred");
    } else {
        removeBlurEffect();
    }
    $(animal).toggleClass("selectedAnimal");
};


$("document").ready(function () {
    $(".animal").click(function () {
        moveAnimalOnClick(this);
    });
    $(".worldMapContainer , .masthead").click(function () {
        uncenterCurrentlyCenteredAnimal();
        removeBlurEffect();
    });
});


