const simulationData = [
    {
        id: 1,
        progress: "20%",
        stepText: "المحطة 1 من 5: الأساس الفلسفي وتطوير المنهج",
        scenario: "أنتِ مصممة مناهج، وتريدين تعديل الأهداف الكبرى للمقرر لتتوافق مع فلسفة العصر الحديث وتنمية التفكير، لكن المعلمات طبقن اختبارات تعتمد على التلقين الحرفي فقط.",
        question: "ما هو الخلل التربوي الأساسي هنا؟",
        options: [
            { text: "غياب الاتساق بين الفلسفة المعلنة وأساليب التقويم الفعلية", correct: true, next: 2 },
            { text: "المحتوى العلمي غير حديث وغير دقيق", correct: false, remedialId: "rem1" },
            { text: "الاعتماد المفرط على الأنشطة الجماعية", correct: false, remedialId: "rem1" }
        ]
    },
    {
        id: 2,
        progress: "40%",
        stepText: "المحطة 2 من 5: الأساس النفسي والفروق الفردية",
        scenario: "في حصة تطبيقية، قامت المعلمة بتوزيع نفس ورقة العمل والنشاط الموحد على جميع طالبات الفصل بنفس المستوى والتوقيت.",
        question: "كيف تقييمين هذا الإجراء بناءً على الأساس النفسي؟",
        options: [
            { text: "إجراء صحيح لتوحيد المعايير بين الطالبات", correct: false, remedialId: "rem2" },
            { text: "قصور نفسي لأن تقارب الأعمار لا يعني تماثل القدرات والاستعدادات", correct: true, next: 3 },
            { text: "إجراء مرتبط بالأساس الاجتماعي فقط", correct: false, remedialId: "rem2" }
        ]
    },
    {
        id: 3,
        progress: "60%",
        stepText: "المحطة 3 من 5: الأساس الاجتماعي وبيئة المتعلم",
        scenario: "مقرر الدراسات الاجتماعية يطرح نظريات مجردة بعيدة تماماً عن مشكلات البيئة المحلية أو تحديات المجتمع الواقعية.",
        question: "ما التعديل المطلوب لتحقيق الأساس الاجتماعي؟",
        options: [
            { text: "التركيز على الحفظ المكثف للنظريات التاريخية", correct: false, remedialId: "rem3" },
            { text: "ربط المنهج بمشكلات المجتمع المحلي واقتراح حلول لها", correct: true, next: 4 },
            { text: "إلغاء المنهج واستبداله بأنشطة ترفيهية بحتة", correct: false, remedialId: "rem3" }
        ]
    },
    {
        id: 4,
        progress: "80%",
        stepText: "المحطة 4 من 5: الأساس المعرفي ودقة المحتوى",
        scenario: "أردتِ تطوير وحدة تعليمية رقمية، واقترحتِ إدخال مصادر معرفية تفاعلية تتحدث عن أحدث المستجدات التقنية.",
        question: "إلى أي أساس ترتبط هذه الخطوة بشكل مباشر؟",
        options: [
            { text: "الأساس المعرفي (دقة المعرفة وحداثتها وأنماط تنظيمها)", correct: true, next: 5 },
            { text: "الأساس الديني المتعلق بالقيم الأخلاقية", correct: false, remedialId: "rem4" },
            { text: "الأساس الثقافي لإلغاء الثقافات الأخرى", correct: false, remedialId: "rem4" }
        ]
    },
    {
        id: 5,
        progress: "100%",
        stepText: "المحطة 5 من 5: التقويم الشامل والختامي",
        scenario: "بعد تعديل المنهج لمراعاة الفروق الفردية والمشكلات المجتمعية، كيف تتحققين من نجاح التطوير؟",
        question: "ما هي الأداة الأدق لقياس أثر المنهج المطور؟",
        options: [
            { text: "الاختبارات التحريرية الورقية التقليدية فقط", correct: false, remedialId: "rem5" },
            { text: "تنويع أدوات التقويم (مشروعات، مهام أدائية، ملاحظة تفاعل عميق)", correct: true, next: "finish" },
            { text: "حفظ الطالبات للكتاب كاملاً عن ظهر قلب", correct: false, remedialId: "rem5" }
        ]
    }
];

