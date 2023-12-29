/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  if (transactions.length==0){
    return [];
  }
  let newarr=[{
    category:transactions[0].category,
    totalSpent:transactions[0].price
  }];
  for (let i=1;i<transactions.length;i++){
    let cat=transactions[i].category;
    let money=transactions[i].price;
    let tracker=false;
    for (let j=0;j<newarr.length;j++){
      if (newarr[j].category==cat){
        tracker = true;
        newarr[j].totalSpent+=money;
        break;
      }
    }
    if (tracker==false){
      newarr.push({
        category:cat,
        totalSpent:money
      })
    }
  }
  return newarr;
}

module.exports = calculateTotalSpentByCategory;
