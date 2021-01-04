
export class Sounds {
    sounds: HTMLAudioElement[]
    private isLoad: boolean

    constructor() {
        this.sounds = [
            new Audio('../assets/sounds/start.mp3'),
            new Audio('../assets/sounds/correct.mp3'),
            new Audio('../assets/sounds/wrong.mp3')
        ]
        this.isLoad = false
    }

    ev() {
        document.body.addEventListener('touchstart', (() => {
            if (!this.isLoad) {
                this.load()
            }
        }), false)
    }

    load() {
        this.isLoad = true
        this.sounds.forEach(sound => {
            sound.load()
            sound.play()
            sound.pause()
            sound.currentTime = 0
        })
    }

    play(track: number) {
        this.sounds[track].play()
    }
}