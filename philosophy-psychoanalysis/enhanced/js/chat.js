const Chat = {
    currentPhilosopher: null,
    conversationHistory: [],
    maxHistory: 20,
    isTyping: false,

    init() {
        this.loadHistory();
        this.setupEventListeners();
    },

    setupEventListeners() {
        const input = document.getElementById('chatInput');
        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.sendMessage();
                }
            });
        }
    },

    loadHistory() {
        try {
            const saved = localStorage.getItem(CONFIG.STORAGE_KEYS.CHAT_HISTORY);
            if (saved) {
                this.conversationHistory = JSON.parse(saved);
            }
        } catch (e) {
            console.error('加载对话历史失败:', e);
        }
    },

    saveHistory() {
        try {
            localStorage.setItem(
                CONFIG.STORAGE_KEYS.CHAT_HISTORY,
                JSON.stringify(this.conversationHistory.slice(-this.maxHistory))
            );
        } catch (e) {
            console.error('保存对话历史失败:', e);
        }
    },

    setPhilosopher(philosopherId) {
        this.currentPhilosopher = philosopherId;
        this.conversationHistory = [];
        
        const philosopher = PHILOSOPHERS[philosopherId];
        if (philosopher) {
            this.updateHeader(philosopher.name, philosopher.avatar, philosopher.gradient);
            this.clearMessages();
            this.addBotMessage(`你好！我是${philosopher.name}。有什么哲学问题想要探讨吗？`);
        }
    },

    setGeneralMode() {
        this.currentPhilosopher = null;
        this.conversationHistory = [];
        this.updateHeader('哲学导师', '🧠', 'var(--gradient-1)');
        this.clearMessages();
        this.addBotMessage('你好！我是你的哲学导师。有什么哲学问题想要探讨吗？或者点击上方的哲学家，与他们进行深度对话。');
    },

    updateHeader(title, avatar, gradient) {
        const titleEl = document.getElementById('chatTitle');
        const avatarEl = document.getElementById('chatAvatar');
        
        if (titleEl) titleEl.textContent = title;
        if (avatarEl) {
            if (avatar.length <= 2) {
                avatarEl.textContent = avatar;
            } else {
                avatarEl.innerHTML = `<i class="${avatar}"></i>`;
            }
            avatarEl.style.background = gradient;
        }
    },

    clearMessages() {
        const messagesEl = document.getElementById('chatMessages');
        if (messagesEl) {
            messagesEl.innerHTML = '';
        }
    },

    addUserMessage(content) {
        const messagesEl = document.getElementById('chatMessages');
        if (!messagesEl) return;

        const messageEl = document.createElement('div');
        messageEl.className = 'message user';
        messageEl.textContent = content;
        messagesEl.appendChild(messageEl);
        
        this.scrollToBottom();
    },

    addBotMessage(content) {
        const messagesEl = document.getElementById('chatMessages');
        if (!messagesEl) return;

        const messageEl = document.createElement('div');
        messageEl.className = 'message bot';
        messageEl.innerHTML = this.formatMessage(content);
        messagesEl.appendChild(messageEl);
        
        this.scrollToBottom();
    },

    addTypingIndicator() {
        const messagesEl = document.getElementById('chatMessages');
        if (!messagesEl) return null;

        const indicatorEl = document.createElement('div');
        indicatorEl.className = 'message bot';
        indicatorEl.id = 'typingIndicator';
        indicatorEl.innerHTML = `
            <div class="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        messagesEl.appendChild(indicatorEl);
        this.scrollToBottom();
        
        return indicatorEl;
    },

    removeTypingIndicator() {
        const indicator = document.getElementById('typingIndicator');
        if (indicator) {
            indicator.remove();
        }
    },

    formatMessage(content) {
        return content
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\n\n/g, '</p><p>')
            .replace(/\n/g, '<br>')
            .replace(/^/, '<p>')
            .replace(/$/, '</p>');
    },

    scrollToBottom() {
        const messagesEl = document.getElementById('chatMessages');
        if (messagesEl) {
            messagesEl.scrollTop = messagesEl.scrollHeight;
        }
    },

    async sendMessage() {
        const input = document.getElementById('chatInput');
        if (!input) return;

        const message = input.value.trim();
        if (!message || this.isTyping) return;

        input.value = '';
        this.addUserMessage(message);
        
        this.conversationHistory.push({
            role: 'user',
            content: message
        });

        this.isTyping = true;
        this.setSendButtonState(false);
        this.addTypingIndicator();

        try {
            let response;
            if (this.currentPhilosopher) {
                response = await API.chatWithPhilosopher(
                    this.currentPhilosopher,
                    message,
                    this.conversationHistory.slice(0, -1)
                );
            } else {
                response = await API.chatWithGeneralAssistant(
                    message,
                    this.conversationHistory.slice(0, -1)
                );
            }

            this.removeTypingIndicator();
            this.addBotMessage(response);
            
            this.conversationHistory.push({
                role: 'assistant',
                content: response
            });
            
            this.saveHistory();
        } catch (error) {
            this.removeTypingIndicator();
            this.addBotMessage(`抱歉，发生了错误：${error.message}。请稍后再试。`);
        } finally {
            this.isTyping = false;
            this.setSendButtonState(true);
        }
    },

    setSendButtonState(enabled) {
        const sendBtn = document.querySelector('.chat-send');
        if (sendBtn) {
            sendBtn.disabled = !enabled;
        }
    },

    askQuestion(question) {
        const input = document.getElementById('chatInput');
        if (input) {
            input.value = question;
            this.sendMessage();
        }
    }
};

function toggleChat() {
    const chatInterface = document.getElementById('chatInterface');
    const chatBubble = document.querySelector('.chat-bubble');
    
    if (chatInterface) {
        const isVisible = chatInterface.style.display === 'flex';
        chatInterface.style.display = isVisible ? 'none' : 'flex';
        
        if (chatBubble) {
            chatBubble.style.display = isVisible ? 'flex' : 'none';
        }
        
        if (!isVisible && !Chat.currentPhilosopher) {
            Chat.setGeneralMode();
        }
    }
}

function sendMessage() {
    Chat.sendMessage();
}

function askQuestion(question) {
    Chat.askQuestion(question);
}

function startLearning() {
    toggleChat();
}

function chatWithPhilosopher(philosopherId) {
    const chatInterface = document.getElementById('chatInterface');
    const chatBubble = document.querySelector('.chat-bubble');
    
    if (chatInterface) {
        chatInterface.style.display = 'flex';
    }
    if (chatBubble) {
        chatBubble.style.display = 'none';
    }
    
    Chat.setPhilosopher(philosopherId);
}
