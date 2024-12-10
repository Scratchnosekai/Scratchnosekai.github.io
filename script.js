let questions = [
  { question: "最初の問題は？", answer: "答え1" },
  { question: "次の問題は？", answer: "答え2" },
  { question: "最後の問題は？", answer: "答え3" }
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
