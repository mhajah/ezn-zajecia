const SAMOGLOSKA = 0;
const SPOLGLOSKA = 1;
// ile jest napisów dl. n, takich ze nie zawierają 2 samogłosek z rzędu
function napisy(n) {
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
console.log(napisy(5));