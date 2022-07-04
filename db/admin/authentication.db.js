const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const Signup = async ({ UserName, Password }) => {
  try {
    let Data = await prisma.Admin.create({
      data: {
        UserName,
        Password,
      },
    });
    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

const Login = async ({ UserName, Password }) => {
  try {
    let Data = await prisma.Admin.findFirst({
      where: {
        UserName,
        Password,
      },
    });
    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = { Signup, Login };
