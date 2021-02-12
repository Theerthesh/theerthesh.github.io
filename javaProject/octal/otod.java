package octal;
import java.util.*;
public class otod
{
    Scanner s=new Scanner(System.in);
    String data,a;
    int dec;
    public otod()
    {
        System.out.println("Enter number");
        data=s.nextLine();
        dec=Integer.parseInt(data,8);
        System.out.println(data+"-----decimal number is-->"+dec);
    }
}