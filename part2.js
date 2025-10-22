// ---------------------------------------------
// EVENT-DRIVEN DOM MANIPULATION (Starter)
// ---------------------------------------------
const container = document.getElementById("container");
const scoreInput = document.getElementById("scoreInput");

// STEP 1: Add Paragraph
function addParagraph() {
  let para = document.createElement("p");
  para.innerHTML = "add new paragraph";
  para.id - "mypara";
  container.appendChild(para);
  // create and append a <p>
}

// STEP 2: Update Paragraph
function updateParagraph() {
  let para = document.getElementById("mypara");
  para.innerHTML = "add new paragraph from updateParagraph";
  // find <p> and update text
}

// STEP 3: Style Paragraph
function styleParagraph() {
  let para = document.getElementById("mypara");
  para.style.color = "red";

  // change color / background / font
  //para.classList.add("passed");
}

// STEP 4: Check Score from textbox
function checkScore() {
  // 1. Read value from scoreInput
  // 2. Convert to number
  // 3. Create <p> element for result
  // 4. If score >= 50 → Passed (green)
  //    else → Failed (red)
  // 5. Append to container
  // 6. Optionally clear textbox
  let score = document.querySelector("#scoreInput").value;
  console.log(score);

  let result = document.getElementById("studentResult");

  if (result == null){
    result = document.createElement("p");
    result.id = "studentResult";
    container.appendChild(result);
  }

  if(score >= 50 ){
    result.textContent = "student have passed";
    result.className = "passed";
  }
  else{
    result.textContent = "student have failed";
    result.className = "failed";
  }
}

// STEP 5: Toggle Theme
function toggleTheme() {
  // switch light ↔ dark background
}

// STEP 6: Add Note with timestamp
function addNote() {
  // create <p> showing current time
}
