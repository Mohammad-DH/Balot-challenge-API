// const { PrismaClient } = require("@prisma/client");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const InsertANewUser = async () => {
  let hash = await HandelHash();
  let Data;

  try {
    Data = prisma.User.create({
      data: {
        Id: hash,
      },
    });
    return { Data, success: true };
  } catch (error) {
    return { Data, success: false, error };
  }
};

//handel hash and make sure it is unique
const HandelHash = async () => {
  let randomHash = CreateHash();

  let exist = await IsUserExist(randomHash);

  while (exist) {
    console.log("loooooop");
    randomHash = CreateHash();

    exist = IsUserExist(randomHash);
  }

  return randomHash;
};

//create a random hash string
const CreateHash = () => {
  return Math.random().toString(36).substring(7);
};

//check if the hash is in used or not
const IsUserExist = async (randomHash) => {
  let user = await prisma.User.findFirst({
    where: {
      Id: randomHash,
    },
  });

  if (user) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  InsertANewUser,
};
