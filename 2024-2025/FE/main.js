function fibMemo (n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
  return memo[n];
}

function fibMemoIterative (n) {
  const memo = {};

  for (let i = 0; i <= n; i++) {
    if (i <= 2) memo[i] = 1;
    else memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
}

function minimumCoins (n, coins) {
  const table = Array(n + 1).fill(Infinity);
  table[0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let coin of coins) {
      if (coin <= i) {
        table[i] = Math.min(table[i], table[i - coin] + 1);
      }
    }
  }
  return table[n] === Infinity ? -1 : table[n];
}

function minimumCoinsRecursiveNaive (n, coins) {
  let result;
  if (n === 0) result = 0;
  else {
    result = Infinity;
    for (let coin of coins) {
      if (coin <= n) {
        result = Math.min(result, minimumCoinsRecursiveNaive(n - coin, coins) + 1);
      }
    }
  }
  return result;
}

function minimumCoinsRecursiveMemo (n, coins, memo = {}) {
  let result;
  if (n in memo) return memo[n];
  if (n === 0) result = 0;
  else {
    result = Infinity;
    for (let coin of coins) {
      if (coin <= n) {
        result = Math.min(result, minimumCoinsRecursiveMemo(n - coin, coins, memo) + 1);
      }
    }
  }
  memo[n] = result;
  return result;
}

console.log(minimumCoinsRecursiveNaive(10, [4, 2, 1, 9])); // 2