function megaFriends(friends) {

   let mega = friends[0];
   let bucket = [];
   for (const friend of friends) {
      if (friend.length > mega.length) {
         bucket.push(friend)
      }
   }
   return bucket;
}

const friends = ['AAAASS', 'BBBBBB', 'CCCCCC', 'ASDCS'];
const myBuddy = megaFriends(friends);
console.log(myBuddy);



const products = [
   {
      "name": "hero Product",
      "detail": "Lorem ipsum dolor sit amet",
      "price": "99",
      "hero": "OMG This just came out today!",
   }, {
      "name": "Product 1",
      "detail": "Lorem ipsum dolor sit amet",
      "price": "99",
      "info": "This is the latest and greatest product from Derp corp.",
   }, {
      "name": "Product 2",
      "detail": "Lorem ipsum dolor sit amet",
      "price": "99",

   }
];




for (const product of products) {
   console.log(product.name)
   const objectValue = `This is example of Object with Template string Example done by ${product.name}`;
   console.log(objectValue)
}

const studentinfo = {
   name: 'Radwan Ahmed',
   age: '26'
}

const objectProperty = `hi ${studentinfo.name}`;
console.log(objectProperty);