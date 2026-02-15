const CLASSICS_PDF = {
    plato_republic: {
        id: 'plato_republic',
        title: '柏拉图《理想国》',
        author: '柏拉图',
        pdfUrl: 'https://www.gutenberg.org/files/1497/1497-pdf.pdf',
        onlineUrl: 'https://ctext.org/plato/guo-wang-lun/zhs',
        description: '西方哲学史上最伟大的著作之一，探讨正义、理想国家与灵魂的关系。中文版由郭斌和、张竹明翻译。',
        chapters: [
            { title: '第一卷：正义的定义', anchor: '#book1' },
            { title: '第二卷：城邦的起源', anchor: '#book2' },
            { title: '第三卷：教育制度', anchor: '#book3' },
            { title: '第四卷：城邦与灵魂', anchor: '#book4' },
            { title: '第五卷：三种浪潮', anchor: '#book5' },
            { title: '第六卷：哲学家王', anchor: '#book6' },
            { title: '第七卷：洞穴寓言', anchor: '#book7' }
        ]
    },
    aristotle_ethics: {
        id: 'aristotle_ethics',
        title: '亚里士多德《尼各马可伦理学》',
        author: '亚里士多德',
        pdfUrl: 'https://www.gutenberg.org/files/8438/8438-pdf.pdf',
        onlineUrl: 'https://ctext.org/aristotle/nicomachean-ethics/zhs',
        description: '西方伦理学的奠基之作，探讨幸福、德性与至善。中文版由廖申白翻译。',
        chapters: [
            { title: '第一卷：善与幸福', anchor: '#book1' },
            { title: '第二卷：伦理德性', anchor: '#book2' },
            { title: '第三卷：选择与责任', anchor: '#book3' },
            { title: '第六卷：理智德性', anchor: '#book6' },
            { title: '第十卷：快乐与幸福', anchor: '#book10' }
        ]
    },
    descartes_meditations: {
        id: 'descartes_meditations',
        title: '笛卡尔《第一哲学沉思录》',
        author: '笛卡尔',
        pdfUrl: 'https://www.earlymoderntexts.com/assets/pdfs/descartes1641.pdf',
        onlineUrl: 'https://ctext.org/descartes/meditations/zhs',
        description: '近代哲学的开山之作，通过方法论怀疑确立"我思故我在"。中文版由庞景仁翻译。',
        chapters: [
            { title: '第一沉思：论可被怀疑的事物', anchor: '#med1' },
            { title: '第二沉思：论人的心灵的本性', anchor: '#med2' },
            { title: '第三沉思：论上帝的存在', anchor: '#med3' },
            { title: '第四沉思：论真理与错误', anchor: '#med4' },
            { title: '第五沉思：论物质事物的本质', anchor: '#med5' },
            { title: '第六沉思：论物质事物的存在', anchor: '#med6' }
        ]
    },
    kant_critique: {
        id: 'kant_critique',
        title: '康德《纯粹理性批判》',
        author: '康德',
        pdfUrl: 'https://www.gutenberg.org/files/4280/4280-pdf.pdf',
        onlineUrl: 'https://ctext.org/kant/critique-of-pure-reason/zhs',
        description: '德国古典哲学的奠基之作，探讨理性的界限与可能性。中文版由邓晓芒翻译。',
        chapters: [
            { title: '第一版序言', anchor: '#preface' },
            { title: '先验感性论', anchor: '#aesthetic' },
            { title: '先验分析论', anchor: '#analytic' },
            { title: '先验辩证论', anchor: '#dialectic' }
        ]
    },
    hegel_phenomenology: {
        id: 'hegel_phenomenology',
        title: '黑格尔《精神现象学》',
        author: '黑格尔',
        pdfUrl: '',
        onlineUrl: 'https://ctext.org/hegel/phenomenology-of-spirit/zhs',
        description: '黑格尔哲学体系的入门之作，描述意识发展的辩证过程。中文版由贺麟、王玖兴翻译。',
        chapters: [
            { title: '序言：论科学认识', anchor: '#preface' },
            { title: '意识', anchor: '#consciousness' },
            { title: '自我意识', anchor: '#selfconsciousness' },
            { title: '理性', anchor: '#reason' },
            { title: '精神', anchor: '#spirit' }
        ]
    },
    nietzsche_zarathustra: {
        id: 'nietzsche_zarathustra',
        title: '尼采《查拉图斯特拉如是说》',
        author: '尼采',
        pdfUrl: 'https://www.gutenberg.org/files/1998/1998-pdf.pdf',
        onlineUrl: 'https://ctext.org/nietzsche/thus-spoke-zarathustra/zhs',
        description: '尼采最重要的著作，阐述超人、永恒轮回与权力意志。中文版由钱春绮翻译。',
        chapters: [
            { title: '序言', anchor: '#prologue' },
            { title: '第一卷', anchor: '#part1' },
            { title: '第二卷', anchor: '#part2' },
            { title: '第三卷', anchor: '#part3' },
            { title: '第四卷', anchor: '#part4' }
        ]
    },
    heidegger_being: {
        id: 'heidegger_being',
        title: '海德格尔《存在与时间》',
        author: '海德格尔',
        pdfUrl: '',
        onlineUrl: 'https://ctext.org/heidegger/being-and-time/zhs',
        description: '20世纪最重要的哲学著作之一，追问存在的意义。中文版由陈嘉映、王庆节翻译。',
        chapters: [
            { title: '导论', anchor: '#intro' },
            { title: '此在的分析', anchor: '#dasein' },
            { title: '时间性与历史性', anchor: '#temporality' }
        ]
    },
    sartre_existentialism: {
        id: 'sartre_existentialism',
        title: '萨特《存在主义是一种人道主义》',
        author: '萨特',
        pdfUrl: '',
        onlineUrl: 'https://ctext.org/sartre/existentialism-is-a-humanism/zhs',
        description: '存在主义的入门经典，阐述"存在先于本质"。中文版由周煦良翻译。',
        chapters: [
            { title: '全文', anchor: '' }
        ]
    },
    marcus_meditations: {
        id: 'marcus_meditations',
        title: '马可·奥勒留《沉思录》',
        author: '马可·奥勒留',
        pdfUrl: 'https://www.gutenberg.org/files/2680/2680-pdf.pdf',
        onlineUrl: 'https://ctext.org/marcus-aurelius/meditations/zhs',
        description: '罗马皇帝的私人日记，斯多葛哲学的经典之作。中文版由何怀宏翻译。',
        chapters: [
            { title: '第一卷', anchor: '#book1' },
            { title: '第二卷', anchor: '#book2' },
            { title: '第三卷', anchor: '#book3' },
            { title: '第四卷', anchor: '#book4' },
            { title: '第五卷', anchor: '#book5' },
            { title: '第六卷', anchor: '#book6' }
        ]
    },
    freud_interpretation: {
        id: 'freud_interpretation',
        title: '弗洛伊德《梦的解析》',
        author: '弗洛伊德',
        pdfUrl: '',
        onlineUrl: 'https://ctext.org/freud/interpretation-of-dreams/zhs',
        description: '精神分析学的奠基之作，揭示梦的无意识意义。中文版由孙名之翻译。',
        chapters: [
            { title: '第一章：梦的问题', anchor: '#ch1' },
            { title: '第二章：梦的解析方法', anchor: '#ch2' },
            { title: '第三章：梦是愿望的满足', anchor: '#ch3' },
            { title: '第四章：梦的歪曲', anchor: '#ch4' },
            { title: '第五章：梦的材料与来源', anchor: '#ch5' }
        ]
    }
};

