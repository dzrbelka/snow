const createSnow = () => {
  const snowFlake = document.createElement("div");
  snowFlake.classList.add("snow");
  snowFlake.textContent = "❄";
  snowFlake.style.fontSize = Math.random() * 20 + 8 + "px";
  snowFlake.style.filter = `blur(${Math.random() * 2}px)`;
  snowFlake.style.left = Math.random() * 100 + "vw";
  snowFlake.style.transform = `rotateZ(${Math.random() * 100}deg)`;
  snowFlake.style.transform = `rotateX(${Math.random() * 100}deg)`;
  snowFlake.style.transform = `rotateY(${Math.random() * 100}deg)`;
  snowFlake.style.animationDuration = Math.random() * 2 + 3 + "s";

  document.body.appendChild(snowFlake);
  setTimeout(() => {
    snowFlake.remove();
  }, 5000);
};

setInterval(createSnow, 700);
