const readLine = require('readline');
const app      = require('./server.js');
const port = 4000;

const ON  = "server on";

const OFF = "server off";

const displayStartingMessage = () => {
  console.log(`Logging app listening at http://localhost:${port}`);
}

const displayClosingMessage = () => {
  console.log('Logging app is closing');
}

let rl = readLine.createInterface(process.stdin, process.stdout);

let isOn = true;

rl.on('line', (input) => {
  if (input == ON && !isOn){
    server = app.listen(port, displayStartingMessage);
    isOn = true;
  }
  else if (input == OFF && isOn){
    server.close(displayClosingMessage);
    isOn = false;
  }
});

let server = app.listen(port, displayStartingMessage);
