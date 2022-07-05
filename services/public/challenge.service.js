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
  let Twenty = await PublicChallengeDB.TwentyRecordsOfAChallenge(obj);

  let Records = await PublicChallengeDB.RecordsOfAChallenge(obj);

  let target = Records.Data.find((o) => o.UserId === obj.UserId);

  let Around = await PublicChallengeDB.RecordsOfUsersAroundInAChallenge(obj.ChallengeId, parseInt(target.num));

  let Data = { Twenty, Around };

  return Data;
};

module.exports = {
  GetAllChallenges,
  StartAChallenge,
  SubmitAChallenge,
  RecordsOfAChallenge,
};
