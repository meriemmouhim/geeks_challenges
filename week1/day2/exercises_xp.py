#ex1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
zipped = zip(keys, values)
print(list(zipped))
#ex2 0.1
family = {"rick": 43, "beth": 13, "morty": 5, "summer": 8}
total_cost = 0
for name, age in family.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15
    total_cost += price
    print(f"{name} has to pay ${price}.")
print(f"\nTotal cost for the family: ${total_cost}")
#ex2 0.2
family = {}
while True:
    name = input("Enter the family member's name (or type 'stop' to finish): ").strip()
    if name.lower() == "stop":
        break
    age = input(f"Enter {name}'s age: ").strip()
    if not age.isdigit():
        print("Please enter a valid number for age.")
        continue
    family[name] = int(age)
total_cost = 0
print("\nTicket Prices:")
for name, age in family.items():
    if age < 3:
        price = 0
    elif 3 <= age <= 12:
        price = 10
    else:
        price = 15
    total_cost += price
    print(f"{name.capitalize()} has to pay ${price}.")
print(f"\nTotal cost for the family: ${total_cost}")
#ex3
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}
brand["number_stores"] = 2
print(f"Zara’s clients are: {', '.join(brand['type_of_clothes'])}.")
brand["country_creation"] = "Spain"
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")
print(brand["international_competitors"][-1])
print(brand["major_color"]["US"])
print(len(brand))
print(brand.keys())
more_on_zara = {
    "creation_date": 1975,
    "number_stores": 10000
}
brand.update(more_on_zara)
print(more_on_zara.keys())
#ex4
def describe_city(city, country):
    print(f"{city} is in {country}")
describe_city("tokyo", "japan")
#ex5
import random
def random_input(user_num):
    if not (1 <= user_num <= 100):
        print("ivalid num")
        return
    random_number = random.randint(1, 100)
    if user_num == random_number :
        print("congrats you got the right num!!")
        print(f"\nyour num is {user_num} and the bots guess is {random_number}")
    else:
        print("owwwh you got the wrong num :( , better luck next time!!")
        print(f"\nyour num is {user_num} and the bots guess is {random_number}")
user_num = int(input("entre your lucky number (remember it gotta be a num between 1 & 100)"))
random_input(user_num)
#ex6
def make_shirt(text="Why do Python programmers prefer to be solitary? Because they love working with self.", size = "large"):
    print(f"your t-shirts size is {size}, and text you want on it is _{text}_")
make_shirt("xs", "this diva is running late")
make_shirt("can't judge a book by it's cover")
make_shirt("medium")
make_shirt(text="this diva is running late", size="medium")
#ex7
import random
def get_random_temp(season):
    if season == "winter":
        lower_limit = -10
        upper_limit = 16
    elif season == "spring":
        lower_limit = 5
        upper_limit = 20
    elif season == "summer":
        lower_limit = 18
        upper_limit = 40
    elif season == "autumn" or season == "fall":
        lower_limit = 10
        upper_limit = 25
    else:
        print("Invalid season.")
        return None
    random_temp = random.randint(lower_limit, upper_limit)
    return random_temp
def main():
    season = input("Enter a season (summer, autumn/fall, winter, or spring): ").lower()
    temp = get_random_temp()
    if temp <= 0:
        print(f"the temperature right now is {temp} degree Celsius")
        print(f"Brrr, that’s freezing! Wear some extra layers today")
    elif temp > 0 and temp <=16: 
        print(f"the temperature right now is {temp} degree Celsius")
        print(f"Brrr, that’s freezing! Wear some extra layers today")
    elif temp > 16 and temp <=23:
        print(f"the temperature right now is {temp} degree Celsius")
        print(f"Quite chilly! Don’t forget your coat")
    elif temp > 23 and temp <=32:
        print(f"the temperature right now is {temp} degree Celsius")
        print(f"ohh, good weather perfect for an outing with your friends")
    else:
        print(f"the temperature right now is {temp} degree Celsius")
        print(f"quiet hot, maybe the beach?")
        
#ex8 (i changed the theme to arcane i don't like star wars)
def arcane_quiz():
    data = [
        {
            "question": "Who is the main protagonist of Arcane?",
            "answer": "Jinx"
        },
        {
            "question": "Which city does the story of Arcane take place in?",
            "answer": "Piltover"
        },
        {
            "question": "Who is the sister of Jinx?",
            "answer": "Vi"
        },
        {
            "question": "What is the name of the dangerous substance that powers Hextech?",
            "answer": "Shimmer"
        },
        {
            "question": "Who is the main antagonist in Arcane's first season?",
            "answer": "Silco"
        },
        {
            "question": "Which champion from League of Legends is featured prominently in Arcane?",
            "answer": "Jinx"
        }
    ]
    
    correct_answers = 0
    incorrect_answers = 0
    wrong_answers = []
    def ask_question():
        nonlocal correct_answers, incorrect_answers, wrong_answers
        for question in data:
            print(question["question"])
            user_answer = input("Your answer: ").strip()
            if user_answer.lower() == question["answer"].lower():
                correct_answers += 1
            else:
                incorrect_answers += 1
                wrong_answers.append({
                    "question": question["question"],
                    "user_answer": user_answer,
                    "correct_answer": question["answer"]
                })
    def give_results():
        print(f"\nYou got {correct_answers} correct answers and {incorrect_answers} incorrect answers.")
        if incorrect_answers > 0:
            print("\nHere are the questions you answered incorrectly:")
            for item in wrong_answers:
                print(f"Question: {item['question']}")
                print(f"Your answer: {item['user_answer']}")
                print(f"Correct answer: {item['correct_answer']}")
                print()
        if incorrect_answers > 3:
            print("\nYou had more than 3 wrong answers. Would you like to play again?")
            play_again = input("Type 'yes' to play again or 'no' to exit: ").strip().lower()
            if play_again == "yes":
                arcane_quiz()
            else:
                print("Thanks for playing!")
        else:
            print("Great job! You don't need to play again.")
    ask_question()
    give_results()
arcane_quiz()



        
    











    
