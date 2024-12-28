// Function to update the cart count in the header
        function updateCartCount(count) {
            document.getElementById('cart-count').innerText = count;
        }
    
        // Add event listeners to all cart icons to update the cart count when clicked
        document.querySelectorAll('.add-to-cart').forEach(function(button) {
            button.addEventListener('click', function() {
                // Increment cart count
                let currentCount = parseInt(document.getElementById('cart-count').innerText);
                currentCount++;
                updateCartCount(currentCount); // Update the cart count in header
            });
        });