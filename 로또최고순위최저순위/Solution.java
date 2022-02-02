package 로또최고순위최저순위;

import java.util.Arrays;

class Solution {
  public int[] solution(int[] lottos, int[] win_nums) {
      int[] rank = {6, 6, 5, 4, 3, 2, 1};
      int zeroCount = (int) Arrays.stream(lottos).filter(n -> n == 0).count();
      int matchCount = 0;
      for(int num: lottos){
        if(contains(win_nums, num)) matchCount++;
      }
      int[] result = {rank[zeroCount + matchCount], rank[matchCount]};
      return result;
  }
  public boolean contains(int[] win_nums, int num){
    for(int n: win_nums){
      if(num == n) return true;
    }
    return false;
  }
  public static void main(String[] args){
    int[] lottos = {44, 1, 0, 0, 31, 25};
    int[] win_nums = {31, 10, 45, 1, 6, 19};
    int[] result = new Solution().solution(lottos, win_nums);
    for(int a: result){ System.out.println(a); } // 3, 5
  }
}