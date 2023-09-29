import { Survey } from "@prisma/client";
import { inferRouterOutputs } from "@trpc/server";

import { surveySchema } from "@/data/valids/survey";

import { userProcedure } from "../../procedures";
import { router } from "../../trpc";

export const surveyRouter = router({
  createSurvey: userProcedure
    .input(surveySchema)
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.survey.create({
        data: {
          gender: input.gender,
          occupation: input.occupation,
          education: input.education,
          age: input.age,
          diagnosed: input.diagnosed,
          receivedTreatment: input.receivedTreatment,
          currentSymptoms: input.currentSymptoms,
          symptomsFrequency: input.symptomsFrequency,
          suicidalThoughts: input.suicidalThoughts,
          struggledAddiction: input.struggledAddiction,
          experiencedTrauma: input.experiencedTrauma,
          receivedTherapy: input.receivedTherapy,
          foundTherapist: input.foundTherapist,
          notSeekingTherapyReasons: input.notSeekingTherapyReasons,
          participatedOnline: input.participatedOnline,
          primaryReason: input.primaryReason,
          preferredCommunicationMethod: input.preferredCommunicationMethod,
          comfortWithTechnology: input.comfortWithTechnology,
          user: {
            connect: { id: input.user.id }
          }
        }
      });
    })
});

type SurveyRouterOutput = inferRouterOutputs<typeof surveyRouter>;
export type CreateProductResponse = SurveyRouterOutput["createSurvey"];
