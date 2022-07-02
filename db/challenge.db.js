// const { PrismaClient } = require("@prisma/client");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const GetAllChallenges = async () => {
  try {
    Data = prisma.Challenge.findMany();
    return { Data, success: true };
  } catch (error) {
    return { Data, success: false, error };
  }
};

const CreateNewChallenge = async ({
  Name,
  CreatedTime,
  Start,
  End,
  RestaurantId,
  Rewards,
}) => {
  try {
    Data = prisma.Challenge.create({
      data: {
        Name,
        CreatedTime,
        Start,
        End,
        RestaurantId,
        Rewards: {
          create: Rewards,
        },
      },
    });
    return { Data, success: true };
  } catch (error) {
    return { Data, success: false, error };
  }
};

const RemoveChallenge = async ({ Id }) => {
  try {
    Data = prisma.Challenge.delete({
      where: {
        Id,
      },
    });
    return { Data, success: true };
  } catch (error) {
    return { Data, success: false, error };
  }
};

const UpdateChallenge = async ({
  Id,
  Name,
  CreatedTime,
  Start,
  End,
  RestaurantId,
}) => {
  try {
    Data = prisma.Challenge.update({
      where: {
        Id,
      },
      data: {
        Name,
        CreatedTime,
        Start,
        End,
        RestaurantId,
      },
    });
    return { Data, success: true };
  } catch (error) {
    return { Data, success: false, error };
  }
};

module.exports = {
  GetAllChallenges,
  CreateNewChallenge,
  RemoveChallenge,
  UpdateChallenge,
};
