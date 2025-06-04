// Game data and state
const quizData = [
  {
    "id": 1,
    "language": "english",
    "question": "What is the most common cause of cataracts?",
    "options": ["Aging", "Eye injury", "Diabetes", "UV exposure"],
    "correct": 0,
    "explanation": "Aging is the most common cause of cataracts. Most cataracts develop when aging changes the tissue that makes up the eye's lens, with proteins and fibers beginning to break down."
  },
  {
    "id": 2,
    "language": "spanish",
    "question": "¿Cuál es el síntoma más común de las cataratas?",
    "options": ["Dolor en los ojos", "Visión borrosa o nublada", "Ojos rojos", "Lagrimeo excesivo"],
    "correct": 1,
    "explanation": "La visión borrosa o nublada es el síntoma más común de las cataratas. Las personas con cataratas describen ver como a través de una ventana empañada."
  },
  {
    "id": 3,
    "language": "english",
    "question": "Which part of the eye is affected by cataracts?",
    "options": ["Cornea", "Lens", "Retina", "Iris"],
    "correct": 1,
    "explanation": "Cataracts affect the lens of the eye. A cataract occurs when the normally clear lens becomes cloudy due to protein clumping."
  },
  {
    "id": 4,
    "language": "spanish",
    "question": "¿Qué vitamina se conoce como 'la vitamina del ojo'?",
    "options": ["Vitamina C", "Vitamina D", "Luteína", "Vitamina B12"],
    "correct": 2,
    "explanation": "La luteína se conoce como 'la vitamina del ojo' porque es un carotenoide que se concentra en la mácula y retina, ayudando a filtrar la luz azul dañina."
  },
  {
    "id": 5,
    "language": "english",
    "question": "What percentage of people over age 80 have cataracts or have had cataract surgery?",
    "options": ["25%", "40%", "More than 50%", "75%"],
    "correct": 2,
    "explanation": "More than 50% of people over age 80 either have cataracts or have had surgery to remove them, making it an extremely common age-related condition."
  },
  {
    "id": 6,
    "language": "spanish",
    "question": "¿Cuál es la presión ocular normal?",
    "options": ["5-10 mm Hg", "12-22 mm Hg", "25-30 mm Hg", "35-40 mm Hg"],
    "correct": 1,
    "explanation": "La presión ocular normal varía entre 12 y 22 mm Hg. Una presión superior a 22 mm Hg se considera elevada y puede ser un factor de riesgo para el glaucoma."
  },
  {
    "id": 7,
    "language": "english",
    "question": "Which eye condition is the leading cause of blindness in people over 60?",
    "options": ["Cataracts", "Glaucoma", "Diabetic retinopathy", "Dry eye"],
    "correct": 1,
    "explanation": "Glaucoma is one of the leading causes of blindness for people over 60, often called the 'silent thief of sight' because it typically has no early symptoms."
  },
  {
    "id": 8,
    "language": "spanish",
    "question": "¿Qué significa 'presbicia'?",
    "options": ["Ojo seco", "Ojo viejo", "Ojo rojo", "Ojo grande"],
    "correct": 1,
    "explanation": "Presbicia literalmente significa 'ojo viejo' y se refiere a la dificultad para enfocar objetos cercanos que ocurre naturalmente con la edad, comenzando típicamente después de los 40 años."
  },
  {
    "id": 9,
    "language": "english",
    "question": "How long does cataract surgery typically take?",
    "options": ["30-60 minutes", "10-20 minutes", "2-3 hours", "Half a day"],
    "correct": 1,
    "explanation": "Cataract surgery typically takes 10 to 20 minutes to complete, depending on the severity of the condition. It's one of the most commonly performed and safest surgical procedures."
  },
  {
    "id": 10,
    "language": "spanish",
    "question": "¿Cuál es la causa principal de la degeneración macular relacionada con la edad?",
    "options": ["Fumar", "Envejecimiento", "Diabetes", "Hipertensión"],
    "correct": 1,
    "explanation": "El envejecimiento es la causa principal de la degeneración macular relacionada con la edad (DMRE). Esta condición afecta la mácula, la parte central de la retina responsable de la visión central."
  },
  {
    "id": 11,
    "language": "english",
    "question": "What does UV 400 on sunglasses mean?",
    "options": ["400 degrees of protection", "Blocks 400% of light", "Blocks light up to 400 nanometers", "400 minutes of protection"],
    "correct": 2,
    "explanation": "UV 400 means the sunglasses block ultraviolet light up to 400 nanometers, providing 100% protection from both UVA and UVB rays, which is essential for eye health."
  },
  {
    "id": 12,
    "language": "spanish",
    "question": "¿Qué parte del ojo es responsable de la visión central aguda?",
    "options": ["Córnea", "Iris", "Mácula", "Pupila"],
    "correct": 2,
    "explanation": "La mácula es la parte de la retina responsable de la visión central aguda. Es la que nos permite ver detalles finos y realizar actividades como leer y reconocer rostros."
  },
  {
    "id": 13,
    "language": "english",
    "question": "Which nutrient is most beneficial for preventing age-related macular degeneration?",
    "options": ["Vitamin D", "Lutein and Zeaxanthin", "Calcium", "Iron"],
    "correct": 1,
    "explanation": "Lutein and zeaxanthin are carotenoids that accumulate in the macula and help protect against age-related macular degeneration by filtering harmful blue light and providing antioxidant protection."
  },
  {
    "id": 14,
    "language": "spanish",
    "question": "¿Con qué frecuencia deben hacerse exámenes oculares las personas mayores de 65 años?",
    "options": ["Cada 5 años", "Cada 3 años", "Cada 1-2 años", "Solo si hay problemas"],
    "correct": 2,
    "explanation": "Las personas mayores de 65 años deben hacerse exámenes oculares cada 1-2 años para detectar tempranamente enfermedades oculares como glaucoma, cataratas y degeneración macular."
  },
  {
    "id": 15,
    "language": "english",
    "question": "What causes dry eye syndrome?",
    "options": ["Too many tears", "Imbalanced tear composition", "Large pupils", "Thick eyelashes"],
    "correct": 1,
    "explanation": "Dry eye syndrome is caused by imbalanced tear composition - when there's insufficient tear film or the mix of oil, water, and mucous in tears is not balanced properly."
  },
  {
    "id": 16,
    "language": "spanish",
    "question": "¿Cuál es el nombre médico para las gafas de lectura?",
    "options": ["Lentes bifocales", "Corrección para presbicia", "Lentes de contacto", "Gafas de sol"],
    "correct": 1,
    "explanation": "Las gafas de lectura son una corrección para la presbicia, que es la pérdida natural de la capacidad de enfocar objetos cercanos que ocurre con la edad."
  },
  {
    "id": 17,
    "language": "english",
    "question": "Which of these foods is highest in lutein?",
    "options": ["Carrots", "Kale", "Blueberries", "Salmon"],
    "correct": 1,
    "explanation": "Kale contains about 23.8 mg of lutein per cup, making it one of the highest sources. Dark green leafy vegetables like kale, spinach, and collard greens are excellent sources of lutein."
  },
  {
    "id": 18,
    "language": "spanish",
    "question": "¿Qué significa cuando los colores se ven 'desvanecidos' o amarillentos?",
    "options": ["Problema con el iris", "Signo de cataratas", "Presión ocular alta", "Problema con las pestañas"],
    "correct": 1,
    "explanation": "Cuando los colores se ven desvanecidos o amarillentos, es un signo común de cataratas. Esto ocurre porque el cristalino nublado filtra y altera la forma en que se perciben los colores."
  },
  {
    "id": 19,
    "language": "english",
    "question": "What percentage of US adults aged 71 and older have vision impairment?",
    "options": ["15%", "22%", "27.8%", "35%"],
    "correct": 2,
    "explanation": "According to recent studies, 27.8% of US adults aged 71 and older have vision impairment, which is higher than previous estimates and highlights the importance of eye care in aging."
  },
  {
    "id": 20,
    "language": "spanish",
    "question": "¿Cuál es el beneficio principal de usar lentes de sol con protección UV?",
    "options": ["Mejorar la visión nocturna", "Prevenir cataratas y degeneración macular", "Cambiar el color de los ojos", "Reducir las arrugas"],
    "correct": 1,
    "explanation": "El beneficio principal de los lentes de sol con protección UV es prevenir cataratas y degeneración macular al proteger los ojos de los rayos ultravioleta dañinos del sol."
  }
];

