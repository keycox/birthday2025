import { useState } from "react";
import answerImg from "../assets/images/answer1.png";

export default function QuizUI() {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const correctAnswer = "ドラゴラム";

  const handleInputChange = (e) => {
    const value = e.target.value;
    // 日本語文字の長さを正確に計算（サロゲートペアも考慮）
    const length = [...value].length;
    if (length <= 5) {
      setAnswer(value);
    }
  };

  const handleSubmit = () => {
    const isAnswerCorrect = answer === correctAnswer;
    setIsCorrect(isAnswerCorrect);
    setShowResult(true);
  };

  const handleReset = () => {
    setAnswer("");
    setIsCorrect(false);
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 max-w-md w-full border border-white/20">
        {/* 問題タイトル */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            横１
          </h1>
        </div>

        {!showResult ? (
          <>
            {/* 回答入力欄 */}
            <div className="mb-6">
              <label className="block text-white font-medium mb-4 text-center">
                回答を入力（5文字）：
              </label>
              <div className="flex justify-center mb-4">
                <input
                  type="text"
                  value={answer}
                  onChange={handleInputChange}
                  onCompositionStart={() => {
                    // IME入力開始時の処理
                  }}
                  onCompositionEnd={(e) => {
                    // IME入力確定時の処理
                    handleInputChange(e);
                  }}
                  className="w-80 h-14 text-center text-2xl font-bold bg-white/20 border-2 border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50"
                  maxLength={10}
                  placeholder="5文字で入力"
                  autoFocus
                />
              </div>
              <div className="text-center">
                <p className="text-white/70 text-sm">
                  {[...answer].length}/5文字
                </p>
                {[...answer].length > 5 && (
                  <p className="text-red-400 text-sm mt-1">
                    5文字以内で入力してください
                  </p>
                )}
              </div>
            </div>

            {/* 送信ボタン */}
            <button
              onClick={handleSubmit}
              disabled={[...answer].length !== 5}
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-cyan-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
            >
              回答する
            </button>
          </>
        ) : (
          <div className="text-center">
            {isCorrect ? (
              <>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-green-400 mb-2">
                    🎉 正解！
                  </h3>
                </div>

                {/* 正解画像 */}
                <div className="mb-6 bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 p-6 rounded-xl">
                  <img src={answerImg} />
                </div>
              </>
            ) : (
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-red-400 mb-4">
                  ❌ 不正解
                </h3>
                <button
                  onClick={handleReset}
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-cyan-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
                >
                  もう一度挑戦
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
