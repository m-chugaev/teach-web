class SecondName {
    name = ''
    constructor(surname, message = '') {
        this.surname = surname;
        this.message = `${this.name} ${this.surname}. ${message}`;
    }

    checkIn() {
        console.log(this.message);
    }
}

export { SecondName };