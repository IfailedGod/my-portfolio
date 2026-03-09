// Quiz Data by Category
const quizzes = {
    fundamentals: {
        title: '📱 ICT Fundamentals',
        description: 'Test your understanding of basic ICT concepts including hardware, software, data, and networking basics.',
        questions: [
            {
                question: 'What does ICT stand for?',
                options: [
                    'Information and Computer Technology',
                    'Information and Communication Technology',
                    'Integrated Computer Timing',
                    'Internet and Cloud Technology'
                ],
                correct: 1
            },
            {
                question: 'Which of the following is not a type of computer?',
                options: [
                    'Desktop',
                    'Laptop',
                    'Software',
                    'Tablet'
                ],
                correct: 2
            },
            {
                question: 'What is the smallest unit of data in a computer?',
                options: [
                    'Kilobyte',
                    'Byte',
                    'Bit',
                    'Gigabyte'
                ],
                correct: 2
            },
            {
                question: 'Which of the following is system software?',
                options: [
                    'Microsoft Word',
                    'Adobe Photoshop',
                    'Windows 10',
                    'Google Chrome'
                ],
                correct: 2
            },
            {
                question: 'What is the function of RAM?',
                options: [
                    'Permanent storage',
                    'Temporary storage for data and programs',
                    'Display images',
                    'Connect to internet'
                ],
                correct: 1
            },
            {
                question: 'How many bits are in one byte?',
                options: [
                    '4 bits',
                    '8 bits',
                    '16 bits',
                    '32 bits'
                ],
                correct: 1
            },
            {
                question: 'Which of the following is an example of application software?',
                options: [
                    'Linux',
                    'BIOS',
                    'Excel',
                    'Device Driver'
                ],
                correct: 2
            },
            {
                question: 'What is the main function of an Operating System?',
                options: [
                    'Store files permanently',
                    'Manage hardware and software resources',
                    'Connect to the internet',
                    'Display images'
                ],
                correct: 1
            },
            {
                question: 'Which device is used for input?',
                options: [
                    'Monitor',
                    'Printer',
                    'Keyboard',
                    'Speaker'
                ],
                correct: 2
            },
            {
                question: 'What does URL stand for?',
                options: [
                    'Universal Resource Locator',
                    'Uniform Resource Locator',
                    'Universal Referral Link',
                    'Unified Request Language'
                ],
                correct: 1
            }
        ]
    },
    hardware: {
        title: '🖥️ Hardware & Devices',
        description: 'Explore computer hardware, components, peripherals, and their functions.',
        questions: [
            {
                question: 'What does CPU stand for?',
                options: [
                    'Central Processing Unit',
                    'Central Program Utility',
                    'Computer Processing Unit',
                    'Central Processor Utility'
                ],
                correct: 0
            },
            {
                question: 'Which component stores data permanently?',
                options: [
                    'RAM',
                    'ROM',
                    'Hard Drive',
                    'Cache'
                ],
                correct: 2
            },
            {
                question: 'What is the primary function of the motherboard?',
                options: [
                    'Store data',
                    'Connect all components',
                    'Display graphics',
                    'Cool the system'
                ],
                correct: 1
            },
            {
                question: 'Which of the following is NOT a storage device?',
                options: [
                    'SSD',
                    'USB Flash Drive',
                    'RAM',
                    'External Hard Drive'
                ],
                correct: 2
            },
            {
                question: 'What does GPU stand for?',
                options: [
                    'Graphics Processor Unit',
                    'Graphics Processing Unit',
                    'General Purpose Unit',
                    'Graphics Program Utility'
                ],
                correct: 1
            },
            {
                question: 'Which component is responsible for cooling the CPU?',
                options: [
                    'Power Supply',
                    'Heat Sink',
                    'Thermal Paste',
                    'Motherboard'
                ],
                correct: 1
            },
            {
                question: 'What is the purpose of a power supply unit (PSU)?',
                options: [
                    'Cool the computer',
                    'Store data',
                    'Convert AC to DC power',
                    'Display information'
                ],
                correct: 2
            },
            {
                question: 'Which type of monitor offers the best color reproduction?',
                options: [
                    'CRT',
                    'LCD',
                    'IPS',
                    'LED'
                ],
                correct: 2
            },
            {
                question: 'What does BIOS stand for?',
                options: [
                    'Basic Input Output Software',
                    'Basic Input Output System',
                    'Built-in Input Output System',
                    'Basic Internal Operating System'
                ],
                correct: 1
            },
            {
                question: 'Which port is used for high-speed data transfer on modern computers?',
                options: [
                    'USB 2.0',
                    'Serial Port',
                    'USB 3.0',
                    'Parallel Port'
                ],
                correct: 2
            }
        ]
    },
    networking: {
        title: '🌐 Networking & Internet',
        description: 'Learn about networks, internet protocols, connectivity, and data communication.',
        questions: [
            {
                question: 'What does IP stand for?',
                options: [
                    'Internet Protocol',
                    'Internet Process',
                    'Internal Program',
                    'Internet Portal'
                ],
                correct: 0
            },
            {
                question: 'Which of the following is a private IP address range?',
                options: [
                    '8.8.8.8',
                    '192.168.1.1',
                    '1.1.1.1',
                    '208.67.222.222'
                ],
                correct: 1
            },
            {
                question: 'What does DNS stand for?',
                options: [
                    'Dynamic Network System',
                    'Domain Name System',
                    'Digital Network Service',
                    'Distributed Name Server'
                ],
                correct: 1
            },
            {
                question: 'Which transmission media provides the fastest data transfer?',
                options: [
                    'Copper Cable',
                    'Fiber Optic Cable',
                    'Wireless',
                    'Satellite'
                ],
                correct: 1
            },
            {
                question: 'What is the purpose of a firewall?',
                options: [
                    'Store data',
                    'Speed up internet',
                    'Protect network from unauthorized access',
                    'Manage IP addresses'
                ],
                correct: 2
            },
            {
                question: 'Which protocol is used for secure web browsing?',
                options: [
                    'HTTP',
                    'FTP',
                    'HTTPS',
                    'SMTP'
                ],
                correct: 2
            },
            {
                question: 'What does WAN stand for?',
                options: [
                    'Wireless Area Network',
                    'Wide Area Network',
                    'Web Access Network',
                    'Wired Authentication Network'
                ],
                correct: 1
            },
            {
                question: 'Which of the following is a class C IP address?',
                options: [
                    '10.0.0.1',
                    '172.16.0.1',
                    '192.168.1.1',
                    '128.0.0.1'
                ],
                correct: 2
            },
            {
                question: 'What is the standard port for HTTPS?',
                options: [
                    '80',
                    '21',
                    '443',
                    '25'
                ],
                correct: 2
            },
            {
                question: 'Which device is used to connect different networks?',
                options: [
                    'Switch',
                    'Hub',
                    'Router',
                    'Modem'
                ],
                correct: 2
            }
        ]
    },
    cybersecurity: {
        title: '🔒 Cybersecurity',
        description: 'Understand security threats, protection methods, and safe computing practices.',
        questions: [
            {
                question: 'What is a virus in computing?',
                options: [
                    'A hardware component',
                    'Malicious software that replicates itself',
                    'A network protocol',
                    'A type of storage device'
                ],
                correct: 1
            },
            {
                question: 'Which of the following is NOT a type of malware?',
                options: [
                    'Ransomware',
                    'Spyware',
                    'Firmware',
                    'Trojan Horse'
                ],
                correct: 2
            },
            {
                question: 'What is phishing?',
                options: [
                    'A hardware attack',
                    'Unauthorized access to networks',
                    'An attempt to trick users into revealing information',
                    'A type of encryption'
                ],
                correct: 2
            },
            {
                question: 'Which practice is most important for security?',
                options: [
                    'Using simple passwords',
                    'Sharing passwords',
                    'Using strong, unique passwords',
                    'Writing passwords down'
                ],
                correct: 2
            },
            {
                question: 'What is encryption?',
                options: [
                    'Deleting files',
                    'Converting data into a code',
                    'Backing up data',
                    'Transferring data'
                ],
                correct: 1
            },
            {
                question: 'What does DDoS stand for?',
                options: [
                    'Digital Defense System',
                    'Data Distribution Service',
                    'Distributed Denial of Service',
                    'Direct Detection System'
                ],
                correct: 2
            },
            {
                question: 'Which of the following is a strong password practice?',
                options: [
                    'Use your birthdate',
                    'Mix letters, numbers, and symbols',
                    'Use common words',
                    'Use your pet\'s name'
                ],
                correct: 1
            },
            {
                question: 'What is a vulnerability in cybersecurity?',
                options: [
                    'A firewall',
                    'A weakness that can be exploited',
                    'An antivirus software',
                    'A backup system'
                ],
                correct: 1
            },
            {
                question: 'Which software protects against viruses?',
                options: [
                    'Browser',
                    'Antivirus',
                    'Text Editor',
                    'Media Player'
                ],
                correct: 1
            },
            {
                question: 'What should you do with suspicious emails?',
                options: [
                    'Click on all links',
                    'Reply immediately',
                    'Delete them without clicking links',
                    'Forward to everyone'
                ],
                correct: 2
            }
        ]
    }
};

