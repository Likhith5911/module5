
function loadRandomCategory() {
    const categories = ["Lunch", "Dinner", "Sushi", "Breakfast"]; // Replace with your actual categories
    const randomIndex = Math.floor(Math.random() * categories.length);
    const randomCategoryShortName = categories[randomIndex];
    
    // Replace this line with your logic to load menu items for the random category
    // Here's an example using a function call (replace it with your actual logic)
    loadMenuItems(randomCategoryShortName);
  }
  
  // Function to load menu items for a specific category (replace this with your actual implementation)
  function loadMenuItems(categoryShortName) {
    // Your code to load menu items for the specified categoryShortName
    console.log(`Loading menu items for category: ${categoryShortName}`);
    // Perform the necessary actions to display the menu items for the specified category
  }
  