// Event listeners for navigation buttons
document.getElementById('shopButton').addEventListener('click', function() {
    // Redirect to shop page when shopButton is clicked
    window.location.href = 'shop.html';
});

document.getElementById('HomeButton').addEventListener('click', function() {
    // Redirect to home page when HomeButton is clicked
    window.location.href = 'index.html';
});

// Additional Home button event listener with custom content loading
document.getElementById("HomeButton").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    loadContent('homepage.html'); // Load homepage content dynamically
});

// Event listener for shop-card click
document.querySelector('.shop-card').addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the default behavior of the link
    window.location.href = 'product.html'; // Redirects to product page
});

// Event listener for location icon click
document.getElementById("location-icon").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default link behavior
    window.location.href = 'list.html'; // Redirects to location list page
});

// Adding event listeners to all 'add-to-cart' buttons
const addToCartBtns = document.getElementsByClassName('add-to-cart');
const popup = document.getElementById('popup');

// Loop through all 'add-to-cart' buttons
for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener('click', () => {
    popup.classList.remove('hidden'); // Show popup

    // Close the popup automatically after 2 seconds
    setTimeout(() => {
      popup.classList.add('hidden');
    }, 2000);
  });
}

// Function to show the login form and overlay
function showLoginForm() {
    document.querySelector('.login-form').classList.add('show');
    document.querySelector('.overlay').classList.add('show');
}

// Function to hide the login form and overlay
function hideLoginForm() {
    document.querySelector('.login-form').classList.remove('show');
    document.querySelector('.overlay').classList.remove('show');
}

// Event listener to show login form when profile icon is clicked
document.getElementById('profile-icon').addEventListener('click', showLoginForm);

// Event listener to hide login form when close button is clicked
document.querySelector('.login-form .close-btn').addEventListener('click', hideLoginForm);

// Function to show the signup form and hide the login form
function showSignupForm() {
    document.querySelector('.login-form').classList.remove('show');
    document.querySelector('.signup-form').classList.add('show');
}

// Event listener to show signup form when signup button is clicked
document.getElementById('signupbtn').addEventListener('click', showSignupForm);

// Function to hide the signup form and overlay when the close button is clicked
function hideSignupForm() {
    document.querySelector('.signup-form').classList.remove('show');
    document.querySelector('.overlay').classList.remove('show');
}

// Event listener to hide signup form when close button is clicked
document.querySelector('.signup-form .close-btn').addEventListener('click', hideSignupForm);

// Event listener for cart-related actions
document.addEventListener('DOMContentLoaded', function() {
    const cartIcon = document.getElementById('cart-icon');
    const cartSlide = document.getElementById('cart-slide');
    const closeCart = document.getElementById('closeCart');
    const overlay = document.querySelector('.overlay2');
    const cartItems = document.querySelectorAll('.cart-slide .cart-item');

    // Open the cart slide and show the overlay when the cart icon is clicked
    cartIcon.addEventListener('click', function() {
        cartSlide.classList.add('open');
        overlay.style.display = 'block'; // Show the overlay
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    // Close the cart slide and hide the overlay when the close button is clicked
    closeCart.addEventListener('click', function() {
        cartSlide.classList.remove('open');
        overlay.style.display = 'none'; // Hide the overlay
        document.body.style.overflow = 'auto'; // Restore scrolling
    });

    // Optional: Close the cart slide and hide the overlay when clicking outside of it
    document.addEventListener('click', function(event) {
        if (!cartSlide.contains(event.target) && !cartIcon.contains(event.target) && !overlay.contains(event.target)) {
            cartSlide.classList.remove('open');
            overlay.style.display = 'none'; // Hide the overlay
            document.body.style.overflow = 'auto'; // Restore scrolling
        }
    });

    // Optional: Add actions for items in the cart if needed
    cartItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add custom behavior for cart items here
        });
    });
});

