function solution(cacheSize, cities) {
  let time = 0;
  const cache = [];
  
  cities.forEach(city => {
      city = city.toLowerCase();
      const isIn = cache.includes(city);
      if(isIn) time += 1;
      else time += 5;
      
      // cache 조정
      cache.push(city);
      if(cache.length > cacheSize) {
          if(isIn) cache.splice(cache.indexOf(city), 1);
          else cache.shift();
      }
  });
  return time;
}


console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]))