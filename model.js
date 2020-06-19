const mongoose = require("mongoose");

const TextevaSchema = new mongoose.Schema({

  _userId: mongoose.Types.ObjectId,
  _siteId: mongoose.Types.ObjectId,
  textesjuridique: {
    _textesjuridiqueId: mongoose.Types.ObjectId,
    isApplicable: Boolean,
    isInformative: Boolean,
    conformite:  Number,
    articles: [{
      _articleId: mongoose.Types.ObjectId,
      isInformative: Boolean,
      isConforme: Boolean,
    }],
  }

})

const Texteva = mongoose.model("Texteva", TextevaSchema);
module.exports = Texteva