// ============================================
// Student FAQ Chatbot - Frontend Only
// STRIDE Security Model Implementation
// ============================================

// FAQ Dataset - Comprehensive Student Questions and Answers
const faqDatabase = [
    // ===== ADMISSIONS & REGISTRATION =====
    {
        id: 1,
        category: "Admissions",
        keywords: ["apply", "admission", "application", "enroll", "admission process"],
        question: "How do I apply for admission?",
        answer: "To apply for admission:\n1. Visit the admissions portal on our website\n2. Complete the online application form\n3. Submit required documents (transcripts, test scores, ID)\n4. Pay the application fee ($50)\n5. Track your application status online\nApplications are reviewed within 2-4 weeks."
    },
    {
        id: 2,
        category: "Admissions",
        keywords: ["documents", "required", "what do i need", "application requirements"],
        question: "What documents do I need to submit?",
        answer: "Required documents include:\n• High school diploma or GED\n• Official transcripts\n• Standardized test scores (SAT/ACT)\n• Valid ID (passport or driver's license)\n• Essay or personal statement\n• 2 letters of recommendation\n• Proof of English proficiency (if international)\nSubmit scanned copies via the application portal."
    },
    {
        id: 3,
        category: "Admissions",
        keywords: ["deadline", "when", "application deadline", "last day"],
        question: "What are the application deadlines?",
        answer: "Application Deadlines:\n• Fall Admission: June 1st\n• Spring Admission: November 1st\n• Summer Admission: March 1st\nEarly admission (by April 15th) may offer scholarship opportunities. Late applications are reviewed on a rolling basis if spaces are available."
    },
    {
        id: 4,
        category: "Admissions",
        keywords: ["international", "visa", "f1", "study visa"],
        question: "How can international students apply?",
        answer: "International Student Application Process:\n1. Complete the international student application form\n2. Submit TOEFL/IELTS English scores\n3. Provide proof of financial support\n4. Submit academic transcripts with translations\n5. I-20 form will be issued after acceptance\n6. Apply for F-1 student visa\nInternational students must also submit evidence of financial capability to cover tuition and expenses."
    },

    // ===== ACADEMIC PROGRAMS =====
    {
        id: 5,
        category: "Academic",
        keywords: ["programs", "degree", "major", "courses", "what programs"],
        question: "What degree programs are available?",
        answer: "We offer programs in:\n• Computer Science (BS, MS)\n• Business Administration (BA, MBA)\n• Engineering (BS in various specializations)\n• Health Sciences (BS, MS)\n• Education (BA, MEd)\n• Arts & Sciences (BA)\nEach program has multiple specialization options and flexible scheduling (full-time, part-time, online)."
    },
    {
        id: 6,
        category: "Academic",
        keywords: ["change major", "switch", "different program"],
        question: "Can I change my major?",
        answer: "Yes, you can change your major! Here's how:\n1. Meet with your academic advisor\n2. Complete a Major Change Form\n3. Submit to the Registrar's Office\nNote: Changing after 60 completed credits may require an additional semester. Some credits may not transfer to your new program. It's best to make the change early in your academic journey."
    },
    {
        id: 7,
        category: "Academic",
        keywords: ["class size", "student teacher ratio", "class capacity"],
        question: "What are the average class sizes?",
        answer: "Our average class sizes are:\n• Introductory Courses: 80-150 students (large lectures)\n• Upper-level Courses: 25-40 students\n• Seminars: 10-20 students\n• Graduate Courses: 10-25 students\nSmaller class sizes in upper-level courses ensure more personalized instruction and interaction with professors."
    },
    {
        id: 8,
        category: "Academic",
        keywords: ["online learning", "distance education", "virtual classes"],
        question: "Are online classes available?",
        answer: "Yes! We offer various online learning options:\n• Full online degree programs\n• Hybrid courses (mix of online and in-person)\n• Online electives for on-campus students\n• Asynchronous learning (self-paced)\n• Synchronous live sessions via Zoom\nOnline courses have the same rigor and credit value as in-person courses. You'll need reliable internet access."
    },
   
    // ===== TUITION & FINANCIAL AID =====
    {
        id: 9,
        category: "Financial",
        keywords: ["tuition", "cost", "fees", "how much", "tuition cost"],
        question: "What is the tuition cost?",
        answer: "2025-2026 Tuition and Fees:\n• Undergraduate (per semester): $8,500\n• Graduate (per semester): $10,200\n• International Students: Add 15% premium\n• Part-time rate: $425 per credit hour\nTuition is subject to annual increases (typically 3-4%). Payment plans are available."
    },
    {
        id: 10,
        category: "Financial",
        keywords: ["financial aid", "scholarship", "grant", "loan", "financial assistance"],
        question: "What financial aid options are available?",
        answer: "We offer multiple financial aid options:\n• Scholarships (merit-based and need-based)\n• Grants (federal and institutional)\n• Federal Student Loans (Stafford, PLUS)\n• Work-Study Programs\n• Payment Plans (interest-free installments)\n• Emergency Funds for eligible students\nFunds are typically available on a first-come, first-served basis. Apply early for priority consideration."
    },
    {
        id: 11,
        category: "Financial",
        keywords: ["fafsa", "financial aid application", "aid application"],
        question: "How do I apply for financial aid?",
        answer: "Financial Aid Application Steps:\n1. Fill out the Free Application for Federal Student Aid (FAFSA) at fafsa.gov\n2. Complete the Institutional Financial Aid Form on our website\n3. Upload required income documents (tax returns, W-2s)\n4. Submit by March 1st for priority consideration\n5. Submit tax information by June 30th\nYou'll receive a Financial Aid Award Letter within 2-3 weeks of completing the application."
    },
    {
        id: 12,
        category: "Financial",
        keywords: ["scholarship", "merit scholarship", "grants"],
        question: "What types of scholarships are available?",
        answer: "Scholarship Types:\n• Academic Excellence: Up to $5,000/semester\n• Need-Based: Varies based on FAFSA\n• Departmental: $2,000-$4,000/semester\n• Diversity & Inclusion: Up to $6,000/semester\n• Athletic: Full to partial tuition coverage\n• Alumni Legacy: Additional $1,000/semester\nMost scholarships are renewable annually with maintained GPA (minimum 2.5 or higher)."
    },

    // ===== CAMPUS LIFE & SERVICES =====
    {
        id: 13,
        category: "Campus",
        keywords: ["housing", "dorm", "on campus", "residence hall"],
        question: "Is on-campus housing available?",
        answer: "Yes, we provide on-campus housing options:\n• Freshman Residence Halls: First-year students (mandatory)\n• Upperclass Housing: Apartments and dorms\n• Honors Housing: Alternative learning communities\n• Graduate Housing: Limited availability\nHousing cost: $3,500-$5,000 per semester (includes utilities)\nApplication opens March 1st for fall housing. On-campus housing includes meal plan options."
    },
  
    {
        id: 14,
        category: "Campus",
        keywords: ["health", "medical", "clinic", "health center"],
        question: "What health services are available?",
        answer: "Campus Health Services Include:\n• Primary care physicians\n• Counseling and mental health services\n• Urgent care (24/7 on campus)\n• Sexual health services\n• Sports medicine and injury care\n• Pharmacy (prescription discounts)\n• Vaccinations and wellness programs\nAll services are included in student health fees. Off-campus care covered through university health insurance."
    },
 
    {
        id: 15,
        category: "Campus",
        keywords: ["library", "hours", "resources", "study"],
        question: "What library facilities and hours are available?",
        answer: "Main Library Services:\n• 2 million+ book collection\n• 24/7 access (valid ID required)\n• Individual and group study spaces\n• Computer labs with specialized software\n• Printing and scanning services\n• Librarian assistance and research help\n• WiFi and charging stations\nLibrary hours: Monday-Friday 7am-2am, Weekend 10am-2am. Laptops available for checkout."
    },

    // ===== TECHNICAL & IT SUPPORT =====
    {
        id: 16,
        category: "Technical",
        keywords: ["it support", "technical support", "computer help", "tech issue"],
        question: "What technical support is available?",
        answer: "IT Support Services:\n• Help Desk: Available 24/7 (Monday-Friday in-person)\n• Phone Support: 1-800-TECH-HELP\n• Email Support: support@Conestogacollege.edu\n• Live Chat: Available on IT website\n• In-person help at Tech Centers\n• Remote desktop support for complex issues\nAverage response time: 2 hours for emails, immediate for in-person visits."
    },

    {
        id: 17,
        category: "Technical",
        keywords: ["software", "discount", "free software", "Microsoft Office"],
        question: "What software and tools can I get for free?",
        answer: "Free Software & Tools for Students:\n• Microsoft Office 365 (Word, Excel, PowerPoint)\n• Adobe Creative Suite (Photoshop, Illustrator)\n• Antivirus software (McAfee)\n• IDEs and development tools (Visual Studio, JetBrains)\n• Google Workspace tools\n• Learning management system (Canvas)\n• Project management tools (Asana, Slack)\nDownload from the Software License Portal using your student credentials."
    },

    // ===== GENERAL POLICIES & PROCEDURES =====
    {
        id: 18,
        category: "Policies",
        keywords: ["gpa", "academic standing", "academic probation"],
        question: "What GPA is required to maintain good academic standing?",
        answer: "Academic Standing Requirements:\n• Minimum 2.0 GPA overall\n• Minimum 2.0 GPA each semester\n• Below 2.0 GPA = Academic Probation\n• Below 1.5 GPA = Academic Dismissal risk\nIf placed on probation, you have one semester to improve. Academic coaching and tutoring are available to help."
    },
    {
        id: 19,
        category: "Policies",
        keywords: ["withdraw", "drop", "withdraw from class"],
        question: "Can I withdraw or drop a class?",
        answer: "Class Withdrawal/Drop Policy:\n• Drop (no record): First 2 weeks of semester\n• Withdraw (grades = W): Up to week 12\n• Late withdrawal: After week 12 (requires dean approval)\nProcedure:\n1. Contact your academic advisor\n2. Complete the withdrawal form\n3. Verify financial impact with Financial Aid\nWithdrawals don't affect GPA but may impact financial aid or visa status (international students)."
    },
    {
        id: 20,
        category: "Policies",
        keywords: ["transcript", "request transcript"],
        question: "How do I request an official transcript?",
        answer: "Official Transcript Request:\n1. Visit the Registrar's Office portal\n2. Submit official transcript request form\n3. Pay $5 per transcript (varies)\n4. Delivery options:\n   • Instant digital (email)\n   • Standard mail (3-5 business days)\n   • Express mail (1-2 business days)\nRequests processed 24/7. You can request up to 10 copies at once."
    },

    // ===== ORIENTATION & STUDENT SERVICES =====
    {
        id: 21,
        category: "Orientation",
        keywords: ["orientation", "mandatory", "program", "campus", "introduction"],
        question: "What is orientation and why is it important?",
        answer: "College orientation introduces you to campus services, resources, expectations, key dates, and how college life works. It includes a mandatory program session and optional campus activities that help you settle in."
    },
    {
        id: 22,
        category: "Orientation",
        keywords: ["miss", "missed", "virtual", "recorded", "mandatory orientation"],
        question: "What if I miss my mandatory program orientation?",
        answer: "If the session was virtual, it should be recorded and posted on eConestoga before the third week of class. Reach out to your instructor if you didn't receive it."
    },
    {
        id: 23,
        category: "Student Services",
        keywords: ["one card", "student id", "card", "transit", "library"],
        question: "What is the ONE Card and why do I need it?",
        answer: "The ONE Card is your official student ID. It's used for accessing campus transit discounts (if eligible), library, printing, Recreation Centre, and other services."
    },

    // ===== ACADEMIC SUPPORT & APPEALS =====
    {
        id: 24,
        category: "Academic",
        keywords: ["academic concerns", "grades", "policies", "student success advisor", "contact"],
        question: "Who do I contact about academic concerns (grades, academic policies)?",
        answer: "Contact a Student Success Advisor (SSA) in your program — they can help with academic issues and advise on next steps."
    },
    {
        id: 25,
        category: "Academic",
        keywords: ["dispute", "grade", "appeal", "grade appeal", "academic decision"],
        question: "How do I dispute a grade or academic decision?",
        answer: "Find information about academic appeals and academic integrity procedures on the college website or ask your Student Success Advisor (SSA) for help."
    },

    // ===== CAMPUS SAFETY & WELLNESS =====
    {
        id: 26,
        category: "Campus",
        keywords: ["safety", "emergency", "concern", "security", "911"],
        question: "What do I do if I have a safety or emergency concern on campus?",
        answer: "Contact the college's Safety and Security office immediately. Off-campus, call emergency services (911)."
    },
    {
        id: 27,
        category: "Wellness",
        keywords: ["mental health", "counseling", "peer support", "medical", "good2talk"],
        question: "Where can I find mental health support?",
        answer: "Conestoga offers counselling, peer support, and medical help. After-hours assistance is available via services like Good2Talk."
    },

    // ===== FINANCIAL AID SPECIFICS =====
    {
        id: 28,
        category: "Financial",
        keywords: ["scholarship", "bursary", "award", "difference", "financial aid"],
        question: "What's the difference between scholarships, bursaries, and awards?",
        answer: "Financial Aid Types:\n• Awards: Recognize achievement or contribution.\n• Bursaries: Based on financial need.\n• Scholarships: Based mainly on academic excellence."
    },
    {
        id: 29,
        category: "Financial",
        keywords: ["apply", "award", "bursary", "general awards application", "gaa"],
        question: "How do I apply for awards and bursaries?",
        answer: "Complete the General Awards Application (GAA). You'll be automatically considered for eligible awards on submission."
    }
];

