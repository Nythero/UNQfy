class Observer {
    constructor(email) {
        this.email = email;
    }

    notify(subject, message) {
        this.email.send(subject, message);
    }
}

module.exports = Observer;