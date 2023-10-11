# Import the correct module element
from random import randint


def guess():
    # Initialise a variable that would generate a random number from 1 to 9
    random_number = randint(1, 9)
    # Initialise a variable for user input that prompts the user to guess a number from 1 to 9 and converts it to integer
    user_number = input("Guess a number from 1 to 9 ")
    # Validate that the user input is a digit
    while not user_number.isdigit():
        print("Please enter an integer")
        user_number = input("Guess a number from 1 to 9 ")
        if user_number.isdigit():
            break
    # Convert user input from string to integer
    converted_number = int(user_number)
    # Compare the randomly generated number and the user input and output the result
    if random_number > converted_number:
        print(f"The number {converted_number} is lower than the random number")
    elif random_number < converted_number:
        print(f"The number {converted_number} is higher than the random number")
    else:
        print(f"The number {converted_number} is the correct answer!")


guess()
