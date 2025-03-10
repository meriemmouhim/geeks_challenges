#challenge 1
number = int(input("Enter a number: "))
length = int(input("Enter the length: "))
multiples = [number * i for i in range(1, length + 1)]
print(multiples)
#challenge 2
word = input("Enter a word: ")
new_word = ""
for i in range(len(word)):
    if i == 0 or word[i] != word[i - 1]:
        new_word += word[i]
print("New word:", new_word)
