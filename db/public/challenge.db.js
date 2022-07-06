// const { PrismaClient } = require("@prisma/client");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const GetAllChallenges = async () => {
  try {
    Data = await prisma.Challenge.findMany();
    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};
const IsChallengeActive = async ({ Id }) => {
  try {
    Data = await prisma.Challenge.findFirst({
      where: {
        Id,
      },
      select: {
        Active: true,
      },
    });
    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = {
  GetAllChallenges,
  IsChallengeActive,
};
