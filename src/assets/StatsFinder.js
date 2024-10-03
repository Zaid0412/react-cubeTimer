
const takeRight = (arr, n = 1) => n === 0 ? [] : arr.slice(-n);

const getFastestSingle = (array) => {
    let bestSolve = 0.00
    for (const s of array) {
        if (bestSolve === 0.00) {
            bestSolve = s
        }else if (Number(s.time) < Number(bestSolve.time)) {
            bestSolve = s
        }
    }
    return bestSolve
}

const getSlowestSingle = (array) => {
    let worstSolve = 0.00
    for (const s of array) {
        if (worstSolve === 0.00) {
            worstSolve = s
            if (s.time == 'DNF') return s
        }else if (Number(s.time) > Number(worstSolve.time)) {
            worstSolve = s
            if (s.time == 'DNF') return s

        }
    }
    return worstSolve
}

const getMean = (arr) => {
    const sum = arr.reduce((accumulator, currentValue) => accumulator + Number(currentValue.time), 0);
    return (sum / arr.length).toFixed(2)
}

const getAo5 = (arr) => {
    const array = takeRight(arr, 5)
    const bestTime = getFastestSingle(array)
    const worstTime = getSlowestSingle(array)
    const meanArr = array.filter(s => s.id != bestTime.id && s.id != worstTime.id)
    return getMean(meanArr)
}

const getAo12 = (arr) => {
    const array = takeRight(arr, 12)
    if (array.every(s => s != undefined && array.length == 12)) {
        const bestTime = getFastestSingle(array)
        const worstTime = getSlowestSingle(array)
        const meanArr = array.filter(s => s.id != bestTime.id && s.id != worstTime.id)
        return getMean(meanArr)
    }else return 0.00
}

const getAo50 = (arr) => {
    let array = takeRight(arr, 50)
    if (array.every(s => s != undefined && array.length == 50)) {
        for (let index = 0; index < 3; index++) {
            const bestTime = getFastestSingle(array)
            const worstTime = getSlowestSingle(array)
            array = array.filter(s => s.id != bestTime.id && s.id != worstTime.id)
        }
        return getMean(array)
    }        
}

const getAo100 = (arr) => {
    let array = takeRight(arr, 100)
    if (array.every(s => s != undefined && array.length == 100)) {
        for (let index = 0; index < 5; index++) {
            const bestTime = getFastestSingle(array)
            const worstTime = getSlowestSingle(array)
            array = array.filter(s => s.id != bestTime.id && s.id != worstTime.id)
        }
        return getMean(array)
    }
}



export {takeRight, getFastestSingle, getSlowestSingle, getMean, getAo5, getAo12, getAo50, getAo100}