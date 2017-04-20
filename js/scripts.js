
var moveAnimalOnClick = function (animal) {
    if (!$(animal).hasClass("selectedAnimal")) {
        $(animal).addClass("selectedAnimal");
    } else {
        $(animal).removeClass("selectedAnimal");
    };
};


$("document").ready(function () {
    $(".animal").click(function () {
        moveAnimalOnClick(this);
    });
});


