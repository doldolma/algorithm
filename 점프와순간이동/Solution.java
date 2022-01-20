package 점프와순간이동;

// https://programmers.co.kr/learn/courses/30/lessons/12980?language=javascript
public class Solution {
  public int solution(int n) {
      return Integer.bitCount(n);
  }
  public static void main(String[] args){
    System.out.println(new Solution().solution(5000)); // 5
  }
}