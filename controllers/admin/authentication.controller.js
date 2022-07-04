const { AdminAuthentication } = require("../../services");
const jsonwebtoken = require("jsonwebtoken");
const cookie = require("cookie");

const Signup = async (req, res, next) => {
  try {
    let data = await AdminAuthentication.Signup(req.body);
    res.status(200).json({ data });
    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

const Login = async (req, res, next) => {
  try {
    let data = await AdminAuthentication.Login(req.body);

    if (data !== false) {
      const jwtToken = jsonwebtoken.sign(
        {
          data,
        },
        process.env.JWTsecret,
        { expiresIn: "24h" }
      );

      res.setHeader(
        "Set-Cookie",
        cookie.serialize("jwtToken", jwtToken, {
          httpOnly: true,
          //secure
          maxAge: 60 * 60 * 24,
          sameSite: "strict",
          path: "/",
        })
      );

      res.status(200).json({ message: "you are login now" });
    } else {
      res.status(400).json({ message: "login failed !" });
    }

    next();
  } catch (e) {
    console.log(e.message);
    res.sendStatus(500) && next(e);
  }
};

module.exports = {
  Signup,
  Login,
};
