// n -> dlugosc tablicy
// wysokosci -> tablica z wysokosciami (slupki, po ktorych skacze zaba)

// jaka jest minimalna ilosc "zmeczenia" zaby, ktora pozwoli dotrzec z 1 do ostatniego slupka?
// zaba moze skakac o 1 lub o 2
// zmeczenie generuje sie przez roznice wysokosci: np. skaczac z 30 na 50, zmeczenie to 20
function zaby2(n, wysokosci) {
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 0; i < n-1; i++) {
    dp[i + 1] = Math.min(dp[i+1], dp[i] + Math.abs(wysokosci[i] - wysokosci[i+1]));
    if (i + 2 < n) {     
      dp[i + 2] = Math.min(dp[i+2], dp[i] + Math.abs(wysokosci[i] - wysokosci[i+2]));
    }
  }
  console.log(dp);
  return dp[n-1];
}

console.log(zaby2(6, [30, 10, 60, 10, 60, 50]));