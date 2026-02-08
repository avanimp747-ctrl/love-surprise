function showLove() {
  document.getElementById("surprise").innerHTML =
  function startSurprise() {
  document.getElementById("message").classList.add("show");

  for (let i = 0; i < 20; i++) {
    createHeart();
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 2 + 3) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

  
    "I choose you. Today, tomorrow, always ❤️";
}
