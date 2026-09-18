// Teleporting button chaos
const submitBtn = document.querySelector(".submit");
const resetBtn = document.querySelector(".reset");

function teleportButton(btn) {
    const randomX = Math.random() * (window.innerWidth - 150);
    const randomY = Math.random() * (window.innerHeight - 50);
    btn.style.left = randomX + "px";
    btn.style.top = randomY + "px";
}

// Teleport on hover
submitBtn.addEventListener("mouseenter", () => teleportButton(submitBtn));
resetBtn.addEventListener("mouseenter", () => teleportButton(resetBtn));

// Also teleport randomly every second for extra chaos
setInterval(() => {
    if (Math.random() < 0.3) teleportButton(submitBtn);
    if (Math.random() < 0.3) teleportButton(resetBtn);
}, 800);