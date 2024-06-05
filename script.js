function loadCart() {
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    var cartTable = document.getElementById('cart-table').getElementsByTagName('tbody')[0];
    var totalCost = 0;
    cartTable.innerHTML = '';

    cartItems.forEach(function(item, index) {
        var newRow = cartTable.insertRow();
        var imageCell = newRow.insertCell(0);
        var image = document.createElement('img');
        image.src = item.image;
        imageCell.appendChild(image);


        var nameCell = newRow.insertCell(1);
        nameCell.textContent = item.name;

        var priceCell = newRow.insertCell(2);
        priceCell.textContent = item.price;

        var deleteCell = newRow.insertCell(3);
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = function() {
            totalCost -= parseFloat(item.price.substring(3)); 
            cartItems.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            loadCart();
            updateTotal();
        };
        deleteCell.appendChild(deleteButton);
        totalCost += parseFloat(item.price.substring(3)); 
    });


    var totalCostElement = document.getElementById('total-cost');
    var shippingChargesElement = document.getElementById('shipping-charges');

    totalCostElement.textContent = 'Rs. ' + totalCost.toFixed(2);
    shippingChargesElement.textContent = 'Rs. 500.00';

    var finalAmount = totalCost + 500;
    var finalAmountElement = document.getElementById('final-amount');
    finalAmountElement.textContent = 'Final Amount: Rs. ' + finalAmount.toFixed(2);
}

function updateCart() {
    loadCart();
}

function updateTotal() {
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    var totalCost = 0;

    cartItems.forEach(function(item) {
        totalCost += parseFloat(item.price.substring(3)); 
    });

    var totalCostElement = document.getElementById('total-cost');
    var shippingChargesElement = document.getElementById('shipping-charges');

    totalCostElement.textContent = 'Rs. ' + totalCost.toFixed(2);
    shippingChargesElement.textContent = 'Rs. 500.00';

    var finalAmount = totalCost + 500; 
    var finalAmountElement = document.getElementById('final-amount');
    finalAmountElement.textContent = 'Final Amount: Rs. ' + finalAmount.toFixed(2);
}

loadCart();
