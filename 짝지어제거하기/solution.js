// https://programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
  // const regex = /([a-z])\1/;
  // while(true){
  //     const newString = s.replace(regex, '');
  //     if(!newString.length) return 1;
  //     if(s === newString) return 0;
  //     s = newString
  // }
  
  const stack = [];
  for(let i=0; i<s.length; i++){
      if(stack[stack.length-1] === s[i]) stack.pop();
      else stack.push(s[i])
  }
  if(stack.length>0) return 0;
  return 1;
}

console.log(solution('baabaa')); // 1