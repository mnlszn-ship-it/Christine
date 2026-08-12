const openButton = document.getElementById("openButton");
const letter = document.getElementById("letter");

openButton.addEventListener("click", () => {
  letter.classList.remove("hidden");
  openButton.textContent = "My heart is open ❤️";
  openButton.disabled = true;

  setTimeout(() => {
    letter.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }, 200);
});
