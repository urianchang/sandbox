import java.util.Scanner;

// Tutorial #7
class additionCalculator {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        double first, second;
        System.out.println("Enter first number: ");
        first = scan.nextDouble();
        System.out.println("Enter second number ");
        second = scan.nextDouble();
        System.out.println(first + second);
    }
}
