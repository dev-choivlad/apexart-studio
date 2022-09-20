; (function () {
  setTimeout(function() {
    const burgerBtn = document.querySelector(".burger");
    const navMenu = document.querySelector(".nav-menu");
    const navBtns = document.querySelectorAll(".swiper-pagination > span.swiper-pagination-bullet");
    const body = document.body;

    burgerBtn.addEventListener("click", () => {
      burgerBtn.classList.toggle("active")
      body.classList.toggle("lock")

      navMenu.classList.toggle("active")

      navBtns.forEach((button) => {
        button.addEventListener("click", () => {
          burgerBtn.classList.remove("active")
          body.classList.remove("lock")

          navMenu.classList.remove("active")
        })
      })
    })
  }, 1000)
})()
