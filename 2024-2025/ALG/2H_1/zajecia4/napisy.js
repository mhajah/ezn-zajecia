// ilosc napisów dl n, ktore nie zawieraja dwóch
// samoglosek pod rząd
const SAMOGLOSKA = 0;
const SPOLGLOSKA = 1;
function napisy(n) {
  //tworzymy tablice Nx2
  const dp = new Array(n + 1).fill().map(() => new Array(2).fill(0));

  dp[1][SAMOGLOSKA] = 6;
  dp[1][SPOLGLOSKA] = 20;
  for (let i = 1; i <= n-1; i++) {
    // SAMOGLOSKA
    dp[i+1][SPOLGLOSKA] += dp[i][SAMOGLOSKA] * 20;
    // SPOLGLOSKA
    dp[i+1][SPOLGLOSKA] += dp[i][SPOLGLOSKA] * 20;
    dp[i+1][SAMOGLOSKA] += dp[i][SPOLGLOSKA] * 6;
  }
  console.table(dp);
  return dp[n][SAMOGLOSKA] + dp[n][SPOLGLOSKA];
}

console.log(napisy(4));