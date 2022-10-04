const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const playlist = $('.playlist')
const btnPlaylist = $('.btn-playlist')
const player = $('.dashboard')
const title = $('.name h2')
const singer = $('.name h4')
const cbThumb = $('.cd')
const audio = $('#audio')
const playBtn = $('.btn-play')
const progress = $('.progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-shuff')
const repeatBtn = $('.btn-repeat')
const timeProcess = $('.time-process')
const timeFull = $('.time-full')
const volumn = $('.volumn-value')
const volumnValue = $('.volumn-icon')
const volumnMute = $('.volumn-mute')

const app = {
    currentIndex: 0,
    isPaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
            name: 'Vì anh đâu có biết',
            singer: 'Madihu, Vũ.',
            path: './assets/music/vi-anh-dau-co-biet.mp3',
            image: './assets/img/music/vadcb.jfif'
        },
        {
            name: 'Xanh',
            singer: 'Ngọt',
            path: './assets/music/xanh.mp3',
            image: './assets/img/music/x.jfif'
        },
        {
            name: 'Tiny love',
            singer: 'Thịnh Suy',
            path: './assets/music/tiny-love.mp3',
            image: './assets/img/music/tl.jfif'
        },
        {
            name: 'Không tên',
            singer: 'Trang, Khoa Vũ',
            path: './assets/music/khong-ten.mp3',
            image: './assets/img/music/kt.jfif'
        },
        {
            name: 'Bên trái',
            singer: 'Kiên Trịnh',
            path: './assets/music/ben-trai.mp3',
            image: './assets/img/music/bt.jfif'
        },
        {
            name: 'Her summer',
            singer: 'Vũ.',
            path: './assets/music/her-summer.mp3',
            image: './assets/img/music/hs.jpg'
        },
        {
            name: 'Tầng thượng 102',
            singer: 'Cá Hồi Hoang',
            path: './assets/music/tang-thuong-102.mp3',
            image: './assets/img/music/th102.jpg'
        },
        {
            name: 'Who',
            singer: 'Chilles',
            path: './assets/music/who.mp3',
            image: './assets/img/music/w.jpg'
        },
        {
            name: 'Loving you sunny',
            singer: 'Kimmese, Đen',
            path: './assets/music/loving-you-sunny.mp3',
            image: './assets/img/music/lys.jfif'
        },
        {
            name: 'Thích em hơi nhiều',
            singer: 'Wren Evans',
            path: './assets/music/thich-em-hoi-nhieu.mp3',
            image: './assets/img/music/tehn.jfif'
        },
        {
            name: 'Phiêu bồng',
            singer: 'TOFU ft. VoVanDuc',
            path: './assets/music/phieu-bong.mp3',
            image: './assets/img/music/pb.jfif'
        },
        {
            name: 'Bật nhạc lên',
            singer: 'HIEUTHUHAI, Harmonie',
            path: './assets/music/bat-nhac-len.mp3',
            image: './assets/img/music/bnl.jfif'
        },
        {
            name: 'Devil Love',
            singer: 'Tobiez ft. Ntyn',
            path: './assets/music/devil-love.mp3',
            image: './assets/img/music/dl.jpg'
        },
        {
            name: 'Tình đăng như ly cà phê',
            singer: 'Ngơ ft. Nân',
            path: './assets/music/tinh-dang-nhu-ly-cafe.mp3',
            image: './assets/img/music/tdnlcf.jfif'
        },
        {
            name: 'Một điều mà anh rất ngại nói ra',
            singer: 'Hải Sâm',
            path: './assets/music/mot-dieu-ma-anh-rat-ngai-noi-ra.mp3',
            image: './assets/img/music/mdmarnnr.jfif'
        },
        {
            name: 'AI BIET',
            singer: 'WEAN',
            path: './assets/music/ai-biet.mp3',
            image: './assets/img/music/ab.jfif'
        }
    ],
    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `
                <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div class="thumb">
                        <img src="${song.image}" alt="">                        
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                </div>
            `
        })
        playlist.innerHTML = htmls.join('')
        timeProcess.innerHTML = `hello`
    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex]
            }
        })
    },
    handleEvents: function() {
        const _this = this;
        // CD rotate
        const cdAnimate = cbThumb.animate([
            { transform: 'rotate(360deg)' }
        ], {
            duration: 13000,
            iterations: Infinity
        })
        cdAnimate.pause()

        // Show / Hide playlist
        btnPlaylist.onclick = function() {
            btnPlaylist.classList.toggle('active')
            playlist.classList.toggle('active')
        }        

        // Click play
        playBtn.onclick = function() {
            if (app.isPaying) {
                audio.pause()
            } else {
                audio.play()
            }
        }
        audio.onplay = function() {
            app.isPaying = true
            player.classList.add('playing')
            cdAnimate.play()
        }
        audio.onpause = function() {
            app.isPaying = false
            player.classList.remove('playing')
            cdAnimate.pause()
        }
        audio.ontimeupdate = function() {
            if (audio.duration) {
                const progres = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progres
            }
        }
        progress.onchange = function(e) {
            const seekTime = audio.duration/ 100 * e.target.value
            audio.currentTime = seekTime
        }

        // Next song
        nextBtn.onclick = function() {
            if (_this.isRandom) {
                _this.randomSong()
            } else {
                _this.nextSong()
            }            
            audio.play()
            _this.render()
            _this.scrollToActive()
        }
        // Prev song
        prevBtn.onclick = function() {
            if (_this.isRandom) {
                _this.randomSong()
            } else {
                _this.prevSong()
            }   
            audio.play()
            _this.render()
            _this.scrollToActive()
        }
        // Random song
        randomBtn.onclick = function(e) {
            _this.isRandom = !_this.isRandom
            randomBtn.classList.toggle('active', _this.isRandom)
        }
        // Repeat song
        repeatBtn.onclick = function(e) {
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }
        // End song
        audio.onended = function () {
            if (_this.isRepeat) {
                audio.play()
            } else {
                nextBtn.click()
            }
        }

        playlist.onclick = function(e) {
            const songNode = e.target.closest('.song:not(.active')
            if (songNode) {
                _this.currentIndex = Number(songNode.dataset.index)
                _this.loadCurrentSong()
                _this.render()
                audio.play()
            }
        }
        // Time
        audio.addEventListener('timeupdate', function() {
            let current_minutes = Math.floor(audio.currentTime / 60)
            let current_seconds = Math.floor(audio.currentTime - current_minutes * 60)
            let duration_minutes = Math.floor(audio.duration / 60)
            let duration_seconds = Math.floor(audio.duration - duration_minutes * 60)
            if (current_minutes < 10) {
                current_minutes = `0${current_minutes}`
            }
            if(current_seconds < 10) {
                current_seconds = `0${current_seconds}`
            }
            if(duration_minutes < 10) {
                duration_minutes = `0${duration_minutes}`
            }
            if(duration_seconds < 10) {
                duration_seconds = `0${duration_seconds}`
            }
            timeProcess.innerText = `${current_minutes}:${current_seconds}`
            timeFull.innerText = `${duration_minutes}:${duration_seconds}`
        })
        // Volumn
        volumn.oninput = function(e) {
            theVolume = e.target.value / 100
            audio.volume = theVolume
            if (theVolume === 0) {
                volumnMute.classList.remove('mute')
                volumnValue.classList.add('mute')
            } else {
                volumnValue.classList.remove('mute')
                volumnMute.classList.add('mute')
            }
        }
        volumnValue.onclick = function() {
            volumnMute.classList.remove('mute')
            volumnValue.classList.add('mute')
            audio.volume = 0
            volumn.value = 0
        }
        volumnMute.onclick = function() {
            volumnValue.classList.remove('mute')
            volumnMute.classList.add('mute')
            audio.volume = 1
            volumn.value = 100
        }
    },
    scrollToActive: function() {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        }, 500)
    },
    loadCurrentSong: function() {
        title.textContent = this.currentSong.name
        singer.textContent = this.currentSong.singer
        cbThumb.style.backgroundImage = `url('${this.currentSong.image}')`        
        audio.src = this.currentSong.path        
    },
    nextSong: function() {
        this.currentIndex++
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong()
    },
    prevSong: function() {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1
        }
        this.loadCurrentSong()
    },
    randomSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        } while (newIndex == this.currentIndex)
        this.currentIndex = newIndex
        this.loadCurrentSong()
    },
    start: function() {
        this.defineProperties()
        this.handleEvents()

        this.loadCurrentSong()

        this.render()        
    }
}

app.start()