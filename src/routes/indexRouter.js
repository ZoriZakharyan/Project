import express from 'express';
import { Init } from '../../db/models';

const indexRouter = express.Router();

indexRouter.get('/', async (req, res) => {
  const allInit = await Init.findAll();
  const initState = { allInit };
  res.render('Layout', initState);
});
export default indexRouter;
