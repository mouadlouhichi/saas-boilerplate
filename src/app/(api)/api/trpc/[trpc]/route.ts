/**
 * @see https://youtu.be/qCLV0Iaq9zU
 */

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

import { appRouter } from "@/server/routers/_app";
import { createContext } from "@/server/trpc";

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
