
/**
 *
 * @author lohnn
 */
public class Main {

    /* Exempel på användning: */
    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        double[] input = new double[3];
        for (int i = 0; i < 3; i++) {
            input[i] = Double.parseDouble(args[i]);
        }
        Triangle t = new Triangle(input);
        if (t.isScalene()) {
            System.out.println("Triangeln har inga lika sidor");
        }
        if (t.isEquilateral()) {
            System.out.println("Triangeln är liksidig");
        }
        if (t.isIsosceles()) {
            System.out.println("Triangeln är likbent");
        }
    }
}
