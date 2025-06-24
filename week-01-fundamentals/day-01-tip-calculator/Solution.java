public class Solution {
    public static void main(String[] args) {
        System.out.println(tipCalculator(10, 5));
    }

    public static double tipCalculator(double amount, double tip) {
        if (amount < 0 || tip < 0) {
            throw new IllegalArgumentException("Amount and tip cannot be negative");
        }
        return amount + (amount * tip / 100);
    }
}