const isRight = (string) => {
  const stack = [];
  for(let c of string){
      if(c === '(') stack.push(c);
      else if(stack.pop() === ')') return false;
  }
  if(stack.length) return false;
  return true;
};
function solution(p) {
  if(!p || isRight(p)) return p;
  // 균형잡히게 나누기..
  let open = 0, close = 0, i=0;
  for(; i<p.length; i++){
      if(p[i] === '(') open += 1;
      else close += 1;
      if(open === close) break;
  }
  let u = p.slice(0, i+1);
  let v = p.slice(i+1);
  // u가 올바르면 v만 재귀한 후 리턴
  if(isRight(u)) return u+solution(v);
  
  let reverse = u.slice(1, u.length-1).split('').map(c => c === '(' ? ')' : '(').join('');
  return '(' + solution(v) + ')' + reverse
}