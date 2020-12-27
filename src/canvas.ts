export class Canvas {
    private id: string
    public width: number
    public height: number
    private dpi: number
    public canvas: HTMLCanvasElement

    constructor(id: string, width: number, height: number) {
        this.id = id
        this.dpi = window.devicePixelRatio
        this.width = width * this.dpi
        this.height = height * this.dpi
        this.canvas = document.createElement('canvas')
        this.canvas.setAttribute('id', id)
        this.canvas.setAttribute('width', this.width.toString())
        this.canvas.setAttribute('height', this.height.toString())
        this.canvas.setAttribute('class', 'border-4 border-light-blue-500 border-opacity-100')
        //this.canvas.onclick = this.run
    }
    // run() {
    //     console.log(this.id)
    // }

}