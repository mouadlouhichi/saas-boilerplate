import { Session } from "next-auth";
import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import { CreateNextContextOptions } from "@trpc/server/adapters/next";
import type { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

import superjson from "superjson";
import { ZodError } from "zod";

import { prisma as db } from "@/data/db";

import { getServerAuthSession } from "./common/get-server-auth-session";

// eslint-disable-next-line
interface CreateContextOptions {
  session: Session | null;
}

/** Use this helper for:
 * - testing, where we dont have to Mock Next.js' req/res
 * - trpc's `createSSGHelpers` where we don't have req/res
 **/
export const createContextInner = async (opts: CreateContextOptions) => {
  return {
    session: opts.session,
    prisma: db
  };
};

/**
 * This is the actual context you'll use in your router
 * @link https://trpc.io/docs/context
 **/
export const _createContext = async (opts: CreateNextContextOptions) => {
  const { req, res } = opts;

  // Get the session from the server using the unstable_getServerSession wrapper function
  const session = await getServerAuthSession({ req, res });

  return await createContextInner({
    session
  });
};

export async function createContext(opts?: FetchCreateContextFnOptions) {
  /**
   * Remove the other `session` declaration after enabling
   * @enable NextAuth
   */
  // const session = await auth();
  // return { session };
  const session = { user: null };

  /**
   * Remove the other `eventServer` declaration after enabling
   * @enable WebSockets
   */
  // const eventServer = new Pusher({
  //   appId: env.PUSHER_APP_ID,
  //   key: env.NEXT_PUBLIC_PUSHER_APP_KEY,
  //   secret: env.PUSHER_SECRET,
  //   cluster: env.NEXT_PUBLIC_PUSHER_CLUSTER,
  //   useTLS: true,
  // });
  const eventServer = { trigger: async (...args: unknown[]) => {} };

  return { eventServer, session };
}

type Context = inferAsyncReturnType<typeof createContext>;
// Avoid exporting the entire t-object
// since it's not very descriptive.
// For instance, the use of a t variable
// is common in i18n libraries.
const t = initTRPC.context<Context>().create({
  /**
   * @see https://trpc.io/docs/v10/data-transformers
   */
  transformer: superjson,
  /**
   * @see https://trpc.io/docs/v10/error-formatting
   */
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zod:
          error.cause instanceof ZodError
            ? error.cause.flatten().fieldErrors
            : null
      }
    };
  }
});

// Base router and procedure helpers
export const router = t.router;
export const procedure = t.procedure;
