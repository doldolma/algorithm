function solution(number, k){
  let stack = [number[0]];
  for(let i=1; i<number.length; i++){
      while(k && (stack[stack.length-1]) < number[i]){
          stack.pop();
          k--;
      }
      stack.push(number[i]);
  }
  if(k) stack = stack.slice(0, stack.length-k);
  return stack.join('');
}

// function solution(number, k) {
//     for(let i=0; i<k; i++){
//         for(let n=0; n<number.length; n++){
//             if(number[n] < number[n+1]) {
//                 number = number.slice(0, n) + number.slice(n+1);
//                 break;
//             }
//         }
//     }
//     return number;
// }

console.log(solution('77777', 2));