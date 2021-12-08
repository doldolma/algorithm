const permutation = (array, num) => {
  if(num === 1) return array.map(v => [v]);
  const result = [];
  array.forEach((cur, idx, arr) =>
      result.push(...permutation(arr.filter((x,i) => i !== idx), num-1).map(v => [cur, ...v])));
  return result;
};

const calc = (operators, n, expression) => {
  if(n === 0) return String(eval(expression));
  return String(eval(expression.split(operators[n])
                    .map(exp => calc(operators, n-1, exp)).join(operators[n])));
};

function solution(expression) {
  let result = [];
  const opers = [...new Set(expression.match(/[+*-]/g))];
  permutation(opers, opers.length).forEach(operators => {
      result.push(Math.abs(calc(operators, opers.length, expression)));
  });
  
  return Math.max(...result);
}