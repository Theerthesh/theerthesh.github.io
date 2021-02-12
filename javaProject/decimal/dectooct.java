package decimal;
import java.util.*;
public class dectooct
{
    Scanner s=new Scanner(System.in);
    int data;
    public dectooct()
    {
        System.out.println("Enter number");
        data=s.nextInt();
        String str=Integer.toOctalString(data);
        System.out.println(data+"-----Octal number is-->"+str);
    }
}