package 쿼드압축후개수세기;

import java.util.Arrays;

class Solution {
  public int[] solution(int[][] arr) {
      int[] answer = {0, 0};
      
      return answer;
  }
  
  public static void main(String[] args){
    int[][] arr = {{1, 1, 0, 0}, {1, 0, 0, 0}, {1, 0, 0, 1}, {1, 1, 1, 1}};
    System.out.println(Arrays.toString(new Solution().solution(arr)));  // [4, 9]
  }
}