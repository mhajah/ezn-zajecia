## Programowanie dynamiczne - notatki

### Fibonacci ze spamiętywaniem

Znamy już rekurencyjną implementację funkcji, która zwraca $n$-ty element ciągu Fibonacciego:

```c
int fibo(int n) {
    if (n == 0 || n == 1) return n;
    return fibo(n-1) + fibo(n-2);
}
```

Wiemy też, że taka implemetancja ma ogromną wadę - **wykładniczą** złożoność obliczeniową $O(2^n)$, która wynika z tego, że liczymy kilkukrotnie te same wyrazy. \
Więc jeśli już raz policzyliśmy jakiś wyraz (np. $fibo(3)$), to chcielibyśmy w pamięci przechowywać jego wynik, aby nie musieć tego robić drugi raz.

#### Idea programowania dynamicznego

W ten sposób dochodzimy do głównej idei programowania dynamicznego: **nie chcemy obliczać wartości, którą już kiedyś policzyliśmy**. \
Idea powinna być dla nas intuicyjna, bo w końcu wykonując proste obliczenia arytmetyczne "w głowie" korzystamy z poprzednio wyliczonych wartości. Kiedy ktoś nam każe policzyć taką sumę:
$$
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36 
$$
To kiedy za minutę zostaniemy poproszeni o bardzo podobną sumę, tylko powiększoną o 9, to nie będziemy ponownie liczyć $1+2+...+8+9$, ale zrobimy to sprytniej (pamiętając wynik poprzedniego dodawania):
$$
36 + 9 = 45
$$


#### Wracając do naszego ciągu Fibonacciego

Ale jak zaimplementować to w kodzie? Możemy spróbować tak (pseudokod):

```c
                //struktura zawierajaca poprzednie wartosci
int fibo(int n, int[] tablica?) {
    if (n == 0 || n == 1) return n;
    
    if (tablica? zawiera wynik n-tego elementu) 
        return tablica?[n];

    //jezeli nie zawiera - to musimy ja policzyc
    tablica?[n] = fibo(n-1) + fibo(n-2);
    return tablica[n];
}
```

Jak widać, pomysł jest bardzo prosty - jedyny problem pojawia się przy naszej `tablicy?`. Potrzebujemy jakiejś struktury danych, która będzie przechowywać zarówno numer ciągu Fibonacciego $n$, jak i jego wartość $value$. Nietrudno dojść do wniosku, że bez sztuczek trudno byłoby nam to osiągnąć w zwykłej jednowymiarowej tablicy.

#### Słownik

Struktur, które można użyć jest wiele (dwuwymiarowa tablica, słownik, obiekt, hashMapa...), my użyjemy słownika (_ang. dictionary_). \
Słownik to prosta struktura, dostępna w wielu językach programowania. Składa się z par $ \<Klucz, Wartość\> $:

```text
Klucz   Wartość
0       0
1       1
2       1
3       2
4       3
5       5
6       8
7       13
8       21
   ...
```

I tak odwołując się do elementu naszego słownika o kluczu `7`, otrzymamy wynik `13`. \
W C# słownik deklarujemy w ten sposób:

```c
Dictionary<int, int> NAZWA = new Dictionary<int, int>();
```

Gdzie $ \<int, int\> $, to typy danych odpowiednio naszych kluczy i wartości, a `NAZWA`, to oczywiście nazwa naszej zmiennej. \
Natomiast zapisywanie/odczytanie ze słownika przypomina korzystanie z tablicy:

```c
//zapisywanie wartości "8" do klucza "6"
NAZWA[6] = 8 

//wypisanie wartości znajdującej się pod kluczem "8"
Console.WriteLine(NAZWA[8]); // ->21
```

#### Wracamy do implementacji fibo (znowu)

Mając w arsenale nową strukturę danych, możemy ostatecznie napisać:

```c
int fibo(int n, Dictionary<int, int> cache) {
    if (n==0 || n==1) return n;

    if (cache.ContainsKey(n))
        return cache[n];

    cache[n] = fibo(n-1) + fibo(n-2);

    return cache[n];
}
```

`cache.ContainsKey(n)` zwraca true/false w zależności od tego, czy para o podanym kluczu istnieje w słowniku `cache`.