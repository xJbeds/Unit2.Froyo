// console.log("Hello!");

function getFroyoOrder() {
  const input = prompt("Enter a list of froyo flavors (separated by commas):");

  if (!input) {
    console.log("No input provided. Please enter a list of flavors.");
    return;
  }
}
let (froyoFlavors = [Vanilla,Chocolate,Strawberry,Coffee]) i < froyoFlavors.length; i++ {  
} 
getFroyoOrder();

// This is where I am stuck, more code below..... 
// I need to figure out how to parse the input into an array of froyo flavors.

// secondFlavor: Vanilla,
// thirdFlavor: Vanilla,
// fourthFlavor: Chocolate,
// fifthFlavor: Strawberry,
// sixthFlavor: Coffee


//Build a website according to this user story://

//Upon opening the website, a visitor receives a prompt to enter a list of comma-separated froyo flavors.
// They type vanilla,vanilla,vanilla,strawberry,coffee,coffee. In the browser console,
// they are able to see how many of each flavor they have ordered. In this case,
// they observe that they have ordered three vanilla, two coffee, and one strawberry.

// There is no starter code for this workshop, but you are encouraged to review the
// solutions to previous workshops! Use the rubric in Canvas to guide you.

// Milestones
// You can check your progress against these milestones
// if you would like some guidance on what to do next.

// 1. Have you created an HTML file to live serve? --- DONE
// 2. Is the HTML file connected to a JS file? --- DONE
// 3. Can you prompt the user for froyo flavors and store their input? --- DONE

// 4. Can you parse the user input into an array of froyo flavors?

// 5. Can you build an object to track which flavors you have counted so far?
let total= 0 
for(froyoFlavor in froyo){
  const flavorCount = froyo[froyoFlavor];
  total += flavorCount;
 }
 return total;
 console.log(totalFlavorCount);

// 6. How should that object be updated as you iterate through the array of flavors?

// 7. Are you using functions to organize your code?

// 8. Do your variables and functions have meaningful names?

// 9. Is your code formatted?
