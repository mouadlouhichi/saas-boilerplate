/**
 * @see https://youtu.be/qCLV0Iaq9zU
 */

import { authOption } from "@/lib/authOptions";
import { appRouter } from "@/server/routers/_app";
import { createContext } from "@/server/trpc";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { getServerSession } from "next-auth";


const handler = async (req: Request) => {
  const session = await getServerSession(authOption());
  console.log("session@@", session);

  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: async () => await createContext(session),
  });
};

export { handler as GET, handler as POST };
