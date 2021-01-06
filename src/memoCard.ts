import type {baseShape} from './baseShape'
import {Wave} from './shapes/wave.js'
import {Flower} from './shapes/flower.js'

export class Memo {
    mainDiv: HTMLDivElement
    shapes: baseShape[]
    private amount: number

    constructor(amount: number) {
        this.shapes = []
        this.mainDiv = document.createElement('div')
        this.amount = amount
    }

    random(w: number, h: number) {
        const random = Math.random()
        if (random < 0.5) {
            return new Wave(w,h)
        }
        return new Flower(w,h)
    }

    run() {
        this.mainDiv.innerHTML = ""
        this.mainDiv.setAttribute('id', 'memo')
        this.mainDiv.setAttribute('class', 'card memo')
        document.body.appendChild(this.mainDiv)
        this.shapes = []

        for (let i = 0; i < this.amount + 1; i++) {
            const shape = this.random(150, 150)
            const inDiv = document.createElement('div')
            inDiv.setAttribute('class', 'item')
            shape.loop()
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
        const title = document.createElement('div')
        title.setAttribute('class', 'title')
        title.innerText = "Have you seen this shape?"
        this.mainDiv.appendChild(title)
        const inDiv = document.createElement('div')
        inDiv.setAttribute('class', 'item')
        // shape
        const isTrue = Math.random() < 0.5
        let index = this.amount
        if (isTrue) {
            index = Math.floor(Math.random() * Math.floor(this.amount))
        }
        inDiv.appendChild(this.shapes[index].canvas)
        this.mainDiv.appendChild(inDiv)
        return isTrue
    }
}