import { PrismaClient } from '@prisma/client'

const fetchTitles = async () => {
  const prisma = new PrismaClient()
  return prisma.title.findMany({
    orderBy: [
      {
        updatedAt: 'desc'
      }
    ],
    include: {
      Chapter: {
        select: {
          id: true,
          name: true,
          index: true
        },
        orderBy: {
          index: 'desc'
        },
        take: 3
      }
    }
  })
}

export default fetchTitles
