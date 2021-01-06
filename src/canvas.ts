export class Canvas {
    protected width: number
    protected height: number
    protected ctx: CanvasRenderingContext2D | null
    private dpi: number
    public canvas: HTMLCanvasElement

    constructor(width: number, height: number) {
        this.dpi = window.devicePixelRatio
        this.width = width * this.dpi
        this.height = height * this.dpi
        this.canvas = document.createElement('canvas')
        this.canvas.setAttribute('width', this.width.toString())
        this.canvas.setAttribute('height', this.height.toString())
        this.ctx = this.canvas.getContext('2d')
    }
    // run() {
    //     console.log(this.id)
    // }

}