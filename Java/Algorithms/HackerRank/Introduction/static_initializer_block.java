// https://www.hackerrank.com/challenges/java-static-initializer-block/problem

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

static Scanner sc = new Scanner(System.in);
static boolean flag = true;
static int B = sc.nextInt();
static int H = sc.nextInt();

static {
    // Use try-catch to throw a catched exception
    try {
        if (B <= 0 || H <= 0) {
            flag = false;
            throw new java.lang.Exception("Breadth and height must be positive");
        }
    } catch(Exception err) {
        System.out.println(err);
    }
}

public static void main(String[] args){
	if(flag){
		int area=B*H;
		System.out.print(area);
	}

}//end of main

}//end of class


