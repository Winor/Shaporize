
export class Timer {
    private times: number
    private timeOut: number
    private display: HTMLDivElement

    constructor (timeout: number) {
        this.times = 0
        this.timeOut = timeout
        this.display = document.createElement('div')
        document.body.appendChild(this.display)
    }

    start() {
        this.times = 0
        this.display.innerText = this.times.toString()
        this.display.setAttribute('class', 'timer')
        return new Promise((resolve, reject) => {
        const timer = setInterval(() => (() => {
            this.times ++
            this.display.innerText = this.times.toString()
            if (this.times === this.timeOut) {
                clearInterval(timer)
                resolve('stop')
            }
              })()
            , 1000);
        })

    }
}