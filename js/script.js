window.addEventListener("DOMContentLoaded", ()=>{
    const elBurgerMenu = document.querySelector(".js-menu"),
        elNavbarLinks = document.querySelectorAll(".nav-link"),
        elCollapse = document.querySelector(".collapse");

    elBurgerMenu.addEventListener("click", ()=> {
        elBurgerMenu.classList.toggle("active")
    })

    elNavbarLinks.forEach(link=> {
        link.addEventListener("click", ()=> {
            elNavbarLinks.forEach(item => item.classList.remove("active"))
            link.classList.add("active");
            if(elCollapse.classList.contains("show")) {
                elCollapse.classList.remove("show");
                elBurgerMenu.classList.remove("active");
            }
        })
    })
})