// Game state
let gameState = {
  currentQuestion: 0,
  score: 0,
  englishScore: 0,
  spanishScore: 0,
  answers: [],
  isGameActive: false,
  hasAnswered: false
};

// DOM elements
const screens = {
  welcome: document.getElementById('welcome-screen'),
  game: document.getElementById('game-screen'),
  results: document.getElementById('results-screen'),
  review: document.getElementById('review-screen')
};

const gameElements = {
  currentQuestion: document.getElementById('current-question'),
  currentScore: document.getElementById('current-score'),
  progressFill: document.getElementById('progress-fill'),
  languageIndicator: document.getElementById('language-indicator'),
  questionText: document.getElementById('question-text'),
  optionsContainer: document.getElementById('options-container'),
  feedbackContainer: document.getElementById('feedback-container'),
  feedbackResult: document.getElementById('feedback-result'),
  feedbackExplanation: document.getElementById('feedback-explanation'),
  nextBtn: document.getElementById('next-btn')
};

const resultElements = {
  finalScore: document.getElementById('final-score'),
  performanceTitle: document.getElementById('performance-title'),
  performanceMessage: document.getElementById('performance-message'),
  englishScore: document.getElementById('english-score'),
  spanishScore: document.getElementById('spanish-score')
};

// Screen management
function showScreen(screenName) {
  Object.values(screens).forEach(screen => screen.classList.remove('active'));
  screens[screenName].classList.add('active');
}

