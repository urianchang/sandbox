// https://www.hackerrank.com/challenges/java-list/problem

import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        int N = input.nextInt();
        ArrayList<Integer> L = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            L.add(input.nextInt());
        }

        // Queries
        int Q = input.nextInt();
        for (int i = 0; i < Q; i++) {
            String m = input.next();
            if (new String("Insert").equals(m)) {
                int idx = input.nextInt();
                int val = input.nextInt();
                L.add(idx, val);
            } else if (new String("Delete").equals(m)) {
                int index = input.nextInt();
                L.remove(index);
            }
        }
        input.close();

        // Print results
        for (Integer num: L) {
            System.out.print(num + " ");
        }
    }
}
