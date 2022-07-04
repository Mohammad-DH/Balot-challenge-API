// const { PrismaClient } = require("@prisma/client");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const CreateNewRestaurant = async ({ Name }) => {
  try {
    Data = await prisma.Restaurant.create({
      data: {
        Name,
      },
    });
    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

const RemoveRestaurant = async ({ Id }) => {
  try {
    Data = await prisma.Restaurant.delete({
      where: {
        Id,
      },
    });
    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

const UpdateRestaurant = async ({ Id, Name }) => {
  try {
    Data = await prisma.Restaurant.update({
      where: {
        Id,
      },
      data: {
        Name,
      },
    });
    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = {
  CreateNewRestaurant,
  RemoveRestaurant,
  UpdateRestaurant,
};
