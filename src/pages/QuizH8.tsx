import img from "../assets/images/answer_h5.png";
import Quiz from "../components/Quiz";

export default function QuizH8() {
  return (
    <Quiz
      correctAnswer="レミーラ"
      title="横8"
      imageSrc={img}
      maxLength={4}
    />
  );
}
