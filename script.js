console.log("Portfolio iniciado");

/* ===============================
   BUSCADOR
================================== */

document.addEventListener("DOMContentLoaded", () => {

    const buscador = document.getElementById("searchInput");

    if (buscador) {

        buscador.addEventListener("keyup", () => {

            const filtro = buscador.value.toLowerCase();

            const tarjetas = document.querySelectorAll(".game-card");

            tarjetas.forEach(card => {

                const texto = card.innerText.toLowerCase();

                card.style.display = texto.includes(filtro)
                    ? "flex"
                    : "none";

            });

        });

    }

});

/* ===============================
   BASE DE DATOS
================================== */

const proyectos = {

    scratch: {

        titulo: "Scratch",

        imagen: "./imagenes/scratch1.png",

        descripcion:
            "Primer proyecto desarrollado en Scratch. Incluye variables, eventos, lógica y diseño de videojuegos.",

        proyecto:
            "https://drive.google.com/file/d/15hwCE4Ie77jF0o5dhArAZPE8WvVDmgbL/view?usp=drive_link",

        descarga:
            "https://drive.google.com/file/d/1Ed44fwZdngKtzt8j2NS2PRYptde7PyjF/view?usp=drive_link"

    },

    rpgmaker: {

        titulo: "RPGMaker",

        imagen: "./imagenes/rpg1.PNG",

        descripcion:
            "Proyecto RPG desarrollado con RPGMaker. Incluye mapas, NPC, eventos y combate.",

        proyecto:
            "https://drive.google.com/file/d/1l78GSm7e8yvOR5-vWlRvcKDl4ImqWC1C/view?usp=drive_link",

        descarga:
            "https://drive.google.com/file/d/1auqtXxVax_e1oasdjysQFHYSFEEzDrjp/view?usp=drive_link"

    },

    unity: {

        titulo: "Unity 3D (Universal RP)",

        imagen: "./imagenes/unity1.PNG",

        descripcion:
            "Proyecto desarrollado en Unity Universal RP con IA, inventario y combate.",

        proyecto:
            "https://drive.google.com/file/d/1sB6azz0yLmXSofhvXQkig0F8GbQI_7HH/view?usp=drive_link",

        descarga:
            "https://drive.google.com/file/d/1ySDMzqCOXLXdUEUtlTup04ytdI5GgOYr/view?usp=drive_link"

    }

};

/* ===============================
   ABRIR MODAL
================================== */

function abrirProyecto(nombre) {

    console.log("Abriendo:", nombre);

    const proyecto = proyectos[nombre];

    if (!proyecto) {

        alert("Proyecto no encontrado.");

        return;

    }

    const modal = document.getElementById("projectModal");

    const titulo = document.getElementById("modalTitulo");

    const imagen = document.getElementById("modalImagen");

    const descripcion = document.getElementById("modalDescripcion");

    const btnProyecto = document.getElementById("btnProyecto");

    const btnDescarga = document.getElementById("btnDescarga");

    if (
        !modal ||
        !titulo ||
        !imagen ||
        !descripcion ||
        !btnProyecto ||
        !btnDescarga
    ) {

        console.error("No se encontró algún elemento del modal.");

        return;

    }

    titulo.textContent = proyecto.titulo;

    imagen.src = proyecto.imagen;

    imagen.alt = proyecto.titulo;

    descripcion.textContent = proyecto.descripcion;

    btnProyecto.href = proyecto.proyecto;

    btnDescarga.href = proyecto.descarga;

    modal.style.display = "flex";

}

/* ===============================
   CERRAR MODAL
================================== */

function cerrarProyecto() {

    const modal = document.getElementById("projectModal");

    if (modal) {

        modal.style.display = "none";

    }

}

/* ===============================
   CLICK AFUERA
================================== */

window.addEventListener("click", function (e) {

    const modal = document.getElementById("projectModal");

    if (e.target === modal) {

        cerrarProyecto();

    }

});

/* ===============================
   ESC
================================== */

document.addEventListener("keydown", function (e) {

    if (e.key === "Escape") {

        cerrarProyecto();

    }

});

/* Hace visibles las funciones para onclick="" */

window.abrirProyecto = abrirProyecto;

window.cerrarProyecto = cerrarProyecto;