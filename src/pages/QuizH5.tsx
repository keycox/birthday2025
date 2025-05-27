import img from "../assets/images/answer_h5.png";
import Quiz from "../components/Quiz";

export default function QuizH5() {
  return (
    <Quiz
      correctAnswer="キャンドル"
      title="横５"
      imageSrc={img}
      maxLength={5}
    />
  );
}
