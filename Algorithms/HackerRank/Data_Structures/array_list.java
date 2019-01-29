// https://www.hackerrank.com/challenges/java-arraylist/problem

import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int n = input.nextInt();
        // Create an ArrayList of ArrayLists
        ArrayList<ArrayList <Integer>> arrays = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            int d = input.nextInt();
            // int[] myArr = new int[d];
            ArrayList<Integer> myArr = new ArrayList<>();
            for (int j=0; j<d; j++){
                myArr.add(input.nextInt());
            }
            arrays.add(myArr);
        }

        int q = input.nextInt();
        for (int i = 0; i < q; i++) {
            int x = input.nextInt() - 1;
            int y = input.nextInt() - 1;
            try {
                System.out.println(arrays.get(x).get(y));
            } catch (IndexOutOfBoundsException e) {
                System.out.println("ERROR!");
            }
        }

        input.close();
    }
}


