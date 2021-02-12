import java.io.*;
import decimal.*;
import binary.*;
import octal.*;
import hexadecimal.*;
import java.util.Scanner;
class convertions
{
public static void main(String[] args)
{
    int ch;
    Scanner s=new Scanner(System.in);
     while(true)
    {
    System.out.println("------------------------------------------");
    System.out.println("------------------------------------------");
    System.out.println("\tchoice to convert number");
    System.out.println("\t1.Binary\t2.Octal \t3.Hexadecimal \t4.Decimal \t5.exit");
    
    System.out.println("Enter your coice");
    ch=s.nextInt();
    switch(ch)
    {
        case 1:int a;
            
        do
        {
                System.out.println("-------------");
                System.out.println("Binary number convertions");
                System.out.println("\t1.Binary to octal \t2.Binary to hexadecimal \t3.Binary to decimal \t4.exit");
                System.out.println("Enter your choice");
                a=s.nextInt();
                switch(a)
                {
                    case 1:btoo bto=new btoo();
                            break;
                    case 2:btoh bh=new btoh();
                            break;
                    case 3:btod bd=new btod();
                            break;
                    case 4:break;
                    default:System.out.println("invaild choice");
                            break;

                }
                 
        }  while(a!=4);
        break; 
         case 2:int b;
        do
        {
                System.out.println("-------------");
                System.out.println("octal number convertions");
                System.out.println("\t1 octal to binary \t2.octal to hexadecimal  \t3.octal to decimal \t4.exit");
                System.out.println("Enter your choice");
                b=s.nextInt();
                switch(b)
                {
                    case 1:otob ob=new otob();
                            break;
                    case 2:otoh oh=new otoh();
                            break;
                    case 3:otod od=new otod();
                            break;
                    case 4:break;
                    default:System.out.println("invaild choice");
                            break;

                }
        } while(b!=4); 
       break;
        case 3:int c;
       do
        {
                System.out.println("-------------");
                System.out.println("\thexadecimal number convertions");
                System.out.println("\t1.hexadecimal to octal \t2.hexadecimal to binary \t3.hexadecimal to decimal \t4.exit");
                System.out.println("Enter your choice");
                c=s.nextInt();
                switch(c)
                {
                    case 1:htoo ho=new htoo();
                            break;
                    case 2:htob hb=new htob();
                            break;
                    case 3:htod hd=new htod();
                            break;
                    case 4:break;
                    default:System.out.println("invaild choice");
                            break;

                }
        } while(c!=4); 
        break;
        case 4:int d;
        do
        {
                System.out.println("-------------");
                System.out.println("\tdecimal number convertions");
                System.out.println("\t1.decimal to octal \t2.decimal to hexadecimal \t3.decimal to binary \t4.exit");
                System.out.println("Enter your choice");
                d=s.nextInt();
                switch(d)
                {
                    case 1:dectooct dot=new dectooct();
                            break;
                    case 2:dectohex dh=new dectohex();
                            break;
                    case 3:dectobin db=new dectobin();
                            break;
                    case 4:break;
                    default:System.out.println("invaild choice");
                            break;

                }
        }while(d!=4);
        break;
        case 5:System.exit(0);
        default:System.out.println("invalied choice");
                break;                        
    }
    }
}
}