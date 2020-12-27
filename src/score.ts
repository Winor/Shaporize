
export class Score {
    private mainDiv: HTMLDivElement
    private scoreUi: HTMLDivElement
    private mistakeUi: HTMLDivElement
    private _score: number
    private _mistake: number

    constructor () {
        this.mainDiv = document.createElement('div')
        this.scoreUi = document.createElement('div')
        this.mistakeUi = document.createElement('div')
        this._score = 0
        this._mistake = 0
        this.start()
    }

    start() {
        this.mainDiv.setAttribute('class', 'card memo')
        const scoreText = document.createElement('div')
        scoreText.innerText = 'Score:'
        this.mainDiv.appendChild(scoreText)
        this.mainDiv.appendChild(this.scoreUi)

        const mistakeText = document.createElement('div')
        mistakeText.innerText = 'Mistakes:'
        this.mainDiv.appendChild(mistakeText)
        this.mainDiv.appendChild(this.mistakeUi)
        document.body.appendChild(this.mainDiv)

    }

    get score(): number {
        return this._score
    }

    set score(newScore: number) {
        this.scoreUi.innerText = newScore.toString()
        this._score = newScore
    }

    get mistake(): number {
        return this._mistake
    }

    set mistake(newMistake: number) {
        this.mistakeUi.innerText = newMistake.toString()
        this._mistake = newMistake
    }
}
