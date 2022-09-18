const products = [
   'Dell Inspiron 15 3511 Core i3 11th Gen 15.6" FHD Laptop',
   'Dell Vostro 14 3400 Core i3 11th Gen 14" HD Laptop with 03 Years Warrant',
   'Dell Vostro 15 3500 Core i3 11th Gen 15.6" FHD Laptop with 3 Years Warranty',
   'HP Pavilion 15-eg1678TU Core i5 11th Gen 15.6" FHD Laptop',
   'ASUS ROG Strix XG32VQR 32" Curved HDR Gaming Monitor'
];

const searching = 'asus';

const output = [];

// for (const product of products) {
//    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
//       output.push(product)
//    }
// }

// console.log(output);

//using include 
for (const product of products) {
   if (product.toLowerCase().includes(searching.toLowerCase())) {
      output.push(product)
   }
}
console.log(output)