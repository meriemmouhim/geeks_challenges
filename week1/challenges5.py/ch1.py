import math
class Circle():
    def __init__(self, radius= None, diameter= None):
        if radius is not None:
            self._raduis = radius
            self._diametre = radius * 2
        elif diameter is not None:
            self._diametre = diameter
            self._radius = diameter / 2
        else:
            raise ValueError("either radius or diameter must be provided")
    def get_radius(self):
        return self._radius
    def get_diameter(self):
        return self._diameter
    def area(self):
        return math.pi * self._radius ** 2
    def __str__(self):
        return f"Circle with radius: {self._radius} and diameter: {self._diametre}"
    def __add__(self, other):
        if isinstance(other, Circle): #the insinstance is used to check if the other is a circle
            new_radius = self._radius + other.get_radius()
            return Circle(radius = new_radius)
        return NotImplemented
    def __gt__(self, other):
        if isinstance(other, Circle):
            return self._radius > other.get_radius()
        return NotImplemented
    def __eq__(self, other):
        if isinstance(other, Circle):
            return self._radius == other.get_radius()
        return NotImplemented
    def __lt__(self, other):
        if isinstance(other, Circle):
            return self._radius < other.get_radius()
        return NotImplemented
c1 = Circle(radius=5)
c2 = Circle(radius=3)
print(c1 > c2) 
print(c1 == c2)  
            
