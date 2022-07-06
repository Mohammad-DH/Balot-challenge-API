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
  let Twenty = await PublicRecordDB.TwentyRecordsOfAChallenge(obj);

  let Records = await PublicRecordDB.RecordsOfAChallenge(obj);

  let target = Records.Data.find((o) => o.UserId === obj.UserId);

  let Around = await PublicRecordDB.RecordsOfUsersAroundInAChallenge(obj.ChallengeId, parseInt(target.num));

  let Data = { Twenty, Around };

  return Data;
};

const ThisWeekRecordsOfAChallenge = async (obj) => {
  var curr = new Date();
  var first = curr.getDate() - curr.getDay();
  var last = first + 6;

  var FirstDay = new Date(curr.setDate(first));
  var LastDay = new Date(curr.setDate(last));

  console.log(FirstDay);
  console.log(LastDay);

  let Records = await PublicRecordDB.ThisWeekRecordsOfAChallenge(obj.ChallengeId, FirstDay, LastDay);

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
  ThisWeekRecordsOfAChallenge,
};
