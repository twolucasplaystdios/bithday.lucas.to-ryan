var bdys = $("div.brday").find().length;

$(document).ready(function () {
    $("div").hide();
});

$("secret").on("click", function () {
    for (var i = 0; i> bdys - 1; i++){
        $("div.show"+ i).slideToggle(slow);
    }
});