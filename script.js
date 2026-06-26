console.log("Portfolio iniciado sin modales - Buscador activo.");

/* ===============================
   BUSCADOR DE PROYECTOS
================================== */
document.addEventListener("DOMContentLoaded", () => {
    const buscador = document.getElementById("searchInput");

    if (buscador) {
        buscador.addEventListener("keyup", () => {
            const filtro = buscador.value.toLowerCase();
            const tarjetas = document.querySelectorAll(".game-card");

            tarjetas.forEach(card => {
                const texto = card.innerText.toLowerCase();
                
                // Muestra la tarjeta si coincide con la búsqueda, si no la oculta
                card.style.display = texto.includes(filtro)
                    ? "flex"
                    : "none";
            });
        });
    }
});