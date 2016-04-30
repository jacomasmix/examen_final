
var pelicula1 = {
	nombre: "superman",
	actor: "ben alfred",
	director: "cameron",
	genero: "accion",
	sinopsis: "nueva historia de la llegada de superman a la Tierra"
};

function printHTML(mensaje)
{
	var outputDiv = document.getElementById("output");
	outputDiv.innerHTML = mensaje;
}

var saludo = "<p>*******" + "INFORMACION" + "*******</p>";
saludo += "<p> *****" + "DATOS DE LA PELICULA" + "**********</p>";
saludo += "<p> NOMBRE: " + pelicula1.nombre + "</p>";
saludo += "<p> ACTOR: " + pelicula1.actor + "</p>";
saludo += "<p> DIRECTOR: " + pelicula1.director + " </p>";
saludo += "<p> GENERO: " + pelicula1.genero + "</p>";
saludo += "<p> SINOPSIS: " + pelicula1.sinopsis + "</p>";
printHTML(saludo);

