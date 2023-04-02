const { app } = require("../database/conn");

const getAll = (path, model) => {
  app.get(path, async (_, res) => {
    try {
      const result = await model.findAll({ attributes: { exclude: ["password"] }});
      // const result = await model.findAll({ attributes: { exclude: ["password"] }, where: { deletedAt: null }});

      if (!result)
        return res.status(422).json({ message: "Record not found!" });

      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
};

module.exports = getAll;
