# Zadanie 1

### Opis:
Rozrysuj sobie (na kartce lub w Paintcie) tabelkę, która będzie zawierać wszystkie wartości dla Problemu Plecakowego (0-1), dla poniższych danych:

Dostępna waga plecaka $W = 8$
Ilość przedmiotów $N = 3$

| Waga przedmiotu | Wartość przedmiotu |
|-----------------|--------------------|
| 3               | 30                 |
| 4               | 50                 |
| 5               | 60                 |

Staraj się wykonywać kroki tak, jak robi to algorytm, a nie samemu zgadywać wartości.

# Zadanie 2: Kafelkowo

### Opis:
W krainie Kafelkowo, znanej z mistrzostw w układaniu kafelków, odbywa się coroczny konkurs dla kafelkarzy. Zadaniem uczestników jest ułożenie podłogi o dokładnie określonej długości w jak najszybszym czasie, używając jak najmniejszej liczby kafelków. Każdy kafelek ma określoną długość, a uczestnicy mogą wykorzystać każdy typ kafelka dowolnie wiele razy.

### Reguły:
1. Kafelkarze zaczynają z pustą powierzchnią.
2. Celem jest ułożenie podłogi o długości dokładnie k jednostek, używając jak najmniejszej liczby kafelków.
3. Każdy typ kafelka może być używany dowolnie wiele razy.

### Dane:
Kafelkarze otrzymują listę `n`, gdzie każdy element reprezentuje długość jednego typu kafelka, oraz liczbę `k`, czyli długość podłogi, którą muszą ułożyć.

### Przykład:
Dane:
- Długości kafelków: [10, 30, 40]
- Wymagana długość podłogi: 60

Kafelkarze muszą ułożyć podłogę o długości 60 jednostek:
- Najlepsze rozwiązanie to użycie dwóch kafelków o długości 30.
---

# Zadanie 3: Mistrzostwa skoczni w Średniowieczu

### Opis:
W dalekiej krainie odbywają się coroczne zawody skoczni w ramach średniowiecznego festiwalu. Skoczkowie muszą przejść przez serię kamieni rozstawionych wzdłuż rzeki, aby dotrzeć do mety. Każdy kamień ma swój unikalny numer, który reprezentuje jego wysokość. Skoczkowie mogą przeskoczyć z jednego kamienia na kolejny lub pominąć jeden kamień, skacząc dwa naraz. Wysokości kamieni są różne, a różnica wysokości między dwoma kamieniami, na które skacze zawodnik, generuje zmęczenie. Zmęczenie jest równe wartości bezwzględnej różnicy wysokości między kamieniami. Zadaniem uczestnika jest zakończenie trasy z jak najmniejszym całkowitym zmęczeniem.

### Reguły:
1. Zawodnicy zaczynają na pierwszym kamieniu.
2. Mogą wybrać, czy skoczą na kolejny kamień, czy pominą jeden kamień, skacząc na drugi po nim.
3. Celem jest minimalizacja sumy zmęczenia na całej trasie do ostatniego kamienia.

### Dane:
Zawodnicy otrzymują listę liczb całkowitych, gdzie każda liczba reprezentuje wysokość kamienia w kolejności ich ustawienia wzdłuż rzeki.

### Przykład:
Lista wysokości: [1, 4, 5, 6, 7, 8]
1. Zawodnik zaczyna na kamieniu o wysokości 1.
2. Może skoczyć na kamień o wysokości 4 (zmęczenie = 3) lub na kamień o wysokości 5 (zmęczenie = 4).
3. Następnie może kontynuować z minimalnym zmęczeniem, wybierając odpowiednie skoki.
---

# Zadanie 4: Turniej Przygotowań Wysokościowych

### Opis
W krainie przygód odbywa się turniej, w którym uczestnicy rywalizują, aby jak najlepiej przygotować się na wyprawę na legendarny szczyt górski. Każdy uczestnik ma do dyspozycji plecak o ograniczonej pojemności, w który musi zmieścić najbardziej wartościowe przedmioty, które zapewnią mu przetrwanie i sukces podczas wspinaczki. Przedmioty różnią się wagą i wartością, a celem każdego uczestnika jest maksymalizacja sumarycznej wartości załadowanych przedmiotów, nie przekraczając przy tym maksymalnej dopuszczalnej wagi plecaka.

### Reguły
1. Każdy uczestnik startuje z pustym plecakiem.
2. Celem jest zapełnienie plecaka przedmiotami o maksymalnej możliwej łącznej wartości, przy czym suma wag przedmiotów nie może przekroczyć pojemności plecaka.
3. Każdy przedmiot można zabrać tylko raz.

### Dane
Uczestnicy otrzymują:
- `N`: Liczba dostępnych przedmiotów.
- `P`: Pojemność plecaka.
- `v[]`: Tablica wartości przedmiotów.
- `w[]`: Tablica wag przedmiotów.

### Przykład
Dane:
- Liczba przedmiotów: 5
- Pojemność plecaka: 10 kg
- Wartości przedmiotów: [10, 40, 30, 50, 35]
- Wagi przedmiotów: [1, 3, 4, 5, 2]

Uczestnicy muszą wybrać najlepszą kombinację przedmiotów, aby maksymalizować wartość ich ładunku, nie przekraczając pojemności plecaka. Na przykład, dobierając przedmioty o wadze 3, 4 i 2 kg, uzyskają maksymalną wartość 105, co jest optymalnym rozwiązaniem.


# Zadanie 5: Spadek

### Opis:
Stary Jan ma dwóch synów. Ponieważ chłopcy często się kłócą, postanowił zapobiec następnym niesnaskom i sam podzieli majątek między nich. Jan chce rozdzielić majątek na dwie części tak, aby różnica wartości pomiędzy nimi była jak najmniejsza. Jeśli nie da się podzielić po równo, starszy syn otrzyma więcej.

### Dane:
- Lista wartości przedmiotów, np: `[2, 2, 2, 5]`. Oznacza, że Jan w swoim majątku ma do rozdania 4 przedmiotu o wartościach 2, 2, 2 i 5.

### Wyjście:
- kwoty wartości części majątku dla starszego i młodszego syna

### Przykłady:
##### przykład1
- Wejście: `[2, 2, 2, 5]`
- Wyjście: `6 5` (starszy syn dostał 6, młodszy 5)

##### przykład2
- Wejście: `[10, 5, 10, 5, 5]`
- Wyjście: `20 15`

### Wskazówka
Spróbuj wyznaczyć wszystkie sumy możliwe do uzyskania (zacznij od tego, że zawsze można uzyskać sumę 0).

Możesz użyć funkcji `void` i wypisać dane za pomocą, np. `Console.WriteLine()`.