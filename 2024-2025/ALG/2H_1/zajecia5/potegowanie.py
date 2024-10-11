import sys
sys.setrecursionlimit(1000000000)

def rekurencja(n):
  print(n)
  rekurencja(n+1)

def potegowanie(a, b):
  if b == 0: 
    return 1
  return potegowanie(a, b-1) * a % 10000
# rekurencja(0)

def szybkiePotegowanie(a, b):
  if b == 0:
    return 1
  if b % 2 == 0:
    return szybkiePotegowanie(a, b//2) ** 2 % 10000
  else:
    return szybkiePotegowanie(a, b-1) * a % 10000

# print(2 ** 512312300 % 10000)
# print(1/3)
# print(1.52 ** 0.5)
# print(potegowanie(2, 512312300))
print(szybkiePotegowanie(2, 512312300))