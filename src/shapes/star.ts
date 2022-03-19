import {baseShape} from '../baseShape'

export class Star extends baseShape {
    private hue: number
    protected scale: number

    constructor(width: number, height: number) {
        super(width, height)
        this.hue = this.seed * 360
        this.scale = 10
    }

    draw() {
        if (this.ctx) {
            const angle = this.rounds * Math.max(this.seed * 20, 1 + this.seed)
            const radius = this.scale * Math.sqrt(this.rounds)
            const posX = radius * Math.sin(angle) +  this.width/2
            const posY = radius * Math.cos(angle) + this.height/2

            this.ctx.fillStyle = `black`
            this.ctx.lineWidth = 1
            this.ctx.strokeStyle = `hsl(${this.hue}, 100%, 50%)`
            this.ctx.beginPath()
            this.ctx.moveTo(this.width/2,  this.height/2);
            this.ctx.lineTo(posX, posY);
            this.ctx.lineTo(this.width/2, this.height/2);
            
            //this.ctx.arc(posX, posY, this.height - this.rounds, 0, Math.PI * 2)
            this.ctx.closePath()
            this.ctx.fill()
            this.ctx.stroke()

            this.rounds ++
            this.hue += 0.5
        }
    }
}