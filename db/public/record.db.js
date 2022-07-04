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

module.exports = {
  FindRecordByUserId,
};
