import img from "../assets/images/answer_h10.png";
import Quiz from "../components/Quiz";

export default function QuizH10() {
  return (
    <Quiz
      correctAnswer="ジム"
      title="横10"
      imageSrc={img}
      maxLength={2}
    />
  );
}
