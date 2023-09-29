import { inferRouterOutputs } from "@trpc/server";
import { z } from "zod";

import { fetchAllUsers } from "../../handlers/admin/fetchAllUsers";
import { adminProcedure } from "../../procedures";
import { router } from "../../trpc";

export enum Sort {
  Desc = "Desc",
  Asc = "Asc"
}

export const adminRouter = router({
  getAllUsers: adminProcedure
    .input(
      z.object({
        take: z.number().default(10),
        cursor: z.string().optional(),
        sort: z.nativeEnum(Sort).optional()
      })
    )
    .query(async ({ ctx, input }) => {
      const { take, cursor, sort } = input;

      const users = await fetchAllUsers(take, sort, ctx.prisma);

      return {
        users
      };
    })

  /*   createProduct: adminProcedure
    .input(createProductInputSchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.product.create({
        data: {
          ...input,
          sizes: input.sizes.map((size) => parseInt(size))
        }
      });
    }), */

  /*   updateProduct: adminProcedure
    .input(
      createProductInputSchema.extend({
        id: z.string()
      })
    )
    .mutation(async ({ ctx, input }) => {
      const { id, ...updateData } = input;

      return ctx.prisma.product.update({
        where: {
          id
        },
        data: {
          ...updateData,
          sizes: updateData.sizes.map((size) => parseInt(size)),
          updatedAt: new Date()
        }
      });
    }), */

  /* deleteProduct: adminProcedure
    .input(
      z.object({
        id: z.string()
      })
    )
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.product.update({
        where: {
          id: input.id
        },
        data: {
          deleted: true,
          updatedAt: new Date()
        }
      });
    }) */
});

type AdminRouterOutput = inferRouterOutputs<typeof adminRouter>;
export type ProductsInfoResponse = AdminRouterOutput["getAllUsers"];
