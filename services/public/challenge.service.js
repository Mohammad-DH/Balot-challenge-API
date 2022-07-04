const { PublicChallengeDB, PublicRecordDB } = require("../../db");

const GetAllChallenges = async () => {
  let AllChallenges = await PublicChallengeDB.GetAllChallenges();

  if (AllChallenges.success === false) {
    throw new Error(AllChallenges.error);
  } else {
    return AllChallenges.Data;
  }
};

const StartAChallenges = async (obj) => {
  let userRecord = await PublicRecordDB.FindRecordByUserId(obj);

  if (!userRecord.Data) {
    let NewChallenge = await PublicChallengeDB.StartAChallenge(obj);

    if (NewChallenge.success === false) {
      throw new Error(NewChallenge.error);
    } else {
      return NewChallenge.Data;
    }
  } else {
    return { message: "you already joined this challenge" };
  }
};

const SubmitAChallenges = async (obj) => {
  let userRecord = await PublicRecordDB.FindRecordByUserId(obj);

  if (!userRecord.Data) {
    return { message: "you need to first join this challenge" };
  } else if (userRecord.Data && userRecord.Data.SpentTime === 0) {
    let Challenges = await PublicChallengeDB.SubmitAChallenge(obj);

    if (Challenges.success === false) {
      throw new Error(Challenges.error);
    } else {
      return Challenges.Data;
    }
  } else if (userRecord.Data && userRecord.Data.SpentTime !== 0) {
    return { message: "you already played this challenge " };
  }
};

module.exports = {
  GetAllChallenges,
  StartAChallenges,
  SubmitAChallenges,
};
