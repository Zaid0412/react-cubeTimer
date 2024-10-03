import { ScrambleDisplay } from 'scramble-display'
import { Scrambow } from 'scrambow'


const getScramble = (type = '333', scrambleCount = 1) => {
    const scrambleArr = new Scrambow().setType(type)
    const scramble = scrambleArr.get(scrambleCount)[0].scramble_string

    return { type, scramble }
}

const displayScramblText = (scramble, el) => {
    el.innerHTML = ''
    el.textContent = scramble
}

const displayScramble = (scramble, type, el) => {
    const element = new ScrambleDisplay()
    element.event = type
    element.scramble = scramble

    el.innerHTML = ''
    el.insertAdjacentElement('afterbegin', element)
    
    return element
}

export  {getScramble, displayScramblText, displayScramble}

