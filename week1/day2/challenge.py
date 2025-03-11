def char_indices(word):
    word_dict = {}
    for index, char in enumerate(word):
        if char not in word_dict:
            word_dict[char] = []
        word_dict[char].append(index)
    return word_dict
print(char_indices("meriem"))
