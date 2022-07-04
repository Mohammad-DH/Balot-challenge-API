const { AdminUserService } = require("../../services");

const GetAllUsers = async (req, res, next) => {
  try {
    let User = await AdminUserService.GetAllUsers();
    res.status(200).json({ data: { User } });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};
const RemoveUser = async (req, res, next) => {
  try {
    let User = await AdminUserService.RemoveUser(req.body);
    res.status(200).json({ data: { User }, message: "User is deleted" });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};
const UpdateUser = async (req, res, next) => {
  try {
    let User = await AdminUserService.UpdateUser(req.body);
    res.status(200).json({ data: { User }, message: "User is updated" });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

module.exports = {
  GetAllUsers,
  RemoveUser,
  UpdateUser,
};
