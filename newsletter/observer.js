class Observer {
    constructor(email) {
        this.email = email;
    }

    sendEmail(subject, message) {
        console.log(`Subject: ${subject} - Body: ${message}`);
    }
}

module.exports = Observer;