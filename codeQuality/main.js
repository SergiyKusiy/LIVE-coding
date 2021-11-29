// bad
const withdraw = (clients, balances, names, amount) => {
   let result = 0;
   clients.forEach(function (client, index) {
     if (client.includes(names) && balances[index] >= amount) {
       result = balances[index] - amount;
     } else if (client.includes(names) && balances[index] < amount) {
       result = -1;
     }
   });
   return result;
};
 
// bad
// const withdraw = (clients, balances, client, amount) => {
//    const clientIndex = clients.indexOf(client);
//    const balanceIndex = balances[clientIndex];
//    if (balanceIndex < amount) {
//        return -1;
//    } else {
//        balances[clientIndex] = balanceIndex - amount;
//        return balances[clientIndex];
//    }
// }

// good
const withdraw = (clients, balances, client, amount) => {
   const clientIndex = clients.indexOf(client);
   if (balances[clientIndex] < amount) {
       return -1;
   } else {
       balances[clientIndex] -= amount;
       return balances[clientIndex];
   }
}

// good
function withdraw(clients, balances, client, amount) {
   const balance = balances;
   const index = clients.indexOf(client);
   
   if (balance[index] < amount) {
      return -1;
   }
   balance[index] -= amount;
   return balance[index]
}

// // bad
// const withdraw = (clients, balances, client, amount) => {
//    if(balances[clients.indexOf(client)] < amount) return -1;
//   balances[clients.indexOf(client)] -= amount;
//   return balances[clients.indexOf(client)];
// }

// good
const withdraw = (clients, balances, client, amount) => {
   const index = clients.indexOf(client)
   if (balances[index] < amount) {
      return -1;
   }
  balances[index] -= amount;
  return balances[index];
}

// bad
//put your code here
// function withdraw(clients, balances, client, amount) {
//    for (let i = 0; i < clients.length; i++) {
//      if (clients[i] === client) {
//        if (balances[i] - amount < 0) {
//          return -1;
//        }
//        if (balances[i] - amount >= 0) {
//          balances[i] -= amount;
//          console.log(balances);
//          return balances[i];
//        }
//      }
//    }
//  }

// good 
//put your code here
function withdraw(clients, balances, client, amount) {
   for (let i = 0; i < clients.length; i++) {
     if (clients[i] === client) {
       if (balances[i] < amount ) {
         return -1;
       }
       balances[i] -= amount;
       return balances[i];
     }
   }
 }