#challenge 1
name = str(input("enter your name: "))
print("Hello " + name)
#challenge 2
by = int(input("enter your birth year: "))
fage = 123879 - by
print(f"your age will be {fage}")
#exercic 1
Name = str(input("enter your name: "))
age = int(input("enter your age: "))
city = str(input("enter where you live: "))
print(f"Hello, {Name}! You are {age} years old and live in {city}")
#exercice 2
    #attempt 1
birth_year = int(input("enter your birth year: "))
age_100 = birth_year + 100
print(f"you will be 100 in {age_100}")
    #attempt 2 (if we have only the age)
aGe = int(input("enter your age: "))
current_year = 2025
birth_Year = current_year - aGe
ageat_100 = birth_Year + 100
print(f"you will be 100 in {ageat_100}")
#exercic 1 cond
check = input("enter your name: ")
if len(check) < 5:
    print("your name is short :)")
print("jk :)")
#exercic 2 cond
num = int(input("choose a num between 1 & 100: "))
if num % 5 == 0 and num % 3 == 0:
    print(f"{num} is divisible by 5 and 3")
elif num % 3 == 0:
    print(f"{num} is divisible by 3")
elif num % 5 == 0:
    print(f"{num} is divisible by 5")
else:
    print(f"{num} isn't divisible by either")
#exercic 1 loop
number = int(input("enter a number: "))
list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
mult = [x * number for x in list]
print(mult)
#exercic 2 loop
Num = 0
while Num <= 10:
    print(Num)
    Num += 1
print("finished")









