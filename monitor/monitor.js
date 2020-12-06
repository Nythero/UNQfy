const timeout  = require('util').promisify(setTimeout);
const pinger   = require('./pinger');
const reporter = require('./reporter'); 

class Monitor {
  constructor(service, url){
    this._service       = service;
    this._serviceURL    = url;
    this._wasServiceOn   = false;
    this._isMonitoring  = false;
    this._time          = 5000;
  }
  
  isServiceOn(){
    return pinger.ping(this._serviceURL)
      .then(response => {
        return true;
      })
      .catch(err => {
        if (err.response){
          return true;
	}
	else if (err.request){
          return false;
	}
      });
  }

  activate(){
    this._isMonitoring = true; 
    this._monitor();
  }
  
  deactivate(){
    this._isMonitoring = false;
  }

  _monitor(){
    if (this._isMonitoring){
      this.isServiceOn()
        .then(isOn => {
          if (isOn !== this._wasServiceOn){
            const message = `${this._service} ha ` + ((this._wasServiceOn)? "dejado de funcionar" : "vuelto a la normalidad");
	    reporter.report(message);
	  }
	  this._wasServiceOn = isOn;
          return timeout(this._time);
	})
        .then(() => {
	  this._monitor();
	})
        .catch(err => console.log(err));
    }
  }
}

module.exports = Monitor;
