import img from "../assets/images/answer_v9.png";
import Quiz from "../components/Quiz";

export default function QuizV9() {
  return (
    <Quiz
      correctAnswer="ドラム"
      title="縦9"
      imageSrc={img}
      maxLength={3}
    />
  );
}
