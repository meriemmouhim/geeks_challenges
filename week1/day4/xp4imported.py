#ex3
from dog import Dog
import random
class PetDog(Dog):
    def __init__(self, name, age, weight, trained= False ):
        super().__init__(name, age, weight)
        self.trained = trained
    def train(self):
        print(self.bark())
        self.trained = True
    def play(self, *other_dogs):
        return f"{self.name} is playing with other dogs"
    def do_a_trick(self):
        if self.trained:
            tricks = [
                f"{self.name} does a barrel roll",
                f"{self.name} stands on his back legs",
                f"{self.name} shakes your hand",
                f"{self.name} plays dead"
            ]
            print(random.choice(tricks))
        else:
            print(f"{self.name} is not trained yet and doesn't know any tricks.")
dog1 = PetDog("Buddy", 4, 18)
dog2 = PetDog("Rocky", 3, 22)
dog3 = PetDog("Max", 5, 20)
dog1.play(dog2, dog3)
dog1.do_a_trick()
dog1.train()
dog1.do_a_trick()
