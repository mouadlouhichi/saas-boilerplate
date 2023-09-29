import type { NextAuthOptions } from "next-auth";
import { prisma } from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import FacebookProvider from "next-auth/providers/facebook";
//import EmailProvider from "next-auth/providers/email";
//import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import type { Provider } from "next-auth/providers/index";
import LinkedInProvider from "next-auth/providers/linkedin";

import { env } from "@/data/env/env.mjs";

const providers = [
  /**
   * Email Provider (https://next-auth.js.org/providers/email)
   */
  /* env.EMAIL_FROM &&
      env.RESEND_API_KEY &&
      EmailProvider({
        from: env.EMAIL_FROM,
        sendVerificationRequest
      }), */
  /**
   * Google OAuth Provider (https://next-auth.js.org/providers/google)
   */
  env.GOOGLE_ID &&
    env.GOOGLE_SECRET &&
    GoogleProvider({
      clientId: env.GOOGLE_ID,
      clientSecret: env.GOOGLE_SECRET
    }),
  env.FACEBOOK_ID &&
    env.FACEBOOK_SECRET &&
    FacebookProvider({
      clientId: env.FACEBOOK_ID,
      clientSecret: env.FACEBOOK_SECRET
    }),
  env.LINKEDIN_ID &&
    env.LINKEDIN_SECRET &&
    LinkedInProvider({
      authorization: {
        params: { scope: "profile email" }
      },
      clientId: env.LINKEDIN_ID,
      clientSecret: env.LINKEDIN_SECRET
    })
].filter(Boolean) as Provider[];

export const authOptions: NextAuthOptions = {
  /**
   * https://authjs.dev/reference/adapter/drizzle
   */
  adapter: PrismaAdapter(prisma),
  /**
   * https://next-auth.js.org/providers/
   */
  providers,
  /**
   * https://next-auth.js.org/configuration/options#pages
   */
  pages: {
    /**
     * The sign in page
     */
    signIn: "/login",

    /**
     * A sign out confirmation page (optional)
     */
    // signOut: '/sign-out',

    /**
     * The error page to display during auth errors.
     * Error code passed in query string as `?error=`
     */
    error: "/login"

    /**
     * The "check your email" page displayed for magic links.
     */
    // verifyRequest: "/check-email"

    /**
     * New users will be directed here on first sign in (optional)
     */
    // newUser: '/new-user'
  },
  /**
   * https://next-auth.js.org/configuration/options#secret
   */
  secret: env.NEXTAUTH_SECRET,
  /**
   * https://next-auth.js.org/configuration/options#session
   */
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },
  /**
   * https://next-auth.js.org/configuration/options#callbacks
   */
  callbacks: {
    /**
     * Use the signIn() callback to control if a user is allowed to sign in.
     *
     * https://next-auth.js.org/configuration/callbacks#sign-in-callback
     */
    async signIn(/* { user, account, profile, email, credentials } */) {
      return Promise.resolve(true);
    },
    /**
     * The redirect callback is called anytime the user is redirected to a
     * callback URL (e.g. on signin or signout).
     *
     * https://next-auth.js.org/configuration/callbacks#redirect-callback
     */
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    /**
     * The session callback is called whenever a session is checked. By
     * default, only a subset of the token is returned for increased security.
     * If you want to make something available you added to the token (like
     * access_token and user.id from above) via the jwt() callback, you have
     * to explicitly forward it here to make it available to the client.
     *
     * https://next-auth.js.org/configuration/callbacks#session-callback
     */
    async session({ session, token, user }) {
      if (session.user && token.userId) {
        session.user.id = token.userId;
      }

      return Promise.resolve(session);
    },

    /**
     * This callback is called whenever a JSON Web Token is created (i.e. at
     * sign in) or updated (i.e whenever a session is accessed in the client).
     * The returned value will be encrypted, and it is stored in a cookie.
     *
     * https://next-auth.js.org/configuration/callbacks#jwt-callback
     */
    async jwt({ token, user /*, account, profile, trigger */ }) {
      if (user) {
        token.userId = user.id;
        token.email = user.email;
      }

      return Promise.resolve(token);
    }
  }
};
