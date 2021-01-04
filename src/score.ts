
export class Score {
    private mainDiv: HTMLDivElement
    private scoreUi: HTMLDivElement
    private mistakeUi: HTMLDivElement
    private totalUi: HTMLDivElement
    private recordUi: HTMLDivElement
    private _score: number
    private _mistake: number
    private total: number
    private record: number

    constructor () {
        this.mainDiv = document.createElement('div')
        this.scoreUi = document.createElement('div')
        this.mistakeUi = document.createElement('div')
        this.totalUi = document.createElement('div')
        this.recordUi = document.createElement('div')
        this._score = 0
        this._mistake = 0
        this.total = this._score - this._mistake
        this.record = localStorage.record ? parseFloat(localStorage.record) : 0
        this.recordUi.innerText = this.record.toString()
        this.start()
    }

    start() {
        this.mainDiv.setAttribute('class', 'score')
        const totalDiv = document.createElement('div')
        totalDiv.setAttribute('class', 'score total')
        const totalText = document.createElement('div')
        totalText.innerText = 'Total:'
        totalDiv.appendChild(totalText)
        totalDiv.appendChild(this.totalUi)
        this.mainDiv.appendChild(totalDiv)

        const recordDiv = document.createElement('div')
        recordDiv.setAttribute('class', 'score')
        const recordText = document.createElement('div')
        recordText.innerText = 'Record:'
        recordDiv.appendChild(recordText)
        recordDiv.appendChild(this.recordUi)
        this.mainDiv.appendChild(recordDiv)

        const scoreDiv = document.createElement('div')
        scoreDiv.setAttribute('class', 'score')
        const scoreText = document.createElement('div')
        scoreText.innerText = 'Correct:'
        scoreDiv.appendChild(scoreText)
        scoreDiv.appendChild(this.scoreUi)
        this.mainDiv.appendChild(scoreDiv)

        const mistakeDiv = document.createElement('div')
        mistakeDiv.setAttribute('class', 'score')
        const mistakeText = document.createElement('div')
        mistakeText.innerText = 'Mistakes:'
        mistakeDiv.appendChild(mistakeText)
        mistakeDiv.appendChild(this.mistakeUi)
        this.mainDiv.appendChild(mistakeDiv)
        document.body.appendChild(this.mainDiv)
    }

    setTotal() {
        this.total = this._score - this._mistake
        this.totalUi.innerText = this.total.toString()
        if (this.total > this.record) {
            localStorage.record = this.total
            this.recordUi.innerText = this.total.toString()
        }
    }

    get score(): number {
        return this._score
    }

    set score(newScore: number) {
        this.scoreUi.innerText = newScore.toString()
        this._score = newScore
        this.setTotal()
    }

    get mistake(): number {
        return this._mistake
    }

    set mistake(newMistake: number) {
        this.mistakeUi.innerText = newMistake.toString()
        this._mistake = newMistake
        this.setTotal()
    }
}
