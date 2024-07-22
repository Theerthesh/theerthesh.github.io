package decimal;
import java.util.*;
public class dectobin
{
    Scanner s=new Scanner(System.in);
    int data;
    public dectobin()
    {
        System.out.println("Enter number");
        data=s.nextInt();
        String str=Integer.toBinaryString(data);
        System.out.println(data+"-----Binary number is-->"+str);
    }
}