let slideIndex = 0;
let isAnimating = false;

function showSlides() {
    if (isAnimating) return;
    
    isAnimating = true;
    let slides = document.getElementsByClassName("slide");
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }
    let slideWidth = slides[0].clientWidth;
    let offset = -slideIndex * slideWidth;
    let startTime = null;

    function animate(currentTime) {
        if (!startTime) {
            startTime = currentTime;
        }
        let progress = currentTime - startTime;
        let ease = progress / 500; // Duration of animation in milliseconds
        if (ease > 1) {
            ease = 1;
            isAnimating = false;
        }
        document.querySelector(".slides").style.transform = `translateX(${offset * ease}px)`;
        if (ease < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

function moveSlide(n) {
    slideIndex += n;
    showSlides();
}

function autoSlide() {
    moveSlide(1);
    setTimeout(autoSlide, 5000); // Change image every 2 seconds
}

autoSlide(); // Start automatic sliding
