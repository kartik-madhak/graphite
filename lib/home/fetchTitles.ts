import { PrismaClient } from '@prisma/client'

const fetchTitles = async () => {
  const prisma = new PrismaClient()
  return await prisma.title.findMany({
    orderBy: [
      {
        updatedAt: 'desc'
      }
    ]
  })
}

export default fetchTitles
