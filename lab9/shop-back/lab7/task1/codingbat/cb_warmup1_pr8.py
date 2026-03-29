def front_back(str):
    if str.length()==1:
        return str
    for i in str:
        str[-1]+ str[1: -1]+ str[0]
