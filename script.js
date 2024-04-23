function calcularAmor() {
  var nombre1 = document.getElementById("nombre1").value;
  var nombre2 = document.getElementById("nombre2").value;
  var ran = Math.floor(Math.random() * 100) + 1;

  var resultado = document.getElementById("resultado");

  resultado.innerHTML =
    "El amor entre " + nombre1 + " y " + nombre2 + " es de " + ran + "%";

  if (ran < 20) {
    resultado.innerHTML += "<br>Ahi no es ting ling";
  } else if (ran < 40) {
    resultado.innerHTML += "<br>No es tan bueno pero ahí vamos";
  } else if (ran < 60) {
    resultado.innerHTML += "<br>Esta bien, pero podría ser mejor";
  } else if (ran < 80) {
    resultado.innerHTML += "<br>Que bonito";
  } else {
    resultado.innerHTML += "<br>¡Pa cuando la boda!";
  }
}
