def calculator():
    """
    A simple calculator function that allows the user to perform basic arithmetic operations.

    The calculator provides the following operations:
    1. Addition
    2. Subtraction
    3. Multiplication
    4. Division
    5. Percentage

    The user is prompted to select an operation and input the required numbers.
    For operations 1-4, two numbers are required.
    For operation 5 (Percentage), only one number is required.

    The function performs the selected operation and prints the result.
    It also handles invalid inputs and division by zero gracefully.

    Usage:
    - Run the function and follow the prompts to select an operation and input numbers.
    - The result of the operation will be displayed.

    Note:
    - Division by zero is not allowed and will result in an error message.
    - Invalid operation choices will prompt the user to select a valid option.
    """
    print("Select operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Percentage")

    choice = input("Enter choice (1/2/3/4/5): ")

    if choice in ['1', '2', '3', '4', '5']:
        num1 = float(input("Enter first number: "))
        num2 = None
        if choice != '5':  # For percentage, we only need one number
            num2 = float(input("Enter second number: "))

        if choice == '1' and num2 is not None:
            print(f"The result is: {num1 + num2}")
        elif choice == '2' and num2 is not None:
            print(f"The result is: {num1 - num2}")
        elif choice == '3' and num2 is not None:
            print(f"The result is: {num1 * num2}")
        elif choice == '4' and num2 is not None:
            if num2 != 0:
                print(f"The result is: {num1 / num2}")
            else:
                print("Error: Division by zero is not allowed.")
        elif choice == '5':
            print(f"The result is: {num1}%")
    else:
        print("Invalid input. Please select a valid operation.")

if __name__ == "__main__":
    calculator()
