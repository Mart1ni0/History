function generateQuestionBlock(questionNumber, questionText, answers, imageSrc = null, type) {
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');
    questionContainer.id = `q${questionNumber}`;

    const questionHeading = document.createElement('h2');
    questionHeading.textContent = `Запитання №${questionNumber}`;
    questionContainer.appendChild(questionHeading);

    const questionAnswerNumber = document.createElement('h6')
    if (type === "radio") questionAnswerNumber.textContent = "Одна правильна відповідь"
    else if (type === "multi") questionAnswerNumber.textContent = "Декілька правильних відповідей"
    questionContainer.appendChild(questionAnswerNumber)

    const questionParagraph = document.createElement('p');
    questionParagraph.textContent = questionText;
    questionParagraph.classList.add('question')
    questionContainer.appendChild(questionParagraph);

    if (imageSrc) {
        const image = document.createElement('img');
        image.src = imageSrc;
        image.alt = `Зображення до питання ${questionNumber}`;
        questionContainer.appendChild(image);
    }

    const answersDiv = document.createElement('div');
    answersDiv.classList.add('answers');

    if (type === "table") {
        answers.forEach((answer, index) => {
            const label = document.createElement('div');
            label.htmlFor = `q${questionNumber}${String.fromCharCode(65 + index)}`;
            label.textContent = answer;
            answersDiv.appendChild(label);
        })
        for (i = 1; i <= 4; i++) {
            const container = document.createElement('div')
            const text = document.createElement('span')
            text.textContent = `${i}  -`

            block = generateSelect('letter', 5)
            block = blockNaming(block, questionNumber, i - 1)

            container.classList.add('grid-container')
            block.classList.add('grid-item')
            text.classList.add('grid-item')

            container.appendChild(text)
            container.appendChild(block)
            answersDiv.append(container)
            answersDiv.append(document.createElement('br'))
        }
    }
    else
        answers.forEach((answer, index) => {
            let block;
            if (type === "radio") {
                block = document.createElement('input');
                block.type = 'radio';
            }
            else if (type === "multi") {
                block = document.createElement('input');
                block.type = 'checkbox'
            }
            else if (type === "queue") {
                block = generateSelect('value', 4);
            }
            block = blockNaming(block, questionNumber, index)

            const label = document.createElement('label');
            label.htmlFor = block.id;
            if (questionText !== "У липні 1994 р. Президентом України обрано") {
                label.textContent = answer;
            }
            else {
                img = document.createElement('img')
                img.src = answer
                img.classList.add('leader')
                label.appendChild(img)
            }

            const inputLabelWrapper = document.createElement('div');
            inputLabelWrapper.classList.add('input-label-wrapper');

            inputLabelWrapper.appendChild(block);
            inputLabelWrapper.appendChild(label);

            answersDiv.appendChild(inputLabelWrapper);
            if (questionText !== "У липні 1994 р. Президентом України обрано") answersDiv.appendChild(document.createElement('br'));
        });

    questionContainer.appendChild(answersDiv);

    return questionContainer;
}

function generateSelect(contentType, questionNumber) {
    block = document.createElement('select');
    for (let i = 0; i < questionNumber; i++) {
        let option = document.createElement('option')
        option.value = String.fromCharCode(65 + i)
        switch (contentType) {
            case 'value':
                option.textContent = i + 1
                break;
            case 'letter':
                if (i !== 4)
                    option.textContent = String.fromCharCode(1040 + i)
                else option.textContent = String.fromCharCode(1168)
                break;
        }
        block.appendChild(option)
    }
    return block
}
function blockNaming(block, questionNumber, index) {
    block.name = `q${questionNumber}`;
    block.id = `q${questionNumber}${String.fromCharCode(65 + index)}`;
    block.value = String.fromCharCode(65 + index);
    return block
}

const quizContainer = document.getElementById('quiz-container')
questions.forEach((question, index) => {
    quizContainer.appendChild(generateQuestionBlock(index + 1, question.text, question.answers, question.image, question.type))
})

const submitBtn1 = document.getElementById('submitBtn');
const resultDiv1 = document.getElementById('result');
const rightDiv = document.getElementById('right');
const wrongDiv = document.getElementById('wrong');
const skipDiv = document.getElementById('skip');
const resultsDiv = document.getElementsByClassName('results')[0]

