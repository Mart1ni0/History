function generateQuestionBlock(questionNumber, questionText, answers, imageSrc = null, type) {
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container');

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
            block = blockNaming(block, questionNumber, i-1)

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

submitBtn1.addEventListener('click', () => {
    let score = 0;

    for (let i = 1; i <= answers.length; i++) {
        const selectedAnswer = Array.from(document.querySelectorAll(`input[name="q${i}"]:checked`)).map(input => input.value)
        let userOrder = Array.from(document.querySelectorAll(`select[name="q${i}"]`)).map(s => s.value);

        if (answers[i - 1].length === 1)
            if (selectedAnswer[0] === answers[i - 1]) score++;
        if (answers[i - 1].length > 1) {
            if (JSON.stringify(selectedAnswer) === JSON.stringify(answers[i - 1])) score++; // refactor later maybe     
        }
        if (answers[i - 1].length === 4) {
            if (JSON.stringify(userOrder) === JSON.stringify(answers[i - 1])) score++; // refactor later maybe   
        }
    }

    resultDiv1.innerHTML = `Результат: ${score} з ${answers.length}`;
});