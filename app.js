const cartIcon = document.querySelector('.shopping-cart');
const cart = document.querySelector('.cart')
const cartClose = document.querySelector('#cart-close');

cartIcon.addEventListener('click', () => {
    cart.classList.add('active');
});

cartClose.addEventListener('click', () => {
    cart.classList.remove('active');
})



fetch('data.json')
.then(res => res.json())
.then(data => {
    console.log(data)
    renderProduct(data)
})
.catch(err => {
    console.log(err);
});

function renderProduct(prods) {
const productContent = document.querySelector('.product-content');
productContent.classList.add('product-content')

    prods.forEach(prod => {
        const productBox = document.createElement('div');
    productBox.classList.add('product-box');
    productBox.innerHTML =`
    <div class="img-box">
                    <img src="${prod.src}" alt="">
                    <h2 class="product-title">${prod.title}</h2>
                    <div class="price-and-cart">
                        <span class="price">$${prod.price}</span>
                        <i class="ri-shopping-cart-2-fill add-cart"></i>
                    </div>
                </div>
                `;

                productContent.appendChild(productBox);
    });
}

