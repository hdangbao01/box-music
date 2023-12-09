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
        // {
        //     name: 'Santa\'s Coming for Us',
        //     singer: 'Sia',
        //     path: './assets/music/xmas/coming.mp3',
        //     image: './assets/img/music/xmas/sia.jpg'
        // },
        // {
        //     name: 'Christmas Without You',
        //     singer: 'Ava Max',
        //     path: './assets/music/xmas/without.mp3',
        //     image: './assets/img/music/xmas/without.jpg'
        // },
        // {
        //     name: 'Blame It On The Mistletoe',
        //     singer: 'Ella Henderson, AJ Mitchell',
        //     path: './assets/music/xmas/blame.mp3',
        //     image: './assets/img/music/xmas/mistletoe.png'
        // },
        // {
        //     name: 'Santa, Can\'t You Hear Me',
        //     singer: 'Kelly Clarkson, Ariana Grande',
        //     path: './assets/music/xmas/hear.mp3',
        //     image: './assets/img/music/xmas/hear.jpg'
        // },
        // {
        //     name: 'All I Want for Christmas Is You',
        //     singer: 'Mariah Carey',
        //     path: './assets/music/xmas/alliwant.mp3',
        //     image: './assets/img/music/xmas/alliwant.jpg'
        // },
        // {
        //     name: 'Last Christmas',
        //     singer: 'Ariana Grande',
        //     path: './assets/music/xmas/last.mp3',
        //     image: './assets/img/music/xmas/last.jpg'
        // },
        // {
        //     name: 'Santa Tell Me',
        //     singer: 'Ariana Grande',
        //     path: './assets/music/xmas/tell.mp3',
        //     image: './assets/img/music/xmas/tell.jpg'
        // },
        // {
        //     name: 'Christmas Memories',
        //     singer: 'Loving Caliber, Jacslyn Edgar',
        //     path: './assets/music/xmas/memories.mp3',
        //     image: './assets/img/music/xmas/memo.jpg'
        // },
        // {
        //     name: 'Jingle Bell Rock',
        //     singer: 'Bobby Helms',
        //     path: './assets/music/xmas/rock.mp3',
        //     image: './assets/img/music/xmas/rock.jpg'
        // },
        // {
        //     name: 'Like it\'s Christmas',
        //     singer: 'Jonas Brothers',
        //     path: './assets/music/xmas/likeit.mp3',
        //     image: './assets/img/music/xmas/likeit.jpg'
        // },
        // {
        //     name: 'Underneath the Tree',
        //     singer: 'Kelly Clarkson',
        //     path: './assets/music/xmas/underneath.mp3',
        //     image: './assets/img/music/xmas/under.jpg'
        // },
        // {
        //     name: 'Rockin Around The Christmas Tree',
        //     singer: 'Justin Bieber',
        //     path: './assets/music/xmas/rockin.mp3',
        //     image: './assets/img/music/xmas/rockin.jpg'
        // },
        // {
        //     name: 'At Christmas',
        //     singer: 'Kylie Minohue',
        //     path: './assets/music/xmas/atxmas.mp3',
        //     image: './assets/img/music/xmas/at.jpg'
        // },
        // {
        //     name: '25th',
        //     singer: 'Tori Kelly',
        //     path: './assets/music/xmas/25th.mp3',
        //     image: './assets/img/music/xmas/25th.jpg'
        // },
        // {
        //     name: 'Winter Things',
        //     singer: 'Ariana Grande',
        //     path: './assets/music/xmas/winterthing.mp3',
        //     image: './assets/img/music/xmas/winterthing.jpg'
        // },
        // {
        //     name: 'Mistletoe',
        //     singer: 'Justin Bieber',
        //     path: './assets/music/xmas/mistletoe.mp3',
        //     image: './assets/img/music/xmas/miss.jpg'
        // },
        // {
        //     name: 'Christmas Lights',
        //     singer: 'Coldplay',
        //     path: './assets/music/xmas/light.mp3',
        //     image: './assets/img/music/xmas/light.jpg'
        // },
        // {
        //     name: 'It\'s Begining To Look A Lot Like Christmas ',
        //     singer: 'Matthew Ifield',
        //     path: './assets/music/xmas/alotlike.mp3',
        //     image: './assets/img/music/xmas/matthew.jpg'
        // },
        // {
        //     name: 'White Christmas',
        //     singer: 'Matthew Ifield',
        //     path: './assets/music/xmas/white.mp3',
        //     image: './assets/img/music/xmas/matthew.jpg'
        // },
        // {
        //     name: 'Winter Wonderland',
        //     singer: 'Matthew Ifield',
        //     path: './assets/music/xmas/wonderland.mp3',
        //     image: './assets/img/music/xmas/matthew.jpg'
        // },
        // {
        //     name: 'Snowman',
        //     singer: 'Sia',
        //     path: './assets/music/xmas/snowman.mp3',
        //     image: './assets/img/music/xmas/sia.jpg'
        // },
        {
            name: 'GSTM',
            singer: 'VSTRA',
            path: './assets/music/xmas/gstm.mp3',
            image: './assets/img/music/xmas/gstm.jpg'
        },
        {
            name: 'No L',
            singer: '',
            path: './assets/music/xmas/nol.mp3',
            image: './assets/img/music/xmas/not.jpg'
        },
        {
            name: 'girl (black hair)',
            singer: 'oceanfromtheblue ft BLOO',
            path: './assets/music/girl.mp3',
            image: './assets/img/music/girl.jpg'
        },
        {
            name: 'Vì anh đâu có biết',
            singer: 'Madihu, Vũ.',
            path: './assets/music/vi-anh-dau-co-biet.mp3',
            image: './assets/img/music/vadcb.jfif'
        },
        {
            name: 'Who',
            singer: 'Chilles',
            path: './assets/music/who.mp3',
            image: './assets/img/music/w.jpg'
        },
        //Love
        {
            name: 'Có Em Đời Bỗng Vui',
            singer: 'Chilles',
            path: './assets/music/happy.mp3',
            image: './assets/img/music/happy.jpg'
        },
        {
            name: 'Devil Love',
            singer: 'Tobiez ft. Ntyn',
            path: './assets/music/devil-love.mp3',
            image: './assets/img/music/dl.jpg'
        },
        {
            name: '5050',
            singer: 'HIEUTHUHAI, HURRYKNG, MANBO',
            path: './assets/music/5050.mp3',
            image: './assets/img/music/5050.jpg'
        },
        {
            name: 'Mê đắm',
            singer: 'Hoàng Tôn',
            path: './assets/music/medam.mp3',
            image: './assets/img/music/medam.jpg'
        },
        {
            name: 'Thích em hơi nhiều',
            singer: 'Wren Evans',
            path: './assets/music/thich-em-hoi-nhieu.mp3',
            image: './assets/img/music/tehn.jfif'
        },
        {
            name: 'Đã Lỡ Yêu Em Nhiều',
            singer: 'Justatee',
            path: './assets/music/love.mp3',
            image: './assets/img/music/love.jpg'
        },
        {
            name: 'Chìm sâu',
            singer: 'RPT MCK, Trung Trần',
            path: './assets/music/chimsau.mp3',
            image: './assets/img/music/chimsau.jpg'
        },
        {
            name: 'Suit & Tie',
            singer: 'RPT MCK, Hoàng Tôn',
            path: './assets/music/suit.mp3',
            image: './assets/img/music/mck.jpg'
        },
        {
            name: 'Em 20',
            singer: 'Winno',
            path: './assets/music/em20.mp3',
            image: './assets/img/music/em20.jpg'
        },
        {
            name: 'Fancy',
            singer: 'Winno',
            path: './assets/music/fancy.mp3',
            image: './assets/img/music/fancy.jpg'
        },
        {
            name: 'Đưa em về nhà',
            singer: 'Grey D, Chillies',
            path: './assets/music/devn.mp3',
            image: './assets/img/music/devn.jpg'
        },
        {
            name: 'Phiêu bồng',
            singer: 'TOFU ft. VoVanDuc',
            path: './assets/music/phieu-bong.mp3',
            image: './assets/img/music/pb.jfif'
        },
        {
            name: 'She Said',
            singer: 'Wean ft NAOMI',
            path: './assets/music/shesaid.mp3',
            image: './assets/img/music/shesaid.jpg'
        },
        {
            name: 'Floating',
            singer: 'Alina Baraz ft Khalid',
            path: './assets/music/floating.mp3',
            image: './assets/img/music/floating.jpg'
        },
        {
            name: 'girl',
            singer: 'oceanfromtheblue ft BLOO',
            path: './assets/music/girl.mp3',
            image: './assets/img/music/girl.jpg'
        },
        {
            name: 'I.F.L.Y',
            singer: 'Bazzi',
            path: './assets/music/ifly.mp3',
            image: './assets/img/music/ifly.jpg'
        },
        {
            name: 'I like me better',
            singer: 'Lauv',
            path: './assets/music/ilmbt.mp3',
            image: './assets/img/music/ilmbt.jpg'
        },
        {
            name: 'Stuck with U',
            singer: 'Ariana Grande, Justin Bieber',
            path: './assets/music/stuck.mp3',
            image: './assets/img/music/stuck.jpg'
        }, 
        {
            name: 'As It Was',
            singer: 'PREP',
            path: './assets/music/asit.mp3',
            image: './assets/img/music/asit.jpg'
        }, 
        {
            name: 'Roses',
            singer: 'Finn Askew',
            path: './assets/music/rose.mp3',
            image: './assets/img/music/rose.jpg'
        },
        {
            name: 'Intentions',
            singer: 'Justin Bieber',
            path: './assets/music/inten.mp3',
            image: './assets/img/music/inten.jpg'
        },
        {
            name: 'The Pull Up',
            singer: 'Vedo',
            path: './assets/music/pull.mp3',
            image: './assets/img/music/vedo.jpg'
        },
        {
            name: 'Die for you',
            singer: 'The Weeknd',
            path: './assets/music/dfy.mp3',
            image: './assets/img/music/dfy.jpg'
        },
        {
            name: 'Earned it',
            singer: 'The Weeknd',
            path: './assets/music/earn.mp3',
            image: './assets/img/music/earn.jpg'
        },
        {
            name: 'I like you',
            singer: 'Post Malone',
            path: './assets/music/ilikeyou.mp3',
            image: './assets/img/music/buffter.jpg'
        },
        {
            name: 'I cannot be',
            singer: 'Post Malone',
            path: './assets/music/cannot.mp3',
            image: './assets/img/music/buffter.jpg'
        },     
        {
            name: 'Heartbreak Anniversary',
            singer: 'Giveon',
            path: './assets/music/heart.mp3',
            image: './assets/img/music/heart.jpg'
        },   
        //Sad
        {
            name: 'Paris in the Rain',
            singer: 'Lauv',
            path: './assets/music/rain.mp3',
            image: './assets/img/music/ilmbt.jpg'
        },
        {
            name: 'Is there someone else?',
            singer: 'The Weeknd',
            path: './assets/music/isthere.mp3',
            image: './assets/img/music/dawn.jpg'
        },
        {
            name: 'I Was Never There',
            singer: 'The Weeknd',
            path: './assets/music/was.mp3',
            image: './assets/img/music/call.jpg'
        },
        {
            name: 'Circle',
            singer: 'Post Malone',
            path: './assets/music/circle.mp3',
            image: './assets/img/music/circle.jpg'
        },
        {
            name: 'Goodbyes',
            singer: 'Post Malone',
            path: './assets/music/gb.mp3',
            image: './assets/img/music/circle.jpg'
        },
        {
            name: 'Myself',
            singer: 'Post Malone',
            path: './assets/music/myself.mp3',
            image: './assets/img/music/circle.jpg'
        },
        {
            name: 'Die for me',
            singer: 'Post Malone',
            path: './assets/music/diefm.mp3',
            image: './assets/img/music/circle.jpg'
        },
        {
            name: 'Better now',
            singer: 'Post Malone',
            path: './assets/music/betternow.mp3',
            image: './assets/img/music/betternow.jpg'
        },
        {
            name: 'Psycho',
            singer: 'Post Malone',
            path: './assets/music/psycho.mp3',
            image: './assets/img/music/betternow.jpg'
        },
        {
            name: 'Zack And Codeine',
            singer: 'Post Malone',
            path: './assets/music/zac.mp3',
            image: './assets/img/music/betternow.jpg'
        },
        {
            name: 'Ball for me',
            singer: 'Post Malone',
            path: './assets/music/ball.mp3',
            image: './assets/img/music/betternow.jpg'
        },
        {
            name: 'Otherside',
            singer: 'Post Malone',
            path: './assets/music/other.mp3',
            image: './assets/img/music/betternow.jpg'
        },
        {
            name: 'Call Out My Name',
            singer: 'The Weeknd',
            path: './assets/music/call.mp3',
            image: './assets/img/music/call.jpg'
        },
        {
            name: 'Hurt You',
            singer: 'The Weeknd',
            path: './assets/music/hurt.mp3',
            image: './assets/img/music/call.jpg'
        },
        {
            name: 'Privilege',
            singer: 'The Weeknd',
            path: './assets/music/pri.mp3',
            image: './assets/img/music/call.jpg'
        },
        {
            name: 'People',
            singer: 'Libianca',
            path: './assets/music/people.mp3',
            image: './assets/img/music/people.jpg'
        },
        {
            name: 'wish you were gay',
            singer: 'Billie Eilish',
            path: './assets/music/gay.mp3',
            image: './assets/img/music/gay.jpg'
        },
        {
            name: 'SLOW DANCING IN THE DARK',
            singer: 'Joji',
            path: './assets/music/slow.mp3',
            image: './assets/img/music/slow.jpg'
        },
        {
            name: 'Va Vào Giai Điệu Này',
            singer: 'MCK, Trung Trần',
            path: './assets/music/giaidieu.mp3',
            image: './assets/img/music/mck.jpg'
        },
        {
            name: 'Anh Đã Quen Với Cô Đơn',
            singer: 'Soobin Hoàng Sơn',
            path: './assets/music/codon.mp3',
            image: './assets/img/music/codon.jpg'
        },
        {
            name: 'bao tiền một mớ bình yên?',
            singer: '14 Casper, Bon Nghiêm',
            path: './assets/music/casper.mp3',
            image: './assets/img/music/casper.jpg'
        },
        {
            name: 'ngày mây đen',
            singer: 'Pay',
            path: './assets/music/mayden.mp3',
            image: './assets/img/music/mayden.jpg'
        },
        {
            name: 'AI BIET',
            singer: 'WEAN',
            path: './assets/music/ai-biet.mp3',
            image: './assets/img/music/ab.jfif'
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
            name: 'Hành tinh song song',
            singer: 'Vũ.',
            path: './assets/music/songsong.mp3',
            image: './assets/img/music/songsong.jpg'
        },
        {
            name: 'Bad Performance',
            singer: 'Coldzy',
            path: './assets/music/bad.mp3',
            image: './assets/img/music/bad.jpg'
        },
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
        // cbThumb.style.backgroundImage = `url('${this.currentSong.image}')`        
        cbThumb.style.backgroundImage = `url('./assets/img/music/xmas/not.jpg')`        
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