Co było na zajęciach?

## Podstawowe struktury danych
### set (zbiór)
Zbiór w rozumieniu matematycznym - to znaczy, że elementy nie mogą się w nim powtarzać.
Przykład zbioru: `{1, 5, 7, 9}`.
To NIE jest zbiór: `{3, 2, 1, 9, 2, 7}` (dwójka się powtarza)
```javascript
const zbior = new Set();
```

### map (słownik)
Słownik jest strukturą danych, która pozwala nam tworzyć tablicę składającą się z par `<klucz, wartosc>`.
Można myśleć o tym trochę tak, jakbyśmy definiowali własne indeksy, zamiast trzymać się 0, 1, 2... jak w zwykłych tablicach.
```javascript
const slownik = new Map();
```


# Rekurencja (wstęp)
### Ciąg Fibonacciego
Prosta wersja rekurencyjna, złożoność czasowa: $O(2^n)$ - wykładnicza (słaba)
