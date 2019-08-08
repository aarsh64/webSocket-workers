/// <reference lib="webworker" />

import isPrimeNumber from 'node_modules/prime-number';
import primeNumberList from 'node_modules/prime-number/list';

addEventListener('message', ({ data }) => {

    // const primeNumberList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  const   arePrimeList = primeNumberList.map((prime) => {
      return isPrimeNumber(prime);
  })
  // const response = `worker response to ${data}`;
  postMessage(arePrimeList);  
});
