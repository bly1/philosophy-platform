const Search = {
    debounceTimer: null,
    minSearchLength: 2,

    init() {
        const input = document.getElementById('searchInput');
        const results = document.getElementById('searchResults');
        
        if (input) {
            input.addEventListener('input', (e) => this.handleInput(e.target.value));
            input.addEventListener('focus', () => this.showResults());
            input.addEventListener('blur', () => {
                setTimeout(() => this.hideResults(), 200);
            });
        }
    },

    handleInput(value) {
        clearTimeout(this.debounceTimer);
        
        if (value.length < this.minSearchLength) {
            this.hideResults();
            return;
        }

        this.debounceTimer = setTimeout(() => {
            this.search(value);
        }, 300);
    },

    search(query) {
        const results = [];
        const queryLower = query.toLowerCase();

        Object.values(PHILOSOPHERS).forEach(p => {
            if (p.name.toLowerCase().includes(queryLower) ||
                p.nameEn.toLowerCase().includes(queryLower) ||
                p.shortDesc.toLowerCase().includes(queryLower) ||
                p.era.toLowerCase().includes(queryLower)) {
                results.push({
                    type: '哲学家',
                    id: p.id,
                    name: p.name,
                    description: p.shortDesc
                });
            }
        });

        Object.values(TOPICS).forEach(t => {
            if (t.title.toLowerCase().includes(queryLower) ||
                t.shortDesc.toLowerCase().includes(queryLower)) {
                results.push({
                    type: '主题',
                    id: t.id,
                    name: t.title,
                    description: t.shortDesc
                });
            }
        });

        Object.values(RESOURCES).forEach(r => {
            if (r.title.toLowerCase().includes(queryLower) ||
                r.shortDesc.toLowerCase().includes(queryLower) ||
                r.type.toLowerCase().includes(queryLower)) {
                results.push({
                    type: '资源',
                    id: r.id,
                    name: r.title,
                    description: r.shortDesc
                });
            }
        });

        this.displayResults(results.slice(0, 10));
    },

    displayResults(results) {
        const container = document.getElementById('searchResults');
        if (!container) return;

        if (results.length === 0) {
            container.innerHTML = `
                <div class="search-result-item">
                    <div class="search-result-type">提示</div>
                    <div class="search-result-name">未找到相关结果</div>
                </div>
            `;
        } else {
            container.innerHTML = results.map(r => `
                <div class="search-result-item" onclick="Search.selectResult('${r.type}', '${r.id}')">
                    <div class="search-result-type">${r.type}</div>
                    <div class="search-result-name">${r.name}</div>
                    <div style="font-size: 0.75rem; color: var(--gray-500); margin-top: 0.25rem;">
                        ${r.description.substring(0, 50)}...
                    </div>
                </div>
            `).join('');
        }

        this.showResults();
    },

    showResults() {
        const container = document.getElementById('searchResults');
        if (container && container.innerHTML) {
            container.classList.add('active');
        }
    },

    hideResults() {
        const container = document.getElementById('searchResults');
        if (container) {
            container.classList.remove('active');
        }
    },

    selectResult(type, id) {
        this.hideResults();
        
        const input = document.getElementById('searchInput');
        if (input) input.value = '';

        switch (type) {
            case '哲学家':
                showPhilosopher(id);
                break;
            case '主题':
                showTopic(id);
                break;
            case '资源':
                showResource(id);
                break;
        }
    }
};
