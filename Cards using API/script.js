
// Fetch products from the API
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json();
        return products;
    } 
    catch (error) {
        console.error('Error fetching products:', error);
        return error;
    }
}


// Render products
async function renderProducts() {
    try {
        const products = await fetchProducts();
        products.forEach(product => {
            const productCard = createProductCard(product);
            container.appendChild(productCard);
        });
    } catch (error) {
        console.error('Error rendering products:', error);
    }
}


renderProducts();


const container = document.getElementById('card-container');

// Function to create a card for each product
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'card';

    const image = document.createElement('img');
    image.src = product.image;

    
    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = product.title;

    // const description = document.createElement('div');
    // description.className = 'description';
    // description.textContent = product.description;

    const price = document.createElement('div');
    price.className = 'price';
    price.textContent = `Price $${product.price}`;


    const rating = document.createElement('div');
    rating.className = 'rating';
    rating.textContent = `Rating: ${product.rating.rate} (${product.rating.count} reviews)`;

    
    card.appendChild(image);
    card.appendChild(title);
    // card.appendChild(description);
    card.appendChild(price);
    card.appendChild(rating);

    return card;
}

