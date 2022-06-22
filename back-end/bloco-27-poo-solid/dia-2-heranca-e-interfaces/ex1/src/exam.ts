import Evaluation from "./evaluation";
import Teacher from "./teacher";

class Exam extends Evaluation {
  constructor(teacher: Teacher, score: number) {
    super(score, teacher, 'prova');
  }

  validateScore(value: number):void {
    super.validateScore(value);
    if (value > 25) {
      throw new Error('A pontuação não pode passar de 25 pontos');
    }
  }
}

export default Exam;