// const { PrismaClient } = require("@prisma/client");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const GetAllRestaurants = async () => {
  try {
    Data = prisma.Restaurant.findMany();
    return { Data, success: true };
  } catch (error) {
    return { Data, success: false, error };
  }
};

const CreateNewRestaurant = async ({ Name }) => {
  try {
    Data = prisma.Restaurant.create({
      data: {
        Name,
      },
    });
    return { Data, success: true };
  } catch (error) {
    return { Data, success: false, error };
  }
};

const RemoveRestaurant = async ({ Id }) => {
  try {
    Data = prisma.Restaurant.delete({
      where: {
        Id,
      },
    });
    return { Data, success: true };
  } catch (error) {
    return { Data, success: false, error };
  }
};

const UpdateRestaurant = async ({ Id, Name }) => {
  try {
    Data = prisma.Restaurant.update({
      where: {
        Id,
      },
      data: {
        Name,
      },
    });
    return { Data, success: true };
  } catch (error) {
    return { Data, success: false, error };
  }
};

module.exports = {
  GetAllRestaurants,
  CreateNewRestaurant,
  RemoveRestaurant,
  UpdateRestaurant,
};
