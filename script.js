document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactoForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
      nombre: document.getElementById("nombre").value,
      email: document.getElementById("email").value,
      telefono: document.getElementById("telefono").value,
      tipo_evento: document.getElementById("tipo_evento").value,
      invitados: document.getElementById("invitados").value,
      mensaje: document.getElementById("mensaje").value
    };

    fetch("https://script.google.com/macros/s/AKfycbyZVexZ_nMUtQVhDiUepuPd14pJz2NibasyaldNNkIwGl5DKgkwpH8hNEjy4E8-ap9R6A/exec", {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => {
        alert("✅ Tu mensaje fue enviado correctamente.");
        form.reset();
      })
      .catch(err => {
        alert("❌ Ocurrió un error: " + err);
      });
  });
});
