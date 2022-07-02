const { UserService } = require("../services");

const { CreateNewUser } = UserService;

const AddUser = async (req, res, next) => {
  try {
    let User = await CreateNewUser();
    res
      .status(200)
      .json({ data: { User }, message: "New User Has Been Created" });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

module.exports = {
  AddUser,
};
