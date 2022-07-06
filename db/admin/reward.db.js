const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const GiveRewardToAUser = async (Id, UserId) => {
  try {
    Data = await prisma.Reward.update({
      where: {
        Id,
      },
      data: {
        UserId,
      },
    });

    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = {
  GiveRewardToAUser,
};
