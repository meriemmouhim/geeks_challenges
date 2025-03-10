#ex 1
month = int(input("Enter a month (1 to 12): "))
if 3 <= month <= 5:
    print("It's Spring!")
elif 6 <= month <= 8:
    print("It's Summer!")
elif 9 <= month <= 11:
    print("It's Autumn!")
elif month == 12 or month == 1 or month == 2:
    print("It's Winter!")
else:
    print("Invalid month. Please enter a number between 1 and 12.")
#ex 2
for num in range (0, 20):
    print(num)
for Num in range(1, 21):
    if Num % 2 == 0:
        print(Num)
#ex 3
name = input("enter a name: ")
while name != "meriem":
     name = input("enter a name")
print("good job you got the right name, MINE!")
#ex 4
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
user_name = input("Enter your name: ")
if user_name in names:
    print(f"it'a index is {names.index(user_name)}")
else:
    print(f"{user_name} is not in the list.")
#ex 5
num1 = input("enter the first num: ")
num2 = input("enter the second num: ")
num3 = input("enter the third num: ")
greatest = max(num1, num2, num3)
print(f"the greatest number is {greatest}")
#ex 6
winner = input("enter a number between 1 and 9: ")
winning_num = 7
if winner == 7:
    print("Winner!")
else:
    print("Better luck next time")
