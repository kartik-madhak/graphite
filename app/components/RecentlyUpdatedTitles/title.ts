import { Prisma } from '@prisma/client'

export type Title = Prisma.TitleGetPayload<{
  include: {
    Chapter: {
      select: {
        id: true
        name: true
        index: true
      }
    }
  }
}>

export type Chapter = Prisma.ChapterGetPayload<{
  select: {
    id: true
    name: true
    index: true
  }
}>
