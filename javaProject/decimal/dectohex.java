package decimal;
import java.util.*;
public class dectohex
{
    Scanner s=new Scanner(System.in);
    int data;
    public dectohex()
    {
        System.out.println("Enter number");
        data=s.nextInt();
        String str=Integer.toHexString(data);
        System.out.println(data+"-----Hexadecimal number is-->"+str);
    }
}