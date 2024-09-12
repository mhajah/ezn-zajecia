Te notatki są raczej słabej jakości, używam ich jako słowa klucze, żeby nie zapomnieć o czymś podczas zajęć. Postaram się w przyszłości, żeby miały też jakąś wartość dla was.

## Rekurencja

Rekurencja, to najprościej mówiąc, gdy wywołujemy funkcję wewnątrz samej siebie.

**Matrioszki**

**Silnia**
Silnia z n, to iloczyn wszystkich liczb naturalnych nie większych niż n.

Krótko o złożoności obliczeniowej $\rightarrow$ $\mathcal{O}(n)$ (liniowa)

**Fibonacci**
Ciąg Fibonacciego, to nieskończony ciąg liczb, które definiujemy:<br>
Fib(n) = Fib(n-1) + Fib(n-2)<br>
Czyli n-ty element, to suma dwóch poprzednich elementów w ciągu.<br>
Możemy zacząć od rozpisania: <br>
Fib(8) = Fib(7) + Fib(6)<br>
Fib(7) = Fib(6) + Fib(5)<br>
....<br>
Fib(1) = 1<br>
Fib(0) = 0<br>

**Narysować drzewko.**<br>
Trochę o złożoności $\rightarrow$ $\mathcal{O}(2^n)$ (wykładnicza)

**Po co nam rekurencja?**

**Zadanie z sumą ciągu**

**Dygresja o Reactie**
Drzewo komponentów w Reactie wykonuje się rekurencyjnie, tzn. jeżeli wywołamy re-render na rodzicu, to zostaną ponownie wygenerowane wszystkie jego dzieci.

![image](https://hackmd.io/_uploads/BkCJUrR2p.png)

