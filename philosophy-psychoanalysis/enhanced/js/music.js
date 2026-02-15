const MusicPlayer = {
    isPlaying: false,
    currentTrackIndex: 0,
    audio: null,
    volume: 0.3,
    
    tracks: [
        {
            title: '巴赫 - G大调大提琴组曲',
            composer: '巴赫',
            src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
        },
        {
            title: '莫扎特 - 小夜曲',
            composer: '莫扎特',
            src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
        },
        {
            title: '贝多芬 - 月光奏鸣曲',
            composer: '贝多芬',
            src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
        },
        {
            title: '肖邦 - 夜曲',
            composer: '肖邦',
            src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
        },
        {
            title: '德彪西 - 月光',
            composer: '德彪西',
            src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'
        }
    ],
    
    init() {
        this.audio = new Audio();
        this.audio.loop = false;
        this.audio.volume = this.volume;
        
        this.audio.addEventListener('ended', () => {
            this.nextTrack();
        });
        
        this.audio.addEventListener('error', (e) => {
            console.log('音频加载错误，尝试下一首');
            this.nextTrack();
        });
        
        this.loadTrack(0);
        this.loadSavedState();
    },
    
    loadTrack(index) {
        if (index < 0 || index >= this.tracks.length) {
            index = 0;
        }
        this.currentTrackIndex = index;
        const track = this.tracks[index];
        this.audio.src = track.src;
        this.updateUI();
    },
    
    loadSavedState() {
        const savedVolume = localStorage.getItem('philosophy-music-volume');
        if (savedVolume !== null) {
            this.volume = parseFloat(savedVolume);
            this.audio.volume = this.volume;
        }
    },
    
    toggle() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    },
    
    play() {
        if (this.audio.readyState < 2) {
            this.audio.load();
        }
        
        const playPromise = this.audio.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                this.isPlaying = true;
                this.updateUI();
            }).catch(error => {
                console.log('自动播放被阻止，需要用户交互');
                this.isPlaying = false;
                this.updateUI();
            });
        }
    },
    
    pause() {
        this.audio.pause();
        this.isPlaying = false;
        this.updateUI();
    },
    
    nextTrack() {
        const nextIndex = (this.currentTrackIndex + 1) % this.tracks.length;
        this.loadTrack(nextIndex);
        if (this.isPlaying) {
            this.play();
        }
    },
    
    prevTrack() {
        const prevIndex = (this.currentTrackIndex - 1 + this.tracks.length) % this.tracks.length;
        this.loadTrack(prevIndex);
        if (this.isPlaying) {
            this.play();
        }
    },
    
    setVolume(value) {
        this.volume = Math.max(0, Math.min(1, value));
        this.audio.volume = this.volume;
        localStorage.setItem('philosophy-music-volume', this.volume.toString());
        this.updateVolumeUI();
    },
    
    getCurrentTrack() {
        return this.tracks[this.currentTrackIndex];
    },
    
    updateUI() {
        const playBtn = document.getElementById('musicPlayBtn');
        const trackInfo = document.getElementById('musicTrackInfo');
        
        if (playBtn) {
            const icon = playBtn.querySelector('i');
            if (icon) {
                icon.className = this.isPlaying ? 'fas fa-pause' : 'fas fa-play';
            }
        }
        
        if (trackInfo) {
            const track = this.getCurrentTrack();
            trackInfo.innerHTML = `<span class="track-title">${track.title}</span>`;
        }
        
        this.updateVolumeUI();
    },
    
    updateVolumeUI() {
        const volumeSlider = document.getElementById('musicVolumeSlider');
        if (volumeSlider) {
            volumeSlider.value = this.volume;
        }
    }
};

function toggleMusic() {
    MusicPlayer.toggle();
}

function toggleMusicPanel() {
    const panel = document.getElementById('musicPanel');
    if (panel) {
        panel.classList.toggle('active');
    }
}

function nextMusicTrack() {
    MusicPlayer.nextTrack();
}

function prevMusicTrack() {
    MusicPlayer.prevTrack();
}

function setMusicVolume(value) {
    MusicPlayer.setVolume(parseFloat(value));
}
