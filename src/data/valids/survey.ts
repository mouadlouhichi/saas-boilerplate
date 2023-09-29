import { z } from "zod";

// Define the userSchema with the correct types
//type User = z.infer<typeof userSchema>;

export const surveySchema = z.object({
  gender: z.string().min(3).max(50), // Adjust the min and max lengths as needed
  occupation: z.string().min(3).max(50), // Adjust the min and max lengths as needed
  education: z.string().min(3).max(50), // Adjust the min and max lengths as needed
  age: z.string().min(3).max(50),
  diagnosed: z.string(),
  receivedTreatment: z.string(),
  currentSymptoms: z.string(),
  symptomsFrequency: z.string(),
  suicidalThoughts: z.string(),
  struggledAddiction: z.string(),
  experiencedTrauma: z.string(),
  receivedTherapy: z.string(),
  foundTherapist: z.array(z.string()),
  notSeekingTherapyReasons: z.array(z.string()),
  participatedOnline: z.string(),
  primaryReason: z.array(z.string()),
  preferredCommunicationMethod: z.array(z.string()),
  comfortWithTechnology: z.string(),
  user: z.object({
    id: z.string(),
    name: z.string().nullable(),
    email: z.string().nullable(),
    emailVerified: z.date().nullable(),
    image: z.string().nullable(),
    hasSurvey: z.boolean(),
    userType: z.string()
  })
});
