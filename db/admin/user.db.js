// const { PrismaClient } = require("@prisma/client");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Add Pagination
const GetAllUsers = async () => {
  try {
    let Data = await prisma.User.findMany();
    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

const RemoveUser = async ({ Id }) => {
  try {
    let Data = await prisma.User.delete({
      where: {
        Id,
      },
    });
    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

const UpdateUser = async ({ Id, Points, Rewards }) => {
  try {
    let OldData = await prisma.User.findFirst({
      where: {
        Id,
      },
      include: {
        Rewards: true,
      },
    });

    let NewReward = OldData.Rewards.concat(Rewards);

    let Data = await prisma.User.update({
      where: {
        Id,
      },
      data: {
        Points: Points ? Points : OldData.Points,
        Rewards: {
          connect: NewReward,
        },
      },
      include: {
        Rewards: true,
      },
    });
    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = {
  GetAllUsers,
  RemoveUser,
  UpdateUser,
};
