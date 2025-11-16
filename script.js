// Структура данных для тестов
// Каждый тест содержит массив вопросов
// Каждый вопрос содержит: вопрос, 4-5 вариантов ответа, правильный ответ (индекс от 0 до 4)
// Обновлённый testsData (только Тест 2 и Тест 3 заменены; остальные тесты оставлены как в исходнике)
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
    // Тест 2 — полностью заменён вопросами из "тест 2 без ответов.docx"
    {
        id: 2,
        title: "Тест 2",
        questions: [
            {
                question: "The ancient Greek philosopher Pythagoras stated:",
                answers: [
                    "All things are similar in number",
                    "War is the father of everything and the mother of everything",
                    "Know thyself",
                    "I know that I don't know anything",
                    "Everything flows, everything changes"
                ],
                correct: 0
            },
            {
                question: "An ancient philosopher who believed that the material world consists of atoms:",
                answers: ["Aristotle", "Pyrrho", "Zeno", "Democritus", "Heraclitus"],
                correct: 3
            },
            {
                question: "Invisible, omnipresent law of nature, society, human behavior and thinking, the path:",
                answers: ["Lee", "Fa", "Siao", "Zhen", "Tao"],
                correct: 4
            },
            {
                question: "Teachings about Being:",
                answers: ["Epistemology", "Axiology", "Anthology", "Anthropology", "Ontology"],
                correct: 4
            },
            {
                question: "What philosophical direction “Space and time are forms of our perception” belong to:",
                answers: ["Materialism", "Objective idealism", "Subjective idealism", "Dialectical materialism", "Mechanistic materialism"],
                correct: 2
            },
            {
                question: "Is something that can be said to exist:",
                answers: ["Knowledge", "Category", "Being", "Notion", "Space"],
                correct: 2
            },
            {
                question: "In Hinduism, the absolute reality is designated by the concept:",
                answers: ["Atman", "Moksha", "Jinx", "Brahman", "Ahimsa"],
                correct: 3
            },
            {
                question: "In Taoism adherence to the principle of “naturalness” means:",
                answers: [
                    "following to the law of nature and cosmos",
                    "following to your own needs",
                    "transforming the outer world for the better",
                    "implementing the principle of love for the neighbour",
                    "faith in God"
                ],
                correct: 0
            },
            {
                question: "The author of the expression: “Thought and being are one and the same”:",
                answers: ["Plato", "Pythagoras", "Heraclitus", "Aristotle", "Parmenides"],
                correct: 4
            },
            {
                question: "“Don’t harm the living, sentient beings” is the commandment of:",
                answers: ["ahimsa", "moksha", "samsara", "karma", "nirvana"],
                correct: 0
            },
            {
                question: "\"Everything flows\", there is nothing constant in the universe, considered:",
                answers: ["Thales", "Anaximander", "Democritus", "Heraclitus", "Protagoras"],
                correct: 3
            },
            {
                question: "The expression “One cannot enter into the same river even once” is…:",
                answers: ["relativism", "sophism", "skepticism", "pessimism", "agnosticism"],
                correct: 0
            },
            {
                question: "“Motion is unthinkable” – assumed:",
                answers: ["Thales", "Heraclitus of Ephesus", "Zeno of Elea", "Diogenes of Sinope", "Pythagoras of Samos"],
                correct: 2
            },
            {
                question: "According to Parmenides, being is:",
                answers: [
                    "eternal, invariable, united",
                    "ideal, eternal, multiple",
                    "the unity of the spiritual and material",
                    "material, variable, ultimate",
                    "invariable, plural"
                ],
                correct: 0
            },
            {
                question: "In ancient Greek philosophy, the impossibility of think about motion has been proven in:",
                answers: [
                    "Aristotelian syllogisms",
                    "Zeno’s paradoxes",
                    "Pythagorean proves",
                    "Socrates’ definitions",
                    "Plato's dialogues"
                ],
                correct: 1
            },
            {
                question: "Any change, transformation, and process is:",
                answers: ["motion", "evolution", "involution", "development", "progress"],
                correct: 0
            },
            {
                question: "Category, reflecting the external, sensibly perceived sides of objects and processes:",
                answers: ["phenomenon", "image", "configuration", "profile", "shape"],
                correct: 0
            },
            {
                question: "The negation of the causality principle:",
                answers: ["determinism", "agnosticism", "indeterminism", "fatalism", "idealism"],
                correct: 2
            },
            {
                question: "Ancient philosopher, who recognized water, earth, fire and air as a system of world’s eternal elements and forces:",
                answers: ["Epicurus", "Empedocles", "Anaximenes", "Anaximander", "Heraclitus"],
                correct: 1
            },
            {
                question: "Which Pre-Socratic philosopher claimed everything was made of atoms?:",
                answers: ["Parmenides", "Thales", "Pythagoras", "Democritus", "Heraclitus"],
                correct: 3
            },
            {
                question: "According to .. all phenomena in the world are planned in advance and the possibility of change is rejected:",
                answers: ["fatalism", "determinism", "formalism", "indeterminism", "providentialism"],
                correct: 0
            },
            {
                question: "Immanence idea are known as:",
                answers: ["Innate ideas", "Adventitious ideas", "Factitious ideas", "Beliefs", "rational thoughts"],
                correct: 0
            },
            {
                question: "This philosophy calls for enduring what cannot be changed and for maintaining abstinence from temptation:",
                answers: ["stoicism", "epicureanism", "quietism", "quakerism", "providentialism"],
                correct: 0
            },
            {
                question: "The arche of things is apeiron, according to:",
                answers: ["Anaximander", "Thales", "Plato", "Socrates", "Abai"],
                correct: 0
            },
            {
                question: "Democritus is belonging to … school:",
                answers: ["atomistic", "ionian", "idealist", "elean", "hellenistic"],
                correct: 0
            },
            {
                question: "Idea of separation into the world of things and the world of ideas belong to:",
                answers: ["Plato", "Pythagoras", "Thales", "Descartes", "Richard Rorty"],
                correct: 0
            },
            {
                question: "Who distinguished world of ideas and physical world?:",
                answers: ["Plato", "Aristotle", "Descartes", "Richard Rorty", "Romans"],
                correct: 0
            },
            {
                question: "Eternal Ideas beyond the physical world, according to Aristotle, is:",
                answers: ["Forms", "Dialectics", "Phenomenon", "Episteme", "no answer"],
                correct: 0
            },
            {
                question: "The relativist philosopher:",
                answers: ["Thomas Aquinas", "Protagoras", "Anaximander", "Socrates", "Alexander"],
                correct: 1
            },
            {
                question: "The term for \"the extinction of consciousness,\" a state of absolute calm and complete imperturbability in Hinduism is:",
                answers: ["Nirvana", "Karma", "Dharma", "Ahimsa", "Jiva"],
                correct: 0
            },
            {
                question: "Dualism in the consideration of the principle of Prakriti and Purusha was presented in the schools:",
                answers: ["Samkhya and Yoga", "Buddhism and Yoga", "Charvaka and Lokayaca", "Nyaya and Vaisheshika", "Vedanta and Nyaya"],
                correct: 0
            },
            {
                question: "The author of the book \"The World as Will and Representation\", whose teaching became the source of the philosophy of life:",
                answers: ["A. Schopenhauer", "Z. Freud", "F. Nietzsche", "M. Scheler", "A. Gehlen"],
                correct: 0
            },
            {
                question: "What is the nature of the Platonic idea?",
                answers: [
                    "The idea is immaterial and inconceivable",
                    "The idea is material but inconceivable",
                    "The idea is material and conceivable",
                    "The idea is immaterial but conceivable",
                    "None of the above"
                ],
                correct: 3
            },
            {
                question: "The existence of many original foundations and principles of being affirms:",
                answers: ["Agnosticism", "Empiricism", "Relativism", "Pluralism", "Rationalism"],
                correct: 3
            }
        ]
    },
    // Тест 3 — полностью заменён вопросами из "тест 3 без ответов.docx"
    {
        id: 3,
        title: "Тест 3",
        questions: [
            {
                question: "Indicate the law of dialectics:",
                answers: [
                    "the law of gravity",
                    "law of conservation of matter and energy",
                    "the law of the excluded middle",
                    "the law of unity and struggle of opposites",
                    "law of Sufficient Reason"
                ],
                correct: 3
            },
            {
                question: "Mayeutics is:",
                answers: [
                    "The ability to cleverly debate",
                    "The art of having a conversation, an argument",
                    "Socratic method of finding the truth",
                    "The ideal of physical and moral perfection",
                    "The beginning of being"
                ],
                correct: 2
            },
            {
                question: "Basic laws and categories of formal logic discovered:",
                answers: ["Socrates", "Empedocles", "Aristotle", "Plato", "Plotinus"],
                correct: 2
            },
            {
                question: "Know thyself - said:",
                answers: ["Confucius", "Heraclitus", "Protagoras", "Parmenides", "Socrates"],
                correct: 4
            },
            {
                question: "Who was called the \"Second Teacher\" in world philosophy:",
                answers: ["Al-Ghazali", "Al-Farabi", "Al-Biruni", "Al-Khwarizmi", "Al-Kindi"],
                correct: 1
            },
            {
                question: "The third law of dialectics:",
                answers: [
                    "The law of gravity",
                    "Law of conservation of matter and energy",
                    "The law of the excluded middle",
                    "Law of sufficient reason",
                    "The law of negation of negation"
                ],
                correct: 4
            },
            {
                question: "Philosophical doctrine that denies the fundamental possibility of knowing the world:",
                answers: ["Skepticism", "Agnosticism", "Sensationalism", "Anthropologism", "Atheism"],
                correct: 1
            },
            {
                question: "A philosophical method based on decomposition phenomenon into its constituent parts and sides:",
                answers: ["Analysis", "Synthesis", "Dialectic", "Metaphysics", "Eclecticism"],
                correct: 0
            },
            {
                question: "A philosophical method based on the consideration of things, and processes from two opposite points of view:",
                answers: ["Analysis", "Synthesis", "Dialectics", "Metaphysics", "Eclecticism"],
                correct: 2
            },
            {
                question: "Teaching about knowledge:",
                answers: ["Ontology", "Epistemology", "Metaphysics", "Axiology", "Anthropology"],
                correct: 1
            },
            {
                question: "What does the Greek word “Logos” mean?",
                answers: ["science", "object", "religion", "idea", "subject"],
                correct: 3
            },
            {
                question: "Author of the “double-truth” theory:",
                answers: ["Ibn-Sina", "Ibn-Rushd", "Al-Kindi", "Ibn-Arabi", "Al-Ghazali"],
                correct: 1
            },
            {
                question: "“Knowledge comes only or primarily from sensory experience”:",
                answers: ["skepticism", "rationalism", "agnosticism", "phenomenology", "empiricism"],
                correct: 4
            },
            {
                question: "Transition from the general to the specific knowledge:",
                answers: ["induction", "analysis", "deduction", "abstracting", "synthesis"],
                correct: 2
            },
            {
                question: "Rational knowledge includes:",
                answers: ["concept, judgment, conclusion", "analogy, hypothesis, ordering", "induction, deduction, generalization", "intuition, reason, mind", "sensation, perception, representation"],
                correct: 0
            },
            {
                question: "“Cognition is the recollection of the ideas that soul had once beheld”, affirms:",
                answers: ["Epicurus", "Aristotle", "Plato", "Socrates", "Pythagoras"],
                correct: 2
            },
            {
                question: "The expression “Everything I say is false” is…:",
                answers: ["truth", "sophism", "wordplay", "deception", "error"],
                correct: 1
            },
            {
                question: "School of thought that questions the possibility of certainty in knowledge:",
                answers: ["skepticism", "pessimism", "optimism", "realism", "nominalism"],
                correct: 0
            },
            {
                question: "The author of 3 laws of dialectics:",
                answers: ["G. Hegel", "L. Feuerbach", "I. Kant", "J. Fichte", "F. Schelling"],
                correct: 0
            },
            {
                question: "The concepts of \"Ego\", \"It\", \"Super-Ego\" are basic in:",
                answers: ["existentialism", "psychoanalysis", "personalism", "machism", "positivism"],
                correct: 1
            },
            {
                question: "Which is the Epistemological question?:",
                answers: [
                    "How can we prove our answers?",
                    "What sorts of things exist?",
                    "What is happiness?",
                    "Is some art unethical?",
                    "Do divine commands make right acts right, or are their rightness based on something else?"
                ],
                correct: 0
            },
            {
                question: "Rationalism is:",
                answers: [
                    "doctrine that affirms that all knowledge is based on reason",
                    "a doctrine that affirms that all knowledge is based on experience",
                    "a view more in harmony with science than with traditional religion",
                    "new ideas in all areas of the culture",
                    "the mechanistic picture of the world"
                ],
                correct: 0
            },
            {
                question: "Dialectics in antique philosophy means:",
                answers: ["the art of debate", "alternative style of thinking", "the development of the “absolute idea”", "the study of the objective world", "the theory of scientific cognition"],
                correct: 0
            },
            {
                question: "Understanding of facts, information, descriptions, which is acquired through experience:",
                answers: ["Theory", "Knowledge", "Stereotype", "Work", "Classification"],
                correct: 1
            },
            {
                question: "He created a philosophical system based on the dialectical method:",
                answers: ["Socrates", "Rene Descartes", "Francis Bacon", "Georg Hegel", "Aristotle"],
                correct: 3
            },
            {
                question: "Who introduced sophisms?:",
                answers: ["Protagoras", "Thales", "Pythagoras", "Plato", "Alexander"],
                correct: 0
            },
            {
                question: "Author of 10 Categories of logics:",
                answers: ["Aristotle", "Plato", "Thales", "Descartes", "Democritus"],
                correct: 0
            },
            {
                question: "The famous words \"Language is the house of being\" belong to:",
                answers: ["M. Heidegger", "K. Jaspers", "J.-P. Sartre", "A. Camus", "K. Popper"],
                correct: 0
            },
            {
                question: "\"Have the courage to use your own understanding!\" wrote:",
                answers: ["Diderot", "Voltaire", "Montaigne", "Rousseau", "Kant"],
                correct: 4
            },
            {
                question: "The concept of double truth, the truth of faith and the truth of knowledge, which played a significant role in the rationalization of knowledge, is most developed in the philosophy of:",
                answers: ["Al-Kindi", "Ibn Rushd", "Al-Farabi", "Al-Ghazali", "Al-Biruni"],
                correct: 1
            },
            {
                question: "\"I believe in order to understand\" is a statement of:",
                answers: ["Scholasticism", "Peripateticism", "Agnosticism", "Patristics", "Creationism"],
                correct: 0
            },
            {
                question: "Francis Bacon was the founder of:",
                answers: ["Nominalism", "Rationalism", "Empiricism", "Realism", "Positivism"],
                correct: 2
            },
            {
                question: "Which philosophical movement corresponds to the statement \"There is nothing in the intellect that was not first in the senses\"?",
                answers: ["Empiricism", "Rationalism", "Agnosticism", "Irrationalism", "Skepticism"],
                correct: 0
            },
            {
                question: "Who is the creator of dialectics as a method of cognition?",
                answers: ["Descartes", "Locke", "Kant", "Leibniz", "Hegel"],
                correct: 4
            },
            {
                question: "The well-known statement of pragmatism:",
                answers: [
                    "Truth is what is proven",
                    "Truth is what is useful",
                    "Truth is what is habitual",
                    "Truth is what is incomprehensible",
                    "All of the above"
                ],
                correct: 1
            },
            {
                question: "The absolutization of the role and importance of sensory data in philosophy is associated with the direction of:",
                answers: ["Sensualism", "Realism", "Rationalism", "Skepticism", "Agnosticism"],
                correct: 0
            },
            {
                question: "Which of the following belongs to a form of rational cognition?",
                answers: ["Intuition", "Concept", "Conviction", "Representation", "Embodiment"],
                correct: 1
            },
            {
                question: "From the premise \"All people think\" and the statement justifying knowledge \"I am a person,\" make a conclusion:",
                answers: ["All people are like me", "I belong to all people", "Animals also think", "I think", "None of the above"],
                correct: 3
            }
        ]
    },
    {
        id: 4,
        title: "Тест 4",
        questions: [
            {
                question: "The sphere of philosophical knowledge about human being:",
                answers: ["anthropology", "epistemology", "axiology", "ontology", "logic"],
                correct: 0
            },
            {
                question: "Man is the measure of all things - believes:",
                answers: ["Parmenides", "Protagoras", "Socrates", "Democritus", "Plato"],
                correct: 1
            },
            {
                question: "What does humanism mean?",
                answers: ["philanthropy", "love for god", "love for knowledge", "love of wisdom", "love for truth"],
                correct: 0
            },
            {
                question: "Protagoras is the author of remark:",
                answers: ["man is the measure of all things", "man is a social animal", "man is a bizarre creature", "man is a superman", "man is a political animal"],
                correct: 0
            },
            {
                question: "Introduced the concept of \"borderline situation\" into philosophy:",
                answers: ["J.-P. Sartre", "A.Camus", "K.Jaspers", "G.Marcel", "M.Heidegger"],
                correct: 2
            },
            {
                question: "Author of the work \"Existentialism is humanism\":",
                answers: ["K. Jaspers", "A. Camus", "M. Heidegger", "G.O. Marcel", "J.-P. Sartre"],
                correct: 4
            },
            {
                question: "The statement \"If existence really precedes essence, then a person is responsible for what he is\" characterizes:",
                answers: ["Existentialism", "Psychoanalysis", "Philosophy of life", "Philosophical anthropology", "Pragmatism"],
                correct: 0
            },
            {
                question: "A thinker whose ideas about man reflect the following judgment: \"Man is a wolf to man\":",
                answers: ["Hobbes", "Cusa", "Pascal", "Hegel", "Kant"],
                correct: 0
            },
            {
                question: "The quality or character of a person or thing that makes them different from others is ...:",
                answers: ["Individuality", "Personality", "Communication", "Stereotype", "There is no correct answer"],
                correct: 0
            },
            {
                question: "Confucius and Ming-tzu believed that human nature is:",
                answers: ["Inherently evil", "Initially fair", "Initially moral", "Initially beautiful", "Inherently good"],
                correct: 4
            },
            {
                question: "The highest individual subjective principle in Ancient Indian Philosophy is:",
                answers: ["Brahman", "Atman", "Samsara", "Karma", "Nirvana"],
                correct: 1
            },
            {
                question: "The statement \"If existence really precedes essence, then a person is responsible for what he is \" characterizes:",
                answers: ["existentialism", "psychoanalysis", "philosophy of life", "philosophical anthropology", "pragmatism"],
                correct: 0
            },
            {
                question: "The central problem of Confucianism is:",
                answers: ["Problems of nature", "Proofs of the existence of God", "Problems of man and society", "Problems of aesthetics", "Immortality of the soul"],
                correct: 2
            },
            {
                question: "According to Al-Farabi, the most valuable quality in a person, and thus the means of approaching Allah, is:",
                answers: ["Faith", "Conscience", "Love", "Reason", "Feeling"],
                correct: 3
            },
            {
                question: "One-dimensionality as a result of \"massification\" of humans is examined by:",
                answers: ["Herbert Marcuse", "Alvin Toffler", "Arnold J. Toynbee", "Karl Jaspers", "Martin Heidegger"],
                correct: 0
            },
            {
                question: "In the work \"Answering the Question: What is Enlightenment?\" Immanuel Kant writes: \"Enlightenment is man's emergence from his self-imposed immaturity, in which he finds himself...",
                answers: ["for a long time", "since the Middle Ages", "due to a poorly developed educational system", "because of the imperfection of society", "by his own fault"],
                correct: 4
            },
            {
                question: "The process of assimilation by an individual of patterns of behavior, psychological attitudes, social norms and values, knowledge, skills that allow him to function successfully in society is:",
                answers: ["Socialization", "Adaptation", "Anthropogenesis", "Nihilism", "Determinism"],
                correct: 0
            },
            {
                question: "The highest degree of beauty in man and society with its incomplete embodiment in reality:",
                answers: ["Fiction", "The aesthetic ideal", "Artwork", "The process of creation", "The result of creation"],
                correct: 1
            },
            {
                question: "A thinker whose ideas about man reflect the following judgment: \"Man is a wolf to man\":",
                answers: ["Spinosa", "Hobbes", "Pascal", "Hegel", "Kant"],
                correct: 1
            },
            {
                question: "Author by the famous book \"The Selfish Gene\"(1976):",
                answers: ["Ernest Rutherford", "Immanuel Kant", "Richard Dawkins", "Albert Einstein", "Isaac Newton"],
                correct: 2
            },
            {
                question: "Author of the work \"Existentialism is humanism\":",
                answers: ["K. Jaspers", "A. Camus", "M. Heidegger", "J.-P. Sartre", "G.O. Marcel"],
                correct: 3
            },
            {
                question: "Existentialist J.-P. Sartre thought that person was condemned to:",
                answers: ["freedom", "happiness", "suffering", "love", "death"],
                correct: 0
            },
            {
                question: "\"The war of every man against every man,\" or \"Man is a wolf to man.\" To whom does this thesis belong?",
                answers: ["René Descartes", "John Locke", "Thomas Hobbes", "Georg Wilhelm Friedrich Hegel", "Gottfried Wilhelm Leibniz"],
                correct: 2
            },
            {
                question: "The basis of existentialism is the doctrine of:",
                answers: ["The values of human society", "The laws of the objective world", "Human existence", "Social progress", "The methods of cognition"],
                correct: 2
            },
            {
                question: "The fundamental concept in the philosophy of Friedrich Nietzsche is:",
                answers: ["Will to life", "Will to power", "Will to wealth", "Will to God", "Will to knowledge"],
                correct: 1
            },
            {
                question: "Existentialists assert that the essence of a person is defined by:",
                answers: ["An incomprehensible fate", "The totality of production relations", "Divine predestination", "The individual's own choice of their goal", "Aesthetic pleasure"],
                correct: 3
            },
            {
                question: "Medieval philosophers argued that man:",
                answers: ["Is the result of biological evolution", "Is created in the image and likeness of God", "Is a product of social reality", "Is a product of speech activity", "Is a political animal"],
                correct: 1
            },
            {
                question: "This quality in a person was considered the most important in the philosophy of the Modern era:",
                answers: ["Emotionality", "Piety", "Reason, rationality", "Creativity", "Sense of the beautiful"],
                correct: 2
            },
            {
                question: "The life position based on the principle \"The meaning of life is in serving people\" is called:",
                answers: ["Altruism", "Egoism", "Hedonism", "Asceticism", "Eudaimonism"],
                correct: 0
            }
        ]
    },
    {
        id: 5,
        title: "Тест 5-6",
        questions: [
            {
                question: "The ethical concept of Confucianism, identifying the positive qualities of a person:",
                answers: ["a noble person", "short man", "an official", "warlord", "statesman"],
                correct: 0
            },
            {
                question: "A trait or quality that is deemed morally good and thus is valued as the basis of good moral being:",
                answers: ["virtue", "dignity", "charity", "prudence", "justice"],
                correct: 0
            },
            {
                question: "Thinker who reasoned that utility is equal to happiness and the ultimate goal is to find \"the greatest amount of good for the greatest number of people\":",
                answers: ["J. Bentham", "J.S. Mill", "I. Kant", "Ch.S. Peirce", "J. Habermas"],
                correct: 0
            },
            {
                question: "The English word \"ethics\" is derived from the ancient Greek word ēthikós, meaning:",
                answers: ["relating to one's character", "establishing moral order", "elimination of evil", "compliance with the moral rules", "purposeful life"],
                correct: 0
            },
            {
                question: "The author of the dictum: \"It is impossible to think of anything at all in the world, or indeed even beyond it, that could be considered good without limitation except a good will.\":",
                answers: ["Kant", "Schopenhauer", "Abay", "Spinoza", "Augustine"],
                correct: 0
            },
            {
                question: "\"Nothing is morally right or wrong because there are no moral features in this world; thus, no moral judgments are true\":",
                answers: ["moral nihilism", "moral relativism", "moral objectivism", "moral ignorance", "moral eliminativism"],
                correct: 0
            },
            {
                question: "Impartial and just treatment or behavior without favoritism or discrimination:",
                answers: ["fairness", "straightforwardness", "rigidity", "humbleness", "tolerance"],
                correct: 0
            },
            {
                question: "A class of meta-ethical theories in which all members entail that no one has any moral knowledge, more over it is impossible:",
                answers: ["moral skepticism", "moral nihilism", "moral absenteeism", "ethical realism", "agnosticism"],
                correct: 0
            },
            {
                question: "Moral law: \"Act so that people and humanity have always been only a goal but not a means\" is called:",
                answers: ["Kant's categorical imperative", "Kant's hypothetical imperative", "Schweitzer's ethics of reverence for life", "Buddhist ethics of compassion", "Feuerbach's anthropological materialism"],
                correct: 0
            },
            {
                question: "Who said \"Two things always fill the soul with new and ever stronger wonder - this is the Starry Sky above Me and the Moral Law in Me\":",
                answers: ["Kant", "Socrates", "Aristotle", "Plato", "Nietzsche"],
                correct: 0
            },
            {
                question: "Who said \"Educating the mind without educating the heart is no education at all\":",
                answers: ["Aristotle", "Thales", "Plato", "Descartes", "Socrates"],
                correct: 0
            },
            {
                question: "The idea of \"revaluation of all values\" came up with:",
                answers: ["A. Schweitzer", "I. Kant", "F. Nietzsche", "W. Windelband", "G. Hegel"],
                correct: 2
            },
            {
                question: "In Spinoza's philosophy, the theory of knowledge that leads to freedom is:",
                answers: ["Logic", "Mathematics", "Politics", "Aesthetics", "Ethics"],
                correct: 4
            },
            {
                question: "The highest level of value consciousness:",
                answers: ["Norms", "Traditions", "Ideals", "Spiritual values", "Habits"],
                correct: 2
            },
            {
                question: "According to Nietzsche, there are no transcendental ethics or values for us to use, so:",
                answers: ["We must live in transcendental world", "We must destroy everything", "We must live its imagine form", "We must live in absurdity", "We must create our own values"],
                correct: 4
            },
            {
                question: "The primary ethical principles of Daoism are:",
                answers: ["the principles of non-action and spontaneity", "the principles of moral anarchism and inaction", "the principles of non-violence and forgiveness", "the principles of individualism and hedonism", "the principles of moral anarchism and hedonism"],
                correct: 0
            },
            {
                question: "Which philosopher first considered morality as an independent sphere?",
                answers: ["Immanuel Kant", "David Hume", "Georg Wilhelm Friedrich Hegel", "Gottfried Wilhelm Leibniz", "Auguste Comte"],
                correct: 0
            },
            {
                question: "Thinker, who linked the origin of capitalism with the protestant ethics:",
                answers: ["A. Comte", "M. Weber", "T. Kuhn", "M. Foucault", "I. Kant"],
                correct: 1
            },
            {
                question: "Meaning of Taoist principle \"Wu-wei\":",
                answers: ["Non-resistance to evil", "Action", "Discipline and order in society", "Non-action", "Infinity of the Universe"],
                correct: 3
            },
            {
                question: "The main principle of Jainism, the non-harming of living beings (the principle of \"do no harm\"), is called:",
                answers: ["Atman", "Moksha", "Ahimsa", "Jiva", "Jina"],
                correct: 2
            },
            {
                question: "\"I do not agree with what you have to say, but I'll defend to the death your right to say it\", said:",
                answers: ["Cicero", "Abai", "Aristotle", "Socrates", "Voltaire"],
                correct: 4
            },
            {
                question: "Those who called themselves \"citizens of the world\" and introduced the term \"cosmopolitan\" were:",
                answers: ["Sophists", "Cyrenaics", "Cynics", "Megarians", "Stoics"],
                correct: 2
            },
            {
                question: "The denial of fate in Chinese philosophy, asserting that people are free, is found in:",
                answers: ["Confucians", "Daoists", "Mohists", "Legalists", "Naturalists"],
                correct: 2
            },
            {
                question: "In \"The Spirit of the Laws,\" Charles de Montesquieu developed:",
                answers: ["Leibniz's doctrine of monads", "Descartes' doctrine of innate ideas", "Bacon's empiricism", "Locke's theory of natural law", "Copernicus' heliocentrism"],
                correct: 3
            },
            {
                question: "According to B. Spinoza, everything in the world is governed by:",
                answers: ["Absolute necessity", "Man will and power", "The world soul", "The objective laws of nature", "God the demiurge"],
                correct: 0
            },
            {
                question: "The position of Niccolò Machiavelli can be expressed by the formula:",
                answers: ["\"politics for politics\"", "\"politics for the monarch\"", "\"politics for the common people\"", "\"politics for religion\"", "\"politics for art\""],
                correct: 0
            },
            {
                question: "Locke, in his socio-political theory, puts forward four \"natural rights\" of every citizen. Which of the following is NOT included:",
                answers: ["right to life", "right to liberty", "right to property", "right to vote and be elected", "right to defend one's rights"],
                correct: 3
            },
            {
                question: "Analyses and develops the theory of the separation of powers (legislative, executive and judicial) as a pillar of the theory of the rule of law and the practice of democratic life -",
                answers: ["Diderot", "Rousseau", "Voltaire", "Holbach", "Montesquieu"],
                correct: 4
            },
            {
                question: "\"Man is born free, and yet everywhere he is in fetters\" - these are the words with which Rousseau's treatise opens:",
                answers: ["\"Discourse on the Freedom of Thought\"", "\"Philosophical Inquiry into Human Freedom\"", "\"Fifteen Sermons on Human Nature\"", "\"On the Social Contract\"", "\"Thoughts on Various Subjects\""],
                correct: 3
            },
            {
                question: "In his work \"On the Spirit of Laws\", S. Montesquieu developed:",
                answers: ["The doctrine of Leibniz's monads", "The doctrine of Descartes' innate ideas", "Francis Bacon's empiricism", "Locke's theory of natural law", "Copernicus' heliocentrism"],
                correct: 3
            },
            {
                question: "A Renaissance thinker who believed that a ruler should combine the qualities of a lion and a fox:",
                answers: ["Campanella", "More", "Petrarch", "Bruno", "Machiavelli"],
                correct: 4
            },
            {
                question: "According to Kant, what makes a person free?",
                answers: ["Following one's nature", "Following duty", "Adequate cognition", "Following religious norms", "The principle of utilitarianism"],
                correct: 1
            },
            {
                question: "\"Everything in the world is predestined, man is absolutely not free,\" are the views of:",
                answers: ["Irrationalism", "Fatalism", "Voluntarism", "Rationalism", "Sensualism"],
                correct: 1
            },
            {
                question: "The meaning of human life according to eudaimonism is:",
                answers: ["Freedom from physical suffering and mental distress", "The struggle against tyranny", "Serving God", "Committing heroic deeds", "Cognitive development"],
                correct: 0
            }
        ]
    },
    {
        id: 6,
        title: "Тест 6",
        questions: []
    },
    {
        id: 7,
        title: "Тест 7",
        questions: [
            {
                question: "The science on forms, laws and ways of thinking:",
                answers: ["logic", "axiology", "ontology", "epistemology", "logistics"],
                correct: 0
            },
            {
                question: "The form of empirical cognition:",
                answers: ["judgment", "hypothesis", "observation", "syllogism", "theory"],
                correct: 2
            },
            {
                question: "The concept used in the logic and methodology of science to denote the process of establishing the truth of scientific statements as a result of their empirical experience:",
                answers: ["Hypothesis", "The concept", "Falsification", "Demarcation", "Verification"],
                correct: 4
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
                question: "A philosophical method based on the principles of interpretation of any texts or systems of concepts:",
                answers: ["Maieutics", "Dialectics", "Hermeneutics", "Eclectic", "Sophistry"],
                correct: 2
            },
            {
                question: "The founder of the experimental mathematical methods of nature research:",
                answers: ["Galileo Galilei", "Nicolas Copernicus", "Leonardo da Vinci", "Thomas Moore", "Niccolo Machiavelli"],
                correct: 0
            },
            {
                question: "The influence of philosophy on XVII century Modern science is the creation of two most important philosophical and methodological concepts:",
                answers: ["Modernism and Postmodernism", "Rationalism and Empiricism", "Sensualism and Empiricism", "Personalism and Pragmatism", "Existentialism and Philosophy of life"],
                correct: 1
            },
            {
                question: "The main function of science is:",
                answers: ["The search and production of new knowledge", "The education of people", "Cultural development of society", "Technological development and improvement of life style", "Social justice and harmony"],
                correct: 0
            },
            {
                question: "The main purpose of science is:",
                answers: ["Make a discovery", "Achieve the truth", "Do experiments", "Explore nature", "Create theories"],
                correct: 1
            },
            {
                question: "The philosopher who introduced the concepts of \"normal science\" and \"paradigm shift\":",
                answers: ["I. Lakatos", "P. Feyerabend", "A. Comte", "T. Kuhn", "L. Wittgenstein"],
                correct: 3
            },
            {
                question: "The practical value of science is as follows:",
                answers: ["Do experiments", "Explore nature", "Make a discovery", "To bring benefits to humanity", "Create theories"],
                correct: 3
            },
            {
                question: "The prerequisites of the experimental method were obtained in the era of:",
                answers: ["Antiquity", "the Middle Ages", "Renaissance", "Modern Times", "Postmodern"],
                correct: 2
            },
            {
                question: "The principle of falsification was introduced into scientific circulation by:",
                answers: ["J. Derrida", "A. Camus", "K. Jaspers", "T. Kuhn", "K. Popper"],
                correct: 4
            },
            {
                question: "The set of beliefs, values, technical means adopted by the scientific community and providing a scientific tradition:",
                answers: ["scientific paradigms", "scientific theories", "scientific schemes", "Scientific revolutions", "scientific experiments"],
                correct: 0
            },
            {
                question: "The work \"The structure of scientific revolutions\" was written by postpositivist:",
                answers: ["K. Popper", "T. Adorno", "J. Habermas", "T. Kuhn", "L. Wittgenstein"],
                correct: 3
            },
            {
                question: "This philosopher and scientist told about the hypertrophied development of science:",
                answers: ["Ernest Rutherford", "Richard Dawkins", "Isaak Newton", "Bertrand Russell", "Gottfried Leibniz"],
                correct: 3
            },
            {
                question: "What principle is opposite to verification?:",
                answers: ["falsification", "simulation", "stimulation", "regeneration", "generalization"],
                correct: 0
            },
            {
                question: "The conclusion of the 14th-century scholastic philosopher William of Ockham about the necessity to separate ethical-theological problems from philosophical ones is called:",
                answers: ["\"Ockham's boundary\"", "\"Ockham's razor\"", "\"Ockham's knife\"", "\"Ockham's scissors\"", "\"Ockham's blade\""],
                correct: 1
            },
            {
                question: "Descartes calls the study of God, the soul, and the beginnings of perfect knowledge:",
                answers: ["Theology", "Teleology", "Metaphysics", "Physics", "Ethics"],
                correct: 2
            },
            {
                question: "The three stages in the history of humanity (religious, metaphysical, positive or scientific) were distinguished by:",
                answers: ["Auguste Comte", "Karl Marx", "Immanuel Kant", "Friedrich Engels", "Søren Kierkegaard"],
                correct: 0
            },
            {
                question: "Technology as a means of understanding, revealing truth changes the perception of nature by humans, according to:",
                answers: ["Herbert Marcuse", "Alvin Toffler", "Martin Heidegger", "Arnold J. Toynbee", "Karl Jaspers"],
                correct: 2
            },
            {
                question: "The idea of \"technocracy\" as the rule of engineers was initially developed by:",
                answers: ["Thorstein Veblen", "Max Weber", "Karl Marx", "Herbert Marcuse", "José Ortega y Gasset"],
                correct: 0
            },
            {
                question: "The \"myth of the machine,\" that is, the idea that mega-technology is unavoidable in our lives and is highly beneficial, was debunked by:",
                answers: ["Zbigniew Brzezinski", "Lewis Mumford", "Daniel Bell", "Walt Whitman Rostow", "Jacques Ellul"],
                correct: 1
            },
            {
                question: "The statement that the biological laws of the struggle for existence and natural selection operate in the social sphere is characteristic of:",
                answers: ["Freudian", "Positivism", "Marxism", "Darwinism", "Creationism"],
                correct: 3
            },
            {
                question: "Founder of sociology as a positive science:",
                answers: ["M. Weber", "O. Comte", "K. Marx", "G. Hegel", "I. Kant"],
                correct: 1
            },
            {
                question: "\"All sciences are divided into physics and stamp collecting\", - said:",
                answers: ["Ernest Rutherford", "Richard Dawkins", "Immanuel Kant", "Albert Einstein", "Isaac Newton"],
                correct: 0
            },
            {
                question: "\"The book of nature is written in the language of mathematics,\" - argued:",
                answers: ["Copernicus", "Galileo", "Bacon", "Descartes", "Newton"],
                correct: 1
            },
            {
                question: "\"There is as much truth in every knowledge as there is mathematics\", - believed:",
                answers: ["Copernicus", "Galileo", "Kant", "Descartes", "Newton"],
                correct: 3
            },
            {
                question: "A system of philosophy that recognize only things that can be scientifically or logically proved is:",
                answers: ["Romanticism", "Existentialism", "Nihilism", "Positivism", "There is no correct answer"],
                correct: 3
            },
            {
                question: "Aristotle divided the Sciences into three group:",
                answers: ["Theoretical, practical and rational", "Theoretical, practical and cultural", "Theoretical, practical and ethical", "Theoretical, practical and empirical", "Theoretical, practical and poetic"],
                correct: 4
            },
            {
                question: "Author by the famous \"Mathematical Principles of Natural Philosophy\":",
                answers: ["Francis Bacon", "Gottfried Leibniz", "Isaac Newton", "Benedict Spinoza", "Rene Descartes"],
                correct: 2
            },
            {
                question: "Author of concept of the scientific knowledge model:",
                answers: ["I. Lakatos", "G. Leibniz", "J. Fichte", "G. Hegel", "A. Schopenhauer"],
                correct: 0
            },
            {
                question: "Author of the mechanical scientific vision of the world:",
                answers: ["Isaac Newton", "Gottfried Leibniz", "Benedict Spinoza", "Rene Descartes", "Francis Bacon"],
                correct: 3
            },
            {
                question: "From the point of view of externalism, the emergence of science is due to:",
                answers: ["External circumstances", "Social environment", "Economic situation", "Political power", "All of the above"],
                correct: 4
            },
            {
                question: "In the philosophy of science, the problem of distinguishing the science and non-science:",
                answers: ["falsification", "verification", "proliferation", "demarcation", "negative heuristics"],
                correct: 3
            },
            {
                question: "Leonardo da Vinci was not only a great artist, but also:",
                answers: ["A great inventor", "A scientist", "An engineer", "A writer", "All of the above"],
                correct: 4
            },
            {
                question: "Philosophers, close towards internalism are:",
                answers: ["Descartes", "Hegel", "Popper", "Husserl", "All of the above"],
                correct: 4
            },
            {
                question: "The application of knowledge to reach practical goals in a reproducible way and also the product of such an endeavor:",
                answers: ["technology", "production", "reproduction", "quantification", "qualification"],
                correct: 0
            },
            {
                question: "The author of the Concept of Personal Knowledge is:",
                answers: ["Ernest Rutherford", "Richard Dawkins", "Michael Polanyi", "Bertrand Russell", "Isaak Newton"],
                correct: 2
            },
            {
                question: "The author of the famous treatise of the Middle Ages \"Canon of medical science\":",
                answers: ["Al-Kindi", "Ibn Sina", "Al-Farabi", "Ibn Khaldun", "Al-Ghazali"],
                correct: 1
            },
            {
                question: "The author of the term \"paradigm\":",
                answers: ["Thomas Kuhn", "Erich Fromm", "Sigmund Freud", "Bertrand Russell", "Imre Lakatos"],
                correct: 0
            }
        ]
    },
    {
        id: 8,
        title: "Тест 8",
        questions: [
            {
                question: "In Hellenistic philosophy the word \"ataraxia\" means:",
                answers: ["equanimity, impassivity", "heartlessness", "fatigue, tiredness", "wisdom", "activity and creativity"],
                correct: 0
            },
            {
                question: "The ability to create mental pictures is called...:",
                answers: ["imagination", "perception", "reflection", "consciousness", "will"],
                correct: 0
            },
            {
                question: "The purification and purgation of emotions through dramatic art, or any extreme emotional state that results in renewal and restoration:",
                answers: ["catharsis", "catalepsy", "ataraxy", "mimesis", "phronesis"],
                correct: 0
            },
            {
                question: "Who said: \"There is beauty in everything, but not everyone will see?\":",
                answers: ["Democritus", "Socrates", "Thales", "Confucius", "Heraclitus"],
                correct: 4
            },
            {
                question: "The author of \"The Great Book of Music\" is:",
                answers: ["Ibn Rushd", "Ibn Sina", "Al-Farabi", "Ibn Arabi", "Al-Ghazali"],
                correct: 2
            },
            {
                question: "Kant considers artistic creativity, the problem of aesthetics, in the work:",
                answers: ["\"Critique of Practical Reason\"", "\"Critique of Pure Reason\"", "\"Critique of Judgment\"", "\"Groundwork of the Metaphysics of Morals\"", "\"Dreams of a Spirit-Seer, Illustrated by Dreams of Metaphysics\""],
                correct: 2
            },
            {
                question: "Dionysian and Apollonian elements in culture are distinguished by:",
                answers: ["Arthur Schopenhauer", "Søren Kierkegaard", "Albert Camus", "Friedrich Nietzsche", "Martin Heidegger"],
                correct: 3
            },
            {
                question: "The totality of the main ideological and artistic features of the artist's work, manifested in typical themes, ideas, characters, conflicts, in the originality of visual and expressive means, artistic techniques, is called:",
                answers: ["Artistic creativity", "Artistic work", "Artist's style", "Artist's imagination", "Artist's worldview"],
                correct: 2
            },
            {
                question: "In art, the assessment of the depicted phenomenon is given in accordance with:",
                answers: ["The value orientations of society as a whole", "The concepts of it in a given cultural environment", "The artist's worldview", "The artist's imagination", "The artistic creativity"],
                correct: 2
            },
            {
                question: "A sign of the artistry of a particular work can only be:",
                answers: ["Reason", "System of criteria", "Theory of art", "Ideal", "Experience"],
                correct: 4
            },
            {
                question: "Art, according to Schiller, should depict:",
                answers: ["The moral", "Sensuous", "Supersensible", "Experience", "Reality"],
                correct: 0
            },
            {
                question: "Historically established forms of art, its main structural and classification units are called:",
                answers: ["Elements of art", "Types of art", "Methods of art", "Signs of art", "Properties of art"],
                correct: 1
            },
            {
                question: "The Lumiere brothers are the founders of:",
                answers: ["Modernism", "Postmodernism", "Abstractionism", "Cinematography", "Photography"],
                correct: 3
            },
            {
                question: "Antonio Gaudi is a famous ...:",
                answers: ["American director", "English scientist", "Italian sculptor", "Spanish architect", "Argentine artist"],
                correct: 3
            },
            {
                question: "Which museum houses Raphael's famous painting \"Sistine Madonna\"?:",
                answers: ["In the Louvre in Paris", "At the Old Masters Gallery in Dresden", "At the National Gallery in London", "At the Hermitage Museum in St. Petersburg", "The Uffizi Gallery in Florence"],
                correct: 1
            },
            {
                question: "Who compiled the \"Biographies of the most famous painters, sculptors and architects\"?:",
                answers: ["Michelangelo", "Leonardo da Vinci", "Giorgio Vasari", "Andrea del Verrocchio", "Rafael Santi"],
                correct: 2
            },
            {
                question: "Which Renaissance artist is considered a harbinger of surrealism?:",
                answers: ["Jaan van Eyck", "Leonardo da Vinci", "Albrecht Durer", "Hieronymus Bosch", "Peter Brueghel the Elder"],
                correct: 3
            },
            {
                question: "The function of art that fosters artistic tastes:",
                answers: ["Cognitive", "Communicative", "Value-oriented", "Moral", "Aesthetic"],
                correct: 4
            },
            {
                question: "Classification of art forms according to F. Schelling in \"The Philosophy of Art\":",
                answers: ["Rare and Common", "Simple and Complex", "Real and Ideal", "Open and Closed", "Absolute and Relative"],
                correct: 2
            },
            {
                question: "The emergence of mass culture was associated with:",
                answers: ["The rapid development of industry", "The development of new territories", "The advent of the Internet", "An increase in the level of education", "The discovery of new lands"],
                correct: 0
            },
            {
                question: "A utilitarian and practical approach to life in art:",
                answers: ["Creates an artistic image", "Promotes the knowledge of the essence of the aesthetic", "Leads to the loss of the specificity of art", "Provides the basis for creating the beautiful", "Contrasts the beautiful and the ugly"],
                correct: 2
            },
            {
                question: "In relation to the sublime in art, man is:",
                answers: ["Not free", "Subordinated", "Alienated", "Free", "Neutral"],
                correct: 3
            },
            {
                question: "An adequate reflection of reality in art, a deep disclosure of the essence of the depicted phenomena from the standpoint of aesthetic ideals is called:",
                answers: ["Artistic truth", "Copying", "Plagiarism", "Separation from reality", "Fiction"],
                correct: 0
            },
            {
                question: "The integrity of aesthetic consciousness, the organic unification of concepts, sensual images, emotions, and volitional aspirations in it make it an indispensable way:",
                answers: ["Creation of works of art", "Transformation of reality", "Cognition of reality", "Anticipation of the future", "Descriptions of reality"],
                correct: 2
            },
            {
                question: "Reality in its aesthetic richness, in its universal value, refracted through the personality of the artist, appears as:",
                answers: ["The basis of religion", "The subject of knowledge", "The subject of art", "The subject of science", "Fiction"],
                correct: 2
            },
            {
                question: "The highest degree of beauty in man and society with its incomplete embodiment in reality:",
                answers: ["Fiction", "The aesthetic ideal", "Artwork", "The process of creation", "The result of creation"],
                correct: 1
            },
            {
                question: "The associative process, in which not the natural laws of the development of a phenomenon are revealed, but its connections with a person, its significance for a person, is called:",
                answers: ["Abstract cognition", "Logical thinking", "Scientific cognition", "Artistic knowledge", "Religion knowledge"],
                correct: 3
            },
            {
                question: "In the process of creation by primitive man of images necessary for the transmission of ideas about reality, they are formed:",
                answers: ["Painting, graphics and sculpture", "Literature and poetry", "Writing and science", "Play and theater", "Architecture"],
                correct: 0
            },
            {
                question: "The art and theory of interpreting texts is called:",
                answers: ["Artistic communication", "Hermeneutics", "Semiotics", "Poetics", "Semantics"],
                correct: 1
            },
            {
                question: "The coincidence of an object created by primitive people with his idea of a perfect object gave rise to man:",
                answers: ["Aesthetic pleasure", "Aesthetic judgment", "Aesthetic theory", "Aesthetic ideal", "Understanding aesthetics"],
                correct: 0
            },
            {
                question: "In Ancient Greece, an idea that governed the creation of works of art with correspondence to the physical world that understood as a model for beauty, truth, and the good:",
                answers: ["logos", "anamnesis", "gnosis", "eidos", "mimesis"],
                correct: 4
            },
            {
                question: "Hermeneutics is:",
                answers: ["The art of explanation and interpretation", "A form of classical science of language", "Irrational philosophy", "A form of worldview", "All of the above"],
                correct: 0
            },
            {
                question: "The aesthetic attitude towards reality is determined by the value of:",
                answers: ["True knowledge", "Material wealth", "The sacred", "The beautiful", "Thinking"],
                correct: 3
            }
        ]
    },
    {
        id: 9,
        title: "Тест 9",
        questions: [
            {
                question: "Philosopher and theologian who put forward five proofs for the existence of God:",
                answers: ["Aurelius Augustine", "William of Ockham", "Roger Bacon", "Thomas Aquinas", "Anselm of Canterbury"],
                correct: 3
            },
            {
                question: "What is the translation of the word \"religio\" from Latin?:",
                answers: ["bind, connect", "person", "faith, cult", "worshipping", "idol"],
                correct: 0
            },
            {
                question: "The belief that God is present in all things of nature:",
                answers: ["Pantheism", "Syncretism", "Animism", "Theology", "Anthropology"],
                correct: 0
            },
            {
                question: "Who said: \"Religion is the opium of the masses\"?:",
                answers: ["Marx", "Kierkegaard", "Nietzsche", "Freud", "Schopenhauer"],
                correct: 0
            },
            {
                question: "An ancient Egyptian text is:",
                answers: ["The Book of Songs", "The Book of Rites", "The Book of Dead", "The Book of Changes", "The Book of Sacrifice"],
                correct: 2
            },
            {
                question: "The sacred book of Zoroastrianism is:",
                answers: ["The Vedas", "Praise of Death", "The Book of History", "The Avesta", "The Book of Songs"],
                correct: 3
            },
            {
                question: "Religion and the fear of death are the two greatest sources of fear, according to:",
                answers: ["Zeno", "Plotinus", "Epicurus", "Socrates", "Chrysippus"],
                correct: 2
            },
            {
                question: "The collection of early Buddhist texts is called:",
                answers: ["The Vedas", "The Mahabharata", "The Tripitaka", "The Brahmanas", "The Ramayana"],
                correct: 2
            },
            {
                question: "The most comprehensive information about early Buddhism is contained in the collection:",
                answers: ["\"The Three Baskets\"", "\"The Three Jewels\"", "\"The Forest Books\"", "\"The Analects\"", "\"The Laws of Manu\""],
                correct: 0
            },
            {
                question: "The first truth of Buddhism is:",
                answers: ["Do no harm", "Non-action", "Life is suffering", "The soul does not exist after a person's death", "The meaning of life is in pleasure"],
                correct: 2
            },
            {
                question: "The incompatibility of faith and philosophy was argued by:",
                answers: ["Al-Kindi", "Al-Farabi", "Ibn Sina", "Ibn Rushd", "Al-Ghazali"],
                correct: 4
            },
            {
                question: "The \"ontological proof\" of the existence of God (i.e., based on the very concept of God) was proposed by:",
                answers: ["Augustine of Hippo", "William of Ockham", "Thomas Aquinas", "Anselm of Canterbury", "Peter Abelard"],
                correct: 3
            },
            {
                question: "The philosophical basis of Augustine's worldview is:",
                answers: ["Philosophy of Aristotle", "Atomistic theory", "Epicureanism", "Neoplatonism", "Stoicism"],
                correct: 3
            },
            {
                question: "If faith helps in practical life, then believe in God, but if not, then do not believe, thought:",
                answers: ["Georg Hegel", "William James", "John Dewey", "John Stuart Mill", "Immanuel Kant"],
                correct: 1
            },
            {
                question: "\"Word, Life, Science, Creation, Power, Insight, Sensitivity, Justice\" are the \"eight faces\" of Allah, which is called by:",
                answers: ["Chokan Valikhanov", "Akhmet Baitursynov", "Magzhan Zhumabayev", "Abai Kunanbayev", "Mustafa Shokay"],
                correct: 3
            },
            {
                question: "According to Abai, \"the Power of the Most High is expressed in ...\":",
                answers: ["Science and mercy", "Technology and nature", "Art and culture", "Human and society", "Law and virtue"],
                correct: 0
            },
            {
                question: "The author of the works \"Canons of Islam\" and \"Notes of the Forgotten\" is:",
                answers: ["Abai Kunanbayev", "Shakarim Kudaibergenov", "Chokan Valikhanov", "Mırzakıp Dulatov", "Ibrahim Altynsarin"],
                correct: 1
            },
            {
                question: "The six classical orthodox Vedic schools are:",
                answers: ["Vedanta, Samkhya, Yoga, Nyaya, Vaisheshika, Mimamsa", "Jainism, Charvaka, Yoga, Nyaya, Mimamsa, Vaisheshika", "Lokayata, Samkhya, Vedanta, Buddhism, Yoga, Mimamsa", "Vedanta, Samkhya, Yoga, Nyaya, Buddhism, Hinduism", "Jainism, Charvaka, Samkhya, Nyaya, Mimamsa, Lokayata"],
                correct: 0
            },
            {
                question: "A distinctive feature of the worldview of the French enlighteners, associated with their anti-theological activities is the following:",
                answers: ["Anticlericalism", "Secularism", "Humanism", "Enlightenment", "Atheism"],
                correct: 0
            },
            {
                question: "\"Less superstition - less bigotry, less bigotry - less misery and misfortune\" - these to this day are actual words that have been spoken:",
                answers: ["Diderot", "Rousseau", "Voltaire", "Holbach", "Condorcet"],
                correct: 2
            },
            {
                question: "The doctrine of the finale of world history, about the ultimate fate of the world and man:",
                answers: ["Eschatology", "Occultism", "Metempsychosis", "The theory of death", "The theory of end"],
                correct: 0
            },
            {
                question: "According to G. Hegel, the true engine of history is:",
                answers: ["Natural selection", "Class struggle", "The world spirit", "Historical figures", "Spiritual values"],
                correct: 2
            },
            {
                question: "The caste system is a common feature of many ancient Eastern civilizations. Where did the caste system find its classical embodiment?:",
                answers: ["in China", "in India", "in Babylon", "in Mesopotamia", "in Egypt"],
                correct: 1
            },
            {
                question: "In contrast to Vedic philosophy, Buddhism sees the possibility of liberation from rebirth:",
                answers: ["in strict adherence to rituals", "in realizing the illusion of the \"self\"", "in the daily recitation of mantras", "in the mortification of the flesh", "There is no correct answer"],
                correct: 1
            },
            {
                question: "Which religion is not a world religion?:",
                answers: ["Christianity", "Islam", "Judaism", "Buddhism", "There is no correct answer"],
                correct: 2
            }
        ]
    },
    {
        id: 10,
        title: "Тест 10",
        questions: [
            {
                question: "The term \"axial time\" was proposed by:",
                answers: ["K. Jaspers", "K. Popper", "A. Camus", "J. Derrida", "M. Heidegger"],
                correct: 0
            },
            {
                question: "Who introduced the concept of \"archetype\" into psychoanalysis:",
                answers: ["E. Fromm", "K. Jung", "Z. Freud", "F. Nietzsche", "A. Schopenhauer"],
                correct: 1
            },
            {
                question: "Author of the game concept of culture:",
                answers: ["O. Spengler", "J. Huizinga", "F. Nietzsche", "S. Freud", "N. Berdyaev"],
                correct: 1
            },
            {
                question: "According to Al Farabi, the ideal of society:",
                answers: ["city of the sun", "city of panic", "city of virtues", "city of ambitions", "city of freedom and collectivity"],
                correct: 2
            },
            {
                question: "Who has been looking for \"Zheruyyk\" (the promised land) all his life:",
                answers: ["Shalkiiz-zhyrau", "Asan-kaigy", "Bukhar-zhyrau", "Dospambet-zhyrau", "Akan-seri"],
                correct: 1
            },
            {
                question: "The concept of an \"open society\" was developed by:",
                answers: ["Popper", "Plato", "Hegel", "Hobbes", "Spinoza"],
                correct: 0
            },
            {
                question: "Western attitude towards Middle Eastern, Asian and African societies that characterizes these societies as static and undeveloped:",
                answers: ["medievalism", "westernism", "orientalism", "occidentalism", "easternism"],
                correct: 2
            },
            {
                question: "According to Rousseau, fundamental social problems can be solved by:",
                answers: ["Properly organized education and training", "Development of science and technology", "Strengthening the role of the church in society", "Expanding the powers of government bodies", "Accelerating any religion"],
                correct: 0
            },
            {
                question: "The theory of \"social contract\" in French Enlightenment was proposed by:",
                answers: ["D'Alembert", "Holbach", "Diderot", "Rousseau", "Montesquieu"],
                correct: 3
            },
            {
                question: "In T. Hobbes' social theory, the \"Leviathan\" becomes:",
                answers: ["The ruling class", "The state", "The church", "Moral norms", "Science"],
                correct: 1
            },
            {
                question: "A utopian program for universal social transformation based on communal ownership was presented by:",
                answers: ["Confucius in \"Conversations and Judgments\"", "Tommaso Campanella in \"The City of the Sun\"", "Plato in \"The Republic\"", "Charles de Montesquieu in \"The Spirit of the Laws\"", "Michel de Montaigne in \"Essays\""],
                correct: 1
            },
            {
                question: "The founder of utopian socialism is the author of the treatise \"Utopia\":",
                answers: ["Thomas More", "Charles de Montesquieu", "Michel de Montaigne", "Claude Henri de Rouvroy, comte de Saint-Simon", "Charles Fourier"],
                correct: 0
            },
            {
                question: "Hegel views the historical process as:",
                answers: ["Social progress", "The process of changing socio-economic formations", "The progress of the spirit in the consciousness of freedom", "Scientific and technological progress", "The succession of scientific paradigms"],
                correct: 2
            },
            {
                question: "Progress in economics does not always coincide with progress in culture or morality, believed:",
                answers: ["Diderot", "Marx", "Martin Buber", "Johann Gottlieb Fichte", "Herbert Spencer"],
                correct: 4
            },
            {
                question: "\"Civilization\" is considered the final stage of development of any culture by:",
                answers: ["Oswald Spengler", "Nikolai Danilevsky", "Arnold J. Toynbee", "Karl Jaspers", "Martin Buber"],
                correct: 0
            },
            {
                question: "In his study of history, Oswald Spengler applied the method of:",
                answers: ["Dialectics", "Morphology", "Deduction", "Induction", "Metaphysics"],
                correct: 1
            },
            {
                question: "According to Spengler, the cause of the \"transformation\" of culture into \"civilization\" is:",
                answers: ["Dominance of technicism", "Massification of culture", "Decline of morals", "Globalization", "Struggle for power"],
                correct: 0
            },
            {
                question: "\"Evolution\" is the central concept in the doctrine of:",
                answers: ["John Stuart Mill", "Herbert Spencer", "Auguste Comte", "Saint-Simon", "Jean-Jacques Rousseau"],
                correct: 1
            },
            {
                question: "The concept of \"ideal type\" was introduced by:",
                answers: ["M. Weber", "K. Marx", "E. Cassirer", "H. Rickert", "E. Durkheim"],
                correct: 0
            },
            {
                question: "In the work \"A Study of History,\" Arnold Toynbee arrives at the idea that:",
                answers: ["Culture, transforming into civilization, perishes", "There is no single human civilization", "The salvation of humanity is connected with overcoming the disunity of countries and peoples", "Civilizations could only arise on great rivers", "The source of social development is class struggle"],
                correct: 1
            },
            {
                question: "Local civilizations are a \"response\" to the \"challenge\" of the socio-natural environment, believed:",
                answers: ["Karl Marx", "Elie Metchnikoff", "Oswald Spengler", "Nikolai Danilevsky", "Arnold Toynbee"],
                correct: 4
            },
            {
                question: "Totalitarianism finds its origins in the philosophy of Plato:",
                answers: ["Karl Popper in \"The Open Society and Its Enemies\"", "Karl Jaspers in \"The Meaning and Purpose of History\"", "Arnold Toynbee in \"A Study of History\"", "Bertrand Russell in \"The Conquest of Happiness\"", "Oswald Spengler in \"The Decline of the West\""],
                correct: 0
            },
            {
                question: "In the work \"The Third Wave,\" American futurologist Alvin Toffler defines modern society as:",
                answers: ["Eco-humanistic", "Computer-based", "Informational", "Civil", "Industrial"],
                correct: 2
            },
            {
                question: "The concept of the \"post-industrial society\" was proposed by:",
                answers: ["Zbigniew Brzezinski", "Alvin Toffler", "Walt Whitman Rostow", "Daniel Bell", "John Kenneth Galbraith"],
                correct: 3
            },
            {
                question: "The concept of \"social and economic formation\" was introduced by:",
                answers: ["Marx", "Weber", "Smith", "Ricardo", "Lenin"],
                correct: 0
            },
            {
                question: "The philosopher who first introduced the distinction between culture and civilisation, contrasting the two:",
                answers: ["J.-J.Rousseau", "O. Spengler", "A. Toynbee", "N. Berdyaev", "F. Schelling"],
                correct: 1
            },
            {
                question: "For O. Spengler civilisation is:",
                answers: ["Decline of Culture", "Blossoming of Culture", "Stabilization of Culture", "Uprising of the Masses", "Progress of Culture"],
                correct: 0
            },
            {
                question: "The authors of the \"open and closed society\" theory:",
                answers: ["J.-P. Sartre, A. Camus", "A. Adler, R. Laing", "K. Marx, E. Fromm", "S. Freud, C.G. Jung", "A. Bergson, K. Popper"],
                correct: 4
            },
            {
                question: "The opposition between the concepts of culture and civilisation was first presented in the work:",
                answers: ["A. Toynbee \"Culture and Civilization\"", "O. Spengler \"The Decline of the West\"", "M. Weber \"The Protestant Ethic and the Spirit of Capitalism\"", "J. Collingwood \"The Idea of History\"", "S.L. Frank \"Spiritual Foundations of Society\""],
                correct: 1
            },
            {
                question: "According to O. Spengler's definition, civilization is...:",
                answers: ["Twilight of the gods", "the decline of Europe", "The birth of culture", "The death of culture", "the beginning of the society"],
                correct: 3
            },
            {
                question: "Plato wrote in his dialogue \"The State\" that if the rulers cease to be wise, the aristocracy gives way to:",
                answers: ["Timocracy", "Politics", "Oligarchies", "Democracy", "Despotism"],
                correct: 0
            },
            {
                question: "In the sociology of power, Max Weber identified three types of legitimization of power:",
                answers: ["rational, empirical, mechanical", "rational, empirical, charismatic", "rational, traditional, charismatic", "Traditional, deliberative, executive", "executive, advisory, judicial"],
                correct: 2
            },
            {
                question: "The primary basis for uniting people into society, from the point of view of Emile Durkheim, is:",
                answers: ["social, i.e. other-oriented, action", "the consistency of those fundamental norms and values that guide people in their lives", "The commonality of the central government, territorial integrity and harmony of the center and the periphery", "The socialization of all its members", "A supra-individual community based on solidarity as a \"collective consciousness\" and opposed to natural selfishness"],
                correct: 4
            },
            {
                question: "The basis of the formation classification of society is the division of society:",
                answers: ["according to the method of production and exchange", "by the presence or absence of writing", "according to the peculiarities of government structures", "according to the degree of stability", "according to the degree of civilization"],
                correct: 0
            },
            {
                question: "The founder of the doctrine of cultural and historical types of society is:",
                answers: ["Georg Hegel", "Karl Marx", "Max Weber", "Nikolay Danilevsky", "Pitirim Sorokin"],
                correct: 3
            },
            {
                question: "Oswald Spengler in his cultural concept focuses on the consideration of three historical cultures: ancient, European and Arab. Three \"souls\" correspond to them:",
                answers: ["Apollonian, Dionysian, and Faustian", "Apollonian, Faustian, magical", "magical, aesthetic, ethical", "religious, metaphysical, positive", "aesthetic, ethical, religious"],
                correct: 1
            },
            {
                question: "An open society, according to Popper's definition, is a type of society characterized by:",
                answers: ["dynamic social structure and traditionalism", "the ability to innovate and limited mobility", "Individualism and democratic pluralistic ideology", "Criticism and a static social structure", "high mobility and dogmatic authoritarian ideology"],
                correct: 2
            },
            {
                question: "Social cognition is characterized by ...:",
                answers: ["Absolutely arbitrary subjective construction of social representations", "Impossibility of objective cognition of social phenomena due to the influence of the interests and values of the cognizing subject on the result of cognition", "Complete separation of the subject and the object of cognition", "Complete or partial identity of the subject and the object of cognition of social reality", "Opposition of the subject and the object of cognition"],
                correct: 3
            },
            {
                question: "The study of the internal interrelation of the elements that make up the social system, as well as the tasks they perform, is a distinctive feature of the method of social philosophy:",
                answers: ["Cross-cultural", "Structural and functional", "Historical and methodological", "Morphological and genealogical", "Semantic and structural"],
                correct: 1
            },
            {
                question: "The substance of the material and industrial sphere of life is ...:",
                answers: ["Man as a biosocial being", "Human labor as a conscious expedient activity", "Means of production", "Spiritual needs of man and society", "Material values"],
                correct: 1
            },
            {
                question: "The impact of limited resources on population growth was studied by:",
                answers: ["A. Smith", "T. Malthus", "K. Marx", "N. Machiavelli", "L. Pacioli"],
                correct: 1
            },
            {
                question: "Representative of the civilizational approach in the study of historical development:",
                answers: ["A. Toynbee", "F. Nietzsche", "K. Marx", "N. Berdyaev", "U. Rostow"],
                correct: 0
            },
            {
                question: "The stage of world history, which replaced the savagery and barbarism of mankind, began to be designated by the concept of ...:",
                answers: ["Culture", "The company", "Formation", "Civilization", "Globalization"],
                correct: 3
            },
            {
                question: "What is the source of fundamental qualitative changes in society according to the materialistic theory of the historical process:",
                answers: ["Moral improvement of society", "Geographical environment", "Development of material production", "Effective political leadership", "Aesthetics worldview"],
                correct: 2
            },
            {
                question: "The factor that, according to social Darwinism, is the main driving force of the development of society:",
                answers: ["The struggle for existence", "The world spirit", "Class struggle", "The will of outstanding people", "Revolutions"],
                correct: 0
            },
            {
                question: "The process of historical and evolutionary emergence of society:",
                answers: ["Sociogenesis", "Coevolution", "Anthropogenesis", "Socialization", "Development"],
                correct: 0
            },
            {
                question: "Transformation, change, restructuring of any aspect of social life that does not destroy the foundations of the existing social structure is:",
                answers: ["Revolution", "Progress", "Regression", "Reform", "Evolution"],
                correct: 3
            },
            {
                question: "The idea of the \"spirit of laws\" by S. Montesquieu marked the beginning of the direction:",
                answers: ["Social fatalism", "Spiritual Monism", "European Humanism", "Linear determinism", "Geographical determinism"],
                correct: 4
            },
            {
                question: "The modern trend attaches the main importance to the factor of chance in the self-development of society:",
                answers: ["Structuralism", "Synergetic", "Postmodernism", "Hermeneutics", "Eclecticism"],
                correct: 1
            },
            {
                question: "The author of conception \"The End of History\":",
                answers: ["F. Fukuyama", "A. Toynbee", "M. Weber", "O. Spengler", "D. Bell"],
                correct: 0
            },
            {
                question: "The concept of \"philosophy of history\" was proposed by philosopher:",
                answers: ["Voltaire", "Karl Marx", "Ludwig Feuerbach", "Georg Wilhelm Friedrich Hegel", "Immanuel Kant"],
                correct: 0
            }
        ]
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
