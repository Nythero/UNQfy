const Observer = require("./observer");

class ObserverManager {

  constructor() {
    if (!!ObserverManager.instance) {
        return ObserverManager.instance;
    }
    ObserverManager.instance = this;
    this.observers = new Map();
    return this;
  }

  subscribe(artistId, email) {
    const observer = new Observer(email);
    if (this.observers.has(artistId)) {
      const obs = this.observers.get(artistId);
      obs.push(observer);
    } else this.observers.set(artistId, [observer]);
  }

  unsubscribe(artistId, email) {
    const filtered = this.observers
      .get(artistId)
      .filter((obs) => obs.email !== email);
    this.observers.set(artistId, filtered);
  }

  notify(artistId, subject, message) {
    const toNotify = this.observers.get(artistId);
    toNotify.forEach((obs) => {
      obs.notify(subject, message);
    });
  }

  getSubscriptions(artistId) {
    return this.observers.get(artistId);
  }

  deleteSubscriptions(artistId) {
    this.observers.delete(artistId);
  }
}

module.exports = ObserverManager;
