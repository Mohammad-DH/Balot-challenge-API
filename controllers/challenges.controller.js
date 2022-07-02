const { ChallengeService } = require("../services");

const AllChallenges = async (req, res, next) => {
  try {
    let data = await ChallengeService.GetAllChallenges();
    res.status(200).json({ data });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

// Need Authentication
const AddChallenge = async (req, res, next) => {
  try {
    let data = await ChallengeService.CreateNewChallenge(req.body);
    res.status(200).json({ data });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

// Need Authentication
const RemoveChallenge = async (req, res, next) => {
  try {
    let data = await ChallengeService.RemoveChallenge(req.body);

    res.status(200).json({ data });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

// Need Authentication
const UpdateChallenge = async (req, res, next) => {
  try {
    let data = await ChallengeService.UpdateChallenge(req.body);
    res.status(200).json({ data });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

module.exports = {
  AllChallenges,
  AddChallenge,
  RemoveChallenge,
  UpdateChallenge,
};
