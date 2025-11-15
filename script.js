// Структура данных для тестов
// Каждый тест содержит массив вопросов
// Каждый вопрос содержит: вопрос, 4-5 вариантов ответа, правильный ответ (индекс от 0 до 4)
const testsData = [
    {
        id: 1,
        title: "Тест 1",
        questions: [
            {
                question: "Forms of worldview",
                answers: ["Consciousness, thinking, mind", "Myth, religion, philosophy", "God, nature, society", "Ontology, epistemology, axiology", "Man, person, individual"],
                correct: 1
            },
            {
                question: "Philosophical direction, recognizing one beginning of the world:",
                answers: ["dualism", "Agnosticism", "mechanism", "Monism", "Pluralism"],
                correct: 3
            },
            {
                question: "Philosophical doctrine that denies the fundamental possibility of knowing the world:",
                answers: ["skepticism", "Agnosticism", "sensationalism", "Anthropologism", "Atheism"],
                correct: 1
            },
            {
                question: "What is the meaning of the term Philosophy?",
                answers: ["Love of wisdom", "Love of Idea", "Love of thinking", "Love of Science", "Love of Truth"],
                correct: 0
            },
            {
                question: "The first form of worldview:",
                answers: ["Religion", "Mythology", "Philosophy", "Art", "morality"],
                correct: 1
            },
            {
                question: "Teachings about Being:",
                answers: ["Epistemology", "Axiology", "Anthology", "Anthropology", "Ontology"],
                correct: 4
            },
            {
                question: "What philosophical direction \"Space and time are forms of our perception\" belong to:",
                answers: ["Materialism", "Objective idealism", "Subjective idealism", "dialectical materialism", "mechanistic materialism"],
                correct: 2
            },
            {
                question: "Two main sides of main question of philosophy:",
                answers: ["Sophistry, eclecticism, dogmatism", "Monism, dualism, pluralism", "Sociology, political science, cultural studies", "Ontology, Gnoseology", "Mythology, religion, philosophy"],
                correct: 3
            },
            {
                question: "Teaching about knowledge:",
                answers: ["ontology", "Gnoseology", "metaphysics", "Axiology", "Anthropology"],
                correct: 1
            },
            {
                question: "Recognition of two substances at the foundation of being:",
                answers: ["Pluralism", "Dualism", "Monism", "Conventionalism", "Parallelism"],
                correct: 1
            },
            {
                question: "Socrates' method, which helps to give birth to new knowledge, is called:",
                answers: ["Maieutics", "Dialectics", "Hermeneutics", "Eclectic", "Sophistry"],
                correct: 0
            },
            {
                question: "The main task of philosophy is the construction of a new method of science, believed:",
                answers: ["Socrates", "Rene Descartes", "Francis Bacon", "Georg Hegel", "Aristotle"],
                correct: 2
            },
            {
                question: "The philosopher who formulated 4 methodological rules:",
                answers: ["Socrates", "Rene Descartes", "Francis Bacon", "Georg Hegel", "Aristotle"],
                correct: 1
            },
            {
                question: "He created a philosophical system based on the dialectical method:",
                answers: ["Socrates", "Rene Descartes", "Francis Bacon", "Georg Hegel", "Aristotle"],
                correct: 3
            },
            {
                question: "A philosophical method based on the principles of interpretation of any texts or systems of concepts:",
                answers: ["Maieutics", "Dialectics", "Hermeneutics", "Eclectic", "Sophistry"],
                correct: 2
            },
            {
                question: "This function is that philosophy develops the basic methods of cognition of the reality:",
                answers: ["The worldview function", "The methodological function", "The moral function", "The axiological function", "The motivational function"],
                correct: 1
            },
            {
                question: "This function of philosophy is to develop a worldview position:",
                answers: ["The worldview function", "The methodological function", "The moral function", "The axiological function", "The motivational function"],
                correct: 0
            },
            {
                question: "This function of philosophy asserts the consciously normative attitude of a person to himself and to other people:",
                answers: ["The worldview function", "The methodological function", "The moral function", "The axiological function", "The motivational function"],
                correct: 2
            },
            {
                question: "This function of philosophy teaches us to recognize the values of the surrounding world:",
                answers: ["The worldview function", "The methodological function", "The moral function", "The axiological function", "The motivational function"],
                correct: 3
            },
            {
                question: "This function of philosophy brings up certain interests and ideals in a person, which determine the motives of his behavior and the achievement of his goals:",
                answers: ["The worldview function", "The methodological function", "The moral function", "The axiological function", "The motivational function"],
                correct: 4
            }
        ]
    },
    {
        id: 2,
        title: "Тест 2",
        questions: [
            {
                question: "Teachings about Being:",
                answers: ["epistemology", "Axiology", "Anthology", "Anthropology", "Ontology"],
                correct: 4
            },
            {
                question: "How do you understand Nonsense?",
                answers: ["Absurd", "confused thinking", "logics", "bureaucracy", "abstract idea"],
                correct: 0
            },
            {
                question: "The transcendental means",
                answers: ["\"exist here and now\"", "being", "consciousness", "truth", "\"going beyond\""],
                correct: 4
            },
            {
                question: "The \"Immanence» means",
                answers: ["\"internal, integral, innate.\"", "\"come from outside, otherworldly\"", "Аbstract idea", "consciousness", "truth"],
                correct: 0
            },
            {
                question: "The term \"Culture» originated from",
                answers: ["Being", "Natural", "Nature", "Civilization", "Cultivate"],
                correct: 4
            },
            {
                question: "\"Ontos» means",
                answers: ["Essence", "Existence", "Nature", "Being", "truth"],
                correct: 3
            },
            {
                question: "To be «Outside, otherworldly» means",
                answers: ["Transcendental", "Existence", "Nature", "Being", "truth"],
                correct: 0
            },
            {
                question: "The «Ability of an entity to interact with physical or mental reality» is",
                answers: ["Existence", "being", "consciousness", "truth", "Nature"],
                correct: 0
            },
            {
                question: "What is the opposite of Being?",
                answers: ["Nothingness", "Absurd", "consciousness", "truth", "Nature"],
                correct: 0
            },
            {
                question: "What is the opposite to Culture?",
                answers: ["Existence", "Being", "Consciousness", "Truth", "Nature"],
                correct: 4
            }
        ]
    },
    {
        id: 3,
        title: "Тест 3",
        questions: [
            {
                question: "The philosophical position that asserts that the mind is initially a \"blank slate\" (tabula rasa) and that all knowledge comes from experience is called:",
                answers: ["Rationalism", "Dualism", "Empiricism", "Idealism", "Nominalism"],
                correct: 2
            },
            {
                question: "Which 20th-century philosophical approach, associated with the names of Ludwig Wittgenstein and others, argues that consciousness and thought do not exist outside of language?",
                answers: ["Psychoanalysis", "Linguistic Turn", "German Classical Philosophy", "Evolutionary Epistemology", "Neothomism"],
                correct: 1
            },
            {
                question: "Which of the following philosophers proposed a three-level model of the soul (vegetative, animal, rational), considering the soul as an entelechy – the form of a living body?",
                answers: ["Plato", "Augustine", "Aristotle", "Descartes", "Freud"],
                correct: 2
            },
            {
                question: "The method of cognition developed by Socrates, which is a technique of leading questions that help \"give birth\" to the truth already embedded in the human soul, is called:",
                answers: ["Dialectics", "Maieutics", "Deduction", "Hermeneutics", "Reduction"],
                correct: 1
            },
            {
                question: "The principle formulated by William of Ockham, which states: \"Entities should not be multiplied beyond necessity\" and is fundamental for scientific approach:",
                answers: ["Occam's Razor", "Cogito ergo sum", "Tabula rasa", "Problem of Induction", "Categorical Imperative"],
                correct: 0
            },
            {
                question: "The problem formulated by David Hume, which consists in the fact that past experience cannot logically guarantee the truth of conclusions about the future, is called:",
                answers: ["Problem of Dualism", "Problem of Induction", "Problem of Universals", "Problem of Correspondence", "Aporia"],
                correct: 1
            },
            {
                question: "What is the ultimate goal of cognition in the Indian philosophical tradition?",
                answers: ["Accumulation of objective data about the world", "Social harmony and rectification of names", "Liberation (moksha) from suffering and the cycle of rebirth", "Achievement of mystical insight (ma'rifa)", "Conquest of nature and technological development"],
                correct: 2
            },
            {
                question: "The concept of the \"rectification of names\" (zhèng míng), where words must correspond to reality and actions to words, is central to:",
                answers: ["Taoism", "Buddhism", "Sufism", "Confucianism", "Hinduism"],
                correct: 3
            },
            {
                question: "Which of the following concepts belongs to Sufism and denotes intuitive, spiritual knowledge of God achieved through mystical experience?",
                answers: ["Pramana", "Wu-wei", "Ma'rifa", "Maya", "Anumana"],
                correct: 2
            },
            {
                question: "According to the classical Platonic definition, what are the three necessary conditions for knowledge?",
                answers: ["Belief, Truth, Justification", "Data, Information, Wisdom", "Truth, Certainty, Proof", "Information, Belief, Reliability", "Data, Processing, Application"],
                correct: 0
            },
            {
                question: "What was the primary significance of Edmund Gettier's 1963 paper?",
                answers: ["It provided a new, flawless definition of knowledge.", "It proved that knowledge is impossible to achieve.", "It demonstrated that Justified True Belief is insufficient for defining knowledge.", "It introduced the DIKW pyramid model.", "It solved the ancient philosophical problem of truth."],
                correct: 2
            },
            {
                question: "According to the DIKW pyramid model, what is the key characteristic that distinguishes \"Knowledge\" from \"Information\"?",
                answers: ["It is always true.", "It is stored in a database.", "It is meaningful and applicable; it answers \"how?\" and \"why?\"", "It is a raw, unprocessed fact.", "It involves ethical considerations."],
                correct: 2
            },
            {
                question: "According to Immanuel Kant's philosophy, what is a \"noumenon\"?",
                answers: ["A sensory image of an object that arises in the subject's consciousness.", "An object of knowledge as it appears to us through the lens of our senses.", "An object as it exists in itself, independent of our perception.", "A scientific theory explaining the properties of a thing.", "A social agreement about the nature of things."],
                correct: 2
            },
            {
                question: "The slogan \"Back to the things themselves!\" is central to a philosophical movement that proposes to:",
                answers: ["Study the physical properties of objects in laboratory conditions.", "Abandon the study of the \"thing-in-itself\" and investigate the structures of consciousness that constitute the phenomenon.", "Return to naive realism and trust only immediate perception.", "Ignore the role of the subject in the process of cognition.", "Consider practice the only criterion of truth."],
                correct: 1
            },
            {
                question: "From the enactivist point of view, consciousness is best described as:",
                answers: ["Software running on the hardware of the brain.", "An internal model of the external world created by the brain.", "The result of passively receiving sensory data from the senses.", "A phenomenon arising from the active, embodied interaction of an organism with its environment.", "An analogue of a computer interface that hides the complexity of neural processes."],
                correct: 3
            },
            {
                question: "The classical definition of truth as \"the correspondence of thought and reality\" is central to:",
                answers: ["Conventional theory", "Pragmatic theory", "Correspondence theory", "Coherence theory", "Relativist theory"],
                correct: 2
            },
            {
                question: "The statement: \"A theorem is considered true because it was logically derived from accepted axioms and does not contradict other proven theorems within that mathematical system\" is an example of the application of:",
                answers: ["Correspondence theory of truth", "Coherence theory of truth", "Pragmatic theory of truth", "Conventionalist theory of truth", "Relativist theory of truth"],
                correct: 1
            },
            {
                question: "William James' phrase \"The true is only the expedient in the way of our thinking\" most accurately reflects the essence of:",
                answers: ["Correspondence theory", "Coherence theory", "Pragmatic theory", "Conventionalist theory", "Relativist theory"],
                correct: 2
            }
        ]
    },
    {
        id: 4,
        title: "Тест 4",
        questions: []
    },
    {
        id: 5,
        title: "Тест 5",
        questions: []
    },
    {
        id: 6,
        title: "Тест 6",
        questions: []
    },
    {
        id: 7,
        title: "Тест 7",
        questions: []
    },
    {
        id: 8,
        title: "Тест 8",
        questions: []
    },
    {
        id: 9,
        title: "Тест 9",
        questions: []
    },
    {
        id: 10,
        title: "Тест 10",
        questions: []
    }
];

