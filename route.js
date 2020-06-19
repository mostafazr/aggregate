router.get("/:id", async (req, res) => {
    try {
      const texteva = await Texteva.aggregate([{
          "$match": {
            "_id": mongoose.Types.ObjectId(req.params.id)
          }},
        {
          textesjuridique: {
            $sum: {
              $cond: [{
                $eq: ["$textesjuridique.articles.isConforme", true]
              }, 1, 0]
            }
          }}
      ])
      return res.send(texteva);
    } catch {
      res.status(404);
      res.send({
        error: "Texteva doesn't exist!"
      });
    }
  });