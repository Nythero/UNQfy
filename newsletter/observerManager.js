const Observer = require("./observer");

class ObserverManager {
  constructor() {
    if (ObserverManager.instance) {
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
      if (!obs.some((o) => o.email === email)) obs.push(observer);
    } else this.observers.set(artistId, [observer]);
  }

  unsubscribe(artistId, email) {
    if (!this.observers.has(artistId)) return;
    const filtered = this.observers
      .get(artistId)
      .filter((obs) => obs.email !== email);
    this.observers.set(artistId, filtered);
  }

  notify(artistId, subject, message) {
    if (!this.observers.has(artistId)) return;
    const toNotify = this.observers.get(artistId);
    toNotify.forEach((obs) => {
      obs.sendEmail(subject, message);
    });
  }

  getSubscriptions(artistId) {
    if (!this.observers.has(artistId)) return [];
    return this.observers.get(artistId).map((obs) => obs.email);
  }

  deleteSubscriptions(artistId) {
    this.observers.delete(artistId);
  }
}

module.exports = ObserverManager;
