const { AdminChallengeDB } = require("../../db");

const CreateNewChallenge = async (obj) => {
  let NewChallenge = await AdminChallengeDB.CreateNewChallenge(obj);

  if (NewChallenge.success === false) {
    throw new Error(NewChallenge.error);
  } else {
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
