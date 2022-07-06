const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const CreateNewChallenge = async ({ Name, Start, End, RestaurantId, Rewards }) => {
  try {
    let Data = await prisma.Challenge.create({
      data: {
        Name,
        CreatedTime: new Date(),
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
    return { success: false, error };
  }
};

const RemoveChallenge = async ({ Id }) => {
  try {
    let Data = await prisma.Challenge.delete({
      where: {
        Id,
      },
    });
    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

const UpdateChallenge = async ({ Id, Name, Start, End, RestaurantId }) => {
  try {
    let Data = await prisma.Challenge.update({
      where: {
        Id,
      },
      data: {
        Name,
        Start,
        End,
        RestaurantId,
      },
    });
    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

const ActiveChallenge = async ({ Id, Active }) => {
  try {
    let Data = await prisma.Challenge.update({
      where: {
        Id,
      },
      data: {
        Active,
      },
    });
    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

const ChallengeRewards = async ({ Id }) => {
  try {
    let Data = await prisma.Challenge.findFirst({
      where: {
        Id,
      },
      select: {
        Rewards: true,
      },
    });
    return { Data: Data.Rewards, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = {
  CreateNewChallenge,
  RemoveChallenge,
  UpdateChallenge,
  ActiveChallenge,
  ChallengeRewards,
};
