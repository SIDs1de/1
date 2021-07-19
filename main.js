// Все варианты ответа (All answer options)
const option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4');

// Все наши варианты (All our options)
const optionElements = document.querySelectorAll('.option');

const question = document.getElementById('question'); // сам вопрос

const numberOfQuestion = document.getElementById('number-of-question'), // номер вопрос
      numberOfAllQuestions = document.getElementById('number-of-all-questions'); // количество всех вопросов

let indexOfQuestion, // индекс текущего вопроса
    indexOfPage = 0; // индекс страницы
    
const answersTracker = document.getElementById('answers-tracker'); // обёртка для трекера
const btnNext = document.getElementById('btn-next'); // кнопка далее

let score = 0; // итоговый результат викторины

const correctAnswer = document.getElementById('correct-answer'), //количество правильных ответов
      numberOfAllQuestions2 = document.getElementById('number-of-all-questions-2'), //количество всех вопросов в модальном окне
      btnTryAgain = document.getElementById('btn-try-again'); // кнопка "начать викторину заново"

const questions = [
    {
        question: 'Какого типа данных нет в JavaScript?',
        options: [
            'string',
            'number',
            'boolean',
            'try',
        ],
        rightAnswer: 3
    },
    {
        question: 'Кто не сможет стать JavaScript программистом?',
        options: [
            'ленивый',
            'старый',
            'слишком молодой',
            'глупый',
        ],
        rightAnswer: 0
    },
    {
        question: 'Что значит оператор "&&" в JavaScript?',
        options: [
            'логическое или',
            'логическое и',
            'логическое не',
            'такого оператора нет в JavaScript',
        ],
        rightAnswer: 1
    },
    {
        question: 'Создатель JavaScript',
        options: [
            'Пирс Фримен',
            'Грант Харди',
            'Майкл Уоткинс',
            'Брендан Айк',
        ],
        rightAnswer: 3
    },
];

numberOfAllQuestions.innerHTML = questions.length; // выводим количество вопросов

const load = () => {
    question.innerHTML = questions[indexOfQuestion].question; // Внутрь вопроса присваиваем вопрос под номером текущей странички  

    // Внутрь вариантов ответов вставляем каждый по очереди, учитывая текущую страничку
    option1.innerHTML = questions[indexOfQuestion].options[0]
    option2.innerHTML = questions[indexOfQuestion].options[1]
    option3.innerHTML = questions[indexOfQuestion].options[2]
    option4.innerHTML = questions[indexOfQuestion].options[3]

    numberOfQuestion.innerHTML = indexOfPage + 1; // установка номера текущей страницы(считаем от индекса и прибавляем единичку)
    indexOfPage++; // увелечение индекса страницы (увеличиваем номер странички на 1)
};

let completedAnswers = []; // массив для уже заданных вопросов

const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDuplicate = false; // якорь для проверки одинаковых вопросов

    if(indexOfPage == questions.length) { // если номер страницы равен количеству вопросов
        quizOver() // конец игры
    } else { // не конец игры
        if(completedAnswers.length > 0) { // если был хоть 1 заданный вопрос
            completedAnswers.forEach(item => { // проходимся по заданным вопросом и каждый называем item
                if(item == randomNumber) { // если наш вопрос является нашим рандомным числом, то
                    hitDuplicate = true; // выявляется одинаковый повтор и активируется якорь
                }
            });
            if(hitDuplicate) { // если активировался якорь
                randomQuestion() // наяинаем эту функцию заново с новым числом
            } else { // иначе
                indexOfQuestion = randomNumber; // номер страницы становится равен рандомному числу
                load(); // обновляем страницу
            }
        }
        if(completedAnswers.length == 0) { // если не было заданных вопросов
            indexOfQuestion = randomNumber; // номер страницы становится равен рандомному числу
            load(); // обновляем страницу
        }
    }
    completedAnswers.push(indexOfQuestion); // добавляем нашу страницу в конце функции в список страничек, которые уже были
}

const checkAnswer = el => { // проверка на правильность нажатого ответа
    if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer) { // если дата атрибут нажимаемого элемента равняется правильному ответу, то
        el.target.classList.add('correct'); // добавляем нажатому диву класс правильности
        updateAnswerTracker('correct'); // окрашиваем кружочек в зелёный
        score++; // увеличиваем счёт на 1
    } else { // иначе
        el.target.classList.add('wrong');// добавляем нажатому диву класс неправильности
        updateAnswerTracker('wrong'); // окрашиваем кружочек в красный
    }
    disabledOptions(); // вызываем функцию, которая не даёт возможности выбрать более 1 варианта ответа
}

for(option of optionElements) { // проходимся циклом по всем нашим вариантам из обёртки
    option.addEventListener('click', e => checkAnswer(e)) // каждому варианту вешаем слушатель кликов и вызываем проверку ответа
}

const disabledOptions = () => { // функция запрета выбора более 1 варианта ответа
    optionElements.forEach(item => { // проходимся по каждому нашему варианту ответа из обёртки
        item.classList.add('disabled'); // прибавляем каждому варианту ответа класс disabled, который в css значит, что на вариант больше нельзя нажимать
        if(item.dataset.id == questions[indexOfQuestion].rightAnswer) { // если дата атрибут нашего варианта правильный(выполняем его поиск), то
            item.classList.add('correct'); // подсвечиваем правильный ответ(чтобы если был выбран неправильный, ток показался бы и правильный)
        }
    })
}

const enableOptions = () => { // функция обнуления всех изменённых классов при переходе на следующую страницу
    optionElements.forEach(item => {
        item.classList.remove('disabled', 'correct', 'wrong');
    })
}

const answerTracker = () => { // функция по созданию точек снизу
    questions.forEach(() => { // искуственный счёт вопросов
        const div = document.createElement('div'); // создаём див
        answersTracker.appendChild(div); // кидаем див в обёртку с трекерами
    })
}

const updateAnswerTracker = status => { // окраска кружочка зелёным или красным в зависимости от правильности ответа
    answersTracker.children[indexOfPage - 1].classList.add(status); // обращаемся к ребёнку обёртки под индексом страницы и добавляем ему передаваемый класс(correct или wrong)
}

const validate = () => { // проверка выбран ли вариант ответа
    if(!optionElements[0].classList.contains('disabled')) { // если disabled отсутствует у первого элемента
        alert('Выберите ответ'); // выплывает сверху окно с просьбой выбрать ответ
    } else { // иначе
        randomQuestion(); // генерируется рандомное число с обновлением страницы
        enableOptions(); // происходит обнуление
    }
}

const quizOver = () => { // Функция завершения игры
    document.querySelector('.quiz-over-modal').classList.add('active'); // открываем модальное окно прибавлением ему класса active
    correctAnswer.innerHTML = score; // выводим количество правильных ответов
    numberOfAllQuestions2.innerHTML = questions.length; // выводим количество всех вопросов
}

const tryAgain = () => { // функция, которая повторяет игру
    window.location.reload(); // перезагружает страницу
}

btnTryAgain.addEventListener('click', tryAgain); // добавляем слушалку кликов на кнопку попытаться снова и вызываем функцию обновления страницы

btnNext.addEventListener('click', () => { // при нажатии на кнопку далее
    validate(); // вызываем валидацию
})

window.addEventListener('load', () => {
    randomQuestion(); // задаём рандомное число, проверяем на повторения предыдущие вопросы и задаём страницу и обновляем
    answerTracker(); // создаём кружочки снизу
})