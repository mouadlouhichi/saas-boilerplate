import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    console.log("Seeding therapists...");

    for (let i = 0; i < 5; i++) {
      const specialties = [faker.lorem.word()];
      const credentials = faker.lorem.sentence();
      const location = faker.address.city();
      const languages = ["English", "French", "Spanish"];
      const experienceYears = faker.number.int({ min: 1, max: 30 });
      const education = faker.lorem.sentence();
      const certifications = [faker.lorem.sentence()];
      const about = faker.lorem.paragraph();
      const formation = faker.lorem.sentence();
      const professionalExperience = faker.lorem.paragraph();
      const methods = [faker.lorem.word()];
      const tools = [faker.lorem.word()];
      const fees = [
        {
          service: faker.lorem.word(),
          fee: `${faker.number.int({ min: 50, max: 500 })} Dhs` // Random fee in Dhs
        }
      ];

      await prisma.therapist.create({
        data: {
          specialties,
          credentials,
          location,
          languages,
          experienceYears,
          education,
          certifications,
          about,
          formation,
          professionalExperience,
          methods,
          tools,
          fees: {
            create: fees
          },
          user: {
            create: {
              id: faker.string.uuid(),
              name: faker.name.fullName(),
              email: faker.internet.email(),
              image: faker.image.urlPicsumPhotos({ width: 640, height: 640 }),
              userType: "Therapist"
            }
          }
        }
      });

      console.log(`Therapist ${i + 1} seeded.`);
    }

    console.log("Seeding completed.");
  } catch (error) {
    console.error("Error seeding therapists:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
