document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const data = {
    nombre: form.nombre.value,
    email: form.email.value,
    telefono: form.telefono.value,
    tipo_evento: form.tipo_evento.value,
    invitados: form.invitados.value,
    mensaje: form.mensaje.value,
  };

  try {
    await fetch("https://script.google.com/macros/s/AKfycbwIVpX4jcNIUYuEUiYIDqlxRKMVxCKrh_WfabcxHhCwBz9g27iCL8z1EmaGNBL9ODnyzg/exec", {
      method: "POST",
      mode: "no-cors", // 👈 importante para evitar bloqueos CORS
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    alert("✅ Mensaje enviado correctamente");
    form.reset();
  } catch (err) {
    alert("❌ Ocurrió un error: " + err.message);
  }
});
