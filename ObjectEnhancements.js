const createInstructor = (firstName, lastName) => ({
    firstName,
    lastName
});

let favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!"
};

const instructor1 = {
    firstName: "Colt",
    sayHi() {
      return "Hi!";
    },
    sayBye() {
      return this.firstName + " says bye!";
    }
  };

  const createAnimal = (species,verb,noise) => ({
    species,
    [verb]() {
        console.log(noise);
    }
  });