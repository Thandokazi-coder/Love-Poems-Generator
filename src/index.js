function generatePoem(event) {
  event.preventDefault();
  
 new Typewriter("#poem", {
      strings: "I do not love you except because I love you",
      autoStart: true,
      delay: 1,  // Adjust the delay for visible typing speed
      cursor: "", // Default cursor
  });  
}

let poemFormElement = document.querySelector(".poem-form-generator");  // Correct form selection
poemFormElement.addEventListener("submit", generatePoem);
