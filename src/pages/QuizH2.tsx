import img from "../assets/images/answer_h2.png";
import Quiz from "../components/Quiz";

export default function QuizH2() {
  return (
    <Quiz
      correctAnswer="ツルハシ"
      title="横２"
      imageSrc={img}
      maxLength={4}
    />
  );
}
