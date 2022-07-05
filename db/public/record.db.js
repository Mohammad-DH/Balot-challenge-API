// const { PrismaClient } = require("@prisma/client");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const FindRecordByUserId = async ({ UserId, ChallengeId }) => {
  try {
    Data = await prisma.Record.findFirst({
      where: {
        UserId,
        ChallengeId,
      },
    });
    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

const FirstRecord = async ({ UserId, Nickname, ChallengeId }) => {
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

const SubmitARecord = async ({ UserId, ChallengeId, Score, SpentTime }) => {
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
  FindRecordByUserId,
  FirstRecord,
  SubmitARecord,
};
