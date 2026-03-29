def swap_case(s):
    result=""
    for char in s:
        if char.islower():
            result+=char.upper()
        elif char.isupper():
            result+=char.lower()
        else:
            result+=char
    return result
s=input()
result=swap_case(s)
print(s)