//Modulos
const request = require('request-promise');
const fs = require('fs');
const util = require('util');

const unqfyRequester = {
  requestSpotify(uri, qs){
    const readFile = util.promisify(fs.readFile);

    return readFile('spotifyCreds.json')
    .then(credsJson => JSON.parse(credsJson))
    .then(creds => creds.access_token)
    .then(token => {
      return {
        uri: uri,
        headers: {
          Authorization: 'Bearer ' + token
        },
	qs: qs,
        json: true
      }
    })
    .then(option => request.get(option))
  }
}

module.exports = unqfyRequester;
