import {Shape} from './shape.js'

export class Memo {
    mainDiv: HTMLDivElement
    shapes: Shape[]
    private amount: number

    constructor(amount: number) {
        this.shapes = []
        this.mainDiv = document.createElement('div')
        this.amount = amount
    }

    run() {
        this.mainDiv.innerHTML = ""
        this.mainDiv.setAttribute('id', 'memo')
        this.mainDiv.setAttribute('class', 'card memo')
        document.body.appendChild(this.mainDiv)
        this.shapes = []

        for (let i = 0; i < this.amount + 1; i++) {
            const shape = new Shape(150, 150)
            const inDiv = document.createElement('div')
            inDiv.setAttribute('class', 'item')
            shape.animate()
            this.shapes.push(shape)
            inDiv.appendChild(shape.canvas)
            if (i === this.amount) {
                return
            }
            this.mainDiv.appendChild(inDiv)
        }
    }

    ask () {
        this.mainDiv.innerHTML = ""
        this.mainDiv.setAttribute('class', 'card timer')
        this.mainDiv.innerText = "Have you seen this shape?"
        const inDiv = document.createElement('div')
        inDiv.setAttribute('class', 'item')
        // shape
        const random = Math.floor(Math.random() * Math.floor(this.amount + 1))
        inDiv.appendChild(this.shapes[random].canvas)
        this.mainDiv.appendChild(inDiv)
        if (random === this.amount) {
            return false
        }
        return true
    }
}