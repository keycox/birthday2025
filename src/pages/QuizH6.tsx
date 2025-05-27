import img from "../assets/images/answer_h8.png";
import Quiz from "../components/Quiz";

export default function QuizH8() {
  return (
    <Quiz
      correctAnswer="レミーラ"
      title="横８"
      imageSrc={img}
      maxLength={4}
    />
  );
}
