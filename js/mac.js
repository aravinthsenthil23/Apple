link1 = () => {
    location.href = "https://www.apple.com/in/macbook-air/"
}
link2 = () => {
    location.href = "https://www.apple.com/in/macbook-pro/"
}
link3 = () => {
    location.href = "https://www.apple.com/in/imac/"
}
link4 = () => {
    location.href = "https://www.apple.com/in/mac-mini/"
}
link5 = () => {
    location.href = "https://www.apple.com/in/mac-studio/"
}
link6 = () => {
    location.href = "https://www.apple.com/in/mac-pro/"
}
link7 = () => {
    location.href = "https://www.apple.com/in/mac/compare/"
}
link8 = () => {
    location.href = "https://www.apple.com/in/displays/"
}
link9 = () => {
    location.href = "https://www.apple.com/in/shop/mac/accessories"
}
link10 = () => {
    location.href = "https://www.apple.com/in/os/macos/"
}
link11 = () => {
    location.href = "https://www.apple.com/in/shop/buy-mac"
}
link12 = () => {
    location.href = "https://www.apple.com/in/shop/buy-mac"
}
link13 = () => {
    location.href = "https://www.apple.com/in/macbook-air/"
}
link14 = () => {
    location.href = "https://www.apple.com/in/macbook-pro/"
}
link15 = () => {
    location.href = "https://www.apple.com/in/imac/"
}
link16 = () => {
    location.href = "https://www.apple.com/in/mac-mini/"
}
link17 = () => {
    location.href = "https://www.apple.com/in/mac-studio/"
}
link18 = () => {
    location.href = "https://www.apple.com/in/mac-pro/"
}
link19 = () => {
    location.href = "https://www.apple.com/in/studio-display/"
}
link20 = () => {
    location.href = "https://www.apple.com/in/pro-display-xdr/"
}
link21 = () => {
    location.href = "https://www.apple.com/in/shop/ways-to-buy"
}
link22 = () => {
    location.href = "https://www.apple.com/in/shop/buy-mac"
}
link23 = () => {
    location.href = "https://www.apple.com/in-edu/store"
}
link24 = () => {
    location.href = "https://www.apple.com/in-edu/shop/shipping-pickup"
}
link25 = () => {
    location.href = "https://contactretail.apple.com/Solutions"
}
link26 = () => {
    location.href = "https://www.apple.com/in-edu/shop/personal-setup"
}
link27 = () => {
    location.href = "https://www.apple.com/in/retail/"
}
link28 = () => {
    location.href = "https://apps.apple.com/in/app/apple-store/id375380948"
}
link29 = () => {
    location.href = "https://www.apple.com/mac/best-mac/#usage"
}
link30 = () => {
    location.href = "https://www.apple.com/in/shop/mac/accessories"
}
link31 = () => {
    location.href = "https://www.apple.com/in/studio-display/"
}
link32 = () => {
    location.href = "https://www.apple.com/in/mac/"
}
link33 = () => {
    location.href = "https://support.apple.com/en-in/mac?cid=gn-ols-mac-psp-prodfly"
}
link34 = () => {
    location.href = "https://www.apple.com/in/applecare/?filter=mac"
}
link35 = () => {
    location.href = "https://www.apple.com/in/os/macos/"
}
link36 = () => {
    location.href = "https://www.apple.com/in/apple-intelligence/"
}
link37 = () => {
    location.href = "https://www.apple.com/in/apps/"
}
link38 = () => {
    location.href = "https://www.apple.com/in/macos/continuity/"
}
link39 = () => {
    location.href = "https://www.apple.com/in/icloud/"
}
link40 = () => {
    location.href = "https://www.apple.com/in/business/mac-does-that/"
}
link41 = () => {
    location.href = "https://www.apple.com/in/education/"
}




document.addEventListener('DOMContentLoaded', () => {
    // Select all filter buttons and product cards
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    // Add a click event listener to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the filter value from the data-filter attribute
            const filter = button.dataset.filter;

            // --- Handle the active state of buttons ---
            // 1. Remove 'active' class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // 2. Add 'active' class to the clicked button
            button.classList.add('active');

            // --- Filter the product cards ---
            productCards.forEach(card => {
                // Get the category of the card from its data-category attribute
                const cardCategory = card.dataset.category;

                // Check if the card should be shown
                if (filter === 'all' || filter === cardCategory) {
                    // If it matches (or if 'all' is selected), remove the 'hide' class
                    card.classList.remove('hide');
                } else {
                    // If it doesn't match, add the 'hide' class
                    card.classList.add('hide');
                }
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.getElementById('scrollContainer');
    const scrollLeftButton = document.getElementById('scroll-left');
    const scrollRightButton = document.getElementById('scroll-right');

    // The amount to scroll. You can adjust this value.
    const scrollAmount = 500;

    scrollLeftButton.addEventListener('click', function () {
        // scrollBy scrolls the element by a given amount
        scrollContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    scrollRightButton.addEventListener('click', function () {
        scrollContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.getElementById('scrollContainer1');
    const scrollLeftButton = document.getElementById('scroll-left1');
    const scrollRightButton = document.getElementById('scroll-right1');

    // The amount to scroll. You can adjust this value.
    const scrollAmount = 400;

    scrollLeftButton.addEventListener('click', function () {
        // scrollBy scrolls the element by a given amount
        scrollContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    scrollRightButton.addEventListener('click', function () {
        scrollContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const scrollContainer = document.getElementById('scrollContainer2');
    const scrollLeftButton = document.getElementById('scroll-left2');
    const scrollRightButton = document.getElementById('scroll-right2');

    // The amount to scroll. You can adjust this value.
    const scrollAmount = 400;

    scrollLeftButton.addEventListener('click', function () {
        // scrollBy scrolls the element by a given amount
        scrollContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    scrollRightButton.addEventListener('click', function () {
        scrollContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
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