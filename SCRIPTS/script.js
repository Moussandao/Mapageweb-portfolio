// Initialisation EmailJS
(function () {
  emailjs.init("4YwlRg-vMrZQXzKOC"); // 🔑 Remplace par ta Public Key
})();

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const button = document.getElementById("submit-btn");

  if (!form) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // 🛑 Anti-spam (honeypot)
    if (document.getElementById("website").value !== "") {
      return;
    }

    // UI pendant l'envoi
    button.disabled = true;
    button.textContent = "Envoi en cours...";
    status.textContent = "";
    status.className = "";

    emailjs
      .sendForm("service_3bo8vsn", "template_vxoqix1", form)
      .then(
        function () {
          status.textContent = "✅ Message envoyé avec succès !";
          status.className = "success";
          form.reset();
        },
        function (error) {
          status.textContent =
            "❌ Une erreur est survenue. Veuillez réessayer.";
          status.className = "error";
          console.error("EmailJS Error :", error);
        }
      )
      .finally(function () {
        button.disabled = false;
        button.textContent = "Envoyer";
      });
  });
});

/*******
 * 4YwlRg-vMrZQXzKOC
 * "service_3bo8vsn", "template_vxoqix1"
 */
