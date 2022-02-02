function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1];
  const zeroCount = lottos.filter(n => n === 0).length;
  const matchCount = lottos.filter(num => win_nums.includes(num)).length;
  console.log(zeroCount, matchCount);
  return [rank[matchCount + zeroCount], rank[matchCount]];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]