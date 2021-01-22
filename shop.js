var url_string = document.URL; //window.location.href
var url = new URL(url_string);
var id = url.searchParams.get("id") || '0';
//console.log(id);

$('.shopHolder').css('margin-top', $('nav').outerHeight());

if (id != '0') {
    $('#id').show();
    $('#id').load("targetShop.php");
} else {
    $('#noID').show();
    $('#noID').load("defaultShop.php");
}