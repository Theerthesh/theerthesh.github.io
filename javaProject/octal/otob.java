package octal;
//import octal.*;
import java.util.*;
public class otob 
{
    Scanner s=new Scanner(System.in);
    String data,a;
    int dec;
    public otob()
    {
        System.out.println("Enter number");
        data=s.nextLine();

        dec=Integer.parseInt(data,8);
         String str=Integer.toBinaryString(dec);
        System.out.println(data+"-----Binary number is-->"+str);
    }
}