let currentTest = null;
let shuffledQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = {};

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    renderTestsGrid();
    
    document.getElementById('backBtn').addEventListener('click', () => {
        showTestsGrid();
    });
    
    document.getElementById('restartBtn').addEventListener('click', () => {
        startTest(currentTest.id);
    });
});

// Отображение сетки тестов
function renderTestsGrid() {
    const grid = document.getElementById('testsGrid');
    grid.innerHTML = '';
    
    testsData.forEach(test => {
        const card = document.createElement('div');
        card.className = 'test-card';
        card.innerHTML = `
            <h3>${test.title}</h3>
            <p>${test.questions.length} вопросов</p>
        `;
        card.addEventListener('click', () => {
            if (test.questions.length > 0) {
                startTest(test.id);
            } else {
                alert('Этот тест пока пуст. Добавьте вопросы в файл script.js');
            }
        });
        grid.appendChild(card);
    });
}

// Начало теста
function startTest(testId) {
    currentTest = testsData.find(t => t.id === testId);
    if (!currentTest || currentTest.questions.length === 0) {
        alert('Тест пуст. Добавьте вопросы в файл script.js');
        return;
    }
    
    // Рандомизация вопросов
    shuffledQuestions = shuffleArray([...currentTest.questions]);
    
    // Рандомизация вариантов ответов для каждого вопроса
    shuffledQuestions = shuffledQuestions.map(q => {
        const answersWithIndices = q.answers.map((answer, index) => ({
            text: answer,
            originalIndex: index
        }));
        const shuffledAnswers = shuffleArray([...answersWithIndices]);
        const newCorrectIndex = shuffledAnswers.findIndex(
            item => item.originalIndex === q.correct
        );
        
        return {
            question: q.question,
            answers: shuffledAnswers.map(item => item.text),
            correct: newCorrectIndex
        };
    });
    
    currentQuestionIndex = 0;
    userAnswers = {};
    
    document.getElementById('testsSection').style.display = 'none';
    document.getElementById('testContainer').style.display = 'block';
    document.getElementById('testResults').style.display = 'none';
    document.getElementById('questionContainer').style.display = 'block';
    
    showQuestion();
}

