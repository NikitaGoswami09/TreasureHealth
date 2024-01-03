class Animal:
    def __init__(self, name):
        self.name = name

    def make_sound(self):
        pass  # Placeholder for the sound each animal makes

class Mammal(Animal):
    def __init__(self, name, fur_color):
        super().__init__(name)
        self.fur_color = fur_color

    def give_birth(self):
        print(f"{self.name} is giving birth.")

class Bird(Animal):
    def __init__(self, name, feather_color):
        super().__init__(name)
        self.feather_color = feather_color

    def lay_eggs(self):
        print(f"{self.name} is laying eggs.")

class DomesticMammal(Mammal):
    def __init__(self, name, fur_color, breed):
        super().__init__(name, fur_color)
        self.breed = breed

    def respond_to_owner(self):
        print(f"{self.name} is responding to the owner.")

class WildBird(Bird):
    def __init__(self, name, feather_color, habitat):
        super().__init__(name, feather_color)
        self.habitat = habitat

    def fly_away(self):
        print(f"{self.name} is flying away in its natural habitat.")

# Example usage
dog = DomesticMammal("Buddy", "Brown", "Labrador")
dog.make_sound()
dog.give_birth()
dog.respond_to_owner()

sparrow = WildBird("Tweetie", "Brown", "Tree")
sparrow.make_sound()
sparrow.lay_eggs()
sparrow.fly_away()
