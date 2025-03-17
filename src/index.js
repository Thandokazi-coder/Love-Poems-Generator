function displayPoem(response){

   console.log("poem generated");

  new Typewriter ("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor:'',
  });
}



function generatePoem(event) {
  event.preventDefault();

   let instructionsInput = document.querySelector("#user-instruction");
  let apiKey = "t0db2ac0a4ca00efa9ab2ao6364fb8f5";
  let context = 
  "You are romantic Poem expert and love to write short poems.Your mission is to generate a 4 line poem in basic HTML format and SEPERATE each line. Make sure to follow the user instruction.Sign the poem with `SheCodes AI` with <strong> element.Remove the ``` html ``` in the beginning and the end of the poem.";
  let prompt = `User-instruction: Generate a Love poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);


  axios.get(apiUrl).then(displayPoem);
}
 
 

let poemFormElement = document.querySelector(".poem-form-generator");  // Correct form selection
poemFormElement.addEventListener("submit", generatePoem);
