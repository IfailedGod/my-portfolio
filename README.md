# ICT Quiz Pro - Complete Documentation

## Overview
ICT Quiz Pro is a comprehensive web-based quiz platform designed for learning about Information and Communication Technology (ICT). It features user authentication, multiple quiz categories, progress tracking, and detailed result analysis.

## Features

✅ **User Authentication**
- Sign up with email and password
- Secure login system
- Password validation
- User profile management

✅ **Multiple Quiz Categories**
1. **📱 ICT Fundamentals** - Basic concepts, hardware, software, and networking basics
2. **🖥️ Hardware & Devices** - Computer components, peripherals, and specifications
3. **🌐 Networking & Internet** - Networks, protocols, and connectivity
4. **🔒 Cybersecurity** - Security threats, protection, and safe practices

✅ **Quiz Features**
- 10 questions per quiz
- Multiple choice answers
- Progress tracking
- Real-time timer
- Navigation between questions
- Immediate score calculation

✅ **Results & Tracking**
- Score display with percentage
- Performance feedback
- Detailed answer review
- Quiz history saved to profile
- Time spent on quiz

## How to Use

### 1. Starting the Application
1. Open `index.html` in your web browser
2. Click "Get Started" button
3. You'll be redirected to the login page

### 2. Sign Up (New Users)
1. Click "Sign Up" link on the login page
2. Fill in the required information:
   - **Full Name**: Enter your name (minimum 3 characters)
   - **Email**: Enter a valid email address
   - **Password**: Create a password (minimum 6 characters)
   - **Confirm Password**: Re-enter your password
3. Click "Sign Up" button
4. After successful registration, you'll be automatically redirected to login
5. Enter your credentials to access the quiz

### 3. Sign In (Existing Users)
1. On the login page, enter your email and password
2. Click "Sign In" button
3. You'll be redirected to the quiz selection page

### 4. Taking a Quiz
1. Select a quiz category from the available options
2. Read the quiz introduction and click "Start Quiz"
3. Answer each question by selecting one option
4. Use "Previous" and "Next" buttons to navigate
5. Click "Submit Quiz" on the last question to finish

### 5. Viewing Results
1. After submitting, you'll see your score
2. View performance feedback based on your score
3. Click "View Details" to see correct/incorrect answers
4. Click "Take Another Quiz" to go back to quiz selection

### 6. Logout
1. Click the "Logout" button in the top right
2. Confirm your logout
3. You'll be redirected to the login page

## File Structure

```
📁 4TH QUARTER/
├── index.html          # Welcome/home page
├── login.html          # Sign in & Sign up page
├── login.js            # Authentication logic
├── quiz.html           # Quiz interface
├── quiz.js             # Quiz logic and questions
├── quiz.css            # Quiz styling (optional)
└── README.md           # This file
```

## User Data Storage

All user data is stored in the browser's **localStorage**:
- **ictUsers**: Contains all registered users and their scores
- **currentUser**: Contains the currently logged-in user's information

⚠️ **Important**: Clearing browser cache will delete all user data. For production use, implement server-side database.

## Quiz Scoring

Scores are calculated based on correct answers:
- **90-100%**: 🎉 Excellent! Outstanding performance!
- **75-89%**: 👏 Great job! Well done!
- **60-74%**: ✓ Good! Keep practicing!
- **50-59%**: ⚠️ Fair. Review the material and try again!
- **Below 50%**: 📚 Need to study more. Try again after review!

## Quiz Categories Details

### 📱 ICT Fundamentals
- What is ICT?
- Types of computers
- Storage units (bits, bytes, etc.)
- System vs. Application software
- RAM, ROM, and storage
- Computer components
- Operating Systems
- Input/Output devices
- Web concepts (DNS, URL, etc.)

### 🖥️ Hardware & Devices
- CPU and processors
- RAM and Memory
- Motherboard functions
- Storage devices
- GPU and graphics
- Cooling systems
- Power supplies
- Monitors and displays
- BIOS
- Computer ports

### 🌐 Networking & Internet
- IP protocols
- IP address ranges
- DNS system
- Data transmission media
- Firewalls
- HTTPS and security
- WAN networks
- IP address classes
- Network ports
- Network devices

### 🔒 Cybersecurity
- Viruses and malware
- Phishing attacks
- Password security
- Encryption methods
- DDoS attacks
- Vulnerabilities
- Antivirus software
- Email security
- Safe practices

## Password Requirements

When creating an account:
- ✓ Minimum 6 characters
- ✓ Passwords must match confirmation
- ✓ Can contain numbers, letters, and special characters
- ⚠️ Passwords are stored in localStorage (not encrypted for this demo)

## Tips for Best Experience

1. **Use in Modern Browsers**: Chrome, Firefox, Edge, Safari
2. **JavaScript Enabled**: JavaScript must be enabled
3. **Cookies/Storage Enabled**: Browser must allow local storage
4. **Screen Size**: Works on desktop and mobile devices
5. **Reset Password**: If you forget your password, use browser developer tools:
   - Press F12
   - Go to Application → Local Storage
   - Find and delete your entry

## Security Notes

This is a demo application. For production use, implement:
- Server-side authentication
- Password hashing (bcrypt, argon2)
- HTTPS/SSL encryption
- Database storage instead of localStorage
- Session management
- CSRF protection

## Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Edge 90+
- ✅ Safari 14+
- ⚠️ IE not supported

## Troubleshooting

### Issue: Can't login
**Solution**: Check if your email is registered. Sign up first if new user.

### Issue: Data not saving
**Solution**: Ensure cookies/local storage is enabled in browser settings.

### Issue: Quiz not loading
**Solution**: Refresh the page or clear browser cache and restart.

### Issue: Logout not working
**Solution**: Try again or close browser tab and reopen.

## Contact & Support

For issues or suggestions, please ensure:
- JavaScript is enabled
- Browser is up to date
- Local storage is enabled
- No browser extensions blocking the site

## License

This educational project is provided as-is for learning purposes.

---

**Happy Learning! 🎓 Master ICT with ICT Quiz Pro!**
