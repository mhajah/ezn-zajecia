import sys
sys.setrecursionlimit(1000000000)
# print(1/3)
# print(2 ** 1231231000 % 10000)

# a ^ b
# tak nie robimy, wolne, lepiej uzyc pow(a,b)
def potegowanie(a, b):
    if b == 0: return 1
    return potegowanie(a, b - 1) * a % 10000

# print(potegowanie(2, 60000000))

def szybkiePotegowanie(a, b):
    if b == 0: return 1
    if b % 2 == 0:
        return szybkiePotegowanie(a, b // 2) ** 2 % 10000
    else:
        return a * szybkiePotegowanie(a, b - 1) % 10000

print(szybkiePotegowanie(2, 1231231000))
