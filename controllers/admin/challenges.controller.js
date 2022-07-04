const { AdminChallengeService } = require("../../services");

const AddChallenge = async (req, res, next) => {
  try {
    let data = await AdminChallengeService.CreateNewChallenge(req.body);
    res.status(200).json({ data });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

const RemoveChallenge = async (req, res, next) => {
  try {
    let data = await AdminChallengeService.RemoveChallenge(req.body);

    res.status(200).json({ data });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

const UpdateChallenge = async (req, res, next) => {
  try {
    let data = await AdminChallengeService.UpdateChallenge(req.body);
    res.status(200).json({ data });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};
const ActiveChallenge = async (req, res, next) => {
  try {
    let data = await AdminChallengeService.ActiveChallenge(req.body);
    res.status(200).json({ data });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

module.exports = {
  AddChallenge,
  RemoveChallenge,
  UpdateChallenge,
  ActiveChallenge,
};
