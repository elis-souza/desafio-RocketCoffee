let show = true;

const menuSection = document.querySelector(".menu-section")
const menuHamburger = menuSection.querySelector(".hamburger")

menuHamburger.addEventListener("click", () => {
    document.body.style.overflow = show ? "hidden" : "initial"
    menuSection.classList.toggle("on", show)
    show = !show;
}) 