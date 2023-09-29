import { Prisma, PrismaClient } from "@prisma/client";

import { prisma as db } from "@/data/db";

/**
 * admin use only
 */
export const fetchAllUsers = async (
  take: number,
  cursor?: string,
  prisma?: PrismaClient<
    Prisma.PrismaClientOptions,
    never,
    Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
  >
) => {
  const users = await (prisma ?? db).user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      image: true
    },
    take: take,
    ...(cursor && {
      skip: 1,
      cursor: {
        id: cursor
      }
    }),
    orderBy: {
      id: "desc"
    }
  });

  return {
    users,
    cursor: users[take - 1]?.id
  };
};
