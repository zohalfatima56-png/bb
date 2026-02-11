function yesAnswer() {
  document.getElementById("page1").classList.remove("active");
  document.getElementById("page2").classList.add("active");

  // Start music after user interaction (required for mobile)
  document.getElementById("bgMusic").play();
}

function nextPage() {
  document.getElementById("page2").classList.remove("active");
  document.getElementById("page3").classList.add("active");
}

function moveNo() {
  const btn = document.getElementById("noBtn");
  const maxX = window.innerWidth - btn.offsetWidth;
  const maxY = window.innerHeight - btn.offsetHeight;

  btn.style.position = "absolute";
  btn.style.left = Math.random() * maxX + "px";
  btn.style.top = Math.random() * maxY + "px";
  btn.innerText = "Nice try 😈";
}

function confetti() {
  for (let i = 0; i < 60; i++) {
    let emoji = document.createElement("div");
    emoji.innerText = "🎉";
    emoji.style.position = "absolute";
    emoji.style.left = Math.random() * window.innerWidth + "px";
    emoji.style.top = Math.random() * window.innerHeight + "px";
    emoji.style.fontSize = "30px";
    document.body.appendChild(emoji);
  }
  alert("HAPPY BIRTHDAY LEGEND 🥳💖");
}