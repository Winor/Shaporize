import {baseShape} from '../baseShape.js'

export class Wave extends baseShape {
    private hue: number
    protected scale: number

    constructor(width: number, height: number) {
        super(width, height)
        this.hue = this.seed * 360
        this.scale = 20
    }

    draw() {
        if (this.ctx) {
             const angle = this.rounds * (this.seed * Math.floor(20))
             const radius = this.scale * Math.sqrt(this.rounds)
             const posX = this.width/2 + radius * Math.cos(angle)
             const posY = this.height - this.rounds

            this.ctx.fillStyle = `hsl(${this.hue}, 100%, 50%)`
            this.ctx.lineWidth = 2
            this.ctx.strokeStyle = `hsl(${this.hue}, 100%, 20%)`
            this.ctx.beginPath()
            this.ctx.arc(posX, posY, Math.random() * 15, 0, Math.PI * 2)
            this.ctx.closePath()
            this.ctx.fill()
            this.ctx.stroke()

            this.rounds ++
            this.hue += 0.5
        }
    }
}