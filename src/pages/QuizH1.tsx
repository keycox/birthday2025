import img from "../assets/images/answer_h1.png";
import Quiz from "../components/Quiz";

export default function QuizH1() {
  return (
    <Quiz
      correctAnswer="ドラゴラム"
      title="横１"
      imageSrc={img}
      maxLength={5}
    />
  );
}
