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