const express = require("express");
const app = express();
const port = 6000;
const bodyParser = require("body-parser");

//Routes
const subscribeRoutes = require("./routes/subscribeRoutes");
const unsubscribeRoutes = require("./routes/unsubscribeRoutes");
const notifyRoutes = require("./routes/notifyRoutes");
const subscriptionRoutes = require("./routes/subscriptionRoutes");
const defaultRoute = require("../api/routes/defaultRoute");

const handleErrors = require("../api/middlewares/handleErrors");
const observerManager = require("./middlewares/observerManagerMiddleware");
const unqfyClient = require("./middlewares/unqfyMiddleware");
const badParsingError = require("../api/middlewares/badParsing");

app.use(bodyParser.json());

app.use(badParsingError);
app.use(observerManager);
app.use(unqfyClient);

const api = '/api';

app.use(`${api}/subscribe`, subscribeRoutes);
app.use(`${api}/unsubscribe`, unsubscribeRoutes);
app.use(`${api}/notify`, notifyRoutes);
app.use(`${api}/subscriptions`, subscriptionRoutes);
app.use('*', defaultRoute);
app.use(handleErrors);

app.listen(port, () => {
  console.log(`Newsletter service listening at http://localhost:${port}`);
});