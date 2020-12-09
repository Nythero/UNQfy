const defaultRoute = (req, res) => {
  res.status(404).send({
    status: 404,
    errorCode: "RESOURCE_NOT_FOUND"
  });
};

module.exports = defaultRoute;
