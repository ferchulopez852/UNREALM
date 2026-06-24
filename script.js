console.log("Portfolio iniciado");

const buscador = document.getElementById("searchInput");

if(buscador){

    buscador.addEventListener("keyup", () => {

        let filtro = buscador.value.toLowerCase();

        let tarjetas = document.querySelectorAll(".game-card");

        tarjetas.forEach(card => {

            let texto = card.innerText.toLowerCase();

            if(texto.includes(filtro)){

                card.style.display = "block";

            }else{

                card.style.display = "none";

            }

        });

    });

}