// Game functions
function startGame() {
  gameState = {
    currentQuestion: 0,
    score: 0,
    englishScore: 0,
    spanishScore: 0,
    answers: [],
    isGameActive: true,
    hasAnswered: false
  };
  
  showScreen('game');
  displayQuestion();
}

function displayQuestion() {
  const question = quizData[gameState.currentQuestion];
  gameState.hasAnswered = false;
  
  // Update header info
  gameElements.currentQuestion.textContent = gameState.currentQuestion + 1;
  gameElements.currentScore.textContent = gameState.score;
  
  // Update progress bar
  const progress = ((gameState.currentQuestion) / quizData.length) * 100;
  gameElements.progressFill.style.width = `${progress}%`;
  
  // Update language indicator
  gameElements.languageIndicator.textContent = question.language === 'english' ? 'English' : 'Español';
  gameElements.languageIndicator.style.background = question.language === 'english' ? 'var(--color-primary)' : 'var(--color-warning)';
  
  // Display question
  gameElements.questionText.textContent = question.question;
  
  // Create option buttons
  gameElements.optionsContainer.innerHTML = '';
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.className = 'option-button';
    button.onclick = () => selectAnswer(index);
    
    button.innerHTML = `
      <span class="option-letter">${String.fromCharCode(65 + index)}</span>
      <span class="option-text">${option}</span>
    `;
    
    gameElements.optionsContainer.appendChild(button);
  });
  
  // Hide feedback
  gameElements.feedbackContainer.classList.remove('show');
}

function selectAnswer(selectedIndex) {
  if (!gameState.isGameActive || gameState.hasAnswered) return;
  
  gameState.hasAnswered = true;
  const question = quizData[gameState.currentQuestion];
  const isCorrect = selectedIndex === question.correct;
  
  // Record answer
  gameState.answers.push({
    questionIndex: gameState.currentQuestion,
    selectedIndex: selectedIndex,
    isCorrect: isCorrect,
    question: question
  });
  
  // Update score
  if (isCorrect) {
    gameState.score++;
    if (question.language === 'english') {
      gameState.englishScore++;
    } else {
      gameState.spanishScore++;
    }
  }
  
  // Update current score display immediately
  gameElements.currentScore.textContent = gameState.score;
  
  // Visual feedback on buttons
  const buttons = gameElements.optionsContainer.querySelectorAll('.option-button');
  buttons.forEach((button, index) => {
    button.classList.add('disabled');
    button.onclick = null; // Disable clicks
    if (index === selectedIndex) {
      button.classList.add(isCorrect ? 'correct' : 'incorrect');
    }
    if (index === question.correct && !isCorrect) {
      button.classList.add('correct');
    }
  });
  
  // Show feedback
  showFeedback(isCorrect, question.explanation);
}

