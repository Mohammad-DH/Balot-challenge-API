const { ChallengeDB } = require("../db");

const GetAllChallenges = async () => {
  let AllChallenges = await ChallengeDB.GetAllChallenges();

  if (AllChallenges.success === false) {
    throw new Error(AllChallenges.error);
  } else {
    return AllChallenges.Data;
  }
};

const CreateNewChallenge = async (obj) => {
  let NewChallenge = await ChallengeDB.CreateNewChallenge(obj);

  if (NewChallenge.success === false) {
    throw new Error(NewChallenge.error);
  } else {
    return NewChallenge.Data;
  }
};

const RemoveChallenge = async (obj) => {
  let RemovedChallenge = await ChallengeDB.RemoveChallenge(obj);

  if (RemovedChallenge.success === false) {
    throw new Error(RemovedChallenge.error);
  } else {
    return RemovedChallenge.Data;
  }
};

const UpdateChallenge = async (obj) => {
  let UpdatedChallenge = await ChallengeDB.UpdateChallenge(obj);

  if (UpdatedChallenge.success === false) {
    throw new Error(UpdatedChallenge.error);
  } else {
    return UpdatedChallenge.Data;
  }
};

module.exports = {
  GetAllChallenges,
  CreateNewChallenge,
  RemoveChallenge,
  UpdateChallenge,
};
