import { PrismaClient } from '@prisma/client'

async function main() {
  const prisma = new PrismaClient()
  const users = await prisma.users.findMany()

  console.log(users)
}

main()
