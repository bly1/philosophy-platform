const VIDEOS = [
    {
        id: 'BV1Ro4y1X7Sx',
        title: '【哲学真功夫】海德格尔的神仙微操 ——从康德命题学到费希特知识学',
        author: '未明子',
        authorLink: 'https://space.bilibili.com/19769035',
        thumbnail: '',
        duration: '约2小时',
        views: '10万+',
        tags: ['海德格尔', '康德', '费希特', '观念论'],
        description: '深入讲解从康德到海德格尔的哲学发展脉络'
    },
    {
        id: 'BV1614y1M78V',
        title: '从康德到海德格尔-导言',
        author: '未明子',
        authorLink: 'https://space.bilibili.com/19769035',
        thumbnail: '',
        duration: '约1小时',
        views: '5万+',
        tags: ['康德', '海德格尔', '德国哲学'],
        description: '康德与海德格尔哲学的导论性讲解'
    },
    {
        id: 'BV1Wz4y1P7JE',
        title: '玩原神也能学海德格尔?(未明子切片)',
        author: '未明子',
        authorLink: 'https://space.bilibili.com/19769035',
        thumbnail: '',
        duration: '约30分钟',
        views: '20万+',
        tags: ['海德格尔', '游戏哲学', '存在主义'],
        description: '用游戏例子讲解海德格尔哲学'
    },
    {
        id: 'av738036100',
        title: '未明子对德勒兹主义者和尼采主义者提出建议',
        author: '未明子',
        authorLink: 'https://space.bilibili.com/19769035',
        thumbnail: '',
        duration: '约1小时',
        views: '8万+',
        tags: ['尼采', '德勒兹', '后现代主义'],
        description: '对尼采主义和德勒兹主义的批判性讨论'
    },
    {
        id: 'BV1uG41117kU',
        title: '海德格尔与柏拉图',
        author: '未明子',
        authorLink: 'https://space.bilibili.com/19769035',
        thumbnail: '',
        duration: '约1.5小时',
        views: '6万+',
        tags: ['海德格尔', '柏拉图', '存在论'],
        description: '海德格尔如何重新解读柏拉图'
    },
    {
        id: 'BV1QaCVY6EiX',
        title: '海德格尔如何看待康德、笛卡尔的哲学?1个视频讲清楚《存在与时间》',
        author: '哲学共学小组',
        authorLink: 'https://space.bilibili.com/',
        thumbnail: '',
        duration: '约45分钟',
        views: '3万+',
        tags: ['海德格尔', '存在与时间', '现象学'],
        description: '《存在与时间》核心概念概述'
    }
];

function renderVideos() {
    const grid = document.getElementById('videosGrid');
    if (!grid) return;
    
    grid.innerHTML = VIDEOS.map(video => {
        const thumbnailHtml = video.thumbnail 
            ? `<img src="${video.thumbnail}" alt="${video.title}" onerror="this.parentElement.innerHTML='<div class=\\'video-thumbnail-placeholder\\'><i class=\\'fas fa-play-circle\\'></i><span>点击播放</span></div>'">`
            : `<div class="video-thumbnail-placeholder"><i class="fas fa-play-circle"></i><span>点击播放</span></div>`;
        
        return `
        <div class="video-card" onclick="openVideoModal('${video.id}', '${video.title.replace(/'/g, "\\'")}')">
            <div class="video-thumbnail">
                ${thumbnailHtml}
                <div class="play-icon">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <div class="video-info">
                <div class="video-author">
                    <a href="${video.authorLink}" target="_blank" onclick="event.stopPropagation()">${video.author}</a>
                </div>
                <h3>${video.title}</h3>
                <div class="video-meta">
                    <span>${video.duration}</span>
                    <span> · </span>
                    <span>${video.views}播放</span>
                </div>
            </div>
        </div>
    `}).join('');
}

function openVideoModal(videoId, title) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay active';
    modal.id = 'videoModal';
    modal.onclick = function(e) {
        if (e.target === modal) {
            closeVideoModal();
        }
    };
    
    const bvid = videoId.startsWith('BV') || videoId.startsWith('av') ? videoId : 'BV' + videoId;
    
    modal.innerHTML = `
        <div class="modal" style="max-width: 1000px;">
            <div class="modal-header">
                <h2 class="modal-title">${title}</h2>
                <button class="modal-close" onclick="closeVideoModal()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="modal-body" style="padding: 0;">
                <div class="video-modal-container">
                    <iframe 
                        src="https://player.bilibili.com/player.html?${bvid.startsWith('BV') ? 'bvid' : 'aid'}=${bvid.replace('BV', '').replace('av', '')}&high_quality=1&danmaku=0" 
                        allowfullscreen="true" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
                    </iframe>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';
    
    document.addEventListener('keydown', handleVideoModalKeydown);
}

function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = '';
    }
    document.removeEventListener('keydown', handleVideoModalKeydown);
}

function handleVideoModalKeydown(e) {
    if (e.key === 'Escape') {
        closeVideoModal();
    }
}

function openVideo(videoId) {
    openVideoModal(videoId, '哲学视频');
}
