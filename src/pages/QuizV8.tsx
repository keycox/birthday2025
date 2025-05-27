import img from "../assets/images/answer_v8.png";
import Quiz from "../components/Quiz";

export default function QuizV8() {
  return (
    <Quiz
      correctAnswer="レア"
      title="縦８"
      imageSrc={img}
      maxLength={2}
    />
  );
}
