export const log = function (data) {
    console.log(data)
}

export const error = function (data) {
    console.error(data)
}

export const sayHi = function (name) {
    log('HELLO,' + name)
}