// ============================================
// STRIDE SECURITY IMPLEMENTATION
// ============================================

// 1. INPUT VALIDATION & SANITIZATION
class InputSanitizer {
    // Remove potentially dangerous characters to prevent XSS
    static sanitize(input) {
        if (typeof input !== 'string') return '';
        
        return input
            .trim()
            .slice(0, 500) // Limit input length (DoS prevention)
            .replace(/[<>\"']/g, '') // Remove HTML special characters
            .replace(/javascript:/gi, '') // Block javascript: protocol
            .replace(/on\w+\s*=/gi, ''); // Block event handlers
    }

    // Validate input is not empty and reasonable length
    static isValidInput(input) {
        const sanitized = this.sanitize(input);
        return sanitized.length > 0 && sanitized.length <= 500;
    }

    // Escape HTML for safe display
    static escapeHTML(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }
}

// ============================================
// CHATBOT LOGIC & MATCHING ALGORITHM
// ============================================

class ChatBot {
    constructor() {
        this.conversationHistory = [];
        this.currentQuestion = null;
    }

    // Fuzzy string matching for better keyword detection
    static calculateSimilarity(str1, str2) {
        const s1 = str1.toLowerCase();
        const s2 = str2.toLowerCase();
        
        if (s1 === s2) return 1;
        if (s1.includes(s2) || s2.includes(s1)) return 0.9;
        
        let matches = 0;
        const shorter = s1.length < s2.length ? s1 : s2;
        const longer = s1.length > s2.length ? s1 : s2;
        
        for (let char of shorter.split('')) {
            if (longer.includes(char)) matches++;
        }
        
        return matches / Math.max(s1.length, s2.length);
    }

    // Find best matching FAQ answer
    findBestMatch(userMessage) {
        const sanitized = InputSanitizer.sanitize(userMessage).toLowerCase();
        
        if (sanitized.length === 0) return null;

        let bestMatch = null;
        let bestScore = 0;

        for (let faq of faqDatabase) {
            // Check question text match
            const questionScore = ChatBot.calculateSimilarity(sanitized, faq.question);
            
            // Check keyword matches
            let keywordScore = 0;
            for (let keyword of faq.keywords) {
                const similarity = ChatBot.calculateSimilarity(sanitized, keyword);
                keywordScore = Math.max(keywordScore, similarity);
            }

            // Combine scores (keywords weighted slightly higher for specificity)
            const finalScore = (questionScore * 0.4) + (keywordScore * 0.6);

            if (finalScore > bestScore && finalScore > 0.3) {
                bestScore = finalScore;
                bestMatch = faq;
            }
        }

        return bestMatch;
    }

    // Generate response based on FAQ match
    generateResponse(userMessage) {
        const match = this.findBestMatch(userMessage);

        if (match) {
            return {
                type: 'answer',
                answer: match.answer,
                category: match.category,
                confidence: true
            };
        } else {
            // No matching keywords found
            return {
                type: 'no_match',
                answer: "Sorry, I don't have an answer to that question. No matching keywords were found in my database.\n\nI can help with questions about:\n• Admissions & Application\n• Academic Programs\n• Tuition & Financial Aid\n• Campus Life & Services\n• Technical Support\n• Orientation & Student Services\n• Academic Appeals\n• Campus Safety & Wellness\n\nPlease try rephrasing your question or choose from the suggested topics above.",
                confidence: false
            };
        }
    }

    // Add to conversation history
    addToHistory(role, message) {
        this.conversationHistory.push({
            role: role,
            message: message,
            timestamp: new Date()
        });
    }

    // Get current timestamp
    getTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const mins = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${mins}`;
    }
}

// ============================================
// DOM MANIPULATION & EVENT HANDLING
// ============================================

const chatbot = new ChatBot();
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const suggestedQuestions = document.getElementById('suggestedQuestions');

// Send message handler
function sendMessage() {
    const message = userInput.value;

    // Validate input
    if (!InputSanitizer.isValidInput(message)) {
        showError('Please enter a valid message (max 500 characters).');
        return;
    }

    const sanitized = InputSanitizer.sanitize(message);

    // Add user message to chat
    addMessageToChat('user', sanitized);
    chatbot.addToHistory('user', sanitized);

    // Clear input
    userInput.value = '';
    userInput.focus();

    // Show typing indicator
    showTypingIndicator();

    // Simulate processing delay for better UX
    setTimeout(() => {
        removeTypingIndicator();
        
        // Get bot response
        const response = chatbot.generateResponse(sanitized);
        addMessageToChat('bot', response.answer);
        chatbot.addToHistory('bot', response.answer);

        // Hide suggested questions after first response
        if (chatbot.conversationHistory.length >= 4) {
            suggestedQuestions.style.display = 'none';
        }
    }, 800);
}

// Add message to chat display
function addMessageToChat(role, message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${role}-message`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    // Escape HTML to prevent XSS
    contentDiv.textContent = message;

    const timeSpan = document.createElement('span');
    timeSpan.className = 'message-time';
    timeSpan.textContent = chatbot.getTime();

    messageDiv.appendChild(contentDiv);
    messageDiv.appendChild(timeSpan);
    chatMessages.appendChild(messageDiv);

    // Auto-scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message';
    messageDiv.id = 'typing-indicator';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = '<div class="typing-indicator"><div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div></div>';

    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Remove typing indicator
function removeTypingIndicator() {
    const indicator = document.getElementById('typing-indicator');
    if (indicator) {
        indicator.remove();
    }
}

// Show error message
function showError(errorMsg) {
    alert(errorMsg);
}

// Set suggestion and send
function setSuggestion(question) {
    userInput.value = question;
    userInput.focus();
}

// ============================================
// EVENT LISTENERS
// ============================================

sendBtn.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

userInput.addEventListener('input', () => {
    // Disable send button if input is empty
    sendBtn.disabled = userInput.value.trim().length === 0;
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    userInput.focus();
    sendBtn.disabled = true;
});

// ============================================
// STRIDE MODEL COMPLIANCE SUMMARY
// ============================================
/*
STRIDE SECURITY IMPLEMENTATION:

✓ SPOOFING: Not applicable (client-side only, no authentication needed)

✓ TAMPERING: 
  - Input validation & sanitization in InputSanitizer class
  - HTML special characters stripped
  - Input length limit (500 chars) prevents buffer overflow
  - Event handler injection blocked

✓ REPUDIATION: Not applicable (no backend logging/audit)

✓ INFORMATION DISCLOSURE: 
  - No sensitive student data stored
  - No API calls expose information
  - All data is pre-configured FAQ dataset
  - Client-side only, no network requests

✓ DENIAL OF SERVICE:
  - Input length limited (500 characters)
  - Message rate not restricted (acceptable for chat)
  - No resource-intensive operations

✓ ELEVATION OF PRIVILEGE:
  - Not applicable (no user roles/permissions)
  - Frontend-only, no backend privilege escalation
*/
