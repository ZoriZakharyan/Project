import express from 'express';
import { Init, Tems, TemsBody } from '../../db/models';

const indexRouter = express.Router();

indexRouter.get('/', async (req, res) => {
  const allInit = await Init.findAll();
  const initState = { allInit };
  res.render('Layout', initState);
});

indexRouter.get('/tems/:id', async (req, res) => {
  console.log(req.params.id);
  const allTems = await Tems.findAll({ where: { init_id: req.params.id } });
  const initState = { allTems };
  res.render('Layout', initState);
});

indexRouter.get('/temsbody/:id', async (req, res) => {
  const allTemsBody = await TemsBody.findAll({ where: { tems_id: req.params.id } });
  const initState = { allTemsBody };
  res.render('Layout', initState);
});
export default indexRouter;
