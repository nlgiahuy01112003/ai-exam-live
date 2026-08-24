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

// [UX Tối ưu] Hiển thị điểm cao nhất nếu có từ Local Storage
window.onload = () => {
    const highScore = localStorage.getItem('aiExamHighScore');
    if (highScore !== null) {
        const hsBadge = document.createElement('div');
        hsBadge.className = 'mt-6 text-emerald-600 font-bold bg-emerald-50 inline-block px-5 py-2 rounded-full border border-emerald-200 fade-in';
        hsBadge.innerHTML = `<i class="fas fa-medal text-xl mr-2"></i> Thành tích cao nhất của bạn: ${highScore} điểm`;
        elements.startScreen.appendChild(hsBadge);
    }
};

function startExam() {
    // Trộn ngẫu nhiên thứ tự câu hỏi
    quizData.sort(() => Math.random() - 0.5);

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
        
        // [UX Tối ưu] Xáo trộn vị trí các đáp án A, B, C, D 
        // Nhưng vẫn giữ nguyên logic trỏ về đáp án đúng
        let mappedOptions = q.options.map((opt, idx) => ({ text: opt, isCorrect: idx === q.correct }));
        mappedOptions.sort(() => Math.random() - 0.5); 
        q.shuffledOptions = mappedOptions;

        mappedOptions.forEach((opt, idx) => {
            const letter = String.fromCharCode(65 + idx); // Chữ cái A, B, C, D
            elements.optCont.innerHTML += `
                <label class="flex items-center p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-blue-50 transition-all duration-200 option-label" id="label-${idx}">
                    <input type="radio" name="mcq" value="${idx}" class="w-5 h-5 text-blue-600 focus:ring-blue-500">
                    <span class="ml-4 font-bold text-slate-400 mr-2">${letter}.</span>
                    <span class="font-medium text-slate-700 w-full">${opt.text}</span>
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

    renderFormats();
}

function checkAnswer() {
    if (answered) return;
    const q = quizData[currentQuestion];
    
    if (q.type === 'mcq') {
        const selected = document.querySelector('input[name="mcq"]:checked');
        if (!selected) {
            alert('Vui lòng chọn một đáp án trước khi kiểm tra!');
            return;
        }
        const val = parseInt(selected.value);
        const isCorrect = q.shuffledOptions[val].isCorrect;

        if (isCorrect) score++;

        // UI Feedback: Đổi màu đúng/sai cho các đáp án
        document.querySelectorAll('.option-label').forEach((lbl, idx) => {
            lbl.querySelector('input').disabled = true;
            lbl.classList.remove('hover:bg-blue-50', 'cursor-pointer');
            
            if (q.shuffledOptions[idx].isCorrect) {
                lbl.classList.add('border-emerald-500', 'bg-emerald-50', 'shadow-sm');
                lbl.innerHTML += '<i class="fas fa-check-circle text-emerald-500 ml-auto text-xl fade-in"></i>';
            } else if (idx === val && !isCorrect) {
                lbl.classList.add('border-rose-500', 'bg-rose-50');
                lbl.innerHTML += '<i class="fas fa-times-circle text-rose-500 ml-auto text-xl fade-in"></i>';
            } else {
                lbl.classList.add('opacity-50');
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
    
    // [UX Tối ưu] Lưu điểm vào LocalStorage
    const prevHigh = localStorage.getItem('aiExamHighScore') || 0;
    if (score > prevHigh) {
        localStorage.setItem('aiExamHighScore', score);
    }

    const percentage = score / mcqCount;
    let msg = "";
    if (percentage === 1) msg = "Đỉnh của chóp! Điểm tuyệt đối! 🎉";
    else if (percentage >= 0.8) msg = "Xuất sắc! Kiến thức của anh rất vững vàng! 🚀";
    else if (percentage >= 0.5) msg = "Khá tốt! Nhưng cần cẩn thận hơn ở các bẫy logic nhé!";
    else msg = "Hãy ôn tập kỹ lại theo đáp án giải thích nhé! 💪";
    
    document.getElementById('score-message').innerText = msg;
}

function renderFormats() {
    if (window.MathJax) {
        MathJax.typesetPromise([elements.quizContainer]).catch(err => console.log(err));
    }
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });
}

// [UX Tối ưu] Thêm Keyboard Shortcuts (Phím tắt) để thi cực nhanh
document.addEventListener('keydown', (e) => {
    // Chỉ kích hoạt khi đang ở màn hình làm bài
    if (elements.quizContainer.classList.contains('hidden')) return;

    const key = e.key.toLowerCase();
    
    // Nhấn 1,2,3,4 hoặc a,b,c,d để tick chọn nhanh đáp án
    const optionMap = {'1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3};
    if (optionMap[key] !== undefined && !answered) {
        const radios = document.querySelectorAll('input[name="mcq"]');
        if (radios[optionMap[key]]) {
            radios[optionMap[key]].checked = true;
        }
    }
    
    // Nhấn Enter để thực hiện hành động chính
    if (key === 'enter') {
        if (!answered && !elements.btnCheck.classList.contains('hidden')) {
            checkAnswer();
        } else if (answered && !elements.btnNext.classList.contains('hidden')) {
            nextQuestion();
        } else if (answered && !elements.btnFinish.classList.contains('hidden')) {
            finishExam();
        }
    }
});
