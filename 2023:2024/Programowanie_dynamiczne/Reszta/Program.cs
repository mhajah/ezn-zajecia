// Algorytm zachlanny

void resztaZachlanny(int[] n, int k) {
    while (k > 0) {
        int maks = 0;
        for (int i =0; i < n.Length; i++) {
            if ( n[i] > maks &&  n[i] <= k) {
                maks = n[i];
            }
        }
        Console.WriteLine(maks);
        k -= maks;
    }
}

resztaZachlanny([1, 3, 4], 6);

// Algorytm dynamiczny

void resztaDP(int[] n, int k) {
    const int INF = Int32.MaxValue;
    int[] dp = new int[k+1];
    int[] lastCoin = new int[k+1];
    for (int i = 0; i <= k; i++) {
        dp[i] = INF;
    }
    dp[0] = 0;

    for (int i=1; i <= n.Length; i++) {
        int nominal = n[i-1];
        for (int j=0; j <= k-nominal; j++) {
            if (dp[j] < INF && dp[j]+1 < dp[j+nominal]) {
                dp[j+nominal] = dp[j]+1;
                lastCoin[j+nominal] = nominal;
            }
        }
    }

    while (k > 0) {
        int coin = lastCoin[k];
        if (coin == 0) break;
        Console.WriteLine(coin);
        k -= coin;
    }

}

resztaDP([1, 3, 4], 6);