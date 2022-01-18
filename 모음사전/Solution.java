class Solution {
    public int solution(String word) {
        int[] order = {781, 156, 31, 6, 1};
        int result = 0;
        for(int i=0; i<word.length(); i++){
            int index = "AEIOU".indexOf(word.charAt(i));
            result += (1 + order[i] * index);
        }
        return result;
    }
    public static void main(String[] args){
      System.out.println(new Solution().solution("AAAAE")); // 6
    }
}