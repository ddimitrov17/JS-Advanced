class FashionRetailInventory {
    constructor(storehouse, location) {
        this.storehouse = storehouse;
        this.location = location;
        this.productStock = [];
    }
    addProduct(productName, size, quantity, price) {
        let currentProduct = this.productStock.find(p => p.productName == productName && p.size == size);
        if (currentProduct) {
            currentProduct.quantity += Number(quantity);
            return `You added ${quantity} more pieces of product ${productName} size ${size}`;
        } else {
            this.productStock.push({ productName, size, quantity, price });
            return `The product ${productName}, size ${size} was successfully added to the inventory`;
        }
    }
    sendProduct(productName, size) {
        let currentProduct = this.productStock.find(p => p.productName == productName && p.size == size);
        if (!currentProduct) {
            throw new Error(`The product ${productName}, size ${size} is not in the inventory`);
        } else {
            let index = this.productStock.indexOf(currentProduct);
            this.productStock.splice(index, 1);
            return `The product ${productName}, size ${size} was successfully removed from the inventory`;
        }
    }
    findProductsBySize(size) {
        let matches = [];
        for (let currentStock of this.productStock) {
            if (currentStock.size == size) {
                matches.push(`${currentStock.productName}-${currentStock.quantity} pieces`);
            }
        }
        if (matches.length > 0) {
            return `${matches.join(', ')}`;
        } else {
            return 'There are no products available in that size';
        }
    }
    listProducts() {
        let result = [];
        if (this.productStock.length == 0) {
            return `${this.storehouse} storehouse is empty`;
        } else {
            result[0] = `${this.storehouse} storehouse in ${this.location} available products:`;
            this.productStock.sort((a, b) => a.productName.localeCompare(b.productName));
            for (let currentStock of this.productStock) {
                result.push(`${currentStock.productName}/Size:${currentStock.size}/Quantity:${currentStock.quantity}/Price:${currentStock.price}$`);
            }
            return `${result.join('\n')}`;
        }
    }
}

const storeHouse = new FashionRetailInventory("East", "Milano");
console.log(storeHouse.addProduct("Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("T-Shirt", "M", 10, 25.0));
console.log(storeHouse.addProduct("Shirt", "L", 5, 30.0));
console.log(storeHouse.addProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.sendProduct("Shoes", "9", 8, 50.0));
console.log(storeHouse.listProducts());



