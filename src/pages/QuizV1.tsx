import img from "../assets/images/answer_v1.png";
import Quiz from "../components/Quiz";

export default function QuizV1() {
  return (
    <Quiz
      correctAnswer="ドッキリ"
      title="縦１"
      imageSrc={img}
      maxLength={4}
    />
  );
}
