package binary;
import java.util.*;
public class btod
{
    Scanner s=new Scanner(System.in);
    int data;
    public btod()
    {
        System.out.println("Enter binary number");
        String data=s.nextLine();
        System.out.println(data+"-----decimal number is-->"+Integer.parseInt(data,2));
    }
}