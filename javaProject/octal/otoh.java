package octal;
import java.util.*;
public class otoh
{
    Scanner s=new Scanner(System.in);
    String data,a;
    int dec;
    public otoh()
    {
        System.out.println("Enter number");
        data=s.nextLine();
        dec=Integer.parseInt(data,8);
        a=Integer.toHexString(dec);
        System.out.println(data+"-----hexadecimal number is-->"+a);
    }
}