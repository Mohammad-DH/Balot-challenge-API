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

const RecordsOfAChallenge = async ({ ChallengeId }) => {
  try {
    Data = await prisma.$queryRaw`
      select    
      UserId,
      CreatedTime,
      Score,
      CAST(ROW_NUMBER() OVER ( order by Score desc, CreatedTime asc ) AS CHAR) as num

      from Record
      where ChallengeId = ${ChallengeId} 
      order by Score desc , CreatedTime asc ;
    `;

    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

const TwentyRecordsOfAChallenge = async ({ ChallengeId }) => {
  try {
    Data = await prisma.Record.findMany({
      where: {
        ChallengeId,
      },
      orderBy: {
        Score: "desc",
      },
      skip: 0,
      take: 20,
    });

    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};
const RecordsOfUsersAroundInAChallenge = async (ChallengeId, num) => {
  try {
    Data = await prisma.Record.findMany({
      where: {
        ChallengeId,
      },
      orderBy: {
        Score: "desc",
      },
      skip: num - 3,
      take: 5,
    });

    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = {
  GetAllChallenges,
  IsChallengeActive,
  RecordsOfAChallenge,
  TwentyRecordsOfAChallenge,
  RecordsOfUsersAroundInAChallenge,
};
