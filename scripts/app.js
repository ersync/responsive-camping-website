const navBtn = document.querySelector(".nav__btn")
const navMobile = document.querySelector(".nav-mobile")

navBtn.addEventListener("click", () => {
    navBtn.classList.toggle("nav__btn--open")
    navMobile.classList.toggle("nav-mobile--open")
})
