link1 = () => {
    location.href = "https://www.apple.com/in/shop/gifts"
}
link2 = () => {
    location.href = "https://www.apple.com/in/iphone-17-pro/"
}
link3 = () => {
    location.href = "https://www.apple.com/in/shop/buy-iphone/iphone-17-pro"
}
link4 = () => {
    location.href = "https://www.apple.com/in/iphone-air/"
}
link5 = () => {
    location.href = "https://www.apple.com/in/shop/buy-iphone/iphone-air"
}
link6 = () => {
    location.href = "https://www.apple.com/in/iphone-17/"
}
link7 = () => {
    location.href = "https://www.apple.com/in/shop/buy-iphone/iphone-17"
}
link8 = () => {
    location.href = "https://www.apple.com/in/apple-watch-series-11/"
}
link9 = () => {
    location.href = "https://www.apple.com/in/shop/buy-watch/apple-watch-series-11"
}
link10 = () => {
    location.href = "https://www.apple.com/in/airpods-pro/"
}
link11 = () => {
    location.href = "https://www.apple.com/in/shop/buy-airpods/airpods-pro"
}
link12 = () => {
    location.href = "https://www.apple.com/in/apple-watch-se-3/"
}
link13 = () => {
    location.href = "https://www.apple.com/in/shop/buy-watch/apple-watch-se"
}
link14 = () => {
    location.href = "https://www.apple.com/in/macbook-air/"
}
link15 = () => {
    location.href = "https://www.apple.com/in/shop/buy-mac/macbook-air"
}
link16 = () => {
    location.href = "https://www.apple.com/in/shop/trade-in"
}
link17 = () => {
    location.href = "https://tv.apple.com/in/show/the-studio/umc.cmc.7518algxc4lsoobtsx30dqb52"
}




document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.dots-container');
    const slideCount = slides.length;
    let currentIndex = 0;
    let autoSlideInterval;

    // Create navigation dots
    for (let i = 0; i < slideCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            goToSlide(i);
            resetAutoSlide();
        });
        dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');

    const goToSlide = (index) => {
        // Remove 'active' class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Set the new current index
        currentIndex = index;

        // Add 'active' class to the new current slide and dot
        slides[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    };

    const showNextSlide = () => {
        const nextIndex = (currentIndex + 1) % slideCount;
        goToSlide(nextIndex);
    };

    const startAutoSlide = () => {
        autoSlideInterval = setInterval(showNextSlide, 6000); // Change slide every 5 seconds
    };

    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    };

    // Initialize the slider
    goToSlide(0);
    startAutoSlide();
});



document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll(".slide-up");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Check if the element is intersecting (i.e., in the viewport)
            if (entry.isIntersecting) {
                // Add the 'active' class to trigger the animation
                entry.target.classList.add("active");

                // Stop observing the element so the animation doesn't repeat 🚀
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Trigger the animation when the element is 15% visible
        threshold: 0.75
    });

    // Start observing each target element
    targets.forEach(target => {
        observer.observe(target);
    });
});