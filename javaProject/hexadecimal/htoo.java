package hexadecimal;
import java.util.*;
public class htoo
{
    Scanner s=new Scanner(System.in);
    public htoo()
    {
        System.out.println("Enter hexadecimal number");
        String data=s.nextLine();

     //first convert hexadecimal to decimal

        int d1=Integer.parseInt(data,16);
//now conver decimal to binary

         String str=Integer.toOctalString(d1);
        System.out.println(data+"-----octal is-->"+str);
    }
}