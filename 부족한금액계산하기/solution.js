function solution(price, money, count) {
  let needMoney = 0;
  for(let i=1; i<=count; i++){
      needMoney += price * i;
  }
  return needMoney > money ? needMoney - money : 0;
}

console.log(solution(3,20,4)); // 10