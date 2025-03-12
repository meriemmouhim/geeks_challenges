class Farm():
    def __init__(self, farm_name):
        self.farm_name = farm_name
        self.animals = {}
    def add_animal(self, animal, count=1):
        if animal in self.animals:
            self.animals[animal] += count
        else:
            self.animals[animal] = count
    def get_info(self):
        farm_info = f"{self.farm_name}'s farm\n"
        for animal, count in self.animals.items():
            farm_info += f"{animal} : {count}\n"
        farm_info += "\n  E-I-E-I-0!"
        return farm_info
macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
