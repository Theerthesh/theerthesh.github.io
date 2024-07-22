package hexadecimal;
import java.util.*;
public class htob
{
    Scanner s=new Scanner(System.in);
    public htob()
    {
        System.out.println("Enter hexadecimal number");
        String data=s.nextLine();

     //first convert hexadecimal to decimal

        int d1=Integer.parseInt(data,16);
//now conver decimal to binary

         String str=Integer.toBinaryString(d1);
        System.out.println(data+"-----binary is-->"+str);
    }
}