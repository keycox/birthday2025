import img from "../assets/images/answer_v8.png";
import Quiz from "../components/Quiz";

export default function QuizV7() {
  return (
    <Quiz
      correctAnswer="ルイージ"
      title="縦7"
      imageSrc={img}
      maxLength={4}
    />
  );
}
