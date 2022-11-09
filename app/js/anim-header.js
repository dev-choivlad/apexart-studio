;(function () {
  const header = document.querySelector(".main-header");
  let yOffset = 0;
  let triggerPoint = 450;
  console.log(header);

  window.addEventListener("scroll", () => {
    yOffset = window.scrollY;
    if(yOffset >= triggerPoint) {
      header.classList.add("animated");
    } else{
      header.classList.remove("animated");
    }
  })
})();
