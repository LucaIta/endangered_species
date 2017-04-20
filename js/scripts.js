
var moveAnimalOnClick = function (animal) {
    if (!$(animal).hasClass("selectedAnimal")) {
        $(".selectedAnimal").removeClass("selectedAnimal"); // targer the current selected animal and unselect it so that they don't overlap
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


