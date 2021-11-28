/* Vetores Contadoras ------------------------------------- */
  var filme = [0, 0, 0, 0, 0];

/* Atribui Display none para todas as Questões -------------- */
first_question.style.display = 'none';
second_question.style.display = 'none';
third_question.style.display = 'none';
fourth_question.style.display = 'none';
fifth_question.style.display = 'none';


/* Inicia o Quiz -------------------------------------------- */
function quiz_starting(){
  starting_id_quiz.style.display = 'none';
  title_star.style.display = 'none'
  section_button.style.display = 'none'
  first_question.style.display = 'block';
}

/* Primeria Questão ----------------------------------------- */
function selection1_option1(){
  first_question.style.display = 'none';
  second_question.style.display = 'block';
  filme[0] ++;
}

function selection1_option2() {
  first_question.style.display = 'none';
  second_question.style.display = 'block';
  filme[1] ++;
}

function selection1_option3() {
  first_question.style.display = 'none';
  second_question.style.display = 'block';
  filme[2] ++;
}

function selection1_option4() {
  first_question.style.display = 'none';
  second_question.style.display = 'block';
  filme[3] ++;
}

function selection1_option5() {
  first_question.style.display = 'none';
  second_question.style.display = 'block';
  filme[4] ++;
}

/* Segunda Questão ------------------------------------------ */
function selection2_option1() {
  second_question.style.display = 'none';
  third_question.style.display = 'block';
  filme[0] ++;
}

function selection2_option2() {
  second_question.style.display = 'none';
  third_question.style.display = 'block';
  filme[1] ++;
}

function selection2_option3() {
  second_question.style.display = 'none';
  third_question.style.display = 'block';
  filme[2] ++;
}

function selection2_option4() {
  second_question.style.display = 'none';
  third_question.style.display = 'block';
  filme[3] ++;
}

function selection2_option5() {
  second_question.style.display = 'none';
  third_question.style.display = 'block';
  filme[4] ++;
}

/* Terceira Questão ----------------------------------------- */
function selection3_option1() {
  third_question.style.display = 'none';
  fourth_question.style.display = 'block';
  filme[0] ++;
}

function selection3_option2() {
  third_question.style.display = 'none';
  fourth_question.style.display = 'block';
  filme[1] ++;
}

function selection3_option3() {
  third_question.style.display = 'none';
  fourth_question.style.display = 'block';
  filme[2] ++;
}

function selection3_option4() {
  third_question.style.display = 'none';
  fourth_question.style.display = 'block';
  filme[3] ++;
}

function selection3_option5() {
  third_question.style.display = 'none';
  fourth_question.style.display = 'block';
  filme[4] ++;
}

/* Quarta Questão ------------------------------------------- */
function selection4_option1() {
  fourth_question.style.display = 'none';
  fifth_question.style.display = 'block';
  filme[0] ++;
}

function selection4_option2() {
  fourth_question.style.display = 'none';
  fifth_question.style.display = 'block';
  filme[1] ++;
}

function selection4_option3() {
  fourth_question.style.display = 'none';
  fifth_question.style.display = 'block';
  filme[2] ++;
}

function selection4_option4() {
  fourth_question.style.display = 'none';
  fifth_question.style.display = 'block';
  filme[3] ++;
}

function selection4_option5() {
  fourth_question.style.display = 'none';
  fifth_question.style.display = 'block';
  filme[4] ++;
}

/* Quinta Questão ------------------------------------------- */
function selection5_option1() {
  fifth_question.style.display = 'none';
  filme[0] ++;
  loading();
}

function selection5_option2() {
  fifth_question.style.display = 'none';
  filme[1] ++;
  loading();
}

function selection5_option3() {
  fifth_question.style.display = 'none';
  filme[2] ++;
  loading();
}

function selection5_option4() {
  fifth_question.style.display = 'none';
  filme[3] ++;
  loading();
}

function selection5_option5() {
  fifth_question.style.display = 'none';
  filme[4] ++;
  loading();
}

/* Carrega o Quiz ------------------------------------------- */
function loading(){
  loading_quiz.style.display = 'block';
  setTimeout(resultado, 1100);
}

/* Fim do Quiz ---------------------------------------------- */

suggest_movie1.style.display = 'none';
suggest_movie2.style.display = 'none';
suggest_movie3.style.display = 'none';
suggest_movie4.style.display = 'none';
suggest_movie5.style.display = 'none';
suggest_movie6.style.display = 'none';
loading_quiz.style.display = 'none';

function resultado() {
  quiz_questions.style.display = 'none'
  loading_quiz.style.display = 'none';
  if (
    filme[0] > filme[1] &&
    filme[0] > filme[2] &&
    filme[0] > filme[3] &&
    filme[0] > filme[4]){
      suggest_movie1.style.display = 'block';
  } else if (
    filme[1] > filme[0] &&
    filme[1] > filme[2] &&
    filme[1] > filme[3] &&
    filme[1] > filme[4]){
      suggest_movie2.style.display = 'block'; 
  } else if (
    filme[2] > filme[0] &&
    filme[2] > filme[1] &&
    filme[2] > filme[3] &&
    filme[2] > filme[4]){
      suggest_movie3.style.display = 'block';
  } else if (
    filme[3] > filme[0] &&
    filme[3] > filme[1] &&
    filme[3] > filme[2] &&
    filme[3] > filme[4]){
      suggest_movie4.style.display = 'block';
  } else if (
    filme[4] > filme[0] &&
    filme[4] > filme[1] &&
    filme[4] > filme[2] &&
    filme[4] > filme[3]){
      suggest_movie5.style.display = 'block';
  } else {
      suggest_movie6.style.display = 'block';
  }
}