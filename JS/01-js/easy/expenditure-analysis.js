/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/
const transactions = [{
  item: "chana",
  category: "oil and edibles",
  price: 300,
  timestamp: 10.2
}]

const calculateTotalSpentByCategory = (arr) => {
    const totalCategory = {};
    for(let i=0; i<arr.length; i++){
        const {category, price} = arr[i];
    }
    if(totalCategory[arr]){
        totalCategory[arr] += price;
    }
    else{
        totalCategory[arr] = price;
    }
}
const result = [];
for(const category in totalCategory){
    result.push({[category] : totalCategory[arr]});
    return result;
}