// محتوى المسارات العلاجية في حال الخطأ
const remedialContent = {
    rem1: {
        title: "💡 مسار علاجي: الأساس الفلسفي",
        text: "الخلل هنا يكمن في عدم الاتساق! عندما يدعو المنهج في أهدافه إلى بناء مهارات التفكير العليا بينما يقتصر التقويم على التلقين والحفظ، فهذا تناقض فلسفي. الفلسفة التربوية الناجحة تشترط تطابق الأهداف المعلنة مع الممارسات التقويمية الواقعية.",
        backStep: 1
    },
    rem2: {
        title: "💡 مسار علاجي: الأساس النفسي",
        text: "تذكري دائماً قاعدة الأساس النفسي: 'تقارب الأعمار لا يعني تماثل القدرات'. الطالبات يختلفن في أنماطهن الاستيعابية (سمعي، بصري، حركي) وسرعتهن القرائية، لذلك الأنشطة الموحدة بالكامل تعتبر قصوراً يتطلب تطبيق 'التعليم المتمايز'.",
        backStep: 2
    },
    rem3: {
        title: "💡 مسار علاجي: الأساس الاجتماعي",
        text: "الأساس الاجتماعي يفرض على المنهج ألا يكون معزولاً عن الواقع؛ بل يجب أن يتفاعل مع قضايا المجتمع ومسائله الحية (مثل البيئة، الاستهلاك، التواصل) لكي يشعر المتعلم بأهمية ما يتعلمه في حياته الحقيقية.",
        backStep: 3
    },
    rem4: {
        title: "💡 مسار علاجي: الأساس المعرفي",
        text: "كل ما يتعلق بطبيعة المعرفة، حداثتها، صحتها العلمية، وتنظيمها (سواء كان هرمياً أو حلزونياً) يندرج تحت 'الأساس المعرفي' الذي يضمن عدم تقادم المعلومات ومواكبتها للتطورات.",
        backStep: 4
    },
    rem5: {
        title: "💡 مسار العلاج الأخير: أدوات التقويم",
        text: "التقويم الشامل والمطور لا يكتفي بالاختبارات الورقية؛ بل يعتمد على المهام الأدائية والمشروعات التطبيقية التي تثبت قدرة الطالبة على توظيف المعرفة في مواقف حقيقية.",
        backStep: 5
    }
];

let currentStepIndex = 0;

function renderSimulation() {
    const container = document.getElementById('simContent');
    const progressFill = document.getElementById('progressFill');
    const stepIndicator = document.getElementById('stepIndicator');
    
    const step = simulationData[currentStepIndex];
    
    progressFill.style.width = step.progress;
    stepIndicator.textContent = step.stepText;

    let html = `
        <div class="scenario-box">
            <strong>📋 سيناريو المحاكاة:</strong><br>${step.scenario}
        </div>
        <div class="question-title">${step.question}</div>
        <div class="options-group">
    `;

    step.options.forEach((opt, idx) => {
        html += `<button class="option-btn" onclick="handleAnswer(${opt.correct}, ${opt.next ? `'${opt.next}'` : 'null'}, '${opt.remedialId || ''}')">${opt.text}</button>`;
    });

    html += `</div>`;
    container.innerHTML = html;
}

function handleAnswer(isCorrect, nextStep, remedialId) {
    if (isCorrect) {
        if (nextStep === 'finish') {
            showCompletionScreen();
        } else {
            currentStepIndex = nextStep - 1;
            renderSimulation();
        }
    } else {
        showRemedialScreen(remedialId);
    }
}

function showRemedialScreen(remId) {
    const container = document.getElementById('simContent');
    const rem = remedialContent[remId];

    container.innerHTML = `
        <div class="remedial-box">
            <h3>${rem.title}</h3>
            <p>${rem.text}</p>
            <button class="action-btn" onclick="retryStep(${rem.backStep})">فهمت، العودة للسؤال للمحاولة مجدداً 🔄</button>
        </div>
    `;
}

function retryStep(stepNum) {
    currentStepIndex = stepNum - 1;
    renderSimulation();
}

function showCompletionScreen() {
    const container = document.getElementById('simContent');
    document.getElementById('progressFill').style.width = '100%';
    document.getElementById('stepIndicator').textContent = 'اكتملت المحاكاة بنجاح 🎉';

    container.innerHTML = `
        <div class="remedial-box" style="border-color: #38a169; background: #f0fff4;">
            <h3 style="color: #276749;">🎉 أتممتِ المحاكاة بامتياز!</h3>
            <p>لقد اجتزتِ كافة مراحل بناء وتطوير المنهج، وتجاوزتِ المسارات العلاجية بنجاح، وأثبتِ فهماً عميقاً لربط الأسس النظرية بالممارسات التطبيقية.</p>
            <button class="action-btn" style="background: #38a169;" onclick="restartSim()">إعادة المحاكاة من البداية 🔄</button>
        </div>
    `;
}

function restartSim() {
    currentStepIndex = 0;
    renderSimulation();
}

// تشغيل المحاكاة عند تحميل الصفحة
window.onload = renderSimulation;
