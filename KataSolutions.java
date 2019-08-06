// 8 kyu Is n divisible by x and y?/ Solution
//https://www.codewars.com/kata/5545f109004975ea66000086

public class DivisibleNb {
	public static boolean isDivisible(long n, long x, long y) {
		return (n % x == 0) && (n % y == 0);
	}
}

//8 kyu Are You Playing Banjo?/ Solution
//https://www.codewars.com/kata/53af2b8861023f1d88000832

public class Banjo {
    public static String areYouPlayingBanjo(String name) {
      return name.startsWith("r") || name.startsWith("R") ? name.concat(" plays banjo") : name.concat(" does not play banjo");
    }
  }

  //8 kyu I love you, a little , a lot, passionately ... not at all/ Solution
  //https://www.codewars.com/kata/57f24e6a18e9fad8eb000296

  public class Sid {
    public static String howMuchILoveYou(int nb_petals) {
      String[] howMuchILoveYou = {"I love you","a little", "a lot", "passionately", "madly","not at all"};
    return howMuchILoveYou[(nb_petals - 1) % 6];
    }
}
// 8 kyu Hex to Decimal/ Solution
// https://www.codewars.com/kata/57a4d500e298a7952100035d

public class Kata {
    public static int hexToDec(final String hexString) {
      int decimal = Integer.parseInt(hexString, 16);
      return decimal;
    }
  }
  
  //8 kyu Counting sheep.../ Solution
  //https://www.codewars.com/kata/54edbc7200b811e956000556

  public class Counter {
    public int countSheeps(Boolean[] arrayOfSheeps) {
      int counter = 0;
      for(int i = 0; i < arrayOfSheeps.length; i++){
        if(arrayOfSheeps[i] == null){
          break;
        }
        if(arrayOfSheeps[i] == true){
          counter++;
        }
      }
      return counter;
    }
  }

  //8 kyu Transportation on vacation/Solution
  // https://www.codewars.com/kata/568d0dd208ee69389d000016

  public class Kata {
    public static int rentalCarCost(int d) {
      int dayPrice = 40;
      if(d >= 7){
        return dayPrice * d - 50;
      };
      if(d >= 3){
        return dayPrice * d - 20;
      }
      return  dayPrice * d;
    }
  }

  //8 kyu Basic Mathematical Operations/ Solution
  //https://www.codewars.com/kata/57356c55867b9b7a60000bd7

  public class BasicOperations {
    public static Integer basicMath(String op, int v1, int v2){
     switch(op){
       case "+":
         return v1 + v2;
       case "-":
         return v1 - v2;
       case "*":
         return v1 * v2;
       case "/":
         return v1 / v2;
      default:
        return null;
      }
    }
  }

//8 kyu Basic variable assignment/ Solution
//https://www.codewars.com/kata/50ee6b0bdeab583673000025

public class Kata {
    public static String a = "code";
    public static String b = "wa.rs";
    public static String name = a + b;
}

//8 kyu Function 3 - multiplying two numbers/ Solution
//https://www.codewars.com/kata/523b66342d0c301ae400003b

public class Kata {
    public static int multiply(int num1, int num2) {
        return num1 * num2;
    } 
}

//Solution for interview task
//find sum of smallest 2 numbers

int [] arr1 = {-5, -100, -10};
int firstBig1 = Integer.MIN_VALUE;
int secondBig1 = Integer.MIN_VALUE;
for(int i = 0; i < arr1.length; i++){
  if(firstBig1 < arr1[i]){
    secondBig1 = firstBig1;
    firstBig1 = arr1[i];
  } else if (secondBig1 < arr1[i]){
      secondBig1 = arr1[i];
    }
  }
System.out.println(firstBig1 +secondBig1);


int[] arr = {100, -5, -5, 0};
int firstBig = Integer.MIN_VALUE;
int secondBig = Integer.MIN_VALUE;
  for(int i = 0; i < arr.length; i++){
    if(arr[i] > firstBig || arr[i] > secondBig){
    if(arr[i] - firstBig < arr[i] -  secondBig){
      secondBig = arr[i];
    } else {
        firstBig = arr[i];
      }
    }
  }
System.out.println(firstBig + secondBig);

// 8 kyu Playing with cubes I
//https://www.codewars.com/kata/55c0a79e20be94c91400014b

public class Cube{
  int side;
  
  int getSide(){
    return side;
  }
  
  void setSide(int num){
    side = num;
  }
}
//7 kyu Lombok Encapsulation
//https://www.codewars.com/kata/5a03295680171ffd7b0000c7

public class EncapsulationDemo{
  private int number;
  private String stringValue;
  private Object anObject;
  
  public int getNumber() {
    return number;
  }
  
  public void setNumber(int number){
    this.number = number;
  }
  
  public String getStringValue(){
    return stringValue;
  }
  
  public void setStringValue(String stringValue){
    this.stringValue = stringValue;
  }
  
  public Object getAnObject(){
    return anObject;
  }
  
 public void setAnObject(Object anObject) {
   this.anObject = anObject;
  }
  
  public EncapsulationDemo(){
  }
  
  public EncapsulationDemo(int number, String stringValue, Object anObject) {
    this.number = number;
    this.stringValue = stringValue;
    this.anObject = anObject;
  }
}
//7 kyu Building blocks
//https://www.codewars.com/kata/55b75fcf67e558d3750000a3

public class Block{
	private int width;
  private int length;
  private int height;
  
  public int getWidth(){
    return width;
  }
  
  public int getLength(){
    return length;
  }
  
  public int getHeight(){
    return height;
  }
  public Block (int[] arr){
    this.width = arr[0];
    this.length = arr[1];
    this.height = arr[2];
  }
  public int getVolume(){
    return width * length * height;
  }
  public int getSurfaceArea(){
    return 2 * (width * length + width * height + length * height);
  }  
}