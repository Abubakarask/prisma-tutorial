import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    /*
    const user = await prisma.user.create({
      data: { id: "Dong", name: "ASL", age: 1000 },

      select: {
        name: true,
        userPreference: true,
      },
    }); 
    const Manyusers = await prisma.user.createMany({
      data: [
        { id: "Ding", name: "ASL", age: 2000 },
        { id: "Ping", name: "ASL", age: 2000 },
      ],
    });

    console.log("Users created:", Manyusers);
    // logs -> Users created: {count: 2}
    

    const AllUser = await prisma.user.findMany({
      select: { name: true, id: false, userPreference: true },
    });
    console.log(AllUser);


    // finds entries by taking key as unique attributes and returns only 1entry
    const foundUser = await prisma.user.findUnique({
      where: {
        // we can use age_name as we have defined a combination of age and name as unique
        age_name: {
          age: 2000,
          name: "ASL",
        },
      },
    });
    console.log("foundUser", foundUser);

    let anotherUser = await prisma.user.findUnique({
      where: {
        // defined name as unique in schema defination
        name: "ASL",
      },
    });
    console.log(anotherUser);
    

    let someUsers = await prisma.user.findMany({
      where: {
        OR: [{ name: { startsWith: "AS" } }, { id: { endsWith: "ing" } }],
      },
    });

    console.log("someUsers", someUsers);

    // gives the very first matched entry
    let firstUser = await prisma.user.findFirst({
      where: {
        name: { contains: "ASL" },
      },
    });
    console.log("firstUser", firstUser);


    // first it get the entries based on filter and then get/returns entries with distinct names
    let distinctUsers = await prisma.user.findMany({
      where: {
        name: {contains: "A"}
      },

      distinct: ["name"],
    });
    console.log("distinct", distinctUsers);

    // it limits the total returned entries to 2
    let limitedUsers = await prisma.user.findMany({
      where: {
        id: { endsWith: "ing" },
      },

      take: 2,
    });
    console.log("limitedUser", limitedUsers);

    // it skips 1st matched entry and  limits the total returned entries to 2, can be used in pagination
    let paginatedUsers = await prisma.user.findMany({
      where: {
        id: { endsWith: "ing" },
      },

      skip: 1,
      take: 2,
    });
    console.log("paginateduSERS", paginatedUsers);

    // it limits the total returned entries to 2 and sorts the entries wrt age
    let sortedUsers = await prisma.user.findMany({
      where: {
        id: { startsWith: "D" },
      },

      take: 2,
      orderBy: {
        age:
          // asc, desc
          "asc",
      },
    });
    console.log("sortedUsers", sortedUsers);*/
    // await prisma.user.deleteMany();
  } catch (error) {
    console.error("Error creating user:", error);
  } finally {
    await prisma.$disconnect(); // Disconnect from the database when done
  }
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export default prisma;
