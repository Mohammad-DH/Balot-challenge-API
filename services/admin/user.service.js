const { AdminUserDB } = require("../../db");

const GetAllUsers = async () => {
  let AllUsers = await AdminUserDB.GetAllUsers();
  if (AllUsers.success === false) {
    throw new Error(AllUsers.error);
  } else {
    return AllUsers.Data;
  }
};

const RemoveUser = async (obj) => {
  let RemovedUser = await AdminUserDB.RemoveUser(obj);
  if (RemovedUser.success === false) {
    throw new Error(RemovedUser.error);
  } else {
    return RemovedUser.Data;
  }
};

const UpdateUser = async (obj) => {
  let UpdatedUser = await AdminUserDB.UpdateUser(obj);
  if (UpdatedUser.success === false) {
    throw new Error(UpdatedUser.error);
  } else {
    return UpdatedUser.Data;
  }
};

module.exports = {
  GetAllUsers,
  RemoveUser,
  UpdateUser,
};
