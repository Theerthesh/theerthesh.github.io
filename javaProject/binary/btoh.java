package binary;
import java.util.*;
public class btoh
{
    Scanner s=new Scanner(System.in);
    int data;
    public btoh()
    {
        System.out.println("Enter binary number");
        String data=s.nextLine();
         //first convert binary to decimal
        int d1=Integer.parseInt(data,2);
        //now conver decimal to hexadecimal
        String str=Integer.toHexString(d1);
        System.out.println(data+"-----hexdecimal is-->"+str);
    }
}