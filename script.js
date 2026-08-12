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


const reasons = [
  "I love the way you make ordinary moments feel special.",
  "I love your voice and the way hearing it can instantly make my day better.",
  "I love the little things about you that you probably don't even realize I notice.",
  "I love how much you mean to me.",
  "I love the memories we've already created together.",
  "I love that I can be myself around you.",
  "I love seeing you happy.",
  "I love having someone I genuinely care about this much.",
  "I love you because you're you. ❤️"
];

let currentReason = 0;

const reasonButton = document.getElementById("reasonButton");
const reasonText = document.getElementById("reasonText");
const reasonNumber = document.getElementById("reasonNumber");

reasonButton.addEventListener("click", () => {
  currentReason++;

  if (currentReason >= reasons.length) {
    currentReason = 0;
  }reasonText.classList.remove("reason-show");
reasonText.classList.add("reason-hide");

setTimeout(() => {
  reasonNumber.textContent = currentReason + 1;
  reasonText.textContent = reasons[currentReason];

  reasonText.classList.remove("reason-hide");
  reasonText.classList.add("reason-show");
}, 350);

setTimeout(() => {
  reasonNumber.textContent = currentReason + 1;
  reasonText.textContent = reasons[currentReason];

  reasonText.style.transition = "all .5s ease";
  reasonText.style.opacity = "1";
  reasonText.style.transform = "translateY(0)";
}, 250);

});
