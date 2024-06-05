function addToCart(imageSrc, name, price) {
    alert(name + ' added to cart successfully!');

    var newItem = {
        image: imageSrc,
        name: name,
        price: price
    };
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    cartItems.push(newItem);
    localStorage.setItem('cart', JSON.stringify(cartItems));


}
