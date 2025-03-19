import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'

const prisma = new PrismaClient()

async function main() {
  const titles = Array.from({ length: 10 }).map((_, index) => ({
    id: index + 1,
    name: faker.lorem.words(3),
    description: faker.lorem.sentence(),
    cover_image_url: faker.image.urlPicsumPhotos({
      width: 800,
      height: 1200,
      blur: 0
    }),
    draft: faker.datatype.boolean()
  }))

  const upsertPromises = titles.map((title) =>
    prisma.title.upsert({
      where: { id: title.id },
      update: {},
      create: title
    })
  )

  const results = await Promise.all(upsertPromises)
  console.log(results)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
