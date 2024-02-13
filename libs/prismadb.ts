import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma || new PrismaClient();

export default prismadb;
if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

// import { PrismaClient } from "@prisma/client";

// const prismaClientSingleton = () => {
//   return new PrismaClient();
// };

// declare global {
//   var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
// }

// const prismadb = globalThis.prisma ?? prismaClientSingleton();

// export default prismadb;

// if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;
