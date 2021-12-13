function solution(priorities, location) {
  let count = 0;
  while(priorities.length){
      const el = priorities.shift();
      location--;
      if(el < Math.max(...priorities)){
          priorities.push(el);
          location = location < 0 ? priorities.length - 1 : location;
      }
      else {
          count++;
          if(location < 0)
              return count;
      }
  }
}