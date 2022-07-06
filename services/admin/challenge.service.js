const { AdminChallengeDB, AdminRecordDB, AdminRewardDB } = require("../../db");
const schedule = require("node-schedule");

const CreateNewChallenge = async (obj) => {
  let NewChallenge = await AdminChallengeDB.CreateNewChallenge(obj);

  if (NewChallenge.success === false) {
    throw new Error(NewChallenge.error);
  } else {
    schedule.scheduleJob(NewChallenge.Data.Start, async () => {
      await AdminChallengeDB.ActiveChallenge({
        Id: NewChallenge.Data.Id,
        Active: true,
      });
    });

    schedule.scheduleJob(NewChallenge.Data.End, async () => {
      await AdminChallengeDB.ActiveChallenge({
        Id: NewChallenge.Data.Id,
        Active: false,
      });
      //get all the records
      let Rewards = await AdminChallengeDB.ChallengeRewards(obj);
      //get all the winners
      let Winners = await AdminRecordDB.RecordOfAUserByRank(obj.Id, Rewards.Data.length);
      //give them reward
      for (let i = 0; i < Rewards.Data.length; i++) {
        await AdminRewardDB.GiveRewardToAUser(Rewards.Data[i].Id, Winners.Data[i].UserId);
      }
    });
    return NewChallenge.Data;
  }
};

const RemoveChallenge = async (obj) => {
  let RemovedChallenge = await AdminChallengeDB.RemoveChallenge(obj);

  if (RemovedChallenge.success === false) {
    throw new Error(RemovedChallenge.error);
  } else {
    return RemovedChallenge.Data;
  }
};

const UpdateChallenge = async (obj) => {
  let UpdatedChallenge = await AdminChallengeDB.UpdateChallenge(obj);

  if (UpdatedChallenge.success === false) {
    throw new Error(UpdatedChallenge.error);
  } else {
    return UpdatedChallenge.Data;
  }
};

const ActiveChallenge = async (obj) => {
  let Challenge = await AdminChallengeDB.ActiveChallenge(obj);

  if (Challenge.success === false) {
    throw new Error(Challenge.error);
  } else {
    return Challenge.Data;
  }
};

module.exports = {
  CreateNewChallenge,
  RemoveChallenge,
  UpdateChallenge,
  ActiveChallenge,
};
