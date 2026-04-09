function filterProducten(categorie, button) {
    const products = Array.from(document.querySelectorAll('.product'));
    const filterList = document.querySelector('#filtered-products');
    const filteredContainer = document.querySelector('#filtered-container');
    const originalSection = document.querySelector('.producten');
    const filterButtons = document.querySelectorAll('.filter-btn');

    if (!filterList || !filteredContainer || !originalSection) {
        return;
    }

    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));

    // Add active class to the clicked button
    if (button) {
        button.classList.add('active');
    }

    // Clear the filtered list completely
    filterList.innerHTML = '';

    if (categorie === 'all') {
        originalSection.style.display = '';
        filteredContainer.hidden = true;
        return;
    }

    // Hide original section and show filtered container
    originalSection.style.display = 'none';
    filteredContainer.hidden = false;

    // Filter and add products
    products.forEach(function(product) {
        if (product.classList.contains(categorie)) {
            const cloned = product.cloneNode(true);
            // Ensure no duplicates by checking if this product is already in the filtered list
            const existingProducts = filterList.querySelectorAll('.product');
            const isDuplicate = Array.from(existingProducts).some(existing => {
                return existing.querySelector('h4')?.textContent === cloned.querySelector('h4')?.textContent;
            });

            if (!isDuplicate) {
                filterList.appendChild(cloned);
            }
        }
    });
}
