let product = {
    productId: 101,
    productName: "Laptop",
    price: 50000,
    quantity: 2,

    calculateTotal: function() {
        return this.price * this.quantity;
    },

    updateQuantity: function(newQuantity) {
        this.quantity = newQuantity;
    },

    displayDetails: function() {
        document.getElementById("output").innerHTML =
            "Product ID: " + this.productId + "<br>" +
            "Product Name: " + this.productName + "<br>" +
            "Price: ₹" + this.price + "<br>" +
            "Quantity: " + this.quantity + "<br>" +
            "Total Price: ₹" + this.calculateTotal();
    }
};

product.updateQuantity(3);
product.displayDetails();