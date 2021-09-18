// https://www.hackerrank.com/challenges/java-end-of-file/problem

import java.io.*;
import java.util.*;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int count = 0;
        while (sc.hasNext()) {
            count += 1;
            System.out.format("%d %s", count, sc.nextLine());
            System.out.println();
        }
        sc.close();
    }
}
