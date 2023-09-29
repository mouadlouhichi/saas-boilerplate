import { userProcedure } from "../../procedures";
import { router } from "../../trpc";

export const userRouter = router({
  // 1. The query function is used to define a query.
  profile: userProcedure.query(async ({ ctx }) => {
    // 2. The query function receives a ctx object with a session property containing the session data.
    return ctx.prisma.user.findFirst({
      where: {
        // 3. The id of the current user is extracted from the session data.
        id: ctx.session.user.id
      }
    });
  })
});
