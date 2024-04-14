const camposForm = {
    "nombre": null,
    "telefono": null,
    "mensaje": null
  };
  
  document.addEventListener("DOMContentLoaded", () => {
    initPageLoad();
  });
  
  function initPageLoad() {
    camposForm.nombre = document.getElementById("nombre");
    camposForm.telefono = document.getElementById("telefono");
    camposForm.mensaje = document.getElementById("pedido");
    console.log("Formulario Cargado", camposForm);
    document.getElementById("formulario").addEventListener("submit", (e) => {
      const [errors, isValid] = validarForm();
      if (!isValid) {
        alert("Formulario no válido");
        console.log("Form Errors", errors);
        e.preventDefault();
        e.stopPropagation();
      } else {
        enviarMensajeWhatsApp();
        vaciarCamposFormulario();
        alert("Formulario enviado correctamente, gracias por contactar con Fiestas y regalos HN.");
        e.preventDefault();
        e.stopPropagation();
      }
    });
  }
  
  function validarForm() {
    let errors = [];
  
    if (isEmpty(camposForm.nombre.value)) {
      errors.push("El campo nombre no puede estar vacío");
    }
    if (!isPhone(camposForm.telefono.value)) {
      errors.push("El campo teléfono no es válido");
    }
    if (isEmpty(camposForm.mensaje.value)) {
      errors.push("El campo mensaje no puede estar vacío");
    }
  
    return [errors, errors.length == 0];
  }
  
  function isEmpty(value) {
    return /^\s*$/.test(value);
  }
  
  function isPhone(value) {
    return /^\+?\(?(504)?\)?\s?[23789]\d{3}-?\s?\d{4}$/.test(value);
  }
  
  function enviarMensajeWhatsApp() {
    const telefono = "+50488797577";
    const mensaje = `Nombre: ${camposForm.nombre.value}%0ATeléfono: ${camposForm.telefono.value}%0AMensaje: ${camposForm.mensaje.value}`;
  
    const url = `https://api.whatsapp.com/send?phone=${telefono}&text=${mensaje}`;
    window.open(url, '_blank');
  }
  
  function vaciarCamposFormulario() {
    camposForm.nombre.value = "";
    camposForm.telefono.value = "";
    camposForm.mensaje.value = "";
  }
  