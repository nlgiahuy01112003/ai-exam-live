let currentQuestion = 0;
let score = 0;
let answered = false;
let timeLeft = 45 * 60; // 45 phút
let timerInterval;

// Lưu trữ lịch sử trả lời để làm Report cuối giờ
let userAnswers = [];

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
    // Trộn ngẫu nhiên thứ tự câu hỏi bằng thuật toán Fisher-Yates chuẩn xác
    for (let i = quizData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizData[i], quizData[j]] = [quizData[j], quizData[i]];
    }

    userAnswers = []; // Reset array lưu lịch sử
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
        
        let mappedOptions = q.options.map((opt, idx) => ({ text: opt, isCorrect: idx === q.correct }));
        mappedOptions.sort(() => Math.random() - 0.5); 
        q.shuffledOptions = mappedOptions;

        mappedOptions.forEach((opt, idx) => {
            const letter = String.fromCharCode(65 + idx);
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

        // Lưu thông tin để phân tích cuối giờ
        const correctChoice = q.shuffledOptions.find(o => o.isCorrect);
        userAnswers.push({
            qIndex: currentQuestion,
            questionText: q.question,
            category: q.category,
            isCorrect: isCorrect,
            userChoiceText: q.shuffledOptions[val].text,
            correctChoiceText: correctChoice.text
        });

        // UI Feedback
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

    generateAnalyticsReport();
}

// Hàm sinh Báo Cáo chi tiết
function generateAnalyticsReport() {
    const analysisCont = document.getElementById('category-analysis');
    const detailsCont = document.getElementById('detailed-results');
    
    // 1. Phân tích Category (Radar)
    const categoryStats = {};
    userAnswers.forEach(ans => {
        if (!categoryStats[ans.category]) {
            categoryStats[ans.category] = { total: 0, correct: 0 };
        }
        categoryStats[ans.category].total++;
        if (ans.isCorrect) categoryStats[ans.category].correct++;
    });

    for (const [cat, stats] of Object.entries(categoryStats)) {
        const percent = Math.round((stats.correct / stats.total) * 100);
        let colorClass = 'text-rose-500';
        let barColor = 'bg-rose-500';
        if (percent >= 80) { colorClass = 'text-emerald-600'; barColor = 'bg-emerald-500'; }
        else if (percent >= 50) { colorClass = 'text-amber-500'; barColor = 'bg-amber-400'; }

        analysisCont.innerHTML += `
            <div class="bg-slate-50 p-4 rounded-lg border border-slate-100 shadow-sm">
                <div class="flex justify-between items-center mb-2">
                    <span class="font-bold text-slate-700 text-sm">${cat}</span>
                    <span class="font-black ${colorClass}">${stats.correct}/${stats.total} (${percent}%)</span>
                </div>
                <div class="w-full bg-slate-200 rounded-full h-1.5">
                    <div class="${barColor} h-1.5 rounded-full" style="width: ${percent}%"></div>
                </div>
            </div>
        `;
    }

    // 2. Chi tiết từng câu
    userAnswers.forEach(ans => {
        const isCorr = ans.isCorrect;
        const icon = isCorr ? '<i class="fas fa-check-circle text-emerald-500 text-xl"></i>' : '<i class="fas fa-times-circle text-rose-500 text-xl"></i>';
        const border = isCorr ? 'border-emerald-300 bg-emerald-50' : 'border-rose-300 bg-rose-50';
        const userChoiceColor = isCorr ? 'text-emerald-700' : 'text-rose-700 line-through';
        
        let detailsHtml = `
            <div class="p-4 border rounded-lg ${border} text-sm shadow-sm transition-all">
                <div class="flex items-start justify-between mb-3">
                    <span class="font-bold text-slate-800 pr-4">Câu ${ans.qIndex + 1}: ${ans.questionText}</span>
                    <span class="shrink-0">${icon}</span>
                </div>
                <div class="mt-2 space-y-1">
                    <div class="bg-white/50 p-2 rounded"><span class="font-semibold text-slate-600">Bạn chọn:</span> <span class="font-semibold ${userChoiceColor}">${ans.userChoiceText}</span></div>
                    ${!isCorr ? `<div class="bg-white/50 p-2 rounded"><span class="font-semibold text-slate-600">Đáp án chuẩn:</span> <span class="font-bold text-emerald-600">${ans.correctChoiceText}</span></div>` : ''}
                </div>
            </div>
        `;
        detailsCont.innerHTML += detailsHtml;
    });

    // Render lại công thức toán MathJax cho phần Report
    renderFormats();
}

function renderFormats() {
    if (window.MathJax) {
        MathJax.typesetPromise([document.body]).catch(err => console.log(err));
    }
    document.querySelectorAll('pre code').forEach((el) => {
        hljs.highlightElement(el);
    });
}

// Bắt sự kiện phím tắt
document.addEventListener('keydown', (e) => {
    if (elements.quizContainer.classList.contains('hidden')) return;
    const key = e.key.toLowerCase();
    const optionMap = {'1': 0, '2': 1, '3': 2, '4': 3, 'a': 0, 'b': 1, 'c': 2, 'd': 3};
    if (optionMap[key] !== undefined && !answered) {
        const radios = document.querySelectorAll('input[name="mcq"]');
        if (radios[optionMap[key]]) {
            radios[optionMap[key]].checked = true;
        }
    }
    if (key === 'enter') {
        if (!answered && !elements.btnCheck.classList.contains('hidden')) checkAnswer();
        else if (answered && !elements.btnNext.classList.contains('hidden')) nextQuestion();
        else if (answered && !elements.btnFinish.classList.contains('hidden')) finishExam();
    }
});
