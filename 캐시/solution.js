// https://programmers.co.kr/learn/courses/30/lessons/17680
function solution(cacheSize, cities) {
  let time = 0;
  const cache = [];
  
  cities.forEach(city => {
      city = city.toLowerCase();
      const isIn = cache.includes(city);
      time += isIn ? 1 : 5;
      
      // cache 조정
      cache.push(city);
      if(isIn) cache.splice(cache.indexOf(city), 1);
      else if(cache.length > cacheSize) cache.shift();
  });
  return time;
}

console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));
// 50