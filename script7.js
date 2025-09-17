// Global variable
let globalMessage = "FreshMart Specials:";

// Function with parameter + return value
function createMessage(fruitName) {
  let localNote = " is now on offer!"; // local variable
  return globalMessage + " 🍎 " + fruitName + localNote;
}

// Function to trigger bounce animation on a random fruit
function surpriseFruit() {
  const fruits = document.querySelectorAll(".fruit-image");
  const randomIndex = Math.floor(Math.random() * fruits.length);
  const chosenFruit = fruits[randomIndex];

  // Remove bounce if already applied (so it can re-trigger)
  chosenFruit.classList.remove("bounce");
  void chosenFruit.offsetWidth; // trick to reset animation
  chosenFruit.classList.add("bounce");

  // Update message area with function output
  const fruitName = chosenFruit.nextElementSibling
    ? chosenFruit.nextElementSibling.textContent
    : "Strawberries";
  document.getElementById("messageArea").textContent = createMessage(fruitName);
}

// Event listener for button
document.getElementById("surpriseBtn").addEventListener("click", surpriseFruit);