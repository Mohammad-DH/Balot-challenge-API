const { PublicChallengeDB, PublicRecordDB } = require("../../db");

const GetAllChallenges = async () => {
  let AllChallenges = await PublicChallengeDB.GetAllChallenges();

  if (AllChallenges.success === false) {
    throw new Error(AllChallenges.error);
  } else {
    return AllChallenges.Data;
  }
};

const StartAChallenge = async (obj) => {
  let {
    Data: { Active },
  } = await PublicChallengeDB.IsChallengeActive(obj);

  if (Active) {
    let userRecord = await PublicRecordDB.FindRecordByUserId(obj);

    if (!userRecord.Data) {
      let NewRecord = await PublicRecordDB.FirstRecord(obj);

      if (NewRecord.success === false) {
        throw new Error(NewRecord.error);
      } else {
        return NewRecord.Data;
      }
    } else {
      return { message: "you already joined this challenge" };
    }
  } else {
    return { message: "this challenge is not active!" };
  }
};

const SubmitAChallenge = async (obj) => {
  let {
    Data: { Active },
  } = await PublicChallengeDB.IsChallengeActive(obj);

  if (Active) {
    let userRecord = await PublicRecordDB.FindRecordByUserId(obj);

    if (!userRecord.Data) {
      return { message: "you need to first join this challenge" };
    } else if (userRecord.Data && userRecord.Data.SpentTime === 0) {
      let Record = await PublicRecordDB.SubmitARecord(obj);

      if (Record.success === false) {
        throw new Error(Record.error);
      } else {
        return Record.Data;
      }
    } else if (userRecord.Data && userRecord.Data.SpentTime !== 0) {
      return { message: "you already played this challenge " };
    }
  } else {
    return { message: "this challenge is not active!" };
  }
};

const RecordsOfAChallenge = async (obj) => {
  let Records = await PublicChallengeDB.TwentyRecordsOfAChallenge(obj);

  let targetRecord = await PublicChallengeDB.RecordOfAUserInAChallenge(obj);

  let sameAsTargetRecord = await PublicChallengeDB.ListOfUserWithTheSameScore(obj.ChallengeId, targetRecord.Data.Score);

  let AboveTargetRecord = await PublicChallengeDB.RecordsAboveAUserInAChallenge(obj.ChallengeId, targetRecord.Data.Score, sameAsTargetRecord.Data);

  while (AboveTargetRecord.Data[0].UserId !== obj.UserId) {
    console.log("looop");
    AboveTargetRecord.Data.shift();
  }
  console.log("*************START***************");
  console.log(AboveTargetRecord.Data[0].UserId === obj.UserId);
  console.log(obj.UserId);
  console.log(AboveTargetRecord);
  console.log("**************END**************");
  let UnderTargetRecord = await PublicChallengeDB.RecordsUnderAUserInAChallenge(obj.ChallengeId, targetRecord.Data.Score, sameAsTargetRecord.Data);

  if (Records.success === false) {
    throw new Error(Records.error);
  } else {
    return Records.Data;
  }
};

module.exports = {
  GetAllChallenges,
  StartAChallenge,
  SubmitAChallenge,
  RecordsOfAChallenge,
};
