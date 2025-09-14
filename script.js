// document.querySelectorAll(".agenda-header").forEach((button) => {
//   button.addEventListener("click", () => {
//     const item = button.parentElement;
//     const agenda = item.parentElement;

//     // Close all others
//     agenda.querySelectorAll(".agenda-item").forEach((el) => {
//       el.classList.remove("active");
//       el.querySelector(".symbol").textContent = "+";
//     });

//     // Toggle clicked
//     const symbol = item.querySelector(".symbol");
//     if (!item.classList.contains("active")) {
//       item.classList.add("active");
//       symbol.textContent = "–";
//     } else {
//       item.classList.remove("active");
//       symbol.textContent = "+";
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const headers = document.querySelectorAll(".agenda-header");

  headers.forEach((button) => {
    // allow keyboard activation
    button.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        button.click();
      }
    });

    button.addEventListener("click", () => {
      const item = button.parentElement;
      const content = item.querySelector(".agenda-content");
      const symbol = item.querySelector(".symbol");

      const isOpen = item.classList.contains("active");

      if (isOpen) {
        // Close this item
        content.style.maxHeight = "0px";
        content.style.paddingTop = "0";
        content.style.paddingBottom = "0";
        item.classList.remove("active");
        symbol.textContent = "+";
        button.setAttribute("aria-expanded", "false");
      } else {
        // Close any other open item first
        const open = document.querySelector(".agenda-item.active");
        if (open && open !== item) {
          const openContent = open.querySelector(".agenda-content");
          openContent.style.maxHeight = "0px";
          openContent.style.paddingTop = "0";
          openContent.style.paddingBottom = "0";
          open.classList.remove("active");
          open.querySelector(".symbol").textContent = "+";
          open
            .querySelector(".agenda-header")
            .setAttribute("aria-expanded", "false");
        }

        // Open clicked item
        item.classList.add("active");
        symbol.textContent = "-";
        // set padding first so scrollHeight accounts for it
        content.style.paddingTop = "1rem";
        content.style.paddingBottom = "1rem";
      }
    });
  });
});