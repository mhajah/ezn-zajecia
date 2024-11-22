const x = [1, 2, 3, 4, 5];
x.push(6);

// Funkcje, które zmieniają tablicę w miejscu
// tzn. nie tworza nowego w miejsca w pamieci
// - push()
// - pop()
// - shift - usuwa element poczatek
// - unshift - dodaje element poczatek
// - splice(idx, ile) - usuwa "ile" elementow od indeksu "idx"
// reverse - odwraca tablice
// sort - sortuje tablice
// fill - wypełnia tablice


// x.shift();
console.log(x)

x.splice(3, 1);
console.log(x);

x.reverse();
console.log(x);

x.sort();
console.log(x);

x.fill(0);
console.log(x);