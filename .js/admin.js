document.getElementById('product-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('product-name').value;
    const category = document.getElementById('product-category').value;
    const price = parseFloat(document.getElementById('product-price').value);
    
    const products = JSON.parse(localStorage.getItem('gunStoreProducts')) || [];
    const newProduct = {
        id: Date.now(),
        name,
        category,
        price,
        featured: false
    };
    
    products.push(newProduct);
    localStorage.setItem('gunStoreProducts', JSON.stringify(products));
    
    document.getElementById('admin-message').textContent = 'Product added successfully!';
    this.reset();
});