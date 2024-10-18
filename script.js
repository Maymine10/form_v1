document
  .getElementById("miFormulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element) => element.remove());

    const email = document.getElementById("email");
    const colonia = document.getElementById("colonia");
    const direccion = document.getElementById("direccion");
    const codigoPostal = document.getElementById("codigoPostal");
    const ciudad = document.getElementById("ciudad");
    const state = document.getElementById("state");
    const parcel = document.getElementById("parcel");
    const packageWeight = document.querySelector("[name='packageWeight']");
    const packageHeight = document.querySelector("[name='packageHeight']");
    const packageWidth = document.querySelector("[name='packageWidth']");
    const packageLength = document.querySelector("[name='packageLength']");

    function showError(input, message) {
      const errorDiv = document.createElement("div");
      errorDiv.className = "error-message text-red-500 text-sm mt-1";
      errorDiv.innerText = `${message}`;
      input.parentNode.appendChild(errorDiv);
    }

    let hasError = false;

    if (!email.value) {
      showError(email, "Correo electrónico es requerido");
      hasError = true;
    }
    if (!colonia.value) {
      showError(colonia, "Colonia es requerida");
      hasError = true;
    }
    if (!direccion.value) {
      showError(direccion, "Dirección es requerida");
      hasError = true;
    }
    if (!codigoPostal.value) {
      showError(codigoPostal, "Código Postal es requerido");
      hasError = true;
    }
    if (!ciudad.value) {
      showError(ciudad, "Ciudad es requerida");
      hasError = true;
    }
    if (!state.value) {
      showError(state, "Estado es requerido");
      hasError = true;
    }
    if (!parcel.value) {
      showError(parcel, "Paquetería es requerida");
      hasError = true;
    }
    if (!packageWeight.value) {
      showError(packageWeight, "Peso del paquete es requerido");
      hasError = true;
    }
    if (!packageHeight.value) {
      showError(packageHeight, "Altura del paquete es requerida");
      hasError = true;
    }
    if (!packageWidth.value) {
      showError(packageWidth, "Ancho del paquete es requerido");
      hasError = true;
    }
    if (!packageLength.value) {
      showError(packageLength, "Longitud del paquete es requerida");
      hasError = true;
    }

    if (hasError) {
      return;
    }

    const formData = {
      email: email.value,
      colonia: colonia.value,
      direccion: direccion.value,
      codigoPostal: codigoPostal.value,
      ciudad: ciudad.value,
      state: state.value,
      parcel: parcel.value,
      packageDetails: {
        weight: packageWeight.value,
        height: packageHeight.value,
        width: packageWidth.value,
        length: packageLength.value,
      },
    };

    console.log("Datos del formulario:", formData);

    alert("Formulario enviado con éxito.");

    document.getElementById("miFormulario").reset();
  });
