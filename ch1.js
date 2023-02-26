const quizDB = [
    {
        question: "Q1: An integer can be:",
        a: "Only Positive",
        b: "Only Negative",
        c: "Both positive and negative",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question: "Q2: The value of ½ x ⅗ is equal to:",
        a: "½",
        b: "3/10",
        c: "⅗",
        d: "⅖",
        ans: "ans2"
    },
    {
        question: "Q3: A rational number can be represented in the form of:",
        a: "p/q",
        b: "pq",
        c: "p+q",
        d: "p-q",
        ans: "ans1"
    },
    {
        question: "Q4: The value of (½) ÷ (⅗) is equal to:",
        a: "3/10",
        b: " 3/5",
        c: "6/5",
        d: "5/6",
        ans: "ans4"
    },
    {
        question: "Q5: The value of ½ + ¼ is equal to:",
        a: "3/4",
        b: " 3/2",
        c: "2/3",
        d: "1",
        ans: "ans1"
    },
    {
        question: "Q6: The value of (5/4) - (8/3) is",
        a: "17/12",
        b: "-17/12",
        c: "12/17",
        d: "-12/17",
        ans: "ans2"
    },
    {
        question: "Q7: The associative property is applicable to:",
        a: "Addition and subtraction",
        b: "Multiplication and division",
        c: "Addition and Multiplication",
        d: "Subtraction and Division",
        ans: "ans3"
    },
    {
        question: "Q8: The value of (-10/3) x (-15/2) x (17/19) x 0 is:",
        a: "0",
        b: "22.66",
        c: "20",
        d: "35",
        ans: "ans1"
    },
    {
        question: "Q9: The additive identity of rational numbers is:",
        a: "0",
        b: "1",
        c: "2",
        d: "-1",
        ans: "ans1"
    },
    {
        question: "Q10: The multiplicative identity of rational numbers is:",
        a: "0",
        b: "1",
        c: "2",
        d: "-1",
        ans: "ans1"
    },
    
    

]

let questionCount = 0;
let score =0;

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer = curAnsElem.id;
            
        }
    });

    return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () =>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();
    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        
        showScore.innerHTML =`
            <h3> You Scored ${score}/${quizDB.length} ✌ </h3>
            <button class="btn" onclick="location.reload()">Play Again</button>
            `;

            showScore.classList.remove('scoreArea');

    }
        
});