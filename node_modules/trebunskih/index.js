class Trebunskih {
    name = 'Требунских Артём'

    constructor(message = '') {
        this.message = this.name + '. ' + message
    }

    checkIn() {
        console.log(this.message)
    }
}

export { Trebunskih }