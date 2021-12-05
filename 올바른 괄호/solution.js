function solution(s){
  if(s.length % 2 !== 0)return false;
  const stack = [];
  for(let c of s){
      if(c === '(') stack.push(c);
      else if(stack.pop() in [undefined, ')']) return false;
  }
  if(stack.length > 0) return false;
  return true;
}
