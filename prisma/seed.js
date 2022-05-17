const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
		username: 'ajolonauta',
		mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
		username: 'ajolonauta1',
		mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
		username: 'ajolonauta2',
		mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
		username: 'ajolonauta3',
		mission: 'Node'
      },
    });

    const ajolonauta = await prisma.explorer_v2.upsert({
      where: { name: 'Ajolonauta 1' },
      update: {},
      create: {
        name: 'Ajolonauta 1',
        lang: 'JavaScript',
        missionCommander: 'Carlo',
        enrollments: 3,
        hasCertification: true
      },
    });

    const ajolonauta2 = await prisma.explorer_v2.upsert({
      where: { name: 'Ajolonauta 2' },
      update: {},
      create: {
        name: 'Ajolonauta 2',
        lang: 'Java',
        missionCommander: 'Fer',
        enrollments: 1,
        hasCertification: true
      },
    });

    const ajolonauta3 = await prisma.explorer_v2.upsert({
      where: { name: 'Ajolonauta 3' },
      update: {},
      create: {
        name: 'Ajolonauta 3',
        lang: 'JavaScript',
        missionCommander: 'Carlo',
        enrollments: 2,
        hasCertification: false
      },
    });

    console.log('Create 3 explorers in explorers');
    console.log('Create 3 explorers in explorers_v2');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();