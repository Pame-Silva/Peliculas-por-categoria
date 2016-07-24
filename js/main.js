var ciencia = $(".ciencia");
var romantica = $(".romantica");
var infantil = $(".infantil");
var terror = $(".terror");
var accion = $(".accion");
var row = $(".row");
var colocar =  $(".colocar");
var section = $(".cine");
/*Así aparecen mis categorías*/
$("#all").click(function(){
    infantil.show();
	romantica.show();
	accion.show();
	colocar.addClass("row");
}); 
/*Funcion, una por categoría*/
function action (element) {
	infantil.show();
	romantica.hide();
	accion.hide();
	row.removeClass();
	section.addClass("index");
}

function comedy (element){
	romantica.show();
	infantil.hide();
	accion.hide();
	row.removeClass();
	section.addClass("index");
}
function child (element) {
	romantica.hide();
	infantil.hide();
	romantica.hide();
	accion.show();
	row.removeClass();
	section.addClass("index");
}
function romantic (element){
	romantica.hide();
	infantil.hide();
	accion.hide();
	suspense.hide();
	row.removeClass();
	section.addClass("index");
}
function suspense (element){
	romantica.hide();
	infantil.hide();
	romantica.hide();
	accion.hide();
	suspense.hide();
	row.removeClass();
	section.addClass("index");
}