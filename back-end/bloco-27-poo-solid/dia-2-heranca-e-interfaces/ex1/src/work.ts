import Evaluation from "./evaluation";
import Teacher from "./teacher";

class Work extends Evaluation {
  constructor(teacher: Teacher, score: number) {
    super(score, teacher, 'trabalho');
  }

  validateScore(value: number):void {
    super.validateScore(value);
    if (value > 50) {
      throw new Error('A pontuação não pode passar de 50 pontos');
    }
  }
}

export default Work;