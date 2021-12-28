function solution(clothes) {
  let answer = 1; const allClothes = {};
  clothes.forEach(cloth => allClothes[cloth[1]] = (allClothes[cloth[1]] || 0) + 1);
  Object.values(allClothes).forEach(count => answer *= (count+1));
  return answer - 1;
}