function showFeedback(isCorrect, explanation) {
  gameElements.feedbackResult.textContent = isCorrect 
    ? '✅ Correct! / ¡Correcto!' 
    : '❌ Incorrect / Incorrecto';
  gameElements.feedbackResult.className = `feedback-result ${isCorrect ? 'correct' : 'incorrect'}`;
  
  gameElements.feedbackExplanation.textContent = explanation;
  gameElements.feedbackContainer.classList.add('show');
  
  // Update next button text
  if (gameState.currentQuestion < quizData.length - 1) {
    gameElements.nextBtn.textContent = 'Next Question / Siguiente Pregunta';
  } else {
    gameElements.nextBtn.textContent = 'View Results / Ver Resultados';
  }
  
  // Scroll feedback into view
  gameElements.feedbackContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function nextQuestion() {
  if (!gameState.hasAnswered) return;
  
  gameState.currentQuestion++;
  
  if (gameState.currentQuestion < quizData.length) {
    displayQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  gameState.isGameActive = false;
  
  // Calculate performance
  const percentage = Math.round((gameState.score / quizData.length) * 100);
  let performanceMessage = '';
  
  if (percentage >= 90) {
    performanceMessage = 'Excellent! You have outstanding knowledge about eye health. / ¡Excelente! Tienes un conocimiento excepcional sobre salud ocular.';
  } else if (percentage >= 80) {
    performanceMessage = 'Very good! You have solid knowledge about eye health. / ¡Muy bien! Tienes conocimientos sólidos sobre salud ocular.';
  } else if (percentage >= 70) {
    performanceMessage = 'Good job! You have good basic knowledge about eye health. / ¡Buen trabajo! Tienes buenos conocimientos básicos sobre salud ocular.';
  } else if (percentage >= 60) {
    performanceMessage = 'Fair performance. Consider learning more about eye health. / Desempeño regular. Considera aprender más sobre salud ocular.';
  } else {
    performanceMessage = 'Keep learning! Eye health is important for everyone. / ¡Sigue aprendiendo! La salud ocular es importante para todos.';
  }
  
  // Update results display
  resultElements.finalScore.textContent = gameState.score;
  resultElements.performanceMessage.textContent = performanceMessage;
  resultElements.englishScore.textContent = `${gameState.englishScore}/10`;
  resultElements.spanishScore.textContent = `${gameState.spanishScore}/10`;
  
  showScreen('results');
}

function reviewAnswers() {
  const reviewList = document.getElementById('review-list');
  reviewList.innerHTML = '';
  
  gameState.answers.forEach((answer, index) => {
    const question = answer.question;
    const reviewItem = document.createElement('div');
    reviewItem.className = 'review-item';
    
    const selectedOption = question.options[answer.selectedIndex];
    const correctOption = question.options[question.correct];
    
    reviewItem.innerHTML = `
      <div class="review-question">
        <strong>Question ${index + 1} (${question.language === 'english' ? 'English' : 'Español'}):</strong>
        ${question.question}
      </div>
      <div class="review-answer ${answer.isCorrect ? 'correct' : 'incorrect'}">
        Your answer: ${selectedOption} ${answer.isCorrect ? '✅' : '❌'}
      </div>
      ${!answer.isCorrect ? `<div class="review-answer correct">Correct answer: ${correctOption} ✅</div>` : ''}
      <div class="review-explanation">
        ${question.explanation}
      </div>
    `;
    
    reviewList.appendChild(reviewItem);
  });
  
  showScreen('review');
}

function restartGame() {
  startGame();
}

// Initialize the game
document.addEventListener('DOMContentLoaded', function() {
  showScreen('welcome');
  
  // Add keyboard navigation support
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      const activeElement = document.activeElement;
      if (activeElement.classList.contains('option-button') && !gameState.hasAnswered) {
        activeElement.click();
      } else if (activeElement.id === 'next-btn' && gameState.hasAnswered) {
        activeElement.click();
      }
    }
  });
});