// Global Variables
let currentQuiz = null;
let currentQuestionIndex = 0;
let userAnswers = [];
let quizStartTime = null;
let timerInterval = null;
let currentUser = null;

// Initialize on page load
window.addEventListener('load', function() {
    checkLogin();
    updateUserInfo();
});

// Check if user is logged in
function checkLogin() {
    const user = localStorage.getItem('currentUser');
    
    if (!user) {
        document.getElementById('noLogin').style.display = 'block';
        document.getElementById('dashboard').style.display = 'none';
        document.getElementById('quizSelection').style.display = 'none';
        document.getElementById('quizContainer').style.display = 'none';
        return false;
    }
    
    currentUser = JSON.parse(user);
    document.getElementById('noLogin').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('quizSelection').style.display = 'none';
    return true;
}

// Update user info display
function updateUserInfo() {
    if (currentUser) {
        document.getElementById('userName').textContent = currentUser.name;
        document.getElementById('userNameBanner').textContent = currentUser.name;
        document.getElementById('userEmailBanner').textContent = currentUser.email;
    }
}

// Dashboard functions
function showQuizzes() {
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('quizSelection').style.display = 'block';
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'none';
}

function showGames() {
    window.location.href = 'games.html';
}

// Go back to dashboard
function backToDashboard() {
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('quizSelection').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('quizContainer').classList.remove('active');
    document.getElementById('resultsContainer').style.display = 'none';
    document.getElementById('resultsContainer').classList.remove('active');
}

