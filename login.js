// Toggle between Sign In and Sign Up forms
function toggleForms() {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const infoTitle = document.getElementById('infoTitle');
    const infoText = document.getElementById('infoText');
    const infoButton = document.getElementById('infoButton');

    signInForm.classList.toggle('hidden');
    signUpForm.classList.toggle('hidden');

    if (signInForm.classList.contains('hidden')) {
        infoTitle.textContent = 'Welcome Back!';
        infoText.textContent = 'Sign in to continue with your ICT quizzes and track your progress!';
        infoButton.textContent = 'Sign In';
    } else {
        infoTitle.textContent = 'New Here?';
        infoText.textContent = 'Sign up to take our comprehensive ICT quizzes and test your knowledge on Information and Communication Technology!';
        infoButton.textContent = 'Sign Up';
    }

    // Clear all error messages
    clearAllErrors();
}

// Clear all error and success messages
function clearAllErrors() {
    document.querySelectorAll('.error, .success').forEach(el => {
        el.textContent = '';
        el.classList.remove('show');
    });
}

// View all users (for debugging)
function viewAllUsers() {
    const users = JSON.parse(localStorage.getItem('ictUsers')) || [];
    console.log('All registered users:', users);
}

// Sign Up Form Handler
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Clear previous errors
    clearAllErrors();

    // Get form values
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    // Validation
    let isValid = true;

    if (name.length < 3) {
        showError('signupNameError', 'Name must be at least 3 characters long');
        isValid = false;
    }

    if (!email.includes('@')) {
        showError('signupEmailError', 'Please enter a valid email address');
        isValid = false;
    }

    if (password.length < 6) {
        showError('signupPasswordError', 'Password must be at least 6 characters long');
        isValid = false;
    }

    if (password !== confirmPassword) {
        showError('signupConfirmPasswordError', 'Passwords do not match');
        isValid = false;
    }

    if (!isValid) return;

    // Get existing users
    let users = JSON.parse(localStorage.getItem('ictUsers')) || [];

    // Check if email already exists
    if (users.some(user => user.email.toLowerCase() === email.toLowerCase())) {
        showError('signupError', 'Email already registered. Please use a different email or sign in.');
        return;
    }

    // Create new user
    const newUser = {
        id: Date.now(),
        name: name,
        email: email.toLowerCase(),
        password: password, // In production, this should be hashed
        registeredAt: new Date().toISOString(),
        quizScores: []
    };

    // Add user to localStorage
    users.push(newUser);
    localStorage.setItem('ictUsers', JSON.stringify(users));

    // Show success message
    showSuccess('signupSuccess', 'Account created successfully! Please sign in to continue.');

    // Clear form
    document.getElementById('signupForm').reset();

    // Auto switch to sign in after 2 seconds
    setTimeout(() => {
        toggleForms();
    }, 2000);
});

// Sign In Form Handler
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Clear previous errors
    clearAllErrors();

    // Get form values
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;

    // Validation
    if (!email.includes('@')) {
        showError('loginEmailError', 'Please enter a valid email address');
        return;
    }

    if (password.length < 1) {
        showError('loginPasswordError', 'Password is required');
        return;
    }

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('ictUsers')) || [];

    // Find user
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

    if (!user) {
        showError('loginError', 'Email not found. Please sign up first.');
        return;
    }

    if (user.password !== password) {
        showError('loginError', 'Incorrect password. Please try again.');
        return;
    }

    // Login successful
    localStorage.setItem('currentUser', JSON.stringify(user));
    showSuccess('loginSuccess', 'Login successful! Redirecting...');

    // Redirect to dashboard after 1.5 seconds
    setTimeout(() => {
        window.location.href = 'quiz.html';
    }, 1500);
});

// Helper function to show error
function showError(elementId, message) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.classList.add('show');
}

// Helper function to show success
function showSuccess(elementId, message) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.classList.add('show');
}

// Check if user is already logged in (redirect if so)
window.addEventListener('load', function() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        // User is already logged in, could auto-redirect
        console.log('User already logged in:', JSON.parse(currentUser).name);
    }
});
