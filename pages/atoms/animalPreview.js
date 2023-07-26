import React from 'react';
import Header from '../molecules/Header';

const AnimalsPage = () => {

  return (
    <div>
      <Header/>
        <div className="flex flex-col items-center justify-center w-screen  bg-gray-200">
          <h1 className="text-4xl font-bold mb-8">Animals Page</h1>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg mb-4">
              3 interesting facts about dogs:
              1. Dogs have an exceptional sense of smell: Dogs have an incredibly powerful sense of smell, far more sensitive than humans. On average, a dog's sense of smell is 10,000 to 100,000 times more powerful than ours. This ability allows them to detect certain diseases, locate missing persons, and even identify certain types of cancer.
              2. Dogs come in various shapes and sizes: From the tiny Chihuahua to the giant Great Dane, there is a tremendous variety of dog breeds in terms of size, shape, and appearance. Dogs have been selectively bred for specific purposes, resulting in the diverse range of breeds we see today, each with its own unique characteristics.
              3. Dogs communicate through body language: Dogs use a combination of vocalizations, body postures, and facial expressions to communicate with each other and with humans. They use their tails, ears, and body positions to convey emotions such as happiness, fear, and aggression. Understanding your dog's body language can help you better communicate and build a strong bond with them.
            </p>
            <p className="text-lg mb-4">
              3 interesting facts about turtles:

              1. Turtles have been around for millions of years: Turtles are one of the oldest reptile groups and have been around for approximately 220 million years. They have survived major extinction events, including the one that wiped out the dinosaurs. The oldest known turtle fossil dates back to the late Triassic period, making turtles one of the most ancient living reptile groups.
                
              2. Turtles have protective shells: One of the most distinctive features of turtles is their shell, which serves as a protective covering. The shell is made up of two parts: the carapace (the upper part) and the plastron (the lower part). The shell is fused to the turtle's spine and ribs, providing them with a sturdy defense against predators. Some turtles can retract their heads, legs, and tails into their shells for additional protection.
                
              3. Turtles come in a variety of sizes and habitats: Turtles exhibit great diversity in terms of size, habitat, and lifestyle. Some species, like the tiny speckled padloper turtle, measure only a few centimeters in length, while others, like the leatherback sea turtle, can grow to be over 6 feet (1.8 meters) long. Turtles inhabit a wide range of environments, including oceans, rivers, lakes, swamps, and even deserts. They have adapted to various diets, from herbivorous to carnivorous, depending on the species.
                
              These are just a few intriguing facts about turtles. They are fascinating creatures with unique characteristics that have allowed them to survive and thrive for millions of years.
            </p>
            <p className="text-lg mb-4">
            </p>
          </div>
        </div></div>
  );
};

export default AnimalsPage;
