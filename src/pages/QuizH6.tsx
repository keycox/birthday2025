import img from "../assets/images/answer_h6.png";
import Quiz from "../components/Quiz";

export default function QuizH8() {
  return (
    <Quiz
      correctAnswer="レイド"
      title="横6"
      imageSrc={img}
      maxLength={3}
    />
  );
}
