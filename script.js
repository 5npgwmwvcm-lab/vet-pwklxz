const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".primary-nav");

menuButton.addEventListener("click", () => {
  const isExpanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isExpanded));
  menuButton.setAttribute("aria-label", isExpanded ? "Открыть меню" : "Закрыть меню");
  navigation.classList.toggle("is-open", !isExpanded);
});

navigation.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Открыть меню");
  });
});

document.querySelectorAll(".photo-frame img").forEach((image) => {
  const hideUnavailableImage = () => {
    image.hidden = true;
  };
  image.addEventListener("error", hideUnavailableImage, { once: true });
  if (image.complete && image.naturalWidth === 0) hideUnavailableImage();
});

const appointmentForm = document.querySelector(".appointment-form");
const formMessage = document.querySelector(".form-message");
appointmentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!appointmentForm.reportValidity()) return;

  formMessage.textContent = "Спасибо! Мы скоро позвоним, чтобы подтвердить запись.";
  formMessage.classList.add("is-visible");
  appointmentForm.reset();
});

document.querySelector("#year").textContent = String(new Date().getFullYear());
