const express = require("express");
const app = express();
const port = 4000;
const bodyParser = require("body-parser");

//Routes
const subscribeRoutes = require("./routes/subscribeRoutes");
const unsubscribeRoutes = require("./routes/unsubscribeRoutes");
const notifyRoutes = require("./routes/notifyRoutes");
const subscriptionRoutes = require("./routes/subscriptionRoutes");

const handleErrors = require("../api/middlewares/handleErrors");
const observerManager = require("../newsletter/middlewares/observerManagerMiddleware");

app.use(bodyParser.json());

const badParsingError = (err, req, res, next) => {
  if (err.type === "entity.parse.failed") {
    res.status(400).send({ status: 400, errorCode: "BAD_REQUEST" });
  } else {
    next(err);
  }
};

app.use(badParsingError);

app.use(observerManager);

const api = '/api';

app.use(`${api}/subscribe`, subscribeRoutes);
app.use(`${api}/unsubscribe`, unsubscribeRoutes);
app.use(`${api}/notify`, notifyRoutes);
app.use(`${api}/subscriptions`, subscriptionRoutes);
app.all('*', (req, res) => {
  res.status(404).send({
    status: 404,
    errorCode: "RESOURCE_NOT_FOUND"
  });
});
app.use(handleErrors);

app.listen(port, () => {
  console.log(`Newsletter service listening at http://localhost:${port}`);
});