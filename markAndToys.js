const maximumToys= function(prices, k) {

  let sortedByPrice = prices.sort(function(a,b){return a-b})
  let count = 0;
  
    for (let i=0; i<sortedByPrice.length; i++){
      if (k >= sortedByPrice[i]){
        k -= sortedByPrice[i]; // new value of k after being subtracted
        count++; // new toy, yey
      }
    }
  
  return count;
  }
  const arr= [ 1, 12, 5, 111, 200, 1000, 10 ];
  const money= 15;
  maximumToys(arr,money);
  