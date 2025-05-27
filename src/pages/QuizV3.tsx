import img from "../assets/images/answer_v3.png";
import Quiz from "../components/Quiz";

export default function QuizV3() {
  return (
    <Quiz
      correctAnswer="ゴハン"
      title="縦3"
      imageSrc={img}
      maxLength={3}
    />
  );
}
