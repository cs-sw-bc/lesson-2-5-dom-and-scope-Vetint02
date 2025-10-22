// ---------------------------------------------
// PHASE 1 – DIRECT DOM MANIPULATION
// ---------------------------------------------
//
// This code runs automatically when page loads.
// Students experiment line-by-line here first.
// ---------------------------------------------

// 🧩 STEP 1: Access the container
let container = document.getElementById("container");
container = document.querySelector("#container");





// 🧩 STEP 2: Change container text content
container.textContent = "Yes, I got it working!";
container.innerHTML = "<b>yes</b>, I got it working";




// 🧩 STEP 3: Create and add a new paragraph
let para = document.createElement("p");
para.innerHTML = "create and add new paragraph";
container.appendChild(para);

para.style.color = "red";
para.style.backgroundColor = "pink";

//how to add it to the body directly

document.body.appendChild(para);
// 🧩 STEP 4: Update paragraph text





// 🧩 STEP 5: Add HTML formatting to paragraph





// 🧩 STEP 6: Style paragraph (color, background, font)





// 🧩 STEP 7: Use if–else logic to display “Passed / Failed”





// 🧩 STEP 8: Change entire page background or add a new heading





// ---------------------------------------------
// End of Direct DOM Manipulation
// ---------------------------------------------
