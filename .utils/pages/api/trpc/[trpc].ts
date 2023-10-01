import { env } from "@/data/env/env.mjs";
import { appRouter } from "@/server/routers/_app";
import { createContext } from "@/server/trpc";
import { createNextApiHandler } from "@trpc/server/adapters/next";



// export API handler
export default createNextApiHandler({
  router: appRouter,
  createContext: createContext,
  onError:
    env.NODE_ENV === "development"
      ? ({ path, error }) => {
          console.error(
            `❌ tRPC failed on ${path ?? "<no-path>"}: ${error.message}`,
          );
        }
      : undefined,
});
