class Chugaev {
    name = 'Чугаев Михаил'

    constructor(message = '') {
        this.message = this.name + '. ' + message
    }

    checkIn() {
        console.log(this.message)
    }
}

export { Chugaev }