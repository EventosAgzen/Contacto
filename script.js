const scriptURL = "https://script.google.com/macros/s/AKfycbwnkZ_IE8UmcnR-nN6GzAqJpNNIJCRz64ESCDzHyIlaSqG8dycFLaK_aG8shImxIMr_-Q/exec";
const form = document.querySelector("form");
const statusMessage = document.createElement("div"); 
statusMessage.classList.add("status-message");
form.appendChild(statusMessage);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      if (response.ok) {
        statusMessage.textContent = "✅ Tu mensaje fue enviado con éxito.";
        statusMessage.className = "status-message success show";
        form.reset();
      } else {
        throw new Error("Error en la respuesta");
      }
    })
    .catch((error) => {
      statusMessage.textContent = "❌ Hubo un problema al enviar. Inténtalo de nuevo.";
      statusMessage.className = "status-message error show";
      console.error("Error!", error.message);
    });
});
