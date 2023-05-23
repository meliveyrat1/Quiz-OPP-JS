
//@ts-check
//es para que este archivo funcione como si estuviera usando typescript
import { Question } from "./Question.js";
export class Quiz {

    questionIndex = 0; 
    score = 0;
    /**
     * 
     * @param {Question[]} questions;
     */
    constructor(questions) {
        
        this.questions = questions;
    
    }
    /**
     * 
     * @returns {Question} //va a retornar la pregunta encontrada
     */

    getQuestionIndex(){//para saber en que numero de pregunta va
        return this.questions[this.questionIndex];
    }

    isEnded(){   //para saber cuando termina la encuesta
        return this.questions.length === this.questionIndex;
    }

    /**
     * 
     * @param {string} answer 
     */

    guess(answer) { //para pasar a la siguiente pregunta si es que respondió bien
        console.log(answer)
        if (this.getQuestionIndex().correctAnswer(answer)) { //para que me autocomplete y que sepa que es un objeto question voy a importar Quetion el objeto question
            this.score++ //si la pregunta es valida aumenta el puntaje
        }

        this.questionIndex++ //aqui incrementa de a una pregunta na vex bien respondida
    }

}

