const App = {
    init() {
        this.loadTheme();
        this.renderPhilosophers();
        this.renderTopics();
        this.renderResources();
        this.renderVideos();
        this.initModals();
        this.initNavigation();
        Search.init();
        Chat.init();
    },

    loadTheme() {
        const savedTheme = localStorage.getItem(CONFIG.STORAGE_KEYS.THEME);
        if (savedTheme === 'dark') {
            document.body.classList.add('dark-mode');
            const icon = document.getElementById('themeIcon');
            if (icon) icon.className = 'fas fa-sun';
        }
    },

    renderPhilosophers() {
        const grid = document.getElementById('philosophersGrid');
        if (!grid) return;

        const philosophers = getPhilosopherList();
        grid.innerHTML = philosophers.map(p => `
            <div class="philosopher-card" onclick="showPhilosopher('${p.id}')">
                <div class="philosopher-portrait">
                    ${p.portrait 
                        ? `<img src="${p.portrait}" alt="${p.name}" onerror="this.parentElement.innerHTML='<div class=\\'philosopher-portrait-placeholder\\'><i class=\\'fas fa-user\\'></i><span>${p.nameEn}</span></div>'">` 
                        : `<div class="philosopher-portrait-placeholder"><i class="fas fa-user"></i><span>${p.nameEn}</span></div>`
                    }
                </div>
                <div class="philosopher-content">
                    <div class="philosopher-header">
                        <div class="philosopher-avatar" style="background: ${p.gradient}">${p.avatar}</div>
                        <div class="philosopher-info">
                            <h3>${p.name}</h3>
                            <p class="era">${p.era} · ${p.years}</p>
                        </div>
                    </div>
                    <p class="philosopher-description">${p.shortDesc}</p>
                    <button class="philosopher-chat-btn" onclick="event.stopPropagation(); chatWithPhilosopher('${p.id}')">
                        <i class="fas fa-comments"></i> 与${p.name}对话
                    </button>
                </div>
            </div>
        `).join('');
    },

    renderTopics() {
        const grid = document.getElementById('topicsGrid');
        if (!grid) return;

        const topics = getTopicList();
        grid.innerHTML = topics.map(t => `
            <div class="topic-card" onclick="showTopic('${t.id}')">
                <div class="topic-icon">${t.icon}</div>
                <h3>${t.title}</h3>
                <p>${t.shortDesc}</p>
            </div>
        `).join('');
    },

    renderResources() {
        const grid = document.getElementById('resourcesGrid');
        if (!grid) return;

        const resources = getResourceList();
        grid.innerHTML = resources.map(r => `
            <div class="resource-card" onclick="showResource('${r.id}')">
                <span class="resource-type">${r.type}</span>
                <h3>${r.title}</h3>
                <p>${r.shortDesc}</p>
                <a href="javascript:void(0)" class="resource-link">
                    查看详情 <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `).join('');
    },

    renderVideos() {
        if (typeof renderVideos === 'function') {
            renderVideos();
        }
    },

    initModals() {
        window.onclick = (event) => {
            const modal = document.getElementById('modal');
            if (event.target === modal) {
                closeModal();
            }
        };

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
    },

    initNavigation() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    document.getElementById('navLinks').classList.remove('active');
                }
            });
        });
    }
};

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const icon = document.getElementById('themeIcon');
    const isDark = document.body.classList.contains('dark-mode');
    
    if (icon) {
        icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
    
    localStorage.setItem(CONFIG.STORAGE_KEYS.THEME, isDark ? 'dark' : 'light');
}

function toggleMobileMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}

function showModal(content) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    if (modal && modalBody) {
        modalBody.innerHTML = content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function showPhilosopher(id) {
    const philosopher = PHILOSOPHERS[id];
    if (philosopher) {
        let content = philosopher.content;
        content += `
            <div style="margin-top: 2rem; padding: 1.5rem; background: var(--primary-50); border-radius: 12px; text-align: center;">
                <p style="margin-bottom: 1rem; color: var(--gray-600);">想与${philosopher.name}进行深度对话？</p>
                <button class="btn btn-primary" onclick="closeModal(); chatWithPhilosopher('${id}')">
                    <i class="fas fa-comments"></i> 开始对话
                </button>
            </div>
        `;
        showModal(content);
    }
}

function showTopic(id) {
    const topic = TOPICS[id];
    if (topic) {
        showModal(`<h2>${topic.icon} ${topic.title}</h2>${topic.content}`);
    }
}

function showQuickTopic(id) {
    showTopic(id);
}

function showResource(id) {
    const resource = RESOURCES[id];
    if (resource) {
        showModal(`<h2>${resource.title}</h2>${resource.content}`);
    }
}

function showGuide() {
    showModal(`
        <h2>学习指南</h2>
        <p>欢迎使用哲学与精神分析学习平台！</p>

        <h3>学习路径建议</h3>
        <ol>
            <li><strong>基础入门</strong>：从"哲学家"开始，了解主要思想家的生平与核心观念</li>
            <li><strong>主题探索</strong>：选择感兴趣的"核心主题"深入学习</li>
            <li><strong>对话实践</strong>：使用AI对话功能，与哲学家进行深度对话</li>
            <li><strong>原典阅读</strong>：查阅"学习资源"，阅读哲学家原典选段</li>
            <li><strong>视频学习</strong>：观看B站未明子等优质UP主的哲学视频</li>
        </ol>

        <h3>AI对话功能</h3>
        <ul>
            <li>点击哲学家卡片上的"与XX对话"按钮，可以与该哲学家进行角色扮演对话</li>
            <li>每位哲学家都有独特的性格和对话风格</li>
            <li>对话基于DeepSeek-V3大模型，提供深度哲学讨论</li>
        </ul>

        <h3>学习建议</h3>
        <ul>
            <li>保持好奇心，敢于质疑</li>
            <li>做笔记，记录思考过程</li>
            <li>参与讨论，交流观点</li>
            <li>联系现实，思考哲学的应用</li>
        </ul>

        <h3>学习工具</h3>
        <ul>
            <li>搜索功能：快速查找哲学家或概念</li>
            <li>概念词典：理解专业术语</li>
            <li>暗色模式：保护眼睛，适合夜间学习</li>
        </ul>
    `);
}

document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
