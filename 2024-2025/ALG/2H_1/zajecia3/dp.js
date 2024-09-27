// TOP-DOWN APPROACH
function fibMemo(n, memo = {}) {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);
  return memo[n];
}

// BOTTOM-UP APPROACH
function fibMemoIterative (n) {
  const memo = {};

  for (let i = 0; i <= n; i++) {
    if (i <= 2) memo[i] = 1;
    else memo[i] = memo[i - 1] + memo[i - 2];
  }

  return memo[n];
}

// console.log(fibMemoIterative(55))

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

console.log(minimumCoinsRecursiveNaive(180, [10, 5, 2, 1]));