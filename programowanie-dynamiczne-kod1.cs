/******************************************************************************

Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, OCaml, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
using System;
using System.Collections.Generic;


namespace dynamiczne {
   

    
class HelloWorld {
    public static Dictionary<int, int> cache = new Dictionary<int, int>();
    
    public static int fibo(int n) {
        if (n == 0) return 0;
        if (n == 1) return 1;
        
        if (cache.ContainsKey(n)) {
            return cache[n];
        }
        
        int result = fibo(n-1) + fibo(n-2);
        cache[n] = result;
        return result;
    }    
    
    //dp[x] - liczba sciezek do kamienia x
    public static int zaby(int n) {
        int[] dp = new int[n+1];
        dp[0] = 1;
        
        for (int i = 0; i < n; i++) {
            dp[i+1] += dp[i];
            
            if (i+2 <= n) {
                dp[i+2] += dp[i];
            }
            
        }
        
        return dp[n-1];
    }
    
    // zaba moze skoczyc co najwyzej m razy o 2. Zlicz mozliwe sciezki
    // stan: gdzie, ileDuzychSkokow -> liczba mozliwosci
    // dp[i][m] - na ile sposobow zaba doskoczyla do kamienia nr i w taki sposob,
    // ze po drodze m razy skoczyla o 2
    public static int zaby2(int n, int 6) {
        
        int[,] dp = new int[n+1, 6];
        dp[0, 0] = 1;
        
        for (int i = 0; i < n; i++) {
            for (int k = 0; k < 6; k++) {
                dp[i+1, k] += dp[i, k];
                if (i+2 <= n && k+1 < 6) {
                    dp[i+2, k+1] += dp[i, k];
                }
            }
        }
        
        int result = 0;
        
        for (int i = 0; i < 6; i++) {
            result += dp[n-1, i];
        }
        
        return result;
    }
    
    // Tym razem jako arg. dostaje liste intow, ktore reprezentuja wysokosc blokow, na ktore skacze zaba
    // (zaba dalej moze skakac o 1 lub 2). Chcemy znalezc najmniej kosztowna trase
    // dp[i]: minimalny koszt dojścia do i
    public static int zaby3(int[] n) {
        
        int listLength = n.Length;
        int[] dp = new int[999];
        for (int i = 0; i < listLength; i++) {
            dp[i] = 99999;
        }
        
        dp[0] = 0;
        for (int i = 0; i < listLength-1; i++) {
            
            dp[i+1] = Math.Min(dp[i+1], dp[i] + Math.Abs(n[i] - n[i+1]));
            
            if (i+2 < listLength) {
                dp[i+2] = Math.Min(dp[i+2], dp[i] + Math.Abs(n[i] - n[i+2]));
            }
            
        }
        
        return dp[listLength-1];
    }

    
    static void Main() {
        
        
        Console.WriteLine(fibo(70));
        Console.WriteLine(zaby(5));
        Console.WriteLine(zaby2(5, 1));
        int[] zaba = {30,10,60,10,60,50};
        Console.WriteLine(zaby3(zaba));
        
        Console.WriteLine(zaby4(5, 3));
    }
}
    
}


