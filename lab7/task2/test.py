from models import Animal, Dog, Cat


def main():
    animal = Animal("Generic", 5, "brown")
    dog = Dog("Rex", 3, "brown", "Labrador")
    cat = Cat("Whiskers", 2, "gray", True)

    animals = [animal, dog, cat]

    print(" Animal Information ")
    for a in animals:
        print(a)

    print("\n Animal Sounds (Polymorphism) ")
    for a in animals:
        print(a.speak())

    print("\n Unique Methods ")
    print(dog.fetch())
    print(cat.scratch())

    print("\n Common Methods ")
    for a in animals:
        print(a.eat())
        print(a.sleep())


if __name__ == "__main__":
    main()