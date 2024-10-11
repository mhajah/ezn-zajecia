function napisy(n, s="") {
  if (s.length === n) {
    console.log(s);
    return;
  }

  if (s.slice(-1) !== '1') {
    napisy(n, s + '1');
  }
  if (s.slice(-1) !== '2') {
    napisy(n, s + '2');
  }
  if (s.slice(-1) !== '3') {
    napisy(n, s + '3');
  }
  if (s.slice(-1) !== '4') {
    napisy(n, s + '4');
  }
}

napisy(3);
// 3^(n-1) * 4