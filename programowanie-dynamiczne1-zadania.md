## Programowanie dynamiczne (1)

### Zadanie 1

Napisz rekurencyjną funkcję $fibMemo(int \ n)$, która zwróci $n$-ty wyraz ciągu Fibonacciego z wykorzystaniem techniki **spamiętywania** (memo(r)ization). Zwróć uwagę o ile szybciej działa funkcja napisana w ten sposób w porównaniu do naszej pierwotnej próby.

### Zadanie 2

Na zajęciach napisaliśmy funkcję $zaby(int \ n)$, która odpowiadała na pytanie "na ile sposobów żaba potrafi doskoczyć do $n$-tego kamienia, jeśli jej możliwe ruchy to skok o 1 lub 2 kamienie do przodu?". Innymi słowy zliczała wszystkie możliwe ścieżki żaby w drodze do kamienia $n$.

Napisz zmodyfikowaną funkcję, która odpowie na to samo pytanie, z tym, że tym razem jej możliwe ruchy to skok o $1, \ 2, \ ..., \ k$ (od 1 do k). Sygnatura funkcji to $int \ zaby(int \ n, \ int \ k)$.

### Zadanie 3

Omówiliśmy też funkcję $zaby2(int \ n)$, która odpowiadała na to samo pytanie co funkcja z poprzedniego zadania, z tym że mieliśmy pewne ograniczenie - żaba mogła wykonać skok o $2$ najwyżej $5$ razy. 

Napisz tę funkcję jeszcze raz, tylko tym razem z sygnaturą $int \ zaby2(int \ n, \ int \ k)$, gdzie ograniczenie podwójnych skoków nie będzie sztywno ustawione na $5$, ale będziemy mogli podać dowolne $k$.

### Zadanie 4

Napisz funkcję $zaby3(int[] \ n)$, która rozwiązuje poniższy problem:<br>
Jako argument otrzymujemy listę wysokości kamieni, które ma pokonać żaba (tak jak w 1 problemie, żaba może skoczyć o 1 lub 2). Skaczać z kamienia $i$ na kamień $j$ musi pokonać $| \ h_i \ - h_j \ |$ metrów (są to wysokości tych kamieni). Znajdź koszt najkrótszej ścieżki dla żaby.

**Uwaga!** Musisz użyć funkcji znajdującej minimum (np. $Math.Min()$ w C#). Pamiętaj też, że inicjalizując tablicę jest ona wypełniona zerami (jest to raczej niepożądane przy znajdowaniu minimum).