// Logout function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('currentUser');
        window.location.href = 'login.html';
    }
}

// Access profile
function accessSecret() {
    const currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        alert('You must be logged in to access your profile');
        return;
    }
    window.location.href = 'profile.html';
}

// Start quiz selection
function startQuiz(category) {
    if (!currentUser) {
        alert('You must be logged in to start a quiz');
        return;
    }
    
    currentQuiz = quizzes[category];
    currentQuestionIndex = 0;
    userAnswers = new Array(currentQuiz.questions.length).fill(null);
    quizStartTime = Date.now();
    
    // Hide all other sections
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('quizSelection').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'none';
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('quizContainer').classList.add('active');
    
    // Show intro
    document.getElementById('quizIntro').classList.add('active');
    document.getElementById('quizIntro').style.display = 'block';
    document.getElementById('progressContainer').style.display = 'none';
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('navigationContainer').style.display = 'none';
    document.getElementById('quizCategoryTitle').textContent = currentQuiz.title;
    document.getElementById('quizDescription').textContent = currentQuiz.description;
}

// Begin quiz
function beginQuiz() {
    document.getElementById('quizIntro').classList.remove('active');
    document.getElementById('quizIntro').style.display = 'none';
    document.getElementById('progressContainer').style.display = 'block';
    document.getElementById('questionContainer').style.display = 'block';
    document.getElementById('navigationContainer').style.display = 'flex';
    
    displayQuestion();
    startTimer();
}

// Display current question
function displayQuestion() {
    const question = currentQuiz.questions[currentQuestionIndex];
    
    document.getElementById('questionNumber').textContent = `Question ${currentQuestionIndex + 1} of ${currentQuiz.questions.length}`;
    document.getElementById('questionTitle').textContent = question.question;
    
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const label = document.createElement('label');
        label.className = 'option-label';
        
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = index;
        input.checked = userAnswers[currentQuestionIndex] === index;
        input.onchange = function() {
            userAnswers[currentQuestionIndex] = index;
        };
        
        const span = document.createElement('span');
        span.textContent = option;
        
        label.appendChild(input);
        label.appendChild(span);
        optionsContainer.appendChild(label);
    });
    
    // Update progress bar
    const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    
    // Update navigation buttons
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === currentQuiz.questions.length - 1) {
        document.getElementById('nextBtn').style.display = 'none';
        document.getElementById('submitBtn').style.display = 'block';
    } else {
        document.getElementById('nextBtn').style.display = 'block';
        document.getElementById('submitBtn').style.display = 'none';
    }
}

