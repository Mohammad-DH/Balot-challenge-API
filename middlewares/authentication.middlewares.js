const jsonwebtoken = require("jsonwebtoken");

function check(req, res, next) {
  try {
    let token = req.headers.cookie?.split("jwtToken=")[1];

    if (token) {
      let decoded = jsonwebtoken.verify(
        token,
        process.env.JWTsecret,
        function (err, decoded) {
          return decoded;
        }
      );

      if (decoded && decoded.data.Admin_Id) {
        next();
      } else {
        res.status(400).json({ message: "token not found" });
        return;
      }
    } else {
      res.status(400).json({ message: "token not found" });
      return;
    }
  } catch (error) {}
}

module.exports = {
  check,
};
