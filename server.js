const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//Cors
const cors = require("cors");
const corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.json({message: 'alive'});
});

app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});

app.get('/explorers', async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});
    res.json(allExplorers);
});

app.get('/explorers/:id', async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
});

app.post('/explorers', async (req, res) => {
    const explorer = {
      name: req.body.name,
      username: req.body.username,
      mission: req.body.mission
     };
    const message = 'Explorer creado.';
    await prisma.explorer.create({data: explorer});
    return res.json({message});
});

app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer.update({
		where: {
			id: id
		},
		data: {
			mission: req.body.mission
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

app.get('/explorers_v2', async (req, res) => {
    const allExplorers =  await prisma.explorer_v2.findMany({});
    res.json(allExplorers);
});

app.get('/explorers_v2/:id', async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer_v2.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
});

app.post('/explorers_v2', async (req, res) => {
    const explorer = {
      name: req.body.name,
      lang: req.body.lang,
      missionCommander: req.body.missionCommander,
      enrollments: req.body.enrollments
     };
    const message = 'Explorer creado.';
    await prisma.explorer.create({data: explorer});
    return res.json({message});
});

app.put('/explorers_v2/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer_v2.update({
		where: {
			id: id
		},
		data: {
			hasCertification: req.body.hasCertification
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorers_v2/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer_v2.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});

app.get('/mission_commander', async (req, res) => {
    const allComanders =  await prisma.mission_commander.findMany({});
    res.json(allComanders);
});

app.get('/mission_commander/:id', async (req, res) => {
    const id = req.params.id;
    const mc = await prisma.mission_commander.findUnique({where: {id: parseInt(id)}});
    res.json(mc);
});

app.post('/mission_commander', async (req, res) => {
    const mc = {
      name: req.body.name,
      username: req.body.username,
      mainStack: req.body.mainStack
     };
    const message = 'Mission commander creado.';
    await prisma.mission_commander.create({data: mc});
    return res.json({message});
});

app.put('/mission_commander/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.mission_commander.update({
		where: {
			id: id
		},
		data: {
			mainStack: req.body.mainStack
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/mission_commander/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.mission_commander.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});