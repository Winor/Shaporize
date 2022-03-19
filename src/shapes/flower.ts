import {baseShape} from '../baseShape'

export class Flower extends baseShape {
    private hue: number
    protected scale: number

    constructor(width: number, height: number) {
        super(width, height)
        this.scale = 10
        this.hue = this.seed * 360
    }

    draw() {
        if (this.ctx) {
             const angle = this.rounds * (this.seed * Math.floor(7))
             const radius = this.scale * Math.sqrt(this.rounds)
             const posX = radius * Math.sin(angle) +  this.width/2
             const posY = radius * Math.cos(angle) + this.height/2

            this.ctx.fillStyle = `hsl(${this.hue}, 100%, 50%)`
            this.ctx.lineWidth = 2
            this.ctx.strokeStyle = `hsl(${this.hue}, 100%, 20%)`
            this.ctx.beginPath()
            this.ctx.arc(posX, posY, this.seed * 15, 0, Math.PI * 2)
            this.ctx.closePath()
            this.ctx.fill()
            this.ctx.stroke()

            this.rounds ++
            this.hue += 0.5
        }
    }
}