import {Canvas} from './canvas.js'

export class baseShape extends Canvas {
    protected seed: number
    protected rounds: number
    
    constructor(width: number, height: number) {
        super(width, height)
        this.seed = Math.random()
        this.rounds = 0
    }

    draw() {
        return
    }

    animate() {
        this.draw()
        if (this.rounds < this.width) {
            requestAnimationFrame(()=>this.animate())
        }
    }

    loop() {
        for (let i = 0; i < this.width; i++) {
            this.draw()
        }
    }

}