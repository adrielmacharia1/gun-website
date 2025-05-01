// Product data structure
const products = [
    {
        id: 1,
        name: "AR-15 Rifle",
        category: "rifles",
        price: 899.99,
        featured: true
    },
    {
        id: 2,
        name: "9mm Pistol",
        category: "handguns",
        price: 499.99,
        featured: true
    }
];

// Load products
function loadProducts() {
    const storedProducts = localStorage.getItem('gunStoreProducts');
    return storedProducts ? JSON.parse(storedProducts) : products;
}

// Display featured products on homepage
function displayFeaturedProducts() {
    const featuredContainer = document.getElementById('featured-products');
    const products = loadProducts().filter(p => p.featured);
    
    featuredContainer.innerHTML = products.map(product => `
        <div class="product-card">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
        </div>
    `).join('');
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('featured-products')) {
        displayFeaturedProducts();
    }
    
    if (document.getElementById('products-grid')) {
        displayAllProducts();
    }
});