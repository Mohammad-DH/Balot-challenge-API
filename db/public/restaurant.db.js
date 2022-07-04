// const { PrismaClient } = require("@prisma/client");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const GetAllRestaurants = async () => {
  try {
    Data = await prisma.Restaurant.findMany();
    return { Data, success: true };
  } catch (error) {
    return { success: false, error };
  }
};

module.exports = {
  GetAllRestaurants,
};
