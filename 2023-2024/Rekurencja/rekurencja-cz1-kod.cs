// Online C# Editor for free
// Write, Edit and Run your C# code using C# Online Compiler

using System;

public class Program
{
    public static int Fibo(int n) {
        if (n == 0) return  0; // warunek stopu(!)
        if (n == 1) return 1;
        
        return Fibo(n-1) + Fibo(n-2);
    }
    
    public static int Factorial(int n) {
        if (n == 0) return 1;
        
        return n * Factorial(n-1);
    }
    
    public static int ItFactorial(int n) {
        int result = 1;
        
        for (int i = 1; i < n+1; i++) {
            result *= i;
        }
        
        return result;
    }
    
    public static int sumaCiagu(int[] ciag, int indeks = 0) {
        if (indeks == ciag.Length) return 0;
        return sumaCiagu(ciag, indeks+1) + ciag[indeks];
    }
    
    public static string odwrocZnaki(string znaki, int indeks = 0) {
        if (indeks == znaki.Length) return "";
        return  odwrocZnaki(znaki, indeks+1) + znaki[indeks];
    }
    
    public static int Ackermann(int m, int n) {
        if (m == 0) return n + 1;
        if (m > 0 && n == 0) {
            return Ackermann(m-1, 1);
        } 
        else {
            return Ackermann(m-1, Ackermann(m, n-1));
        }
    }
    
    public static void Main(string[] args)
    {
        Console.WriteLine (Fibo(11));
        
        Console.WriteLine(Factorial(5));
        
        int[] tablica = {1,2,3,4};
        Console.WriteLine(sumaCiagu(tablica));
        
        string napis = "abcde";
        Console.WriteLine(odwrocZnaki(napis));
        
        Console.WriteLine(Ackermann(2, 4));
    }
}

