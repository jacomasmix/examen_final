//AGREGAR OVERLAY LIGHTBOX
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

//2.1 con imagen
$overlay.append($image);

//2.2 UN texto
$overlay.append($caption);

//agrgar el averlauy al body
$("body").append($overlay);

//Usuario sa click a un link que rodea la imagen
$("#galeria li a").click(function(event){
	event.preventDefault();
	var href = $(this).attr("href");
	console.log(href);

//Mostrar el Lightbox con la imagen a la que se dio click
$image.attr("src",href);

var texto = $(this).children("img").attr("alt");
$caption.text(texto);

$overlay.show();
console.log(href);
});

//Creamos el menu lateral y aguemoslo al menu (nav)
var $select = $("<select></select>");
$("#menu").append($select);

//recorrer el menu
$("#menu a").each(function(){ 
	var $anchor = $(this);
	//crear una opcion para el selector por cada elemento del menu
	var $option = $("<option></option>");
	//Obtener cada valor de la opcion del atributo href
	$option.val($anchor.attr("href"));
	//obtener el texto de cada menu
	$option.text($anchor.text());
	//agregar la opcion al select
	$select.append($option);
});

	var $button = $("<button>Go</button>");
	$("#menu").append($button);

	$button.click(function(){
	//toma el valor de la opcion seleccionada
	window.location = $select.val();
	});
	//Obtener si el link es la pagina actual (tiene clase select)
	//if($(this).hasclass("selected")) 
	//{ 
	//$option.prop("selected", true);
	//}


//queremos que se cambie la pagina al cambiar de elemento seleccionado
//necesitamos usar el elemento change

//$select.change(function)){ 
//	window.location = $select.val(); //toma el valor de la opcion
//});



