const track = document.getElementById('track');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Card width (360) + Gap (24) = 384px
const scrollAmount = 384;

nextBtn.addEventListener('click', () => {
    track.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    track.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});




const track1 = document.getElementById('track1');
const nextBtn1 = document.getElementById('nextBtn1');
const prevBtn1 = document.getElementById('prevBtn1');

// Card width (360) + Gap (24) = 384px
const scrollAmount1 = 384;

nextBtn1.addEventListener('click', () => {
    track1.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

prevBtn1.addEventListener('click', () => {
    track1.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});


const headers = document.querySelectorAll('.accordion-header');

// 2. Loop through them
headers.forEach(header => {
    header.addEventListener('click', () => {

        // Get the parent item (the .accordion-item div)
        const currentItem = header.parentElement;

        // Optional: Close all others before opening the new one
        // (Remove this block if you want multiple items open at once)
        document.querySelectorAll('.accordion-item').forEach(item => {
            if (item !== currentItem) {
                item.classList.remove('active');
            }
        });

        // 3. Toggle the 'active' class on the clicked item
        currentItem.classList.toggle('active');
    });
});



const textItems = document.querySelectorAll('.accordion-item');
const images = document.querySelectorAll('.feature-image');

function activateTab(index) {
    // 1. Loop through all items to reset them
    textItems.forEach((item) => {
        item.classList.remove('active');
    });
    images.forEach((img) => {
        img.classList.remove('active');
    });

    // 2. Activate the specific index clicked
    textItems[index].classList.add('active');
    images[index].classList.add('active');
}



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