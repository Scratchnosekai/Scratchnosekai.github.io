let questions = [
  { question: "問題1", answer: "みやぎ" },
  { question: "問題2", answer: "しろばと" },
  { question: "問題3", answer: "いしのまき" }
];
let currentQuestion = 0;

function checkAnswer() {
  const answerInput = document.getElementById("answer");
  const userAnswer = answerInput.value;
  const correctAnswer = questions[currentQuestion].answer;

  if (userAnswer === correctAnswer) {
    document.getElementById("result").textContent = "正解！";
    currentQuestion++;
    if (currentQuestion < questions.length) {
      document.getElementById("question").textContent = questions[currentQuestion].question;
      answerInput.value = "";
    } else {
      document.getElementById("question").textContent = "ゲームクリア！";
      answerInput.disabled = true;
    }
  } else {
    document.getElementById("result").textContent = "不正解！";
  }
}