// Показ вопроса
function showQuestion() {
    if (currentQuestionIndex >= shuffledQuestions.length) {
        showResults();
        return;
    }
    
    const question = shuffledQuestions[currentQuestionIndex];
    const container = document.getElementById('questionContainer');
    
    container.innerHTML = `
        <div class="question-block" id="questionBlock">
            <div class="question-text">${currentQuestionIndex + 1}. ${question.question}</div>
            <ul class="answers-list">
                ${question.answers.map((answer, index) => `
                    <li class="answer-item">
                        <label class="answer-label" data-index="${index}">
                            <input type="radio" name="answer" value="${index}">
                            <span>${answer}</span>
                        </label>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
    
    // Обработка выбора ответа
    const labels = container.querySelectorAll('.answer-label');
    const radios = container.querySelectorAll('input[type="radio"]');
    
    labels.forEach((label) => {
        label.addEventListener('click', (e) => {
            e.stopPropagation();
            const selectedIndex = parseInt(label.dataset.index);
            const radio = radios[selectedIndex];
            if (radio && !radio.disabled) {
                radio.checked = true;
                handleAnswer(selectedIndex, question);
            }
        });
    });
    
    radios.forEach((radio, index) => {
        radio.addEventListener('change', () => {
            if (!radio.disabled) {
                const selectedIndex = parseInt(labels[index].dataset.index);
                handleAnswer(selectedIndex, question);
            }
        });
    });
    
    // Обновление прогресса
    updateProgress();
}

