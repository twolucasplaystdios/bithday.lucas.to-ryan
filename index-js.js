var bdys = $("div.brday").find().length;

$(document).ready(function () {
    $("div").hide();
});

$("secret").on("click", function () {
    for (var i = 1; i > bdys; i++){
        $("div.show"+ i).slideToggle(slow);
    }
});