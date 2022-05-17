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

    const mcRodrigo = await prisma.mission_commander.upsert({
      where: { username: 'romarpla' },
      update: {},
      create: {
        name: 'Rodrigo',
        username: 'romarpla',
        mainStack: 'HTML',
        currentEnrollment: true,
        hasAzureCertification: true
      },
    });

    const mcCarlo = await prisma.mission_commander.upsert({
      where: { username: 'carlogilmar' },
      update: {},
      create: {
        name: 'Carlo',
        username: 'carlgGilmar',
        mainStack: 'JavaScript',
        currentEnrollment: true,
        hasAzureCertification: true
      },
    });

    const mcFer = await prisma.mission_commander.upsert({
      where: { username: 'Fer' },
      update: {},
      create: {
        name: 'Fer',
        username: 'Fer',
        mainStack: 'Java',
        currentEnrollment: true
      },
    });

    console.log('Create 3 explorers in explorers');
    console.log('Create 3 explorers in explorers_v2');
    console.log('Create 3 mission commanders');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();