// Обработка ответа
function handleAnswer(selectedIndex, question) {
    const questionBlock = document.getElementById('questionBlock');
    if (!questionBlock) return;
    
    const labels = questionBlock.querySelectorAll('.answer-label');
    const radios = questionBlock.querySelectorAll('input[type="radio"]');
    
    // Проверяем, не обработан ли уже ответ
    if (radios[0] && radios[0].disabled) return;
    
    // Отключаем все радиокнопки
    radios.forEach(radio => radio.disabled = true);
    
    // Сохраняем ответ пользователя
    userAnswers[currentQuestionIndex] = selectedIndex;
    
    // Подсветка правильного ответа
    labels[question.correct].classList.add('correct');
    questionBlock.classList.add('correct');
    
    // Если ответ неправильный, подсвечиваем неправильный
    if (selectedIndex !== question.correct) {
        labels[selectedIndex].classList.add('incorrect');
        questionBlock.classList.remove('correct');
        questionBlock.classList.add('incorrect');
    }
    
    // Переход к следующему вопросу через 1.5 секунды
    setTimeout(() => {
        currentQuestionIndex++;
        showQuestion();
    }, 1500);
}

// Обновление прогресса
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / shuffledQuestions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    document.getElementById('progressText').textContent = 
        `Вопрос ${currentQuestionIndex + 1} из ${shuffledQuestions.length}`;
    document.getElementById('testTitle').textContent = currentTest.title;
}

// Показ результатов
function showResults() {
    const correctCount = Object.keys(userAnswers).reduce((count, index) => {
        if (userAnswers[index] === shuffledQuestions[index].correct) {
            return count + 1;
        }
        return count;
    }, 0);
    
    const total = shuffledQuestions.length;
    const percentage = Math.round((correctCount / total) * 100);
    
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('testResults').style.display = 'block';
    document.getElementById('score').textContent = 
        `${correctCount} из ${total} (${percentage}%)`;
}

// Возврат к сетке тестов
function showTestsGrid() {
    document.getElementById('testsSection').style.display = 'block';
    document.getElementById('testContainer').style.display = 'none';
}

// Функция для перемешивания массива (алгоритм Фишера-Йетса)
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
