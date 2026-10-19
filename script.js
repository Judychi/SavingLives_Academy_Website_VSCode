const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".primary-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    });
  });
}

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

/*
  DEMO FORM ONLY:
  This validates the form in the browser but does not transmit/store the information.
  Before launch, replace this handler with a GoHighLevel embedded form or connect
  the form to a secure backend/API with the academy's consent and privacy requirements.
*/
const form = document.querySelector("#registration-form");
const status = document.querySelector("#form-status");

if (form && status) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    status.textContent = "Thank you. The form is ready, but this demo is not connected to the academy yet. Please connect it to GoHighLevel before publishing.";
    status.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });
}
