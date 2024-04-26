// See https://aka.ms/new-console-template for more information
using System.ComponentModel.DataAnnotations;

Console.WriteLine("Hello, World!");


int plecak(int N, int W, int[] wart, int[] waga) {
    int[] dp = new int[W+1];
    for (int i = 0; i < N; i++) {
        for (int j = W; j >= waga[i]; j--) {
            dp[j] = Math.Max(dp[j], dp[j-waga[i]] + wart[i]);
        }
    }

    return dp[W];
}

int N = 6;
int W = 15;
int[] waga = [6, 5, 6, 6, 3, 7];
int[] wart = [5, 6, 4, 6, 5, 2];

Console.WriteLine(plecak(N, W, wart, waga));