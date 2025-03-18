// Code your solutions in this file

const array =["Charlie", "Samip", "Ali"]
function writeCards(array ,surprise){
   let me = []
   for (let i = 0 ; i<array.length ; i++) {
    let message = `Thank you, ${array[i]}, for the wonderful ${surprise} gift!`    
    me.push(message);
   }
   return me;

}  

function countDown(number){
   while (number >=0){
      console.log(number)
      number --;
   }
}


 
    
 