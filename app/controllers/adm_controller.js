const AdmController = {
  index: (req, res, next) => {
    res.send({ id:1,nome:"Thiago"});
  }
}

module.exports = AdmController;