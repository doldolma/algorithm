const open = '({[';
const close = ')}]';

const isRight = (s) => {
    const stack = [];
    for(let c of s) {
        if(open.indexOf(c) > -1) stack.push(c);
        else if(stack.pop() !== open[close.indexOf(c)]) return false;
    }
    if(stack.length) return false;
    return true;
};

function solution(s) {
    let result = 0;
    s = s.split('');
    for(let i=0; i<s.length; i++){
        //s의 길이만큼 회전하기..
        if(isRight(s)) result++;
        s.push(s.shift());
    }
    return result;
}