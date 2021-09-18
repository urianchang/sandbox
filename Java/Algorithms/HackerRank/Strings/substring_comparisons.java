// https://www.hackerrank.com/challenges/java-string-compare/problem

import java.util.Scanner;

public class Solution {

    public static String getSmallestAndLargest(String s, int k) {
        String smallest = "";
        String largest = "";

        int len = s.length();
        String sub1 = s.substring(0, k);
        smallest = largest = sub1;

        for (int i = 1; i <= len - k; i++) {
            String temp = s.substring(i, i+k);
            if (smallest.compareTo(temp) > 0) {
                smallest = temp;
            }
            if (largest.compareTo(temp) < 0) {
                largest = temp;
            }
        }

        return smallest + "\n" + largest;
    }


    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String s = scan.next();
        int k = scan.nextInt();
        scan.close();

        System.out.println(getSmallestAndLargest(s, k));
    }
}
