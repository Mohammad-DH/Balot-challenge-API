const { AdminAuthenticationDB } = require("../../db");

const Signup = async (obj) => {
  let NewAdmin = await AdminAuthenticationDB.Signup(obj);

  if (NewAdmin.success === false) {
    throw new Error(NewAdmin.error);
  } else {
    return NewAdmin.Data;
  }
};

const Login = async (obj) => {
  let Admin = await AdminAuthenticationDB.Login(obj);

  if (Admin.success === false) {
    throw new Error(Admin.error);
  } else if (Admin.Data && Admin.Data.Active) {
    return { Admin_Id: Admin.Data.Id };
  } else {
    return false;
  }
};

module.exports = {
  Signup,
  Login,
};
