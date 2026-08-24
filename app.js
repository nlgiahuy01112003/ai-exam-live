let currentQuestion = 0;
let score = 0;
let answered = false;
let timeLeft = 45 * 60; // 45 phút
let timerInterval;

const elements = {
    startScreen: document.getElementById('start-screen'),
    quizContainer: document.getElementById('quiz-container'),
    resultScreen: document.getElementById('result-screen'),
    timer: document.getElementById('timer'),
    badge: document.getElementById('question-badge'),
    qText: document.getElementById('question-text'),
    optCont: document.getElementById('options-container'),
    essayCont: document.getElementById('essay-container'),
    essayInput: document.getElementById('essay-input'),
    btnCheck: document.getElementById('btn-check'),
    btnNext: document.getElementById('btn-next'),
    btnFinish: document.getElementById('btn-finish'),
    expCont: document.getElementById('explanation-container'),
    expText: document.getElementById('explanation-text'),
    progText: document.getElementById('progress-text'),
    progBar: document.getElementById('progress-bar')
};

function startExam() {
    elements.startScreen.classList.add('hidden');
    elements.quizContainer.classList.remove('hidden');
    elements.timer.classList.remove('hidden');
    
    timerInterval = setInterval(() => {
        timeLeft--;
        const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const s = (timeLeft % 60).toString().padStart(2, '0');
        elements.timer.innerText = `${m}:${s}`;
        if(timeLeft <= 300) elements.timer.classList.add('text-red-300', 'bg-red-900');
        if(timeLeft <= 0) finishExam();
    }, 1000);
    
    loadQuestion();
}

function loadQuestion() {
    answered = false;
    const q = quizData[currentQuestion];
    
    elements.expCont.classList.add('hidden');
    elements.btnCheck.classList.remove('hidden');
    elements.btnNext.classList.add('hidden');
    elements.optCont.innerHTML = '';
    
    elements.progText.innerText = `Câu hỏi ${currentQuestion + 1} / ${quizData.length}`;
    elements.progBar.style.width = `${((currentQuestion) / quizData.length) * 100}%`;
    
    elements.badge.innerText = q.category;
    elements.qText.innerHTML = q.question;

    if (q.type === 'mcq') {
        elements.optCont.classList.remove('hidden');
        elements.essayCont.classList.add('hidden');
        q.options.forEach((opt, idx) => {
            elements.optCont.innerHTML += `
                <label class="flex items-center p-4 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 option-label" id="label-${idx}">
                    <input type="radio" name="mcq" value="${idx}" class="w-5 h-5 text-blue-600 focus:ring-blue-500">
                    <span class="ml-3 font-medium text-slate-700">${opt}</span>
                </label>`;
        });
    } else {
        elements.optCont.classList.add('hidden');
        elements.essayCont.classList.remove('hidden');
        elements.essayInput.value = '';
        elements.essayInput.disabled = false;
        elements.btnCheck.innerHTML = '<i class="fas fa-eye mr-2"></i>Xem đáp án chuẩn';
    }

    if(currentQuestion === quizData.length - 1) {
        elements.btnNext.classList.add('hidden');
    }

    // Trigger MathJax & HighlightJS after DOM is updated
    renderFormats();
}

function checkAnswer() {
    if (answered) return;
    const q = quizData[currentQuestion];
    
    if (q.type === 'mcq') {
        const selected = document.querySelector('input[name="mcq"]:checked');
        if (!selected) {
            alert('Vui lòng chọn đáp án!');
            return;
        }
        const val = parseInt(selected.value);
        if (val === q.correct) score++;

        document.querySelectorAll('.option-label').forEach((lbl, idx) => {
            lbl.querySelector('input').disabled = true;
            if (idx === q.correct) {
                lbl.classList.add('border-emerald-500', 'bg-emerald-50');
                lbl.innerHTML += '<i class="fas fa-check-circle text-emerald-500 ml-auto text-xl"></i>';
            } else if (idx === val && val !== q.correct) {
                lbl.classList.add('border-rose-500', 'bg-rose-50');
                lbl.innerHTML += '<i class="fas fa-times-circle text-rose-500 ml-auto text-xl"></i>';
            }
        });
    } else {
        elements.essayInput.disabled = true;
    }

    elements.expText.innerHTML = q.explanation;
    elements.expCont.classList.remove('hidden');
    elements.btnCheck.classList.add('hidden');
    
    if (currentQuestion < quizData.length - 1) {
        elements.btnNext.classList.remove('hidden');
    } else {
        elements.btnFinish.classList.remove('hidden');
    }
    
    answered = true;
    renderFormats();
}

function nextQuestion() {
    currentQuestion++;
    loadQuestion();
}

function finishExam() {
    clearInterval(timerInterval);
    elements.quizContainer.classList.add('hidden');
    elements.resultScreen.classList.remove('hidden');
    const mcqCount = quizData.filter(q => q.type === 'mcq').length;
    document.getElementById('score-display').innerText = `${score}/${mcqCount}`;
    document.getElementById('score-message').innerText = (score/mcqCount >= 0.7) ? "Xuất sắc! Kiến thức rất vững." : "Hãy ôn tập thêm nhé!";
}

// Hàm gọi MathJax & HighlightJS để làm đẹp code và toán
function renderFormats() {
    if (window.MathJax) {
        MathJax.typesetPromise([elements.quizContainer]).catch(err => console.log(err));
    }
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });
}
