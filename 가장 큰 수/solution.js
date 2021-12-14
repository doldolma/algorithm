function solution(numbers) {
  const result = numbers.map(n => n.toString()).sort((a, b) => {
      return b.repeat(4).slice(0, 4) - a.repeat(4).slice(0, 4)
  }).join('');
  return result.startsWith('0') ? '0' : result
}