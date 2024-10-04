// na ile sposobow zaba moze skoczyc na kamien n, wykonujac skoki o 1 lub o 2
function zaby1(n) {
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  for (let i = 0; i <= n-1; i++) {
    dp[i+1] += dp[i];
    if (i+2 <= n) {
      dp[i+2] += dp[i];
    }
  }
  console.table(dp);
  return dp[n];
}

console.log(zaby1(10));
