// Question 5: Calculating Total Price in User's Cart

let arrayTotalPrice = [];
function calculateTotalPrice(product) {
  // เริ่มเขียนโค้ดตรงนี้
    for (let i=0 ; i < product.length ; i++){
      arrayTotalPrice.push(product[i].price * product[i].quantity);
    //console.log(arrayTotalPrice);
    }
  return arrayTotalPrice.reduce(summary);
};

function summary(x,y){
  return x+y;
};

// ตัวอย่างการใช้งาน

const cart = [
  { name: "apple", price: 10, quantity: 2 },
  { name: "banana", price: 15, quantity: 1 },
  { name: "orange", price: 5, quantity: 3 },
];

console.log(calculateTotalPrice(cart)); // ผลลัพธ์จากการ Execute ตัว Function จะต้องได้: 50
