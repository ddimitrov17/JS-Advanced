function fruit(fruitType,weight,pricePerKg) {
    let weightInKg=weight/1000;
    let price=weightInKg*pricePerKg;
    console.log(`I need $${price.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruitType}.`);
}

fruit('orange', 2500, 1.80)