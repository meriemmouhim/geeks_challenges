import random
class Game():
    def __init__(self):
        self.choices = ['rock', 'paper', 'scissors']
    def get_user_item(self):
        choices = ['rock', 'paper', 'scissors']
        while True:
            user_choice = input('Enter your choice: ').strip().lower()
            if user_choice in choices:
                return user_choice
            else:
                print('Invalid choice. Please try again.')
    def get_computer_item(self):
        return random.choice(choices)
    def get_game_results(self, user_choice, computer_choice):
        if user_choice == computer_choice:
            return 'draw'
        elif (user_choice == 'rock' and computer_choice == 'scissors') or \
             (user_choice == 'scissors' and computer_choice == 'paper') or \
             (user_choice == 'paper' and computer_choice == 'rock'):
            return 'win'
        else:
            return 'loss'
    
    def play(self):
        user_choice = self.get_user_item()
        computer_choice = self.get_computer_item()
        print(f"You selected {user_choice}. The computer selected {computer_choice}.")
        result = self.get_game_results(user_choice, computer_choice)
        if result == 'draw':
            print('You drew!')
        elif result == 'win':
            print('You win!')
        else:
            print('You lose!')
        return result


        
