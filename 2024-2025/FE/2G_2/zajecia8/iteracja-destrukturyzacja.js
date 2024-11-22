const x = [1, 2, 3];

for (let i = 0; i < x.length; i++) {
  console.log(x[i]);
}

for (let i in x) {
  console.log(i);
}

x.forEach(x => console.log(x));