const { PublicUserDB } = require("../../db");

const CreateNewUser = async () => {
  let NewUser = await PublicUserDB.InsertANewUser();
  if (NewUser.success === false) {
    throw new Error(NewUser.error);
  } else {
    return NewUser.Data;
  }
};

module.exports = {
  CreateNewUser,
};
