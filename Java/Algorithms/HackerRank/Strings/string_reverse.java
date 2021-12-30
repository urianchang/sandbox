// https://www.hackerrank.com/challenges/java-string-reverse/problem

import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        String A=sc.next();

        StringBuilder input1 = new StringBuilder();
        input1.append(A);
        input1 = input1.reverse();

        if (input1.toString().equals(A)) {
            System.out.println("Yes");
        } else {
            System.out.println("No");
        }
    }
}
