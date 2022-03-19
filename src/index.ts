import {Memo} from './memoCard'
import {countDown} from './countDown'
import {Ask} from './ask'
import {Score} from './score'
import {Sounds} from './sounds'
window.onload = start

const score = new Score()
const count = new countDown(5)
const shapes = new Memo(4)
const ask = new Ask()
const sound = new Sounds()
sound.ev()

async function start () {
    shapes.run()
    await count.start()
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
