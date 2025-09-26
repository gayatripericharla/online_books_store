// A simple variable to hold the cart count (will be reset every time the page loads)
let cartCount = 0;

// Get the element in the navigation bar that displays the cart count
const cartCounterElement = document.querySelector('.main-nav li:nth-child(3) a'); 
// This selects the 3rd list item (Cart (0)) in the navigation

// Get all the 'Add to Cart' buttons on the page
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

/**
 * Function to update the cart counter in the header
 */
function updateCartDisplay() {
    // Update the text to show the new count
    cartCounterElement.textContent = `Cart (${cartCount})`;
}

/**
 * Event listener function for when an 'Add to Cart' button is clicked
 * @param {Event} event - The click event
 */
function handleAddToCart(event) {
    // 1. Increment the cart count
    cartCount++;
    
    // 2. Update the display in the navigation
    updateCartDisplay();
    
    // 3. Optional: Provide user feedback (Notification)
    const bookCard = event.target.closest('.book-card');
    const bookTitle = bookCard.querySelector('.book-title').textContent;

    alert(`"${bookTitle}" added to your cart! Total items: ${cartCount}`);

    // Optional: Visually confirm the item was added
    event.target.textContent = "Added! (View Cart)";
    event.target.disabled = true; // Disable the button after a click for a clean feel
    
    // Re-enable the button after 3 seconds for simplicity
    setTimeout(() => {
        event.target.textContent = "Add to Cart";
        event.target.disabled = false;
    }, 3000);
}

// Attach the click event listener to every 'Add to Cart' button
addToCartButtons.forEach(button => {
    button.addEventListener('click', handleAddToCart);
});

// Initialize the display when the page first loads
updateCartDisplay();