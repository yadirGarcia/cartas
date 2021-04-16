

async function abrirJson(url, error = null) {
  try {
    let response = await fetch(url);
    let user = await response.json();
    return user;
  } catch (err) {
    if(error != null){
      alert(error);
    }else{
      alert(err);
    }
  }
}

const listaImagenes = document.querySelector("#imagenes");
const listaNombres = document.querySelector("#nombres");
const div = document.createElement("div");

async function leerJSON(url, error = null) {
    try {
      let response = await fetch(url);
      let user = await response.json();
      return user;
    } catch (err) {
      if(error != null){
        alert(error);
      }else{
        alert(err);
      }
    }
}
  

const listaImagenes = document.querySelector("#imagenes");
const listaNombres = document.querySelector("#nombres");
const div = document.createElement("div");

async function leerJSON(url, error = null) {
    try {
      let response = await fetch(url);
      let user = await response.json();
      return user;
    } catch (err) {
      if(error != null){
        alert(error);
      }else{
        alert(err);
      }
    }
  }

  function mostrarNombres(it) {
    let view = it;
    var url = "https://carlosreneas.github.io/endpoints/cartas.json";
    leerJSON(url).then((cartas) => {
      cartas.forEach((e, i) => {
        if (i < view) {
          if (i == 0) {
            let name = document.getElementById("nombres-header");
            
            name.setAttribute("src", `${e.carta} de diamantes`);
          }
          
          listaNombres.appendChild(name);
        }
      });
    });
    mostrarBoton();
  }