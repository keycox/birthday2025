import img from "../assets/images/answer_v4.png";
import Quiz from "../components/Quiz";

export default function QuizV4() {
  return (
    <Quiz
      correctAnswer="ラシドレミ"
      title="縦4"
      imageSrc={img}
      maxLength={4}
    />
  );
}
