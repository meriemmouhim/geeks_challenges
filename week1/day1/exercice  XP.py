#exercice 1
print("Hello world\n"*4)
#exercice 2
num = 99
Num = (num ** 3)* 8
print(Num)
#exercice 3
name = str(input("enter your name: "))
if name == "meriem":
    print("nah man, i'm the real MERIEM")
else:
    print("hehehe, we don't have the same name, hahaha i will always be the real MERIEM! (evil laugh)")
#exercice 4
height = int(input("enter you height in centimeters: "))
if height >= 145:
    print("go ahead mate")
else:
    print("go drink some milk shorty")
#exercice 5
fav_num = {7, 21, 9, 54, 91, 6}
fav_num.add(1)
fav_num.remove(6)
print(fav_num)
homi_fav = {8, 14, 89, 2}
our_fav = fav_num | homi_fav
print(our_fav)
#exercice 6
numbers = (1, 2, 5, 7) #can't add more integers to a turble
#exercice 7
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.pop(0)
del basket[2]
basket.append("kiwi")
basket.insert(0, "apples")
print(basket.count("apples"))
print(basket)
