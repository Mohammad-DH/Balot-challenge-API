const { PublicChallengeService } = require("../../services");

const AllChallenges = async (req, res, next) => {
  try {
    let data = await PublicChallengeService.GetAllChallenges();
    res.status(200).json({ data });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

const StartAChallenges = async (req, res, next) => {
  try {
    let data = await PublicChallengeService.StartAChallenges(req.body);
    res.status(200).json({ data });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

const SubmitAChallenges = async (req, res, next) => {
  try {
    let data = await PublicChallengeService.SubmitAChallenges(req.body);
    res.status(200).json({ data });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

module.exports = {
  AllChallenges,
  StartAChallenges,
  SubmitAChallenges,
};
