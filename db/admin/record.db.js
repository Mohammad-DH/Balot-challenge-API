const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const RecordOfAUserByRank = async (ChallengeId, count) => {
  try {
    Data = await prisma.Record.findMany({
      where: {
        ChallengeId,
      },
      orderBy: [
        {
          Score: "desc",
        },
        {
          SpentTime: "asc",
        },
      ],
      skip: 0,
      take: count,
    });

    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = {
  RecordOfAUserByRank,
};
