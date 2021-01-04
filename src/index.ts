import {Memo} from './memoCard.js'
import {Timer} from './timer.js'
import {Ask} from './ask.js'
import {Score} from './score.js'
import {Sounds} from './sounds.js'

window.onload = start

const score = new Score()
const timer = new Timer(5)
const shapes = new Memo(4)
const ask = new Ask()
const sound = new Sounds()
sound.ev()

async function start () {
    shapes.run()
    await timer.start()
    const question = shapes.ask()
    const answer = await ask.yesNo()
    if (question === answer) {
        sound.play(1)
        score.score++
        start ()
        return
    }
    sound.play(2)
    score.mistake++
    start ()
}
