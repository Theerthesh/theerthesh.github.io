package hexadecimal;
import java.util.*;
public class htod
{
    Scanner s=new Scanner(System.in);
    public htod()
    {
        System.out.println("Enter hexadecimal number");
        String data=s.nextLine();

     //first convert hexadecimal to decimal

        int d1=Integer.parseInt(data,16);


         
        System.out.println(data+"-----decimal number is-->"+d1);
    }
}