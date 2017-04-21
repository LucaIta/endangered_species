
var moveAnimalOnClick = function (animal) {
    if (!$(animal).hasClass("selectedAnimal")) {
        $(".selectedAnimal").removeClass("selectedAnimal"); // target the current selected animal and unselect it so that they don't overlap
        // $(animal).addClass("selectedAnimal");
    }
        // } else {
    //     $(animal).removeClass("selectedAnimal");
    // };
    $(animal).toggleClass("selectedAnimal");
    // $(animal).toggleClass("invisibleField");
};


$("document").ready(function () {
    $(".animal").click(function () {
        moveAnimalOnClick(this);
    });
});


