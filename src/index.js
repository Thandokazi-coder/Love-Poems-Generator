function generatorPoem(event) {
    event.preventDefault()
    let poemElement = document.querySelector("poem");
    new Typewriter('#poem', {
        strings: "I Love You",
        autoStart: true,
        delay: 1,
        cursor: "",
      });  
    

}
    
    







let poemFormElement = document.querySelector("poem-form-generator");
poemFormElement.addEventListener("submit", generatorPoem)