#ex1
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'
class Siamese(Cat):
    def sing(self, sounds):
        return f'{sounds}'
all_cats = [ Bengal("Leo", 2),
             Chartreux("Milo", 3),
             Siamese("Luna", 1)]
sarah_pets = Pets(all_cats)
sarah_pets.walk()
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
#ex4
class Family():
    def __init__(self, last_name, members= None):
        self.members = members if members else []
        self.last_name = last_name
    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"congrats you got a newborn baby named {kwargs["name"]}")
    def is_18(self, name):
        for member in self.members:
            if member["name"] == name:
                return member["age"] >= 18
        return False
    def family_presentation(sellf):
        print(f"family name: {self.last_name}")
        for member in self.members:
            print(f"member name: {member['name']}, age: {member['age']}, Gender: {member['gender']}, is child: {member['is_child']}")
griffin_family = Family("Griffin", [
        {'name': 'Peter', 'age': 45, 'gender': 'Male', 'is_child': False},
    {'name': 'Lois', 'age': 42, 'gender': 'Female', 'is_child': False},
    {'name': 'Meg', 'age': 18, 'gender': 'Female', 'is_child': True},
    {'name': 'Chris', 'age': 16, 'gender': 'Male', 'is_child': True},
    {'name': 'Stewie', 'age': 1, 'gender': 'Male', 'is_child': True},
    {'name': 'Brian', 'age': 8, 'gender': 'Male', 'is_child': False} #call brian a dog and you will see his family too
])
griffin_family.born(name='stewie', age=0, gender='Male', is_child=True) #stewie is a baby yk :)
print(f"Is Meg over 18? {griffin_family.is_18('Meg')}")
print(f"Is Stewie over 18? {griffin_family.is_18('Stewie')}")
#ex5
class Family:
    def __init__(self, last_name, members=None):
        self.members = members if members else []
        self.last_name = last_name
    def born(self, **kwargs):
        self.members.append(kwargs)
        print(f"Congratulations! You got a newborn baby named {kwargs['name']}.")
    def is_18(self, name):
        for member in self.members:
            if member["name"] == name:
                return member["age"] >= 18
        return False
    def family_presentation(self):
        print(f"Family {self.last_name}:")
        for member in self.members:
            print(member)
class TheIncredibles(Family):
    def use_power(self, name):
        for member in self.members:
            if member["name"] == name:
                if member["age"] >= 18:
                    print(f"{name}'s power is: {member['power']}")
                else:
                    raise Exception(f"{name} is not over 18 and cannot use their power!")
                return
        print(f"No family member named {name} found.")
    def incredible_presentation(self):
        print("\n✨ Here is our powerful family ✨")
        super().family_presentation()
incredibles_family = TheIncredibles("Incredibles", [
    {'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False, 'power': 'fly', 'incredible_name': 'MikeFly'},
    {'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False, 'power': 'read minds', 'incredible_name': 'SuperWoman'}
])
incredibles_family.incredible_presentation()
incredibles_family.born(name='Jack', age=0, gender='Male', is_child=True, power='Unknown Power', incredible_name='BabyJack')
incredibles_family.incredible_presentation()
try:
    incredibles_family.use_power("Michael")
    incredibles_family.use_power("Jack")
except Exception as e:
    print(e)






        
