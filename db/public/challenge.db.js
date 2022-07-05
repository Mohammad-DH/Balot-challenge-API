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

const TwentyRecordsOfAChallenge = async ({ ChallengeId }) => {
  try {
    Data = await prisma.Record.findMany({
      where: {
        ChallengeId,
      },
      skip: 0,
      take: 20,
      orderBy: [
        {
          Score: "desc",
        },
      ],
    });
    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};
const RecordOfAUserInAChallenge = async ({ ChallengeId, UserId }) => {
  try {
    Data = await prisma.Record.findFirst({
      where: {
        ChallengeId,
        UserId,
      },
    });
    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};
const ListOfUserWithTheSameScore = async (ChallengeId, Score) => {
  try {
    Data = await prisma.Record.count({
      where: {
        ChallengeId,
        Score,
      },
      // select: {
      //   Id: true,
      // },
    });
    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

const RecordsAboveAUserInAChallenge = async (ChallengeId, Score, plus) => {
  try {
    Data = await prisma.Record.findMany({
      where: {
        ChallengeId,
        Score: {
          gte: Score,
        },
      },
      orderBy: [
        {
          Score: "asc",
        },
      ],
      skip: 0,
      take: plus + 2,
    });
    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};
const RecordsUnderAUserInAChallenge = async (ChallengeId, Score, plus) => {
  try {
    Data = await prisma.Record.findMany({
      where: {
        ChallengeId,
        Score: {
          lte: Score,
        },
      },
      orderBy: [
        {
          Score: "desc",
        },
      ],
      skip: 0,
      take: plus + 2,
    });
    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = {
  GetAllChallenges,
  IsChallengeActive,
  TwentyRecordsOfAChallenge,
  RecordOfAUserInAChallenge,
  ListOfUserWithTheSameScore,
  RecordsAboveAUserInAChallenge,
  RecordsUnderAUserInAChallenge,
};
