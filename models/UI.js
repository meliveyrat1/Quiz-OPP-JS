
export class UI {
    constructor(){}
    /**
     * 
     * @param {string} text 
     */

    showQuestion(text){
      const questionTitle =  document.getElementById("question")
      questionTitle.innerText= text; //metodo para que me muestre la pregunta
    }

    /**
     * 
     * @param {string[]} choices 
    
     */
      showChoices(choices, callback) {
        const choicesContainer = document.getElementById("choices");
        choicesContainer.innerHTML = ""
        
        for(let i = 0; i < choices.length; i++){ //recorro el array de opciones y pr cada opcion genero un boton
            const button = document.createElement("button");
            button.innerText = choices[i];
            button.className = "button"; //para que tenga el botton con estilos que ya habiamos creado
            button.addEventListener("click", ()=> callback(choices[i])); //me devuelve el texto actual que iene el boton
             choicesContainer.append(button) 
        }

      }
     /**
      * 
      * @param {number} score 
      */
    
      showScores(score) {
        const quizEndHTML = `
        <h1>Result</h1>
        <h2>Your Score: ${score}</h2>
        `;
        const element = document.getElementById("quiz");
        element.innerHTML = quizEndHTML;

      }

      /**
       * 
       * @param {number} currentIndex /the curren index of the quiz
       * @param {number} total /the total questions
       */

      showProgress(currentIndex, total) {
        const element = document.getElementById("progress");
        element.innerHTML = `Question ${currentIndex} of ${total}`

      }
    
}