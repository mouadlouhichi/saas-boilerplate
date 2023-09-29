/**
 * @see https://youtu.be/qCLV0Iaq9zU
 */

import { appRouter } from "@/data/db/client";
import { authOptions } from "@/lib/authOptions";
import { createContext } from "@/server/trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { getServerSession } from "next-auth";

const handler = async (req: any) => {
  const session = await getServerSession(authOptions);

  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: async () => await createContext(session as any),
  });
};

export { handler as GET, handler as POST };