// Navigate to previous question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

// Navigate to next question
function nextQuestion() {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

// Start timer
function startTimer() {
    let startTime = Date.now() - quizStartTime;
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - quizStartTime) / 1000);
        document.getElementById('timer').textContent = `Time: ${elapsed}s`;
    }, 1000);
}

// Submit quiz
function submitQuiz() {
    clearInterval(timerInterval);
    
    // Calculate score
    let score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === currentQuiz.questions[index].correct) {
            score++;
        }
    });
    
    const totalTime = Math.floor((Date.now() - quizStartTime) / 1000);
    
    // Store result
    const result = {
        category: currentQuiz.title,
        score: score,
        totalQuestions: currentQuiz.questions.length,
        percentage: Math.round((score / currentQuiz.questions.length) * 100),
        timeSpent: totalTime,
        timestamp: new Date().toISOString(),
        answers: userAnswers
    };
    
    // Save to user profile
    if (currentUser) {
        if (!currentUser.quizScores) {
            currentUser.quizScores = [];
        }
        currentUser.quizScores.push(result);
        
        const users = JSON.parse(localStorage.getItem('ictUsers')) || [];
        const userIndex = users.findIndex(u => u.id === currentUser.id);
        if (userIndex !== -1) {
            users[userIndex].quizScores = currentUser.quizScores;
            localStorage.setItem('ictUsers', JSON.stringify(users));
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
    }
    
    showResults(result);
}

// Show results
function showResults(result) {
    document.getElementById('progressContainer').style.display = 'none';
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('navigationContainer').style.display = 'none';
    document.getElementById('quizIntro').style.display = 'none';
    
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'block';
    document.getElementById('resultsContainer').classList.add('active');
    
    document.getElementById('scoreDisplay').textContent = `${result.score}/${result.totalQuestions}`;
    document.getElementById('scorePercentage').textContent = `Score: ${result.percentage}%`;
    
    let performanceMessage = '';
    if (result.percentage >= 90) {
        performanceMessage = '🎉 Excellent! Outstanding performance!';
    } else if (result.percentage >= 75) {
        performanceMessage = '👏 Great job! Well done!';
    } else if (result.percentage >= 60) {
        performanceMessage = '✓ Good! Keep practicing!';
    } else if (result.percentage >= 50) {
        performanceMessage = '⚠️ Fair. Review the material and try again!';
    } else {
        performanceMessage = '📚 Need to study more. Try again after review!';
    }
    
    document.getElementById('performanceMessage').textContent = performanceMessage;
    document.getElementById('resultsSummary').textContent = `Time spent: ${result.timeSpent} seconds`;
    
    // Store for details view
    window.lastResult = result;
}

