// ================ UP LABEL ON DIGIT ========================= 

const inputs = document.querySelectorAll(".input-field");

inputs.forEach(inp => {
    inp.addEventListener("focus", () => {
        inp.classList.add("active");
    });
    inp.addEventListener("blur", () => {
        if(inp.value != "") return;
        inp.classList.remove("active");
    })
})

// ================ SIGN SLIDER ========================= 

const toggleBtn = document.querySelectorAll(".reg");
const main = document.querySelector("main");

toggleBtn.forEach(btn => {
    btn.addEventListener("click", () =>{
        main.classList.toggle("sign-up-mode");
    });
});


// ==================== CAROUSEL SLIDER ====================

const bullets = document.querySelectorAll(".bullets span");

const images = document.querySelectorAll(".image"); 

function moveSlider() {
    let index = this.dataset.value;
    
    let currentImage = document.querySelector(`.img-${index}`);
    
    images.forEach(img => img.classList.remove("show"));
    currentImage.classList.add("show");

    const textSlider = document.querySelector(".text-group");
    textSlider.style.transform = `translateY(${-(index - 1) * 3.52}rem)`;

    bullets.forEach(bull => bull.classList.remove("active"));
    this.classList.add("active");
}

bullets.forEach(n => {
    n.addEventListener("click", moveSlider);
});

// ==================== CAROUSEL SLIDER AUTO ====================
var repeat = function (activeClass){
    let active = document.getElementsByClassName("active");
    let i = 1;

    var repeater = () => {
        setTimeout(function() {
          
            
        images[i].classList.add("show");
        bullets[i].classList.add("active");
        i++

        if(images.length == i){
            i = 0;
        }else if(i >= images.length) {
            return;
        }
        repeater();
        }, 2000);
    }
    repeater();
}
repeat();