function openPdfModal(classicId) {
    const classic = CLASSICS_PDF[classicId];
    if (!classic) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.id = 'pdfModal';
    modal.onclick = function(e) {
        if (e.target === modal) {
            closePdfModal();
        }
    };
    
    let viewerContent = '';
    if (classic.pdfUrl) {
        viewerContent = `
            <div class="pdf-viewer">
                <iframe src="${classic.pdfUrl}" title="${classic.title}"></iframe>
            </div>
        `;
    } else {
        viewerContent = `
            <div class="pdf-viewer-placeholder">
                <i class="fas fa-book-open"></i>
                <p>该经典著作暂无在线PDF版本</p>
                <p style="color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem;">您可以访问以下链接在线阅读：</p>
                <a href="${classic.onlineUrl}" target="_blank" class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i> 在线阅读
                </a>
            </div>
        `;
    }
    
    modal.innerHTML = `
        <div class="modal" style="max-width: 1100px;">
            <div class="modal-header">
                <h2 class="modal-title">${classic.title}</h2>
                <button class="modal-close" onclick="closePdfModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body">
                <div style="margin-bottom: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border-subtle);">
                    <p style="color: var(--text-secondary); margin-bottom: 1rem;">${classic.description}</p>
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                        ${classic.pdfUrl ? `
                            <a href="${classic.pdfUrl}" target="_blank" class="btn btn-secondary">
                                <i class="fas fa-download"></i> 下载PDF
                            </a>
                        ` : ''}
                        <a href="${classic.onlineUrl}" target="_blank" class="btn btn-secondary">
                            <i class="fas fa-external-link-alt"></i> 在线阅读
                        </a>
                    </div>
                </div>
                ${viewerContent}
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    document.addEventListener('keydown', handlePdfModalKeydown);
}

function closePdfModal() {
    const modal = document.getElementById('pdfModal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
    document.removeEventListener('keydown', handlePdfModalKeydown);
}

function handlePdfModalKeydown(e) {
    if (e.key === 'Escape') {
        closePdfModal();
    }
}

function renderClassicsList() {
    return Object.values(CLASSICS_PDF).map(classic => `
        <div class="classic-item" onclick="openPdfModal('${classic.id}')">
            <div class="classic-header">
                <div>
                    <div class="classic-title">${classic.title}</div>
                    <div style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.25rem;">${classic.author}</div>
                </div>
                <i class="fas fa-chevron-right classic-toggle"></i>
            </div>
        </div>
    `).join('');
}