// View quiz details
function viewQuizDetails() {
    document.getElementById('resultsContainer').classList.remove('active');
    document.getElementById('quizDetailsContainer').style.display = 'block';
    
    const result = window.lastResult;
    
    // Create enhanced review UI
    let reviewHTML = `
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h4 style="color: #333; margin-bottom: 10px;">📊 Performance Summary</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px;">
                <div style="background: white; padding: 15px; border-radius: 5px; text-align: center;">
                    <p style="color: #666; font-size: 12px;">Total Questions</p>
                    <p style="color: #800000; font-size: 24px; font-weight: bold;">${result.totalQuestions}</p>
                </div>
                <div style="background: white; padding: 15px; border-radius: 5px; text-align: center;">
                    <p style="color: #666; font-size: 12px;">Correct Answers</p>
                    <p style="color: #4caf50; font-size: 24px; font-weight: bold;">${result.score}</p>
                </div>
                <div style="background: white; padding: 15px; border-radius: 5px; text-align: center;">
                    <p style="color: #666; font-size: 12px;">Incorrect Answers</p>
                    <p style="color: #f44336; font-size: 24px; font-weight: bold;">${result.totalQuestions - result.score}</p>
                </div>
                <div style="background: white; padding: 15px; border-radius: 5px; text-align: center;">
                    <p style="color: #666; font-size: 12px;">Accuracy</p>
                    <p style="color: #800000; font-size: 24px; font-weight: bold;">${result.percentage}%</p>
                </div>
            </div>
        </div>

        <div style="margin-top: 20px;">
            <h4 style="color: #333; margin-bottom: 15px;">📝 Detailed Review</h4>
    `;
    
    currentQuiz.questions.forEach((question, index) => {
        const userAnswer = result.answers[index];
        const isCorrect = userAnswer === question.correct;
        const userAnswerText = userAnswer !== null ? question.options[userAnswer] : 'Not answered';
        const correctAnswerText = question.options[question.correct];
        
        reviewHTML += `
            <div style="background: ${isCorrect ? '#e8f5e9' : '#ffebee'}; padding: 20px; margin-bottom: 15px; border-radius: 8px; border-left: 5px solid ${isCorrect ? '#4caf50' : '#f44336'};">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 10px;">
                    <p style="font-weight: bold; color: #333; margin: 0;">
                        <span style="font-size: 18px;">${isCorrect ? '✓' : '✗'}</span>
                        Question ${index + 1}
                    </p>
                    <span style="background: ${isCorrect ? '#4caf50' : '#f44336'}; color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: bold;">
                        ${isCorrect ? 'Correct' : 'Incorrect'}
                    </span>
                </div>
                
                <p style="color: #333; font-weight: 600; margin: 15px 0 10px 0;">${question.question}</p>
                
                <div style="background: white; padding: 12px; border-radius: 5px; margin: 10px 0; border-left: 3px solid #800000;">
                    <p style="color: #666; font-size: 13px; margin: 0;">Your Answer:</p>
                    <p style="color: ${isCorrect ? '#4caf50' : '#f44336'}; font-weight: bold; margin: 5px 0 0 0;">${userAnswerText}</p>
                </div>
                
                ${!isCorrect ? `
                    <div style="background: white; padding: 12px; border-radius: 5px; margin: 10px 0; border-left: 3px solid #4caf50;">
                        <p style="color: #666; font-size: 13px; margin: 0;">Correct Answer:</p>
                        <p style="color: #4caf50; font-weight: bold; margin: 5px 0 0 0;">${correctAnswerText}</p>
                    </div>
                ` : ''}

                <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid #ddd;">
                    <p style="margin: 0; font-size: 13px; color: #666;">
                        ${isCorrect 
                            ? '✓ Great job! You selected the correct answer.' 
                            : '✗ Review this question to understand the concept better.'}
                    </p>
                </div>
            </div>
        `;
    });
    
    reviewHTML += `
        </div>
        <div style="margin-top: 20px; padding-top: 20px; border-top: 2px solid #ddd; display: flex; gap: 10px;">
            <button class="results-button" onclick="backToResults()" style="flex: 1;">← Back to Results</button>
            <button class="results-button" onclick="returnToSelection()" style="flex: 1;">Take Another Quiz →</button>
        </div>
    `;
    
    document.getElementById('detailsList').innerHTML = reviewHTML;
}

// Back from details to results
function backToResults() {
    document.getElementById('quizDetailsContainer').style.display = 'none';
    document.getElementById('resultsContainer').style.display = 'block';
    document.getElementById('resultsContainer').classList.add('active');
}

// Return to quiz selection
function returnToSelection() {
    document.getElementById('quizDetailsContainer').style.display = 'none';
    document.getElementById('resultsContainer').classList.remove('active');
    document.getElementById('resultsContainer').style.display = 'none';
    document.getElementById('quizContainer').classList.remove('active');
    document.getElementById('quizContainer').style.display = 'none';
    document.getElementById('quizIntro').classList.remove('active');
    document.getElementById('quizIntro').style.display = 'none';
    document.getElementById('progressContainer').style.display = 'none';
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('navigationContainer').style.display = 'none';
    document.getElementById('quizSelection').style.display = 'block';
    
    // Reset quiz state
    currentQuiz = null;
    currentQuestionIndex = 0;
    userAnswers = [];
    clearInterval(timerInterval);
}

// ============= NEW COOL FEATURES =============

// Theme Toggle
function toggleTheme() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    localStorage.setItem('darkMode', String(!isDark));
    document.body.classList.toggle('dark-mode');
}

// Open Leaderboard
function openLeaderboard() {
    window.location.href = 'leaderboard.html';
}

// Show Daily Challenge
function showDailyChallenge() {
    const challengeEl = document.getElementById('dailyChallengeSection');
    const achievementsEl = document.getElementById('achievementsSection');
    
    achievementsEl.style.display = 'none';
    challengeEl.style.display = challengeEl.style.display === 'none' ? 'block' : 'none';
    
    if (currentUser && currentUser.quizScores) {
        const todayScores = currentUser.quizScores.filter(q => {
            const date = new Date(q.date || Date.now());
            const today = new Date();
            return date.toDateString() === today.toDateString();
        });
        
        const completed = todayScores.some(q => q.percentage >= 80);
        const statusEl = document.getElementById('challangeStatus');
        
        if (completed) {
            statusEl.innerHTML = '✅ Challenge Completed! Great job! 🎉';
            statusEl.style.background = '#e8f5e9';
            statusEl.style.color = '#2e7d32';
            playSound('success');
        } else {
            statusEl.innerHTML = 'Challenge not completed yet. Take a quiz to complete it!';
        }
    }
}

