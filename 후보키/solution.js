const combination = (arr, num) => {
  if(num === 1) return arr.map(v => String(v));
  
  const result = [];
  arr.forEach((cur, idx) => {
      const restArr = arr.slice(idx+1);
      result.push(...combination(restArr, num-1).map(v => [cur, v].join('')));
  });
  return result;
};

function solution(relation) {
  /** 
  *   후보키 구하는 과정...
  *   키 조합 안에 다른 후보키가 들어있는지? -> 후보키X
  *   키가 유일한 값인지? -> 후보키
  */
  const candidateKeys = [];
  const attributesLength = relation[0].length
  const attributeList = Array(attributesLength).fill().map((_, i) => i);
  // 각 키 조합을 만들어서 후보키가 될 수 있으면 candidateKeys에 넣기..
  for(let i = 0; i < attributesLength; i++){
      combination(attributeList, i+1).forEach(key => {
          // key가 이미 있는키의 부분집합인지? -> 최소성을 만족하는지?
          // Key가 012인데 후보키에 02가 있으면? search로는 찾지 못함.. 부분적으로 있는 것들 세야함..
          if(candidateKeys.some(candidate => {
              let cnt = 0;
              for(let j=0; j<candidate.length; j++)
                  if(key.search(candidate[j]) > -1) cnt++;
              if(cnt === candidate.length) return true;
          })) return;
          
          // 해당 키 조합이 유일한 값인지??
          const values = new Set();
          relation.forEach(row => {
              let value = '';
              key.split('').forEach(k => value+=row[k]);
              values.add(value);
          });
          if(values.size === relation.length) candidateKeys.push(key);
      });
  }
  return candidateKeys.length;
}




const relation = [["100","ryan","music","2"],["200","apeach","math","2"],["300","tube","computer","3"],["400","con","computer","4"],["500","muzi","music","3"],["600","apeach","music","2"]];
// const relation = [['a', '1', 'aaa', 'c', 'ng'], ['a', '1', 'bbb', 'e', 'g'], ['c', '1', 'aaa', 'd', 'ng'], ['d', '2', 'bbb', 'd', 'ng']]
console.log(solution(relation));

module.exports = combination;