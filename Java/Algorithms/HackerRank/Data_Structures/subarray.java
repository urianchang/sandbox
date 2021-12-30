// https://www.hackerrank.com/challenges/java-negative-subarray/problem

import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        int[] myArr = new int[n];
        for (int i = 0; i < n; i++) {
            myArr[i] = input.nextInt();
        }

        int neg_count = 0;
        for (int start = 0; start < n; start++) {
            int sum = 0;
            for (int end = start; end < n; end++) {
                sum = myArr[end] + sum;
                if (sum < 0) {
                    neg_count += 1;
                }
            }
        }
        System.out.println(neg_count);
    }
}
