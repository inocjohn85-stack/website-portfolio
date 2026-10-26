
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function() {
  const isOpen = navLinks.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", isOpen);

  if (isOpen) {
    menuToggle.setAttribute("aria-label", "Close navigation menu");
  } else {
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }
});

document.querySelectorAll(".nav-links a").forEach(function(link) {
  link.addEventListener("click", function() {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

emailjs.init({
  publicKey: "A8LC5ULiiop_kpNjZ"
});

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-message");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();

  formStatus.textContent = "Sending message...";

  emailjs.sendForm(
    "service_1qrfpxy",
    "template_1qj480n",
    contactForm
  ).then(function() {
    formStatus.textContent =
      "Thank you, " + name + "! Your message has been sent.";

    contactForm.reset();
  }).catch(function(error) {
    console.error("EmailJS error:", error);

    formStatus.textContent =
      "Sorry, your message could not be sent. Please try again.";
  });
});
