document.addEventListener("DOMContentLoaded", () => {
    const pr = [
        {
            Pregunta: '¿Cual es el precio de los arreglos?',
            Respuesta: 'Tenemos difrentes precios segun tu preferencia tenemos precios desde 180 lps en adelante',

        },

        {



            Pregunta: '¿Cual es el precio de los globos personalizados?',

            Respuesta: 'Contamos con diferentes precios desde 150 lps en adelante pero tu decides tu diseño nosotros personalizamos a tu preferencia.',

        },

        {



            Pregunta: '¿Cual es el precio de las piñatas?',

            Respuesta: 'Tenemos diferentes precios ya que tenemos piñatas establecidas que son las que siempre estan a la venta en la tienda los precios son 120 lps, 180 lps, 200 lps y 220 lps, Tambien contamos con piñatas personalizadas que tu decides tu diseño favorito el precio puede variar segun el diseño que elijas.',

        },

        {



            Pregunta: '¿Que precio tienen los numeros y las letras con luz led?',

            Respuesta: 'Cada letra y cada numero con luz led que elijas tiene un precio de 100 lps cada uno.',

        },

        {



            Pregunta: '¿Cuanto dinero tengo que invertir para decoraciones de fiesta de cumpleaños?',

            Respuesta: 'lo minimo que puede invertir para tu fiesta de cumpleaños es de 250 lps y el precio maximo varia segun todas las decoraciones que elijas.',
        },

        {



            Pregunta: '¿Cuales son los metodos de pago?',

            Respuesta: 'Solo aceptamos efectivo como unico metodo de pago.',
        }
    ];


    const preguntasfrecuentes = document.getElementById('PreguntasFrecuentes');

    pr.forEach(pr => {
        const eventoHTML = document.createElement('div');
        eventoHTML.classList.add('pr');
        eventoHTML.innerHTML = `<h3>${pr.Pregunta}</h3><p>${pr.Respuesta}</p>`; // Corrección aquí
        preguntasfrecuentes.appendChild(eventoHTML);
    });
});