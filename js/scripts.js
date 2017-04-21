
var uncenterCurrentlyCenteredAnimal = function () {  // target the current selected animal and unselect it so that they don't overlap
    $(".selectedAnimal").removeClass("selectedAnimal");
};

var removeBlurEffect = function () {  // disable the blur effect
    $(".container").removeClass("blurred");
};

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


