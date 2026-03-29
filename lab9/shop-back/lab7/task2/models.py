class Animal:
    def __init__(self, name, age, color):
        self.name = name
        self.age = age
        self.color = color

    def eat(self):
        return f"{self.name} is eating"

    def sleep(self):
        return f"{self.name} is sleeping"

    def speak(self):
        return f"{self.name} makes a sound"

    def __str__(self):
        return f"{self.name} ({self.color}, {self.age} years old)"


class Dog(Animal):
    def __init__(self, name, age, color, breed):
        super().__init__(name, age, color)
        self.breed = breed

    def speak(self):
        return f"{self.name} says Woof!"

    def fetch(self):
        return f"{self.name} is fetching the ball"

    def __str__(self):
        return f"{self.name} is a {self.breed} dog ({self.color}, {self.age} years old)"


class Cat(Animal):
    def __init__(self, name, age, color, indoor):
        super().__init__(name, age, color)
        self.indoor = indoor

    def speak(self):
        return f"{self.name} says Meow!"

    def scratch(self):
        return f"{self.name} is scratching the furniture"

    def __str__(self):
        indoor_status = "indoor" if self.indoor else "outdoor"
        return f"{self.name} is an {indoor_status} cat ({self.color}, {self.age} years old)"