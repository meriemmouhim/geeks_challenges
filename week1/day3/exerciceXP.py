#ex1
class Cat:
     def __init__(self, cat_name, cat_age):
         self.name = cat_name
         self.age = cat_age
Cat1 = Cat("Dwight D. Eisenmeower", 2)
Cat2 = Cat("Oedipuss the Great", 4)
Cat3 = Cat("Lord Fluffernutter", 9)
def oldest_cat(*Cats):
    return max(Cats, key=lambda Cat: Cat.age)

old_cat = oldest_cat(Cat1, Cat2, Cat3)

print(f"The oldest cat is {old_cat.name}, and is {old_cat.age} years old.")
#ex2
class Dog():
    def __init__(self, name, height):
        self.name = name
        self.height = height
    def bark(self):
        print(f"{self.name} goes WOOF!")
        
    def jump(self):
        x = self.height * 2
        print(f"{self.name} jumps {x} cm")
def bigger_dog(*Dogs):
    return max(Dogs, key=lambda Dog: Dog.height)
davids_dog = Dog("Rex", 50)
print(f"david's dog {davids_dog.name} and his height is {davids_dog.height} cm")
sarahs_dog = Dog("Teacup", 20)
print(f"david's dog {sarahs_dog.name} and his height is {sarahs_dog.height} cm")
sarahs_dog.bark()
sarahs_dog.jump()
big_dog = bigger_dog(davids_dog, sarahs_dog)

print(f"The bigger dog is {big_dog.name}, and he is {big_dog.height} cm.")
#ex3
class Song():
    def __init__(self, lyrics):
        self.lyrics = lyrics
    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

Sweater_Weather = Song(["And all I am is a man",
                "I want the world in my hands",
                "I hate the beach",
                "But I stand in California with my toes in the sand",
                "Use the sleeves of my sweater",
                "Let's have an adventure",
                "Head in the clouds but my gravity centered",
                "Touch my neck and I'll touch yours",
                "You in those little high waisted shorts, oh"])
Sweater_Weather.sing_me_a_song()
#ex4
class Zoo():
    def __init__(self, zoo_name):
        self.zoo_name = zoo_name
        self.animals = []
    def add_animal(self, new_animal):
        if new_animal not in self.animals:
            self.animals.append(new_animal)
            print(f"{new_animal} has been added to {self.zoo_name}.")
        else:
            print(f"{new_animal} is already in the zoo.")
    def get_animals(self):
        if not self.animals:
            print(f"There are no animals in {self.zoo_name} yet.")
        else:
            print(f"Animals in {self.zoo_name}:")
            for animal in self.animals:
                print(animal)
    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)
            print(f"{animal_sold} has been sold from {self.zoo_name}.")
        else:
            print(f"{animal_sold} is not in the zoo.")
    def sort_animals(self):
        animal_groups = {}        
        for animal in self.animals:
            first_letter = animal[0].upper()
            if first_letter not in animal_groups:
                animal_groups[first_letter] = [animal]
            else:
                animal_groups[first_letter].append(animal)
        for letter in animal_groups:
            animal_groups[letter].sort()
        return animal_groups
    def get_groups(self):
        animal_groups = self.sort_animals()
        print(f"Animal Groups in {self.zoo_name}:")
        for letter, animals in animal_groups.items():
            print(f"{letter}: {animals}")
new_york_zoo = Zoo("New York Zoo")
new_york_zoo.add_animal("Lion")
new_york_zoo.add_animal("Giraffe")
new_york_zoo.add_animal("Elephant")
new_york_zoo.add_animal("Cat")
new_york_zoo.add_animal("Bear")
new_york_zoo.add_animal("Ape")
new_york_zoo.add_animal("Cougar")
new_york_zoo.add_animal("Emu")
new_york_zoo.get_animals()
new_york_zoo.get_groups()




        
