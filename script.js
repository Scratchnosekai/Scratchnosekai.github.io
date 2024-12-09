// 正しい暗号
const correctAnswer = "secret_code"; // ここに実際の暗号を設定

// 答えをチェックする関数
function checkAnswer() {
  const answerInput = document.getElementById("answer");
  const resultElement = document.getElementById("result");

  if (answerInput.value.toLowerCase() === correctAnswer.toLowerCase()) {
    resultElement.textContent = "正解！脱出成功！";
    // 脱出成功時の処理 (例: 画面遷移、ゲームクリアメッセージ)
  } else {
    resultElement.textContent = "不正解！もう一度考えてみよう！";
  }
}
