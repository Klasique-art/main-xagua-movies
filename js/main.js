// assign variables
const navMenuBtn = document.querySelector("#nav-menu-btn")
const navList = document.querySelector("#nav-list")

navMenuBtn.addEventListener("click", toggleNavMenu)

function toggleNavMenu() {
    navList.classList.toggle("active")
    if(navList.classList.contains("active")) {
        navMenuBtn.innerHTML = "<i class='fas fa-times'></i>"
    } else {
        navMenuBtn.innerHTML = "<i class='fas fa-bars'></i>"
        nav.style.overflowX = "unset"
    }
}