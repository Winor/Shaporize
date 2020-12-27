
export class Ask {
    private mainDiv: HTMLDivElement
    private yes: HTMLDivElement
    private no: HTMLDivElement

    constructor () {
        this.mainDiv = document.createElement('div')
        this.mainDiv.setAttribute('class', 'card ask')
        this.yes = document.createElement('div')
        this.no = document.createElement('div')
        this.yes.setAttribute('class', 'btn yes')
        this.no.setAttribute('class', 'btn no')
        this.yes.innerText = "yes"
        this.no.innerText = "no"
        this.mainDiv.appendChild(this.yes)
        this.mainDiv.appendChild(this.no)
    }

    hide (b: boolean) {
        if (b) {
            document.body.removeChild(this.mainDiv)
            return
        }
        document.body.appendChild(this.mainDiv)
    }

    yesNo() {
        this.hide(false)
        return new Promise((resolve, reject) => {
        this.yes.onclick = (()=>{resolve(true); this.hide(true)})
        this.no.onclick = (()=>{resolve(false); this.hide(true)})
    })
}
}
