def missing_char(str, n):
    result=""
    for i in range(str):
        if i!=n:
            result+=str[i]
    return result