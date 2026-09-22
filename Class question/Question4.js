class Product {
    constructor(productId, productName, price) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
    }

    getDiscountedPrice(discount) {
        return this.price - (this.price * discount / 100);
    }

    display() {
        console.log("Product ID:", this.productId);
        console.log("Product Name:", this.productName);
        console.log("Price:", this.price);
    }

    static compareProducts(p1, p2) {
        if (p1.price > p2.price) {
            console.log("Higher priced product:", p1.productName);
        }
        else if (p2.price > p1.price) {
            console.log("Higher priced product:", p2.productName);
        }
        else {
            console.log("Both products have the same price.");
        }
    }
}


class Electronics extends Product {
    constructor(productId, productName, price, warranty) {
        super(productId, productName, price);
        this.warranty = warranty;
    }

    display() {
        super.display();
        console.log("Warranty:", this.warranty, "years");
    }
}

let p1 = new Product(101, "Notebook", 500);
let p2 = new Product(102, "Bag", 1000);
let e1 = new Electronics(103, "Laptop", 60000, 2);


console.log("Discounted Price:", p1.getDiscountedPrice(10));


Product.compareProducts(p1, p2);

e1.display();