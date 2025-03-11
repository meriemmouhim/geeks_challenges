from datetime import datetime
birthdate = input("Enter your birthdate (DD/MM/YYYY): ")
day, month, year = map(int, birthdate.split("/"))
current_year = datetime.now().year
age = current_year - year
candles = age % 10
if (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0):
    is_leap = True
else:
    is_leap = False
candles_str = "i" * candles
cake = f"""
       ___{candles_str}___
      |:H:a:p:p:y:|
    __|___________|__
   |^^^^^^^^^^^^^^^^^|
   |:B:i:r:t:h:d:a:y:|
   |                 |
   ~~~~~~~~~~~~~~~~~~~
"""
if is_leap:
    print(cake * 2)
else:
    print(cake)

