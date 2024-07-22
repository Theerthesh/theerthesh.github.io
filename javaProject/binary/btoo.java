package binary;
import java.util.*;
public class btoo
{
    Scanner s=new Scanner(System.in);
    int data;
    public btoo()
    {
        System.out.println("Enter binary number");
        String data=s.nextLine();
        //first convert binary to decimal
        int d1=Integer.parseInt(data,2);
        //now conver decimal to octal 
        String str=Integer.toOctalString(d1);
        System.out.println(data+"-----octal number is-->"+str);
    }
}