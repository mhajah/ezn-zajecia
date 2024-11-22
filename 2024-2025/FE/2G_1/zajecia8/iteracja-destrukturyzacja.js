const x = [1, 2, 3, 4, 5];

for (let i = 0; i < x.length; i++) {
  console.log(x[i]);
}

for (let el of x) {
  console.log(el);
}

x.forEach(el => {
  if (el % 2 === 0) {
    console.log('parzysta');
  } else {
    console.log('nieparzysta');
  }
});

const y = [...x, new Array(10).fill(0)];
console.log(y);