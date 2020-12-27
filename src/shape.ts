import {Canvas} from './canvas.js'

export class Shape {
    private newCanvas: Canvas
    canvas : HTMLCanvasElement
    ctx: CanvasRenderingContext2D | null
    private number: number
    private scale: number
    private hue: number
    public gen: number
    public id: string
    private width: number
    private height: number

    constructor(w: number, h: number) {
        this.id = Math.random().toString(36).substr(2, 5)
        this.newCanvas = new Canvas(this.id, w, h)
        this.canvas = this.newCanvas.canvas
        this.width = this.newCanvas.width
        this.height = this.newCanvas.height
        this.ctx = this.canvas.getContext('2d')
        this.number = 0
        this.scale = 10
        this.hue = Math.random() * 360
        this.gen = Math.random() * Math.floor(7)
        //document.body.appendChild(this.canvas)
    }

    draw() {
        if (this.ctx) {
             let angle = this.number * this.gen
             let radius = this.scale * Math.sqrt(this.number)
             let posX = radius * Math.sin(angle) +  this.width/2
             let posY = radius * Math.cos(angle) + this.height/2

            this.ctx.fillStyle = `hsl(${this.hue}, 100%, 50%)`
            this.ctx.lineWidth = 2
            this.ctx.strokeStyle = `hsl(${this.hue}, 100%, 20%)`
            this.ctx.beginPath()
            this.ctx.arc(posX, posY, 10, 0, Math.PI * 2)
            this.ctx.closePath()
            this.ctx.fill()
            this.ctx.stroke()

            this.number ++
            this.hue += 0.5
        }
    }

    animate() {
        this.draw()
        if (this.number < this.width) {
            requestAnimationFrame(()=>this.animate())
        }
    }

    start() {
        for (let i = 0; i < this.width; i++) {
            this.draw()
        }
    }

}