submitBtn1.addEventListener('click', () => {
    let score = 0;
    let wrongAnswers = 0;
    let skipAnswers = 0;

    document.querySelectorAll("p.quadro-answer").forEach(element => element.remove());

    clearParents()
    for (let i = 1; i <= answers.length; i++) {
        const selectedAnswer = Array.from(document.querySelectorAll(`input[name="q${i}"]:checked`)).map(input => input.value)
        let userOrder = Array.from(document.querySelectorAll(`select[name="q${i}"]`)).map(s => s.value);

        if (selectedAnswer.length !== 0 || answers[i - 1].length >= 4) {
            if (answers[i - 1].length === 1) {
                if (selectedAnswer[0] === answers[i - 1]) {
                    score++;
                    paintAnswers(i, 'correct')
                    paintQuestion(i, answers[i - 1], 1)
                }
                else {
                    wrongAnswers++;
                    paintAnswers(i, 'wrong')
                    paintQuestion(i, answers[i - 1], 1)
                }
            } else if (answers[i - 1].length > 1 && answers[i - 1].length < 4) {
                if (JSON.stringify(selectedAnswer) === JSON.stringify(answers[i - 1])) {// refactor later maybe
                    score++;
                    paintAnswers(i, 'correct')
                    paintQuestion(i, answers[i - 1], 2)
                }
                else {
                    wrongAnswers++;
                    paintAnswers(i, 'wrong')
                    paintQuestion(i, answers[i - 1], 2)
                }
            }
            else if (answers[i - 1].length === 4) {
                if (JSON.stringify(userOrder) === JSON.stringify(answers[i - 1])) {// refactor later maybe  
                    score++;
                    paintAnswers(i, 'correct')
                    if (`q${i}` === 'q7')
                        paintQuestion(i, answers[i - 1], 4, true)
                    else paintQuestion(i, answers[i - 1], 4)
                }
                else {
                    wrongAnswers++;
                    paintAnswers(i, 'wrong')
                    if (`q${i}` === 'q7')
                        paintQuestion(i, answers[i - 1], 4, true)
                    else paintQuestion(i, answers[i - 1], 4)
                }
            }
        }
        else {
            skipAnswers++;
        }


    }

    resultDiv1.textContent = `Результат: ${score} з ${answers.length}`;
    rightDiv.textContent = `Правильних: ${score}`
    wrongDiv.textContent = `Неправильних: ${wrongAnswers}`
    skipDiv.textContent = `Пропущено: ${skipAnswers}`
    resultsDiv.classList.remove('hidden')
    resultsDiv.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});

function clearParents() {
    const parents = document.getElementsByClassName('question-container')
    for (const parent of parents) {
        parent.classList.remove('correct')
        parent.classList.remove('wrong')
    }
}

function paintAnswers(index, class_name, answer = null) {
    const block = document.getElementById(`q${index}`)
    block.classList.add(class_name)
}

function paintQuestion(questionNumber, answerQ, count, specialTest = false) {

    let answer;
    let answerParent;
    let block;

    switch (count) {
        case 1:
            answer = document.getElementById(`q${questionNumber}${answerQ}`)
            answerParent = answer.parentElement
            answerParent.classList.add('right-answer')
            break;
        case 2:
            answerQ.map((q) => {
                answer = document.getElementById(`q${questionNumber}${q}`)
                answerParent = answer.parentElement
                answerParent.classList.add('right-answer')
            })
            break;
        case 4:
            block = document.getElementById(`q${questionNumber}`)

            const div = document.createElement('p')
            div.classList.add('quadro-answer')
            if (specialTest) {
                const letterToNumber = answerQ.map(q => q.charCodeAt(0) - 'A'.charCodeAt(0) + 1);
                div.textContent = `Правильна відповідь: ${letterToNumber}`
            }
            else {
                const letterMapping = {
                    "A": "А",
                    "B": "Б",
                    "C": "В",
                    "D": "Г",
                    "E": "Ґ"
                };

                const transformed = answerQ.map(q => letterMapping[q] || q);
                div.textContent = `Правильна відповідь: ${transformed}`
            }

            block.appendChild(div)
            break;
    }
}