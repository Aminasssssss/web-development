def pos_neg(a, b, negative):
    if ((a==1 and b==-1) or (a==-1 and b==1)) and negative==False :
        return True;
    elif negative==True:
        return (a<0 and b<0)  or (a>0 and b>0)
    else:
        return False

