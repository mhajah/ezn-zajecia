## Rekurencja (I): zadania

### Zadanie 1
Napisz rekurencyjną funkcję, która obliczy silnię podanej liczby naturalnej $n$.<br>
Silnia to iloczyn wszystkich liczb naturalnych od $1$ do $n$. Oznaczana jest jako $n!$.

**Przykład:** $5! = 5 * 4 * 3 * 2 * 1 = 120$

### Zadanie 2
Napisz rekurencyjną funkcję, która zwróci $n$-tą liczbę w ciągu Fibonacciego. <br>
Ciąg Fibonacciego rozpoczyna się od 0 i 1, a każda kolejna liczba ciągu, to suma dwóch poprzednich.<br>
Sprawdź też, dla jakich wartości $n$, oczekiwanie na odpowiedź będzie nieakceptowalnie długie (podpowiedź: nie będzie to duża liczba).

### Zadanie 3
Napisz rekurencyjną funkcję do obliczania liczby $x$ podniesionej do potęgi $n$.<br>
**Przykład:** $pow(2, 3) = 8$

### Zadanie 4
Napisz funkcję rekurencyjną, która odwraca ciąg znaków.<br>
**Przykład:** Dla ciągu znaków "abcd", funkcja powinna zwrócić "dcba".<br>
**Uwaga!** W zadaniu chodzi o to, żeby zobaczyć, z której strony jest "rozpakowywana" rekurencja. Zadanie jest bardzo podobne do omawianego na zajęciach z obliczeniem sumy liczb z tablicy.

### Zadanie 5
Zadanie z ciekawostką:-) <br>
Funkcja Ackermana jest rekurencyjną funkcją, która znana jest przede wszystkim z tego, że BARDZO szybko rośnie (np. dla argumentów $m=3$ i $n=2$ wynik to 29, a dla $m=4$ i $n=2$ wynik jest już większy niż liczba cząstek w obserwowalnym wszechświecie). W informatyce bardzo często używana jest jako swego rodzaju "benchmark".

Napisz rekurencyjną funkcję Ackermanna w kodzie używając rekurencyjnej, matematycznej definicji:

$A(m, n) = n + 1, gdy m = 0$<br>
$A(m, n) = A(m-1, 1), gdy m > 0 i n = 0$<br>
$A(m, n) = A(m-1, A(m, n-1)), gdy m > 0 i n > 0$<br>
**Uwaga!** Zadanie jest bardzo proste. Ma pokazać, że znając dowolną matematyczną definicję funkcji rekurencyjnej, możemy ją bez wysiłku przelać na kod.
