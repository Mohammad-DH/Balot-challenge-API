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

const RecordsOfAChallenge = async ({ ChallengeId }) => {
  try {
    Data = await prisma.$queryRaw`
      select    
      UserId,
      CreatedTime,
      Score,
      CAST(ROW_NUMBER() OVER ( order by Score desc, SpentTime asc ) AS CHAR) as num

      from Record
      where ChallengeId = ${ChallengeId} 
      order by Score desc , SpentTime asc ;
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
      orderBy: [
        {
          Score: "desc",
        },
        {
          SpentTime: "asc",
        },
      ],
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
      orderBy: [
        {
          Score: "desc",
        },
        {
          SpentTime: "asc",
        },
      ],
      skip: num - 3,
      take: 5,
    });

    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

const ThisWeekRecordsOfAChallenge = async (ChallengeId, FirstDay, LastDay) => {
  try {
    Data = await prisma.Record.findMany({
      where: {
        ChallengeId,
        CreatedTime: {
          gte: FirstDay,
          lte: LastDay,
        },
      },
      orderBy: [
        {
          Score: "desc",
        },
        {
          SpentTime: "asc",
        },
      ],
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
  RecordsOfAChallenge,
  TwentyRecordsOfAChallenge,
  RecordsOfUsersAroundInAChallenge,
  ThisWeekRecordsOfAChallenge,
};
