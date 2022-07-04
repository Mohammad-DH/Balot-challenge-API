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

const StartAChallenge = async ({ UserId, Nickname, ChallengeId }) => {
  try {
    Data = await prisma.Record.create({
      data: {
        CreatedTime: new Date(),
        UserId,
        Nickname,
        ChallengeId,
      },
    });
    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

const SubmitAChallenge = async ({ UserId, ChallengeId, Score, SpentTime }) => {
  try {
    Data = await prisma.Record.updateMany({
      where: {
        UserId,
        ChallengeId,
      },
      data: {
        Score,
        SpentTime,
      },
    });
    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = {
  GetAllChallenges,
  StartAChallenge,
  SubmitAChallenge,
};
