// O(n) - liniowa
function Fibonacci(n) {
  let a = 1;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// O(2^n) - wykładnicza
function FibRec(n) {
  if (n <= 1) return 1;
  return FibRec(n - 1) + FibRec(n - 2);
}