nazwiska = []
with open("nazwiska.txt", 'r', encoding="utf8") as f:
    nazwiska = [line.strip().split(',')[0] for line in f.readlines()]

nazwiska.sort()

with open("nazwiska_out.txt", 'w', encoding="utf8") as f:
    for i in range(10, len(nazwiska), 1):
        f.write(nazwiska[i]+'\n')