module.exports = {
  gitter: function(req, res, next) {
    const dbInstance = req.app.get("db");
    dbInstance
      .get_inventory()
      .then(products => res.status(200).send(products))
      .catch(() => res.status(500).send());
  },
  poster: function(req, res, next) {
    const dbInstance = req.app.get("db");
    const { name, price, image_url } = req.body;

    dbInstance
      .create_product([name, price, image_url])
      .then(() => res.status(200).send())
      .catch(() => res.status(500).send());
  }
};
