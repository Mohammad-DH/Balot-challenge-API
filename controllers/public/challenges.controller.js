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

const StartAChallenge = async (req, res, next) => {
  try {
    let data = await PublicChallengeService.StartAChallenge(req.body);
    res.status(200).json({ data });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

const SubmitAChallenge = async (req, res, next) => {
  try {
    let data = await PublicChallengeService.SubmitAChallenge(req.body);
    res.status(200).json({ data });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};
const RecordsOfAChallenge = async (req, res, next) => {
  try {
    let data = await PublicChallengeService.RecordsOfAChallenge(req.body);
    res.status(200).json({ data });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};
const ThisWeekRecordsOfAChallenge = async (req, res, next) => {
  try {
    let data = await PublicChallengeService.ThisWeekRecordsOfAChallenge(req.body);
    res.status(200).json({ data });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

module.exports = {
  AllChallenges,
  StartAChallenge,
  SubmitAChallenge,
  RecordsOfAChallenge,
  ThisWeekRecordsOfAChallenge,
};
