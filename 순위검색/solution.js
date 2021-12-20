function solution(info, query) {
    // scores 객체에 info 데이터를 키로 만들어서 점수 집어넣기.
    const scores = {};
    info.forEach(score => {
        const array = score.split(' ');
        [array[0], '-'].forEach(lv0 => {
            [array[1], '-'].forEach(lv1 => {
                [array[2], '-'].forEach(lv2 => {
                    [array[3], '-'].forEach(lv3 => {
                        let key = `${lv0}_${lv1}_${lv2}_${lv3}`
                        if(!scores[key]) scores[key] = [array[4]*1];
                        else scores[key].push(array[4]*1)
                    })})})})});
    // 전부 정렬
    Object.keys(scores).forEach(key => scores[key] = scores[key].sort((a, b) => a-b));
    
    // 각 query에 해당하는 지원자의 숫자 구하기
    let result = [];
    query.forEach(q => {
        const score = q.match(/\d+/);
        const key = q.replace(/ \d+/, '').split(' and ').join('_');
        let candidates = scores[key] || [];
        let start = 0, end = candidates.length;
        while(start !== end && start !== candidates.length){
            const mid = ~~((start + end) / 2);
            if(candidates[mid] < score) start = mid + 1;
            else end = mid;
        }
        result.push(candidates.length - start);
    });
    
    return result;
}
// console.log(makeKey([ 'cpp', '-', '-', '-']));

const info = ["java backend junior pizza 150","python frontend senior chicken 210","python frontend senior chicken 150","cpp backend senior pizza 260","java backend junior chicken 80","python backend senior chicken 50"];
const query = ["java and backend and junior and pizza 100","python and frontend and senior and chicken 200","cpp and - and senior and pizza 250","- and backend and senior and - 150","- and - and - and chicken 100","- and - and - and - 150"];
console.log(solution(info, query));

module.exports = solution;