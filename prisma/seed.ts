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

  const chapters = titles.flatMap((title, titleIndex) =>
    Array.from({ length: 5 }, (_, i) => ({
      id: titleIndex * 5 + i + 1,
      name: faker.lorem.sentence(5),
      content: `{"time":${new Date().getTime() + i * 1000},"blocks":[{"id":"${faker.string.alphanumeric({ length: 10 })}","type":"paragraph","data":{"text":"${faker.lorem.paragraph()}"}}],"version":"2.30.6"}`,
      index: i,
      titleId: title.id,
      draft: faker.datatype.boolean()
    }))
  )

  const upsertChapterPromises = chapters.map((chapter) =>
    prisma.chapter.upsert({
      where: { id: chapter.id },
      update: {},
      create: chapter
    })
  )

  const titlesResult = await Promise.all(upsertPromises)
  const chaptersResult = await Promise.all(upsertChapterPromises)
  console.log(titlesResult)
  console.log(chaptersResult)
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
