## Programowanie dynamiczne (1)

#### Zadanie 1

Napisz rekurencyjną funkcję $fibMemo(int \ n)$, która zwróci $n$-ty wyraz ciągu Fibonacciego z wykorzystaniem techniki **spamiętywania** (memo(r)ization). Zwróć uwagę o ile szybciej działa funkcja napisana w ten sposób w porównaniu do naszej pierwotnej próby.

#### Zadanie 2

Na zajęciach omówiliśmy funkcję $zaba(int \ n)$, która odpowiadała na pytanie "na ile sposobów żaba potrafi doskoczyć do $n$-tego kamienia, jeśli jej możliwe ruchy to skok o 1 lub 2 kamienie do przodu". <br>
Napisz lekko zmodyfikowaną funkcję, która odpowie na to samo pytanie, z tym, że tym razem jej możliwe ruchy to skok o $1, \ 2, \ ..., \ k$ (od 1 do k). Sygnatura funkcji to $int \ zaba(int \ n, \ int \ k)$.