import { useState } from "react";

interface QuizProps {
  correctAnswer: string;
  title: string;
  imageSrc: string;
  maxLength?: number; // ←★追加（省略時は5文字）
}

export default function Quiz({ correctAnswer, title, imageSrc, maxLength = 5 }: QuizProps) {
  const [answer, setAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const length = [...value].length;
    if (length <= maxLength) {
      setAnswer(value);
    }
  };

  const handleSubmit = () => {
    setIsCorrect(answer === correctAnswer);
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
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            {title}
          </h1>
        </div>

        {!showResult ? (
          <>
            <div className="mb-6">
              <label className="block text-white font-medium mb-4 text-center">
                回答を入力
              </label>
              <div className="flex justify-center mb-4">
                <input
                  type="text"
                  value={answer}
                  onChange={handleInputChange}
                  className="w-80 h-14 text-center text-2xl font-bold bg-white/20 border-2 border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/50"
                  maxLength={maxLength + 2} // バッファ付き（サロゲート対策）
                  placeholder={`${maxLength}文字で入力(カタカナ)`}
                  autoFocus
                />
              </div>
              <div className="text-center">
                <p className="text-white/70 text-sm">{[...answer].length}/{maxLength}文字</p>
                {[...answer].length > maxLength && (
                  <p className="text-red-400 text-sm mt-1">
                    {maxLength}文字以内で入力してください
                  </p>
                )}
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={[...answer].length !== maxLength}
              className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-cyan-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
            >
              回答する
            </button>
          </>
        ) : (
          <div className="text-center">
            {isCorrect ? (
              <>
                <h3 className="text-2xl font-bold text-pink-300 mb-2">🎉 正解！</h3>
                <p className="text-white mb-2">クロスワードに書いてや✏️</p>
                <div className="mb-6 bg-gradient-to-br from-blue-500 via-blue-400 to-pink-300 p-6 rounded-xl">
                  <img src={imageSrc} />
                </div>
              </>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-red-400 mb-4">❌ 不正解</h3>
                <button
                  onClick={handleReset}
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold rounded-lg shadow-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
                >
                  もう一度挑戦
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}