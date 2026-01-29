// Año automático
document.getElementById("year").textContent = new Date().getFullYear();

// WhatsApp: cambia este número por uno real después (formato internacional sin +)
const PHONE = "10000000000"; // ejemplo: 1 + número (USA). Para RD: 1? no, sería 1809... etc.
const DEFAULT_MSG = "Hola, quiero reservar una cita. Servicio: ___. Hora preferida: ___.";

function buildWhatsAppLink() {
  const msg = encodeURIComponent(DEFAULT_MSG);
  return `https://wa.me/${PHONE}?text=${msg}`;
}

const topBtn = document.getElementById("btnWhatsAppTop");
const bottomBtn = document.getElementById("btnWhatsAppBottom");

topBtn.href = buildWhatsAppLink();
bottomBtn.href = buildWhatsAppLink();

// Formulario (demo): no envía nada todavía, solo confirma
const form = document.getElementById("formContacto");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formMsg.textContent = "¡Listo! Mensaje preparado. (Luego conectamos un envío real).";
  form.reset();
});
