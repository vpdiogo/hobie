// ================ UP LABEL ON DIGIT ========================= 

const inputs = document.querySelectorAll(".input-field");

inputs.forEach(inp => {
    inp.addEventListener("focus", () => {
        inp.classList.add("toggled");
    });
    inp.addEventListener("blur", () => {
        if(inp.value != "") return;
        inp.classList.remove("toggled");
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

// function moveSlider() {
//     let index = this.dataset.value;
    
//     let currentImage = document.querySelector(`.img-${index}`);
    
//     images.forEach(img => img.classList.remove("active"));
//     currentImage.classList.add("active");

//     const textSlider = document.querySelector(".text-group");
//     textSlider.style.transform = `translateY(${-(index - 1) * 3.52}rem)`;

//     bullets.forEach(bull => bull.classList.remove("active"));
//     this.classList.add("active");
// }

// bullets.forEach(n => {
//     n.addEventListener("click", moveSlider);
// });

// ==================== CAROUSEL SLIDER AUTO ====================
var repeat = function (activeClass){

    let active = document.getElementsByClassName("active");

    const textSlider = document.querySelectorAll(".text-group h2");

    
    let i = 1;


    var repeater = () => {
        
        setTimeout(function() {
          [...active].forEach((activeSlide) =>{
              activeSlide.classList.remove("active");

        });
        
        
        images[i].classList.add("active");
        bullets[i].classList.add("active");
        textSlider[i].classList.add("active");
        i++

        if(images.length == i){
            i = 0;
        }else if(i >= images.length) {
            return;
        }
        repeater();
        }, 4000);
    }
    repeater();
}
repeat();