# Import the correct module element
from random import randint

# Initialise a variable that would generate a random number from 1 to 9
random_number = randint(1, 9)
# Initialise a variable for user input that prompts the user to guess a number from 1 to 9 and converts it to integer
user_number = int(input("Guess a number from 1 to 9 "))
# Compare the randomly generated number and the user input and output the result
if random_number > user_number:
    print(f"The number {user_number} is lower than the random number")
elif random_number < user_number:
    print(f"The number {user_number} is higher than the random number")
else:
    print(f"The number {user_number} is the correct answer!")
