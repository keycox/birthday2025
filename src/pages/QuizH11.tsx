import img from "../assets/images/answer_complete.png";
import Quiz from "../components/Quiz";

export default function QuizH11() {
  return (
    <Quiz
      correctAnswer="アイア"
      title="横11"
      imageSrc={img}
      maxLength={3}
    />
  );
}
