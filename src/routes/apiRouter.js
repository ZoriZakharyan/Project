import express from 'express';
import { TemsBody, sequelize } from '../../db/models';

const apiRouter = express.Router();

apiRouter.patch('/count/:id', async (req, res) => {
  try {
    await TemsBody.update({ count: sequelize.literal('count +1') }, { where: { id: req.params.id } });
    return res.sendStatus(200);
  } catch (erro) {
    console.log(erro);
    return res.sendStatus(500);
  }
});
apiRouter.patch('/-count/:id', async (req, res) => {
  try {
    await TemsBody.update({ count: sequelize.literal('count -1') }, { where: { id: req.params.id } });
    return res.sendStatus(200);
  } catch (erro) {
    console.log(erro);
    return res.sendStatus(500);
  }
});
export default apiRouter;