// Show Achievements
function showAchievements() {
    const achievementsEl = document.getElementById('achievementsSection');
    const challengeEl = document.getElementById('dailyChallengeSection');
    
    challengeEl.style.display = 'none';
    achievementsEl.style.display = achievementsEl.style.display === 'none' ? 'block' : 'none';
    
    if (currentUser && currentUser.quizScores) {
        const achievements = [];
        const totalScore = currentUser.quizScores.reduce((sum, q) => sum + (q.score * 10), 0);
        const allQuizzesComplete = currentUser.quizScores.length >= 4;
        const avgAccuracy = currentUser.quizScores.length > 0 
            ? currentUser.quizScores.reduce((sum, q) => sum + q.percentage, 0) / currentUser.quizScores.length 
            : 0;
        
        let achievementsHTML = '';
        
        // Star achievement
        if (totalScore >= 300) {
            achievementsHTML += '<div style="background: white; padding: 15px; border-radius: 5px; text-align: center;"><div style="font-size: 30px; margin-bottom: 5px;">⭐</div><div style="font-size: 12px; color: #666;">Quiz Star</div></div>';
        }
        
        // Speed Runner achievement
        if (allQuizzesComplete) {
            achievementsHTML += '<div style="background: white; padding: 15px; border-radius: 5px; text-align: center;"><div style="font-size: 30px; margin-bottom: 5px;">🚀</div><div style="font-size: 12px; color: #666;">Speed Runner</div></div>';
        }
        
        // Accuracy King achievement
        if (avgAccuracy >= 85) {
            achievementsHTML += '<div style="background: white; padding: 15px; border-radius: 5px; text-align: center;"><div style="font-size: 30px; margin-bottom: 5px;">🎯</div><div style="font-size: 12px; color: #666;">Accuracy King</div></div>';
        }
        
        // Champion achievement
        if (totalScore >= 360 && avgAccuracy >= 90) {
            achievementsHTML += '<div style="background: white; padding: 15px; border-radius: 5px; text-align: center;"><div style="font-size: 30px; margin-bottom: 5px;">👑</div><div style="font-size: 12px; color: #666;">Champion</div></div>';
        }
        
        if (achievementsHTML) {
            document.getElementById('achievementsContainer').innerHTML = achievementsHTML;
        }
    }
}

// Calculate Streak
function updateStreak() {
    if (!currentUser || !currentUser.quizScores) return;
    
    let streak = 0;
    const today = new Date();
    
    for (let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() - i);
        
        const hasQuizToday = currentUser.quizScores.some(q => {
            const qDate = new Date(q.date || Date.now());
            return qDate.toDateString() === date.toDateString();
        });
        
        if (hasQuizToday) {
            streak++;
        } else {
            break;
        }
    }
    
    const streakEl = document.getElementById('streakBadge');
    if (streakEl) {
        streakEl.textContent = `${streak} 🔥`;
    }
}

// Play Sound Effects
function playSound(type) {
    // Create simple beep sounds using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    
    if (type === 'success') {
        oscillator.frequency.value = 800;
        gain.gain.setValueAtTime(0.3, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    } else if (type === 'error') {
        oscillator.frequency.value = 300;
        gain.gain.setValueAtTime(0.2, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    } else if (type === 'complete') {
        // Success jingle
        const notes = [523, 659, 784];
        notes.forEach((freq, index) => {
            setTimeout(() => {
                const osc = audioContext.createOscillator();
                const g = audioContext.createGain();
                osc.connect(g);
                g.connect(audioContext.destination);
                osc.frequency.value = freq;
                g.gain.setValueAtTime(0.2, audioContext.currentTime);
                g.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
                osc.start(audioContext.currentTime);
                osc.stop(audioContext.currentTime + 0.1);
            }, index * 100);
        });
    }
}

// Update streak on page load
const originalUpdateUserInfo = updateUserInfo;
updateUserInfo = function() {
    originalUpdateUserInfo();
    updateStreak();
};


