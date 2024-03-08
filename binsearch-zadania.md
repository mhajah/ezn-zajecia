
### Wyszukiwanie binarne - zadania

#### Zadanie 1
Napisz rekurencyjną funkcję $binsearch(array,x,left,right)$, która stosując algorytm wyszukiwania binarnego zwróci $true$ jeśli element $x$ znajduję się w tablicy. W przeciwnym wypadku niech zwróci $false$.

#### Zadanie 2
Powtórz zadanie 1, tylko tym razem napisz funkcję iteracyjnie. **Sygnatura funkcji** będzie wyglądała teraz tak: $binsearch(array,x)$.

#### Zadanie 3
Pobierz plik tekstowy z listą wszystkich polskich, męskich nazwisk (są posortowane alfabetycznie):
[Google Drive](https://drive.google.com/file/d/1JPz7FOZIYUQA9XiWltObaOlumT76Kzaw/view?usp=sharing)

Następnie zmodyfikuj jedną z funkcji z poprzednich zadań tak, aby wyszukiwała czy podane nazwisko $x$ znajduje się w pliku. Znajdź swoje nazwisko. <br> Możesz też napisać proste wyszukiwanie liniowe, w którym za pomocą pętli przejdziesz po wszystkich nazwiskach z listy szukając wybranego. Zwróć uwagę, o ile szybsze jest podejście z wykorzystaniem wyszukiwania binarnego (oczywiście, jeśli szukane nazwisko nie będzie akurat jednym z pierwszych na liście :-))


#### Zadanie 4
Na pewne targowisko przyjeżdżają handlarze, którzy nie za bardzo za sobą przepadają. Administracja targowiska postanowiła, że będzie starała się zmaksymalizować odległość między poszczególnymi handlarzami. Pomóż im znaleźć maksymalną odległość między dwoma najbliższymi stanowiskami. <br>W pliku numbers.txt znajdują się odległości między stanowiskami. Poniżej znajduje się funkcja, która zwraca $true$ jeśli możemy umieścić dwa najbliżej położone stanowiska w odległości $x$.

[numbers.txt](https://drive.google.com/file/d/1TRy9rHmv0P_rRwh28AU5iPoNJgX9Pet6/view?usp=sharing)

**Uwaga**! Tak naprawdę nie musisz rozumieć jak działa poniższa funkcja i co robi. Możesz traktować ją jako czarne pudełko, które wkleisz do swojego kodu. Masz znaleźć maksymalne $x$, dla którego funkcja nadal będzie zwracać $true$.
```
    static bool czyMoznaRozmiescic(int x) {
        int[] numbers;
        numbers = new int[8950];
        using (StreamReader sr = new StreamReader("numbers.txt")) {
            string line;

            int index = 0;
            while ((line = sr.ReadLine()) != null) {
                if (int.TryParse(line, out int number))
                    {
                        numbers[index] = number;
                        index++;
                    }
            }
        }
        int suma = 0;
        int iloscSprzedawcow = 240;
        int iloscStanowisk = 8950;
        int i = 0;
        while (i < iloscStanowisk && iloscSprzedawcow > 0) {
            while (i < 8950 && suma < x) {
                suma = suma + numbers[i];
                i++;
            }
            if (suma >= x) {
                iloscSprzedawcow--;
                suma = 0;
            }
        }
        
        if (iloscSprzedawcow==0) return true;
        else return false;
    }
```
**Uwaga2!** Rozwiązanie w stylu:
```
int i = 0;
while (czyMoznaRozmiescic(i) == true) {
	i++;
}
```
Nie jest rozwiązaniem! Nie chcemy przeszukiwać tego liniowo. Użyj algorytmu $wyszukiwania \ binarnego$.
Maksymalna możliwa odległość to **97378** (użyj tego jako "prawą" stronę w algorytmie).


