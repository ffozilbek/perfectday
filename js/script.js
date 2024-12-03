window.addEventListener("DOMContentLoaded", ()=>{
    const elBurgerMenu = document.querySelector(".js-menu"),
        elNavbarLinks = document.querySelectorAll(".nav-link"),
        elCollapse = document.querySelector(".collapse"),
        modal = document.querySelector(".loading-modal"),
        elForm = document.querySelector("#form"),
        elInput = document.querySelector(".contact__input"),
        elValidation = document.querySelector(".contact__validation");


        const botToken = "7568056109:AAFCli7tugt6IJtPUDeo7J-6put6N2uNyHo",
            botId = 6420142158;

    setTimeout(() => {
        modal.style.opacity = 0;
        setTimeout(() => {
            modal.style.display = "none";
        },200)
    }, 5000);

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

    // SEND MESSAGE
    const message = {
        success: "Zo'r",  error: "Iltimos nimadur yozing..."
    }

    elForm.addEventListener("submit", (e)=> {
        e.preventDefault();
        const formData = new FormData(elForm);
        const object = [];

        formData.forEach((value,key)=> {
            object[key]=value;
        })

        if(elInput.value) {
            fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    chat_id: botId,
                    text: `Message: ${object.message}`
                })
            }).then(()=> {
                    elValidation.classList.add("alert-success")
                    elValidation.innerHTML = message.success;
                    elValidation.style.display = "block";
                setTimeout(()=> {
                    elValidation.classList.remove("alert-success")
                    elValidation.style.display = "none";
                },1000)

            }).catch(()=> {
                elValidation.classList.add("alert-danger")
                    elValidation.innerHTML = message.error;
                    elValidation.style.display = "block";
                setTimeout(()=> {
                    elValidation.classList.remove("alert-danger")
                    elValidation.style.display = "none";
                },1000)
            })
        } else {
            elValidation.classList.add("alert-danger")
                    elValidation.innerHTML = message.error;
                    elValidation.style.display = "block";
                setTimeout(()=> {
                    elValidation.classList.remove("alert-danger")
                    elValidation.style.display = "none";
                },1000)
        }
    })

})