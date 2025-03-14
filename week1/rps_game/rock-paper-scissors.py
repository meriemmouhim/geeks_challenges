import random
from game import Game
def get_user_menu_choice():
   print("Menu:")
   print("g: Play new game") 
   print("x: Show scores and exit")
   choices = {"g": "Play new game", "x": "Show scores and exit"}
   user_choice = input("Enter your choice: ").strip().lower()
   if user_choice in choices:
       return user_choice
   else:
       print("Invalid choice. Please try again.")
       return None
def print_results(results):
    print("Game Results:")
    print(f"Wins: {results.get('win', 0)}")
    print(f"Losses: {results.get('loss', 0)}")
    print(f"Draws: {results.get('draw', 0)}")
    print("Thank you for playing!")
def main():
    results = {
        "win": 0,
        "loss": 0,
        "draw": 0
        }
    game = Game()
    while True:
        choice = get_user_menu_choice()
        if choice == None:
            continue
        if choice == "x":
            print_results(results)
            break
        elif choice == "g":
            print("starting new game")
            result = game.play()
            if result:
                results[result] += 1
        else :
            print("Invalid choice. Please try again.")
if __name__ == "__main__":
    main()