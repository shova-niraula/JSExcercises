//check off specific todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//click on x to delete to-do
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        let newToDoText = $(this).val();
        $(this).val("");
        $("ul").append("<Li><span><i class='fa fa-trash'></i></span>" + newToDoText + "</Li>");
    }
});

$("#fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
});