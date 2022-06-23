import express, { Request, Response } from 'express';
import Plants from './plants';

const app = express();
const plantsModule = new Plants();

app.use(express.json());

const plantsIdPath = '/plants/:id';

app.get('/plants', async (req: Request, res: Response) => {
  const plants = await plantsModule.getPlants();
  return res.status(200).json(plants);
});

app.post('/plants', async (req: Request, res: Response) => {
  const newPlant = req.body;
  const plant = await plantsModule.savePlant(newPlant);
  return res.status(201).json(plant);
});

app.get(plantsIdPath, async (req: Request, res: Response) => {
  const { id } = req.params;
  const plant = await plantsModule.getPlantById(id);
  return res.status(200).json(plant);
});

app.delete(plantsIdPath, async (req: Request, res: Response) => {
  const { id } = req.params;
  const plant = await plantsModule.removePlantById(id);
  return res.status(200).json(plant);
});

app.post(plantsIdPath, async (req: Request, res: Response) => {
  const { id } = req.params;
  const newPlant = req.body;
  const plant = await plantsModule.editPlant(id, newPlant);
  return res.status(200).json(plant);
});

app.get('/sunny/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const plants = await plantsModule.getPlantsThatNeedsSunWithId(id);
  return res.status(200).json(plants);
});

app.listen(3000, () => {
  console.log('Escutando na porta 3000');  
});
