console.log("Portfolio iniciado");

const buscador = document.getElementById("searchInput");

/* BUSCADOR */

if (buscador) {

    buscador.addEventListener("keyup", () => {

        let filtro = buscador.value.toLowerCase();

        let tarjetas = document.querySelectorAll(".game-card");

        tarjetas.forEach(card => {

            let texto = card.innerText.toLowerCase();

            if (texto.includes(filtro)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}

/* MOSTRAR SOLO UN PROYECTO */

function mostrarProyecto(id){

    let tarjetas = document.querySelectorAll(".game-card");

    tarjetas.forEach(card => {

        if(card.id === id){

            card.style.display = "block";

        }else{

            card.style.display = "none";

        }

    });

}

/* MOSTRAR TODOS */

function mostrarTodo(){

    let tarjetas = document.querySelectorAll(".game-card");

    tarjetas.forEach(card => {

        card.style.display = "block";

    });

}