// Event listener for hamburger menu and side menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const sideMenu = document.getElementById('side-menu');
    const closeMenu = document.getElementById('close-menu');
    const menuItems = document.querySelectorAll('.side-menu nav ul li a'); // Select all menu links

    // Open side menu when hamburger menu is clicked
    hamburgerMenu.addEventListener('click', function() {
        sideMenu.classList.add('open');
    });

    // Close side menu when close button is clicked
    closeMenu.addEventListener('click', function() {
        sideMenu.classList.remove('open');
    });

    // Close side menu when any menu item is clicked
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            sideMenu.classList.remove('open');
        });
    });
});

// Event listener for shop now button
document.getElementById('shop-now-btn').addEventListener('click', function() {
    window.location.href = 'shop.html';
});

// Event listener for slider functionality
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    // Function to show the current slide
    function showSlide(index) {
        if (index >= slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex = index;
        }
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Previous button event listener
    prevBtn.addEventListener('click', function() {
        showSlide(currentIndex - 1);
    });

    // Next button event listener
    nextBtn.addEventListener('click', function() {
        showSlide(currentIndex + 1);
    });

    // Auto-play functionality for the slider
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000); // Change slide every 5 seconds
});

// Functions for manually navigating through images in the slider
let currentIndex = 0;

function onLeftButton() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
}

function onRightButton() {
    if (currentIndex < document.querySelectorAll('.img_container').length - 1) {
        currentIndex++;
        updateSlider();
    }
}

// Function to update the slider position
function updateSlider() {
    document.getElementById('imgs_container').style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Navigation link active state management
document.addEventListener('DOMContentLoaded', () => {
    const navLinkEls = document.querySelectorAll('.nav-link'); // Select all navigation links

    const updateActiveLink = () => {
        const windowHash = window.location.hash;
        navLinkEls.forEach(navLinkEl => {
            if (navLinkEl.getAttribute('href') === windowHash) {
                navLinkEl.classList.add('active-link');
            } else {
                navLinkEl.classList.remove('active-link');
            }
        });
    };

    // Update active link on initial load
    updateActiveLink();

    // Listen to hash change events
    window.addEventListener('hashchange', updateActiveLink);
});

// Author display navigation
let currentAuthorIndex = 0;
const authorDivs = document.getElementsByClassName('author-display');

function updateAuthorDisplay() {
    // Hide all authors
    for (let i = 0; i < authorDivs.length; i++) {
        authorDivs[i].style.display = 'none';
    }
    // Show the current author
    authorDivs[currentAuthorIndex].style.display = 'block';
}

function showPreviousAuthor() {
    if (currentAuthorIndex > 0) {
        currentAuthorIndex--;
    } else {
        currentAuthorIndex = authorDivs.length - 1; // Loop back to last author
    }
    updateAuthorDisplay();
}

function showNextAuthor() {
    if (currentAuthorIndex < authorDivs.length - 1) {
        currentAuthorIndex++;
    } else {
        currentAuthorIndex = 0; // Loop back to first author
    }
    updateAuthorDisplay();
}

// Initialize with the first author
updateAuthorDisplay();

// Form validation for product form
document.getElementById('productForm').addEventListener('submit', function(event) {
    // Validate the price field
    var price = document.getElementById('price').value;
    if (!/^\d+(\.\d{1,2})?$/.test(price)) {
        alert('Please enter a valid price (e.g., 10, 10.99).');
        event.preventDefault(); // Prevent form submission
    }

    // Validate the description length
    var description = document.getElementById('description').value;
    if (description.length < 20) {
        alert('Description must be at least 20 characters long.');
        event.preventDefault(); // Prevent form submission
    }
});

// Event listeners for quantity buttons in the product form
document.getElementById('minus-btn').addEventListener('click', function() {
    var counter = document.getElementById('counter-value');
    var currentValue = parseInt(counter.textContent);
    if (currentValue > 0) {
        counter.textContent = currentValue - 1;
    }
});

document.getElementById('plus-btn').addEventListener('click', function() {
    var counter = document.getElementById('counter-value');
    var currentValue = parseInt(counter.textContent);
    counter.textContent = currentValue + 1;
});
