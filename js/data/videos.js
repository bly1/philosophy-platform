const VIDEOS = [
    {
        id: 'BV1Ro4y1X7Sx',
        title: '【哲学真功夫】海德格尔的神仙微操 ——从康德命题学到费希特知识学',
        author: '未明子',
        authorLink: 'https://space.bilibili.com/19769035',
        thumbnail: 'https://i0.hdslb.com/bfs/archive/default.jpg',
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
        thumbnail: 'https://i0.hdslb.com/bfs/archive/default.jpg',
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
        thumbnail: 'https://i0.hdslb.com/bfs/archive/default.jpg',
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
        thumbnail: 'https://i0.hdslb.com/bfs/archive/default.jpg',
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
        thumbnail: 'https://i0.hdslb.com/bfs/archive/default.jpg',
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
        thumbnail: 'https://i0.hdslb.com/bfs/archive/default.jpg',
        duration: '约45分钟',
        views: '3万+',
        tags: ['海德格尔', '存在与时间', '现象学'],
        description: '《存在与时间》核心概念概述'
    }
];

function renderVideos() {
    const grid = document.getElementById('videosGrid');
    if (!grid) return;
    
    grid.innerHTML = VIDEOS.map(video => `
        <div class="video-card" onclick="openVideo('${video.id}')">
            <div class="video-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 9%22><rect fill=%22%23374151%22 width=%2216%22 height=%229%22/><text x=%228%22 y=%225%22 text-anchor=%22middle%22 fill=%22%239ca3af%22 font-size=%221%22>视频封面</text></svg>'">
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
    `).join('');
}

function openVideo(videoId) {
    window.open(`https://www.bilibili.com/video/${videoId}`, '_blank');
}
