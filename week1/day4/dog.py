#ex2
class Dog():
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
    def bark(self):
        return f"{self.name} is barking"
    def run_speed(self):
        return self.weight / self.age * 10
    def fight(self, other_dog):
        self_power = self.run_speed() * self.weight
        other_power = other_dog.run_speed() * other_dog.weight
        if self_power > other_power:
            return f"{self.name} wins the game"
        elif self_power < other_power:
            return f"{other_dog.name} wins the game"
        else:
            return "it's a tie"  
dog1 = Dog("Buddy", 5, 20)
dog2 = Dog("Rocky", 4, 25)
dog3 = Dog("Max", 6, 18)
print(dog1.bark())
print(f"{dog2.name}'s speed: {dog2.run_speed()}")
print(dog1.fight(dog2))
print(dog2.fight(dog3))
print(dog3.fight(dog1))