var questions = ["Was I born in South Dakota?", "Second ques", "Third ques"];

var answers = ["YES", "Y", "NO", "N"];


function ques1() {
  var question1 = prompt(questions[0]);
  if (question1.toUpperCase() === answers[2] ||  question1.toUpperCase() === answers[3]) {
    one.className = 'correct';
    one.innerHTML = 'Correct! Nice job.';
  } else {
    one.className = 'incorrect';
    one.innerHTML = 'No, you silly goose, I was born in Germany.';
  }
}
 ques1();
