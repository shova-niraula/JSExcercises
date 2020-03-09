let faker= require("faker");
for( i= 0; i<10; i++){
    let  products =faker.commerce.productName();
    let price =faker.commerce.price();
    console.log(products + " : " + price);
}


