// https://programmers.co.kr/learn/courses/30/lessons/72411

const combination = (arr, num) => {
  if(num === 1) return arr.map(v => [v]);
  const result = [];
  
  arr.forEach((cur, idx, arr) => {
      const rest = arr.slice(idx+1);
      const arr2 = combination(rest, num-1);
      result.push(...arr2.map(v => [cur, ...v]));
  });
  return result;
};

function solution(orders, course) {
  const result = [];
  course.forEach(n => {
      const menuCounter = {};
      // orders에 n가지 조합들을 계산
      orders.forEach(order => {
          const combies = combination(order.split(''), n);
          combies.forEach(combi => {
              combi = combi.sort().join("");
              if(menuCounter[combi]) menuCounter[combi] += 1;
              else menuCounter[combi] = 1;
          });
      });
      // 가장 많은 주문수
      const max = Math.max(...Object.values(menuCounter));
      for(let [menu, cnt] of Object.entries(menuCounter))
          if(cnt === max && max > 1) result.push(menu); 
  });
  return result.sort();
}

const order = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course = [2,3,4];
console.log(solution(order, course)); // ["AC", "ACDE", "BCFG", "CDE"]