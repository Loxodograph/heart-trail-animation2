const body = document.querySelector("body");
document.body.addEventListener("touchstart", function(e){ if (e.target.nodeName == 'CANVAS') { e.preventDefault(); } }, false);
document.body.addEventListener("touchend", function(e){ if (e.target.nodeName == 'CANVAS') { e.preventDefault(); } }, false);
document.body.addEventListener("touchmove", function(e){ if (e.target.nodeName == 'CANVAS') { e.preventDefault(); } }, false);
if (navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)){
  bo
    body.addEventListener("touchmove", (event => {
    const xPos = event.touches[0].pageX;
    const yPos = event.touches[0].pageY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random() * 100;
    spanEl.style.height = size + "px";
    spanEl.style.width = size + "px";
    body.appendChild(spanEl);
    setTimeout(() => {
      spanEl.remove();
    }, 3000);
  })
  )
  } else {
body.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";
    const size = Math.random() * 100;
    spanEl.style.height = size + "px";
    spanEl.style.width = size + "px";
    body.appendChild(spanEl);
    setTimeout(() => {
      spanEl.remove();
    }, 3000);
} )
  }